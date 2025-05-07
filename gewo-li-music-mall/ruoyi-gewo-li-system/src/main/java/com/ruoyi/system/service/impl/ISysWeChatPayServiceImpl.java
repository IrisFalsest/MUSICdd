package com.ruoyi.system.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.github.wxpay.sdk.WXPayUtil;
import com.ruoyi.common.constant.weChat.WeChatConstant;
import com.ruoyi.system.entity.*;
import com.ruoyi.system.service.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import weixin.popular.bean.paymch.MchBaseResult;
import weixin.popular.bean.paymch.MchPayNotify;
import weixin.popular.util.SignatureUtil;
import weixin.popular.util.StreamUtils;
import weixin.popular.util.XMLConverUtil;

import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.math.BigDecimal;
import java.nio.charset.Charset;
import java.time.LocalDateTime;
import java.util.Map;

@Service
@Slf4j
public class ISysWeChatPayServiceImpl implements ISysWeChatPayService {
    /**
     * 歌曲部分
     */
    @Autowired
    private ISysSongOrderService songOrderService;

    @Autowired
    private ISysSongService songService;

    /**
     * 商城商品部分
     */
    @Autowired
    private ISysGoodsOrderService goodsOrderService;

    @Autowired
    private ISysGoodsService goodsService;

    @Autowired
    private ISysGoodsSpecificationsService goodsSpecificationsService;

    /**
     * 用户部分
     */
    @Autowired
    private ISysMobileEndUserService mobileEndUserService;

    @Override
    public String songCallback(HttpServletRequest request) throws Exception {
        log.debug("微信支付回调{}", request);
        ServletInputStream is = request.getInputStream();
        byte[] bs = new byte[1024];
        int len = -1;
        StringBuilder builder = new StringBuilder();
        while ((len = is.read(bs)) != -1) {
            builder.append(new String(bs, 0, len));
        }
        String str = builder.toString();
        //使用帮助类将xml接口的字符串转换成map
        Map<String, String> map = WXPayUtil.xmlToMap(str);
        if ("success".equalsIgnoreCase(map.get("result_code"))) {
//            微信交易订单id 退款用到
//            String transactionId = map.get("transaction_id");

//            微信支付订单号
            String tradeNo = map.get("out_trade_no");

//            更新订单状态
            QueryWrapper qw = new QueryWrapper();
            qw.eq("number", tradeNo);
            SysSongOrder songOrder = songOrderService.getOne(qw);
            songOrder.setStatus(Long.valueOf(2));
            songOrder.setCheckoutTime(LocalDateTime.now());
            songOrder.setPayStatus(Long.valueOf(1));
            songOrderService.updateById(songOrder);

//            将歌曲下架
            SysSong song = songService.getById(songOrder.getSongId());
            if (null != song && song.getSingType() == 1){
                song.setStatus(1);
                songService.updateById(song);
            }

//            赠送用户相对应的积分
            SysMobileEndUser user = mobileEndUserService.getById(songOrder.getUserId());
            user.setScore(user.getScore() + songOrder.getAmount().intValue());
            mobileEndUserService.updateById(user);

            return tradeNo;
        }
        return str;
    }

    @Override
    public String songAppCallback(HttpServletRequest request) throws Exception {
        // 解析微信支付异步通知请求参数;
        String xml = null;
        try {
            xml = StreamUtils.copyToString(request.getInputStream(), Charset.forName("utf-8"));
        } catch (IOException e) {
            e.printStackTrace();
        }
        Map<String, String> params = XMLConverUtil.convertToMap(xml);
        MchPayNotify payNotify = XMLConverUtil.convertToObject(MchPayNotify.class, xml);


        /** 打印日志信息 */
        log.info("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$---进入微信支付异步通知请求接口---$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        log.info("微信支付用户订单支付结果异步通知请求参数(xml):" + params);
        log.info("微信支付用户订单支付结果异步通知请求参数(map):" + params);
        log.info("return_code:" + payNotify.getReturn_code());
        log.info("return_msg:" + params.get("return_msg"));
        String out_trade_no = payNotify.getOut_trade_no();  // 用户订单号;
        String money = String.valueOf(payNotify.getTotal_fee());//支付金额
        String total_amount = new BigDecimal(money).multiply(new BigDecimal("0.01")).stripTrailingZeros().toPlainString();//单位换算成元
        String trade_no = payNotify.getTransaction_id();//微信交易号
        //CampOrder campOrder = campDao.selectOrderDetail(orderId);
        /** 校验支付成功还是失败 */
        if ("SUCCESS".equals(payNotify.getReturn_code())) {
            /** 获取微信后台返回来的异步通知参数 */
            String tradeNo = payNotify.getTransaction_id();   // 微信交易号;
            String tradeStatus = payNotify.getResult_code();  // 微信支付状态;
            Integer totalFee = payNotify.getTotal_fee();      // 支付金额 (单位：分)
            String  subject = payNotify.getAttach(); // 附加数据，在查询API和支付通知中原样返回，可作为自定义参数使用，实际情况下只有支付完成状态才会返回该字段。示例值：自定义数据
            boolean flag = SignatureUtil.validateSign(params, WeChatConstant.SECRET);
            //返回结果return_code 和result_code都为SUCCESS的时候才算成功
            if (flag && "SUCCESS".equals(tradeStatus)) {
                /** 更新订单支付信息: */

                log.info("********************** 支付成功(微信异步通知) **********************");
                log.info("* 订单号: " + out_trade_no);
                log.info("* 微信交易号: " + trade_no);
                log.info("* 实付金额: " + total_amount);
                log.info("***************************************************************");

                /************         愣着干嘛，处理业务啊            ************/

                log.info("微信支付成功...");

                /** 封装通知信息 */
                MchBaseResult baseResult = new MchBaseResult();
                baseResult.setReturn_code("SUCCESS");
                baseResult.setReturn_msg("OK");
                xml = XMLConverUtil.convertToXML(baseResult);


//            更新订单状态
                QueryWrapper qw = new QueryWrapper();
                qw.eq("number", tradeNo);
                SysSongOrder songOrder = songOrderService.getOne(qw);
                songOrder.setStatus(Long.valueOf(2));
                songOrder.setCheckoutTime(LocalDateTime.now());
                songOrder.setPayStatus(Long.valueOf(1));
                songOrderService.updateById(songOrder);

//            将歌曲下架
                SysSong song = songService.getById(songOrder.getSongId());
                if (null != song && song.getSingType() == 1){
                    song.setStatus(1);
                    songService.updateById(song);
                }

//            赠送用户相对应的积分
                SysMobileEndUser user = mobileEndUserService.getById(songOrder.getUserId());
                user.setScore(user.getScore() + songOrder.getAmount().intValue());
                mobileEndUserService.updateById(user);

            } else {
                MchBaseResult baseResult = new MchBaseResult();
                baseResult.setReturn_code("FAIL");
                baseResult.setReturn_msg("FAIL");
                xml = XMLConverUtil.convertToXML(baseResult);
                //TODO 支付失败；逻辑
            }
        } else {
            MchBaseResult baseResult = new MchBaseResult();
            baseResult.setReturn_code("FAIL");
            baseResult.setReturn_msg("FAIL");
            xml = XMLConverUtil.convertToXML(baseResult);
        }
        log.info("微信支付--APP支付方式支付用户订单异步通知返回数据:" + xml);
        return xml;
    }

    @Override
    public String goodsCallback(HttpServletRequest request) throws Exception {
        log.debug("微信支付回调{}", request);
        ServletInputStream is = request.getInputStream();
        byte[] bs = new byte[1024];
        int len = -1;
        StringBuilder builder = new StringBuilder();
        while ((len = is.read(bs)) != -1) {
            builder.append(new String(bs, 0, len));
        }
        String str = builder.toString();
        //使用帮助类将xml接口的字符串转换成map
        Map<String, String> map = WXPayUtil.xmlToMap(str);
        if ("success".equalsIgnoreCase(map.get("result_code"))) {
//            微信交易订单id 退款用到
//            String transactionId = map.get("transaction_id");

//            微信支付订单号
            String tradeNo = map.get("out_trade_no");

//            更新订单状态
            QueryWrapper qw = new QueryWrapper();
            qw.eq("number", tradeNo);
            SysGoodsOrder goodsOrder = goodsOrderService.getOne(qw);
            goodsOrder.setStatus(Long.valueOf(2));
            goodsOrder.setCheckoutTime(LocalDateTime.now());
            goodsOrder.setPayStatus(Long.valueOf(1));
            goodsOrderService.updateById(goodsOrder);

//            订单所购买的商品减去库存
            SysGoodsSpecifications goodsSpecifications = goodsSpecificationsService.getById(goodsOrder.getGoodsSpecificationsId());
            if(null != goodsSpecifications){
                goodsSpecifications.setStock(goodsSpecifications.getStock() - goodsOrder.getBuyQuantity());
                goodsSpecificationsService.updateById(goodsSpecifications);
            }

//            赠送用户相对应的积分
            SysMobileEndUser user = mobileEndUserService.getById(goodsOrder.getUserId());
            user.setScore(user.getScore() + goodsOrder.getAmount().intValue());
            mobileEndUserService.updateById(user);
        }
        return str;
    }

    @Override
    public String goodsAppCallback(HttpServletRequest request) throws Exception {
// 解析微信支付异步通知请求参数;
        String xml = null;
        try {
            xml = StreamUtils.copyToString(request.getInputStream(), Charset.forName("utf-8"));
        } catch (IOException e) {
            e.printStackTrace();
        }
        Map<String, String> params = XMLConverUtil.convertToMap(xml);
        MchPayNotify payNotify = XMLConverUtil.convertToObject(MchPayNotify.class, xml);


        /** 打印日志信息 */
        log.info("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$---进入微信支付异步通知请求接口---$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        log.info("微信支付用户订单支付结果异步通知请求参数(xml):" + params);
        log.info("微信支付用户订单支付结果异步通知请求参数(map):" + params);
        log.info("return_code:" + payNotify.getReturn_code());
        log.info("return_msg:" + params.get("return_msg"));
        String out_trade_no = payNotify.getOut_trade_no();  // 用户订单号;
        String money = String.valueOf(payNotify.getTotal_fee());//支付金额
        String total_amount = new BigDecimal(money).multiply(new BigDecimal("0.01")).stripTrailingZeros().toPlainString();//单位换算成元
        String trade_no = payNotify.getTransaction_id();//微信交易号
        //CampOrder campOrder = campDao.selectOrderDetail(orderId);
        /** 校验支付成功还是失败 */
        if ("SUCCESS".equals(payNotify.getReturn_code())) {
            /** 获取微信后台返回来的异步通知参数 */
            String tradeNo = payNotify.getTransaction_id();   // 微信交易号;
            String tradeStatus = payNotify.getResult_code();  // 微信支付状态;
            Integer totalFee = payNotify.getTotal_fee();      // 支付金额 (单位：分)
            String  subject = payNotify.getAttach(); // 附加数据，在查询API和支付通知中原样返回，可作为自定义参数使用，实际情况下只有支付完成状态才会返回该字段。示例值：自定义数据
            boolean flag = SignatureUtil.validateSign(params, WeChatConstant.SECRET);
            //返回结果return_code 和result_code都为SUCCESS的时候才算成功
            if (flag && "SUCCESS".equals(tradeStatus)) {
                /** 更新订单支付信息: */

                log.info("********************** 支付成功(微信异步通知) **********************");
                log.info("* 订单号: " + out_trade_no);
                log.info("* 微信交易号: " + trade_no);
                log.info("* 实付金额: " + total_amount);
                log.info("***************************************************************");

                /************         愣着干嘛，处理业务啊            ************/

                log.info("微信支付成功...");

                /** 封装通知信息 */
                MchBaseResult baseResult = new MchBaseResult();
                baseResult.setReturn_code("SUCCESS");
                baseResult.setReturn_msg("OK");
                xml = XMLConverUtil.convertToXML(baseResult);

//            更新订单状态
                QueryWrapper qw = new QueryWrapper();
                qw.eq("number", tradeNo);
                SysGoodsOrder goodsOrder = goodsOrderService.getOne(qw);
                goodsOrder.setStatus(Long.valueOf(2));
                goodsOrder.setCheckoutTime(LocalDateTime.now());
                goodsOrder.setPayStatus(Long.valueOf(1));
                goodsOrderService.updateById(goodsOrder);

//            订单所购买的商品减去库存
                SysGoodsSpecifications goodsSpecifications = goodsSpecificationsService.getById(goodsOrder.getGoodsSpecificationsId());
                if(null != goodsSpecifications){
                    goodsSpecifications.setStock(goodsSpecifications.getStock() - goodsOrder.getBuyQuantity());
                    goodsSpecificationsService.updateById(goodsSpecifications);
                }

//            赠送用户相对应的积分
                SysMobileEndUser user = mobileEndUserService.getById(goodsOrder.getUserId());
                user.setScore(user.getScore() + goodsOrder.getAmount().intValue());
                mobileEndUserService.updateById(user);
            } else {
                MchBaseResult baseResult = new MchBaseResult();
                baseResult.setReturn_code("FAIL");
                baseResult.setReturn_msg("FAIL");
                xml = XMLConverUtil.convertToXML(baseResult);
                //TODO 支付失败；逻辑
            }
        } else {
            MchBaseResult baseResult = new MchBaseResult();
            baseResult.setReturn_code("FAIL");
            baseResult.setReturn_msg("FAIL");
            xml = XMLConverUtil.convertToXML(baseResult);
        }
        log.info("微信支付--APP支付方式支付用户订单异步通知返回数据:" + xml);
        return xml;    }
}
