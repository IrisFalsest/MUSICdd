package com.ruoyi.system.service.impl;

import com.alibaba.fastjson2.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.wxpay.sdk.WXPayConstants;
import com.github.wxpay.sdk.WXPayUtil;
import com.ruoyi.common.constant.weChat.WeChatConstant;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.utils.StringUtils;
import com.ruoyi.common.utils.http.HttpUtils;
import com.ruoyi.system.domain.dto.OrdersPaymentDTO;
import com.ruoyi.system.domain.vo.GoodsOrderVo;
import com.ruoyi.system.domain.vo.OrderPaymentVO;
import com.ruoyi.system.entity.*;
import com.ruoyi.system.mapper.SysGoodsOrderMapper;
import com.ruoyi.system.service.ISysGoodsOrderService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.ruoyi.system.service.ISysGoodsService;
import com.ruoyi.system.service.ISysGoodsSpecificationsService;
import com.ruoyi.system.service.ISysMobileEndUserService;
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
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

/**
 * <p>
 * 商品订单 服务实现类
 * </p>
 *
 * @author author
 * @since 2024-05-14
 */
@Service
@Slf4j
public class SysGoodsOrderServiceImpl extends ServiceImpl<SysGoodsOrderMapper, SysGoodsOrder> implements ISysGoodsOrderService {
    @Autowired
    private ISysMobileEndUserService mobileEndUserService;

    @Autowired
    private ISysGoodsService goodsService;

    @Autowired
    private SysGoodsOrderMapper sysGoodsOrderMapper;

    @Autowired
    private ISysGoodsSpecificationsService goodsSpecificationsService;

    @Override
    public OrderPaymentVO payment(OrdersPaymentDTO ordersPaymentDTO) {
        if (StringUtils.isBlank(ordersPaymentDTO.getAddress()) || StringUtils.isBlank(ordersPaymentDTO.getConsignee())) {
            throw new NullPointerException("收货人或地址不能为空");
        }

        //当前登录用户id
        SysMobileEndUser user = mobileEndUserService.getById(ordersPaymentDTO.getUserId());
        //调用微信支付接口(“商户系统”调用的“JSAPT预下单接口”)，生成“预支付交易单”

        String random = RandomStringUtils.random(32, false, true);
        ordersPaymentDTO.setOrderNumber(random);

        SysGoods goods = goodsService.getById(ordersPaymentDTO.getGoodsId());
        //TODO 库存待完善
//        SysGoodsSpecifications goodsSpecifications = goodsSpecificationsService.getById(ordersPaymentDTO.getGoodsSpecificationsId());
//        if (goodsSpecifications.getStock() < ordersPaymentDTO.getBuyQuantity()) {
//            throw new AssertionError("库存不足");
//        }

        if (null != ordersPaymentDTO.getPayMethod() && ordersPaymentDTO.getPayMethod() == 2) {
            Long score = user.getScore();
            if (goods.getIsScoreBuy() == 1 && goods.getScoreSum() > score) {
                throw new AssertionError("当前用户积分不足");
            }
            SysGoodsOrder goodsOrder = new SysGoodsOrder();
            goodsOrder.setId(ordersPaymentDTO.getOrderNumber());
            goodsOrder.setNumber(ordersPaymentDTO.getOrderNumber());
            goodsOrder.setStatus(Long.valueOf(2));
            goodsOrder.setUserId(ordersPaymentDTO.getUserId());
            goodsOrder.setGoodsId(ordersPaymentDTO.getGoodsId());
            goodsOrder.setGoodsSpecificationsId(ordersPaymentDTO.getGoodsSpecificationsId());
            goodsOrder.setBuyQuantity(ordersPaymentDTO.getBuyQuantity());
            goodsOrder.setOrderTime(LocalDateTime.now());
            goodsOrder.setPayMethod(Long.valueOf(3));
            goodsOrder.setPayStatus(Long.valueOf(1));
            goodsOrder.setAmount(Double.valueOf(goods.getGoodsCurrentPrice()));
            goodsOrder.setUsername(user.getNickName());
            goodsOrder.setPhone(ordersPaymentDTO.getPhone());
            goodsOrder.setAddress(ordersPaymentDTO.getAddress());
            goodsOrder.setConsignee(ordersPaymentDTO.getConsignee());
            goodsOrder.setCreateBy(user.getNickName());
            goodsOrder.setCreateTime(LocalDateTime.now());
            sysGoodsOrderMapper.insert(goodsOrder);
            //TODO 库存待完善
//            订单所购买的商品减去库存
//            if (null != goodsSpecifications) {
//                goodsSpecifications.setStock(goodsSpecifications.getStock() - goodsOrder.getBuyQuantity());
//                goodsSpecificationsService.updateById(goodsSpecifications);
//            }

//            赠送用户相对应的积分
            user.setScore(user.getScore() + goodsOrder.getAmount().intValue());
            mobileEndUserService.updateById(user);

            OrderPaymentVO orderPaymentVO = new OrderPaymentVO();
            orderPaymentVO.setOutTradeNo(ordersPaymentDTO.getOrderNumber());
            return orderPaymentVO;
        }

        Map<String, String> data = new HashMap<>();
        data.put("appid", WeChatConstant.APP_ID);
        data.put("mch_id", WeChatConstant.MCH_ID);
        data.put("nonce_str", random);//随机字符串
        data.put("openid", user.getOpenId());
        data.put("body", "歌窝里商品：" + goods.getGoodsName());
        data.put("out_trade_no", ordersPaymentDTO.getOrderNumber());//商户订单号
        data.put("fee_type", "CNY");
        data.put("total_fee", "1");//标价金额
        data.put("spbill_create_ip", "127.0.0.1");//终端IP
        data.put("notify_url", WeChatConstant.GOODS_NOTIFY_URL);  //回调地址
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

                SysGoodsOrder goodsOrder = new SysGoodsOrder();
                goodsOrder.setId(ordersPaymentDTO.getOrderNumber());
                goodsOrder.setNumber(data.get("out_trade_no"));
                goodsOrder.setStatus(Long.valueOf(1));
                goodsOrder.setUserId(ordersPaymentDTO.getUserId());
                goodsOrder.setGoodsId(ordersPaymentDTO.getGoodsId());
                goodsOrder.setGoodsSpecificationsId(ordersPaymentDTO.getGoodsSpecificationsId());
                goodsOrder.setBuyQuantity(ordersPaymentDTO.getBuyQuantity());
                goodsOrder.setOrderTime(LocalDateTime.now());
                goodsOrder.setPayMethod(Long.valueOf(1));
                goodsOrder.setPayStatus(Long.valueOf(0));
                goodsOrder.setAmount(Double.valueOf(goods.getGoodsCurrentPrice()));
                goodsOrder.setUsername(user.getNickName());
                goodsOrder.setPhone(ordersPaymentDTO.getPhone());
                goodsOrder.setAddress(ordersPaymentDTO.getAddress());
                goodsOrder.setConsignee(ordersPaymentDTO.getConsignee());
                ObjectMapper objectMapper = new ObjectMapper();
                goodsOrder.setPayInfo(objectMapper.writeValueAsString(ordersPaymentDTO));
                goodsOrder.setCreateBy(user.getNickName());
                goodsOrder.setCreateTime(LocalDateTime.now());
                sysGoodsOrderMapper.insert(goodsOrder);

                return orderPaymentVO;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;

//        SysMobileEndUser user = mobileEndUserService.getById(ordersPaymentDTO.getUserId());
        //调用微信支付接口(“商户系统”调用的“JSAPT预下单接口”)，生成“预支付交易单”

//        SysGoods goods = goodsService.getById(ordersPaymentDTO.getGoodsId());

//        Map<String, String> data = new HashMap<>();
//        data.put("appid", WeChatConstant.APP_ID);
//        data.put("mch_id", WeChatConstant.MCH_ID);
//        data.put("nonce_str", RandomStringUtils.random(32, false, true));//随机字符串
//        data.put("openid", "oS1x25Ogm_d5wqkCRGHnAwCYRZZU");
//        data.put("body", "商品描述");
//        data.put("out_trade_no", RandomStringUtils.random(32, false, true));//商户订单号
//        data.put("fee_type", "CNY");    //
//        data.put("total_fee", "1");//标价金额
//        data.put("spbill_create_ip", "127.0.0.1");//终端IP
//        data.put("notify_url", WeChatConstant.GOODS_NOTIFY_URL);  //回调地址
//        data.put("trade_type", WeChatConstant.TRADE_TYPE);  //交易类型
//        System.out.println(data);
//        //生成签名
//        String signXml = "";
//        try {
//            //调用demo里面的sign生成方法
//            signXml = WXPayUtil.generateSignedXml(data, WeChatConstant.KEY, WXPayConstants.SignType.MD5);
//            String result = HttpUtils.sendPost(WeChatConstant.WECHAT_PAY_URL, signXml);
//            System.out.println(result);
//
//            // 进行将Xml转成对象的核心接口
//            JAXBContext context = JAXBContext.newInstance(OrderReturnInfo.class);
//            Unmarshaller unmarshaller = context.createUnmarshaller();
//            StringReader sr = new StringReader(result);
//            OrderReturnInfo returnInfo = (OrderReturnInfo) unmarshaller.unmarshal(sr);
//            // 二次签名
//            if ("SUCCESS".equals(returnInfo.getReturnCode()) && returnInfo.getReturnCode().equals(returnInfo.getResultCode())) {
//                long time = System.currentTimeMillis() / 1000;
//
//                //生成签名（官方给出来的签名方法）
//                Map<String, String> map2 = new HashMap();
//                map2.put("appId", WeChatConstant.APP_ID);
//                map2.put("timeStamp", String.valueOf(time));
//                //这边的随机字符串必须是第一次生成sign时，微信返回的随机字符串，否则小程序支付时会报签名错误
//                map2.put("nonceStr", returnInfo.getNonceStr());
//                map2.put("package", "prepay_id=" + returnInfo.getPrepayId());
//                map2.put("signType", "MD5");
//
//                String sign2 = WXPayUtil.generateSignature(map2, WeChatConstant.KEY, WXPayConstants.SignType.MD5);
//                System.out.println("二次签名的sign2----->" + sign2);
//
//
//                OrderPaymentVO orderPaymentVO = new OrderPaymentVO();
//                orderPaymentVO.setTimeStamp(String.valueOf(time));
//                orderPaymentVO.setNonceStr(returnInfo.getNonceStr());
//                orderPaymentVO.setPrepayId(returnInfo.getPrepayId());
//                orderPaymentVO.setSignType("MD5");
//                orderPaymentVO.setPaySign(sign2);
//                orderPaymentVO.setOutTradeNo(data.get("out_trade_no"));
//                System.out.println(orderPaymentVO);
//
//                return orderPaymentVO;
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//        return null;
    }

    @Override
    public AjaxResult appWeChatPay(OrdersPaymentDTO ordersPaymentDTO) {
        try {
            //当前登录用户id
            SysMobileEndUser user = mobileEndUserService.getById(ordersPaymentDTO.getUserId());

            SysGoods goods = goodsService.getById(ordersPaymentDTO.getGoodsId());
            SysGoodsSpecifications goodsSpecifications = goodsSpecificationsService.getById(ordersPaymentDTO.getGoodsSpecificationsId());
            if (goodsSpecifications.getStock() < ordersPaymentDTO.getBuyQuantity()) {
                throw new AssertionError("库存不足");
            }

            String random = RandomStringUtils.random(32, false, true);
            ordersPaymentDTO.setOrderNumber(random);
            Unifiedorder unifiedorder = new Unifiedorder();
            unifiedorder.setAppid(WeChatConstant.APP_ID);
            unifiedorder.setMch_id(WeChatConstant.MCH_ID);
            unifiedorder.setNonce_str(UUID.randomUUID().toString().replaceAll("-", ""));
            unifiedorder.setBody(ordersPaymentDTO.getOrderNumber());//订单id 拉起后，在微信页面上方显示的数据
            unifiedorder.setOut_trade_no(ordersPaymentDTO.getOrderNumber());//订单id
            String receivableAmount = goods.getGoodsCurrentPrice().toString();//自己业务的支付总价，但是微信支付接口以分为单位
//        String money = new BigDecimal(receivableAmount).multiply(new BigDecimal("100")).stripTrailingZeros().toPlainString();
            String money = "0.01";
            String fee = money;
            unifiedorder.setTotal_fee(fee); // 订单总金额,单位为分;
            unifiedorder.setSpbill_create_ip("127.0.0.1");
            unifiedorder.setNotify_url(WeChatConstant.GOODS_APP_NOTIFY_URL);//回调接口地址，用来接收微信通知，以及处理我们自己的业务逻辑
            unifiedorder.setTrade_type("APP");
            unifiedorder.setAttach("weChatPay");//附加数据，在查询API和支付通知中原样返回，可作为自定义参数使用，实际情况下只有支付完成状态才会返回该字段。示例值：自定义数据 说白了就是前端调微信拉起预支付接口的某些参数，需要我们在回调接口处理业务逻辑使用

            log.info("微信APP支付--(签名前):" + XMLConverUtil.convertToXML(unifiedorder));

            /** 获取签名 */
            UnifiedorderResult unifiedorderResult = PayMchAPI.payUnifiedorder(unifiedorder, WeChatConstant.SECRET);

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

                SysGoodsOrder goodsOrder = new SysGoodsOrder();
                goodsOrder.setId(ordersPaymentDTO.getOrderNumber());
                goodsOrder.setNumber(ordersPaymentDTO.getOrderNumber());
                goodsOrder.setStatus(Long.valueOf(1));
                goodsOrder.setUserId(ordersPaymentDTO.getUserId());
                goodsOrder.setGoodsId(ordersPaymentDTO.getGoodsId());
                goodsOrder.setGoodsSpecificationsId(ordersPaymentDTO.getGoodsSpecificationsId());
                goodsOrder.setBuyQuantity(ordersPaymentDTO.getBuyQuantity());
                goodsOrder.setOrderTime(LocalDateTime.now());
                goodsOrder.setPayMethod(Long.valueOf(1));
                goodsOrder.setPayStatus(Long.valueOf(0));
                goodsOrder.setAmount(Double.valueOf(goods.getGoodsCurrentPrice()));
                goodsOrder.setUsername(user.getNickName());
                goodsOrder.setPhone(ordersPaymentDTO.getPhone());
                goodsOrder.setAddress(ordersPaymentDTO.getAddress());
                goodsOrder.setConsignee(ordersPaymentDTO.getConsignee());
                ObjectMapper objectMapper = new ObjectMapper();
                goodsOrder.setPayInfo(objectMapper.writeValueAsString(ordersPaymentDTO));
                goodsOrder.setCreateBy(user.getNickName());
                goodsOrder.setCreateTime(LocalDateTime.now());
                sysGoodsOrderMapper.insert(goodsOrder);
                return resultMsg;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return AjaxResult.error("支付失败");
        }

        return null;
    }

    @Override
    public List<SysGoodsOrder> findGoodsOrderByUserId(Long userId) {
        QueryWrapper qw = new QueryWrapper();
        qw.eq("user_id", userId);
        qw.orderByDesc("create_time");
        return sysGoodsOrderMapper.selectList(qw);
    }

    /**
     * 查询商品订单
     *
     * @param id 商品订单主键
     * @return 商品订单
     */
    @Override
    public SysGoodsOrder selectSysGoodsOrderById(String id) {
        return sysGoodsOrderMapper.selectSysGoodsOrderById(id);
    }

    /**
     * 查询商品订单列表
     *
     * @param sysGoodsOrder 商品订单
     * @return 商品订单
     */
    @Override
    public List<GoodsOrderVo> selectSysGoodsOrderList(SysGoodsOrder sysGoodsOrder) {
        return sysGoodsOrderMapper.selectSysGoodsOrderList(sysGoodsOrder);
    }

    /**
     * 新增商品订单
     *
     * @param sysGoodsOrder 商品订单
     * @return 结果
     */
    @Override
    public int insertSysGoodsOrder(SysGoodsOrder sysGoodsOrder) {
        String random = RandomStringUtils.random(32, false, true);
        sysGoodsOrder.setId("No" + random);
        sysGoodsOrder.setCreateTime(LocalDateTime.now());
        return sysGoodsOrderMapper.insertSysGoodsOrder(sysGoodsOrder);
    }

    /**
     * 修改商品订单
     *
     * @param sysGoodsOrder 商品订单
     * @return 结果
     */
    @Override
    public int updateSysGoodsOrder(SysGoodsOrder sysGoodsOrder) {
        return sysGoodsOrderMapper.updateSysGoodsOrder(sysGoodsOrder);
    }

    /**
     * 批量删除商品订单
     *
     * @param ids 需要删除的商品订单主键
     * @return 结果
     */
    @Override
    public int deleteSysGoodsOrderByIds(String[] ids) {
        return sysGoodsOrderMapper.deleteSysGoodsOrderByIds(ids);
    }

    /**
     * 删除商品订单信息
     *
     * @param id 商品订单主键
     * @return 结果
     */
    @Override
    public int deleteSysGoodsOrderById(String id) {
        return sysGoodsOrderMapper.deleteSysGoodsOrderById(id);
    }
}
