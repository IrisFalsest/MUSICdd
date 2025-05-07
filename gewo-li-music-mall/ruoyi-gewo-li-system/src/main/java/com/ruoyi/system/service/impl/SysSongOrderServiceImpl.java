package com.ruoyi.system.service.impl;

import com.alibaba.fastjson2.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.wxpay.sdk.WXPayConstants;
import com.github.wxpay.sdk.WXPayUtil;
import com.ruoyi.common.constant.weChat.WeChatConstant;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.utils.http.HttpUtils;
import com.ruoyi.system.domain.dto.OrdersPaymentDTO;
import com.ruoyi.system.domain.vo.OrderPaymentVO;
import com.ruoyi.system.domain.vo.SongOrderVo;
import com.ruoyi.system.entity.*;
import com.ruoyi.system.mapper.SysSongOrderMapper;
import com.ruoyi.system.service.ISysMobileEndUserService;
import com.ruoyi.system.service.ISysSongOrderService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.ruoyi.system.service.ISysSongService;
import com.ruoyi.system.utils.OrderReturnInfo;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import weixin.popular.api.PayMchAPI;
import weixin.popular.bean.paymch.MchPayApp;
import weixin.popular.bean.paymch.Unifiedorder;
import weixin.popular.bean.paymch.UnifiedorderResult;
import weixin.popular.util.PayUtil;
import weixin.popular.util.XMLConverUtil;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.Unmarshaller;
import java.io.StringReader;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

/**
 * <p>
 * 歌曲订单表 服务实现类
 * </p>
 *
 * @author 王志伟
 * @since 2024-05-06
 */
@Service
@Slf4j
public class SysSongOrderServiceImpl extends ServiceImpl<SysSongOrderMapper, SysSongOrder> implements ISysSongOrderService {

    @Autowired
    private ISysMobileEndUserService iSysMobileEndUserService;

    @Autowired
    private ISysSongService songService;

    @Autowired
    private SysSongOrderMapper sysSongOrderMapper;

    /**
     * 订单支付
     *
     * @param ordersPaymentDTO
     * @return
     */
    public OrderPaymentVO payment(OrdersPaymentDTO ordersPaymentDTO) {
        //当前登录用户id
        SysMobileEndUser user = iSysMobileEndUserService.getById(ordersPaymentDTO.getUserId());
        if (null != user){
            if (user.getRoleType() == 2 && user.getMusiciansSignStatus() != 3){
                throw new NullPointerException("当前音乐人未签约");
            }
        }
        //调用微信支付接口(“商户系统”调用的“JSAPT预下单接口”)，生成“预支付交易单”

        SysSong song = songService.getById(ordersPaymentDTO.getGoodsId());
        String random = RandomStringUtils.random(32, false, true);

        ordersPaymentDTO.setOrderNumber(random);

        if (null != ordersPaymentDTO.getPayMethod() && ordersPaymentDTO.getPayMethod() == 2){
            Long score = user.getScore();
            if (song.getIsScoreBuy() == 1 && song.getScoreSum() > score){
                throw new AssertionError("当前用户积分不足");
            }
            SysSongOrder songOrder = new SysSongOrder();
            songOrder.setId(ordersPaymentDTO.getOrderNumber());
            songOrder.setNumber(ordersPaymentDTO.getOrderNumber());
            songOrder.setStatus(Long.valueOf(2));
            songOrder.setUserId(ordersPaymentDTO.getUserId());
            songOrder.setSongId(ordersPaymentDTO.getGoodsId());
            songOrder.setOrderTime(LocalDateTime.now());
            songOrder.setPayMethod(Long.valueOf(3));
            songOrder.setPayStatus(Long.valueOf(1));
            songOrder.setAmount(Double.valueOf(song.getCurrentPrice()));
            songOrder.setUsername(user.getNickName());
            songOrder.setPhone(ordersPaymentDTO.getPhone());
            songOrder.setAddress(ordersPaymentDTO.getAddress());
            songOrder.setConsignee(ordersPaymentDTO.getConsignee());
            songOrder.setCreateTime(LocalDateTime.now());
            sysSongOrderMapper.insert(songOrder);

//            将歌曲下架
            if (null != song){
                song.setStatus(1);
                songService.updateById(song);
            }

//            赠送用户相对应的积分
            user.setScore(user.getScore() + songOrder.getAmount().intValue());
            iSysMobileEndUserService.updateById(user);

            OrderPaymentVO orderPaymentVO = new OrderPaymentVO();
            orderPaymentVO.setOutTradeNo(ordersPaymentDTO.getOrderNumber());
            return orderPaymentVO;
        }

        Map<String, String> data = new HashMap<>();
        data.put("appid", WeChatConstant.APP_ID);
        data.put("mch_id", WeChatConstant.MCH_ID);
        data.put("nonce_str", random);//随机字符串
        data.put("openid", user.getOpenId());
        data.put("body", "歌窝里音乐：" + song.getSongName());
        data.put("out_trade_no", ordersPaymentDTO.getOrderNumber());//商户订单号
        data.put("fee_type", "CNY");    //
        data.put("total_fee", "1");//标价金额
        data.put("spbill_create_ip", "127.0.0.1");//终端IP
        data.put("notify_url", WeChatConstant.SONG_NOTIFY_URL);  //回调地址
        data.put("trade_type", WeChatConstant.TRADE_TYPE);  //交易类型
        //生成签名
        String signXml = "";
        try {
            //调用demo里面的sign生成方法
            signXml = WXPayUtil.generateSignedXml(data, WeChatConstant.KEY, WXPayConstants.SignType.MD5);
            String result = HttpUtils.sendPost(WeChatConstant.WECHAT_PAY_URL, signXml);
            System.out.println(result);

            // 进行将Xml转成对象的核心接口
            JAXBContext context = JAXBContext.newInstance(OrderReturnInfo.class);
            Unmarshaller unmarshaller = context.createUnmarshaller();
            StringReader sr = new StringReader(result);
            OrderReturnInfo returnInfo = (OrderReturnInfo) unmarshaller.unmarshal(sr);
            // 二次签名
            if ("SUCCESS".equals(returnInfo.getReturnCode()) && returnInfo.getReturnCode().equals(returnInfo.getResultCode())) {
                long time = System.currentTimeMillis() / 1000;

                //生成签名（官方给出来的签名方法）
                Map<String, String> map2 = new HashMap();
                map2.put("appId", WeChatConstant.APP_ID);
                map2.put("timeStamp", String.valueOf(time));
                //这边的随机字符串必须是第一次生成sign时，微信返回的随机字符串，否则小程序支付时会报签名错误
                map2.put("nonceStr", returnInfo.getNonceStr());
                map2.put("package", "prepay_id=" + returnInfo.getPrepayId());
                map2.put("signType", "MD5");

                String sign2 = WXPayUtil.generateSignature(map2, WeChatConstant.KEY, WXPayConstants.SignType.MD5);
                System.out.println("二次签名的sign2----->" + sign2);


                OrderPaymentVO orderPaymentVO = new OrderPaymentVO();
                orderPaymentVO.setTimeStamp(String.valueOf(time));
                orderPaymentVO.setNonceStr(returnInfo.getNonceStr());
                orderPaymentVO.setPackageStr(returnInfo.getPrepayId());
                orderPaymentVO.setSignType("MD5");
                orderPaymentVO.setPaySign(sign2);
                orderPaymentVO.setOutTradeNo(data.get("out_trade_no"));
                System.out.println(orderPaymentVO);

                SysSongOrder songOrder = new SysSongOrder();
                songOrder.setId(ordersPaymentDTO.getOrderNumber());
                songOrder.setNumber(data.get("out_trade_no"));
                songOrder.setStatus(Long.valueOf(1));
                songOrder.setUserId(ordersPaymentDTO.getUserId());
                songOrder.setSongId(ordersPaymentDTO.getGoodsId());
                songOrder.setOrderTime(LocalDateTime.now());
                songOrder.setPayMethod(Long.valueOf(1));
                songOrder.setPayStatus(Long.valueOf(0));
                songOrder.setAmount(Double.valueOf(song.getCurrentPrice()));
                songOrder.setUsername(user.getNickName());
                songOrder.setPhone(ordersPaymentDTO.getPhone());
                songOrder.setAddress(ordersPaymentDTO.getAddress());
                songOrder.setConsignee(ordersPaymentDTO.getConsignee());
                ObjectMapper objectMapper = new ObjectMapper();
                songOrder.setPayInfo(objectMapper.writeValueAsString(ordersPaymentDTO));
                songOrder.setCreateBy(user.getNickName());
                songOrder.setCreateTime(LocalDateTime.now());
                sysSongOrderMapper.insert(songOrder);
                return orderPaymentVO;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }


        /*
     调用微信支付工具类的方法,来进行调用 JSAPI预支付接口 , 同时构造成 微信小程序端调起支付      接口 所以的 JSON参数,将该参数作为pay()方法的返回值

        //jsonObject : 为一个JSON对象，其中包含了 “微信小程序端调起支付”接口所需的JSON参数
        JSONObject jsonObject = weChatPayUtil.pay(
                ordersPaymentDTO.getOrderNumber(), //商户订单号
                new BigDecimal(0.01), //支付金额，单位 元
                "歌窝里音乐", //商品描述
                user.getOpenId() //微信用户的openid
        );

        if (jsonObject.getString("code") != null && jsonObject.getString("code").equals("ORDERPAID")) {
            throw new OrderBusinessException("该订单已支付");
        }

        //将JSON参数对象 转换为 Java对象
        OrderPaymentVO vo = jsonObject.toJavaObject(OrderPaymentVO.class);
        vo.setPackageStr(jsonObject.getString("package"));

        //将该OrderPaymentVO 对象作为返回值 ,该对象中包含了 : “微信小程序端调起支付”接口所需的JSON参数
        return vo;*/
        return null;
    }

    @Override
    public AjaxResult appWeChatPay(OrdersPaymentDTO ordersPaymentDTO) {
        try {
            //当前登录用户id
            SysMobileEndUser user = iSysMobileEndUserService.getById(ordersPaymentDTO.getUserId());
            if (null != user){
                if (user.getRoleType() == 2 && user.getMusiciansSignStatus() != 3){
                    throw new NullPointerException("当前音乐人未签约");
                }
            }
            //调用微信支付接口(“商户系统”调用的“JSAPT预下单接口”)，生成“预支付交易单”

            SysSong song = songService.getById(ordersPaymentDTO.getGoodsId());
            String random = RandomStringUtils.random(32, false, true);
            ordersPaymentDTO.setOrderNumber(random);
            Unifiedorder unifiedorder = new Unifiedorder();
            unifiedorder.setAppid(WeChatConstant.APP_ID);
            unifiedorder.setMch_id(WeChatConstant.MCH_ID);
            unifiedorder.setNonce_str(UUID.randomUUID().toString().replaceAll("-", ""));
            unifiedorder.setBody(ordersPaymentDTO.getOrderNumber());//订单id 拉起后，在微信页面上方显示的数据
            unifiedorder.setOut_trade_no(ordersPaymentDTO.getOrderNumber());//订单id
            String receivableAmount = song.getCurrentPrice().toString();//自己业务的支付总价，但是微信支付接口以分为单位
//        String money = new BigDecimal(receivableAmount).multiply(new BigDecimal("100")).stripTrailingZeros().toPlainString();
            String fee = "1";
            unifiedorder.setTotal_fee(fee); // 订单总金额,单位为分;
            unifiedorder.setSpbill_create_ip("127.0.0.1");
            unifiedorder.setNotify_url(WeChatConstant.GOODS_APP_NOTIFY_URL);//回调接口地址，用来接收微信通知，以及处理我们自己的业务逻辑
            unifiedorder.setTrade_type("MWEB");
            unifiedorder.setAttach("weChatPay");//附加数据，在查询API和支付通知中原样返回，可作为自定义参数使用，实际情况下只有支付完成状态才会返回该字段。示例值：自定义数据 说白了就是前端调微信拉起预支付接口的某些参数，需要我们在回调接口处理业务逻辑使用
            unifiedorder.setSign_type("MD5");
            log.info("微信APP支付--(签名前):" + XMLConverUtil.convertToXML(unifiedorder));

            /** 获取签名 */
            UnifiedorderResult unifiedorderResult = PayMchAPI.payUnifiedorder(unifiedorder, WeChatConstant.KEY);

            log.info("微信APP支付--支付统一下单接口请求状态(return_code):" + unifiedorderResult.getReturn_code());
            log.info("微信APP支付--支付统一下单接口请求状态(return_msg):" + unifiedorderResult.getReturn_msg());
            log.info("微信APP支付--支付统一下单接口请求状态(result_code):" + unifiedorderResult.getResult_code());
            log.info("微信APP支付--支付请求参数封装(签名后):" + XMLConverUtil.convertToXML(unifiedorder));
            log.info("微信APP支付--支付统一下单接口返回数据:" + JSONObject.toJSONString(unifiedorderResult));
            // 下单结果验签;
            if (unifiedorderResult.getSign_status() != null && unifiedorderResult.getSign_status()) {
                log.info("微信APP支付验签成功");
                MchPayApp generateMchAppData = PayUtil.generateMchAppData(unifiedorderResult.getPrepay_id(), WeChatConstant.APP_ID, WeChatConstant.MCH_ID,
                        WeChatConstant.SECRET);
                Map<String, Object> map = new HashMap<>();
                map.put("payOrderId", ordersPaymentDTO.getOrderNumber());//订单id
                map.put("mchPayApp", generateMchAppData);
                log.info(" WXPayment  return map" + map);
                AjaxResult resultMsg = AjaxResult.success("success", map);

                SysSongOrder songOrder = new SysSongOrder();
                songOrder.setId(ordersPaymentDTO.getOrderNumber());
                songOrder.setNumber(ordersPaymentDTO.getOrderNumber());
                songOrder.setStatus(Long.valueOf(1));
                songOrder.setUserId(ordersPaymentDTO.getUserId());
                songOrder.setSongId(ordersPaymentDTO.getGoodsId());
                songOrder.setOrderTime(LocalDateTime.now());
                songOrder.setPayMethod(Long.valueOf(1));
                songOrder.setPayStatus(Long.valueOf(0));
                songOrder.setAmount(Double.valueOf(song.getCurrentPrice()));
                songOrder.setUsername(user.getNickName());
                songOrder.setPhone(ordersPaymentDTO.getPhone());
                songOrder.setAddress(ordersPaymentDTO.getAddress());
                songOrder.setConsignee(ordersPaymentDTO.getConsignee());
                ObjectMapper objectMapper = new ObjectMapper();
                songOrder.setPayInfo(objectMapper.writeValueAsString(ordersPaymentDTO));                songOrder.setCreateBy(user.getNickName());
                songOrder.setCreateTime(LocalDateTime.now());
                sysSongOrderMapper.insert(songOrder);
                return resultMsg;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return AjaxResult.error("支付失败");
        }

        return null;
    }

    /**
     * 支付成功，修改订单状态
     * <p>
     * 该方法是在 “支付回调”路径下的方法中 被调用的，用于修改数据库中的“订单表”的数据
     * (小程序支付成功时,会按照 notifyUrl 设置的回调路径 进行路径访问，在访问到的方法中 会	 * 调用此处的 paySuccess()方法修改数据库
     * 中“订单表的数据”)
     *
     * @param outTradeNo
     */
    public void paySuccess(String outTradeNo) {

        // 根据订单号查询订单
        SysSongOrder ordersDB = getByNumber(outTradeNo);

        // 根据订单id更新订单的状态、支付方式、支付状态、结账时间
        //修改“订单表”的数据
        SysSongOrder orders = SysSongOrder.builder()
                .id(ordersDB.getId())
                .status(2L)
                .payStatus(1L)
                .checkoutTime(LocalDateTime.now())
                .build();
        this.updateById(orders); //修改数据库中“订单表”的信息
    }

    @Override
    public SysSongOrder getByNumber(String outTradeNo) {
        SysSongOrder songOrder = sysSongOrderMapper.selectOne(new QueryWrapper<SysSongOrder>().eq("number", outTradeNo));
        return songOrder;
    }

    /**
     * 查询歌曲订单
     *
     * @param id 歌曲订单主键
     * @return 歌曲订单
     */
    @Override
    public SysSongOrder selectSysSongOrderById(String id)
    {
        return sysSongOrderMapper.selectSysSongOrderById(id);
    }

    /**
     * 查询歌曲订单列表
     *
     * @param sysSongOrder 歌曲订单
     * @return 歌曲订单
     */
    @Override
    public List<SongOrderVo> selectSysSongOrderList(SysSongOrder sysSongOrder)
    {
        return sysSongOrderMapper.selectSysSongOrderList(sysSongOrder);
    }

    /**
     * 新增歌曲订单
     *
     * @param sysSongOrder 歌曲订单
     * @return 结果
     */
    @Override
    public int insertSysSongOrder(SysSongOrder sysSongOrder)
    {
        String random = RandomStringUtils.random(32, false, true);
        sysSongOrder.setId("No" + random);
        sysSongOrder.setCreateTime(LocalDateTime.now());
        return sysSongOrderMapper.insertSysSongOrder(sysSongOrder);
    }

    /**
     * 修改歌曲订单
     *
     * @param sysSongOrder 歌曲订单
     * @return 结果
     */
    @Override
    public int updateSysSongOrder(SysSongOrder sysSongOrder)
    {
        return sysSongOrderMapper.updateSysSongOrder(sysSongOrder);
    }

    /**
     * 批量删除歌曲订单
     *
     * @param ids 需要删除的歌曲订单主键
     * @return 结果
     */
    @Override
    public int deleteSysSongOrderByIds(Long[] ids)
    {
        return sysSongOrderMapper.deleteSysSongOrderByIds(ids);
    }

    /**
     * 删除歌曲订单信息
     *
     * @param id 歌曲订单主键
     * @return 结果
     */
    @Override
    public int deleteSysSongOrderById(Long id)
    {
        return sysSongOrderMapper.deleteSysSongOrderById(id);
    }
}
