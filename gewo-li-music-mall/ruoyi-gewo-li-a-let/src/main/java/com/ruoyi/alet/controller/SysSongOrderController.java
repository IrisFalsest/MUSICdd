package com.ruoyi.alet.controller;

import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.core.domain.Result;
import com.ruoyi.system.domain.dto.OrdersPaymentDTO;
import com.ruoyi.system.domain.vo.OrderPaymentVO;
import com.ruoyi.system.service.ISysSongOrderService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequestMapping(value = "/song/order")
@Api(tags = "歌曲订单")
public class SysSongOrderController {

    @Autowired
    private ISysSongOrderService iSysSongOrderService;

    /**
     * 订单支付
     *
     * 小程序点击去“支付”,请求到该接口，此接口(在商户系统中)先调用JSAPI预下单接口，获得	 *prepay_id ,同时设置好微信小程序端调用 ”微信小程序端调起支付“接口所需的各种参数，且将
     * 参数封装到 OrderPaymentVO 中响应给微信用户端,微信用户端用这些已经准备好的参数来完
     * 成“微信小程序支付” copy哥
     *
     * @param ordersPaymentDTO
     * @return
     */
    @PutMapping("/payment")
    @ApiOperation("订单支付")
    public Result<OrderPaymentVO> payment(@RequestBody OrdersPaymentDTO ordersPaymentDTO) throws Exception {
        log.info("订单支付：{}", ordersPaymentDTO);

        //该方法的返回值为: 小程序端中使用 ”微信小程序端调起支付“ 接口所需的各种参数
        OrderPaymentVO orderPaymentVO = iSysSongOrderService.payment(ordersPaymentDTO);

        // orderPaymentVO : 包含了小程序端中使用 ”微信小程序端调起支付“ 接口所需的各种参数
        log.info("生成预支付交易单：{}", orderPaymentVO);
        //微信小程序端，拿到这个(wx.requestPayment()方法所需的)参数即会进行“微信支付”
        return Result.ok(orderPaymentVO);
    }

    @PutMapping("/appPayment")
    @ApiOperation("APP订单微信支付")
    public AjaxResult WXPayment(@RequestBody OrdersPaymentDTO ordersPaymentDTO) throws Exception {
        try {
            return iSysSongOrderService.appWeChatPay(ordersPaymentDTO);
        } catch (Exception e) {
            e.printStackTrace();
            AjaxResult.error("系统异常，支付失败！");
        }
        return null;
    }
}
