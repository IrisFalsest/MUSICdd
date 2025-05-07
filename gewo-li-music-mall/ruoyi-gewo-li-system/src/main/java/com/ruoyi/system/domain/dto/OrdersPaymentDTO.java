package com.ruoyi.system.domain.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;

@Data
//微信小程序中传来: 订单号、付款方式
public class OrdersPaymentDTO implements Serializable {
    //用户id
    @ApiModelProperty(value = "用户id")
    private Long userId;

    //订单号
    @ApiModelProperty(value = "订单号")
    private String orderNumber;

    //付款方式
    @ApiModelProperty(value = "付款方式 1：微信支付 2：积分")
    private Integer payMethod;

    //商品id
    @ApiModelProperty(value = "商品id")
    private Long goodsId;

    //商品库存ID
    @ApiModelProperty(value = "商品库存ID")
    private Long goodsSpecificationsId;

    //购买数量
    @ApiModelProperty(value = "购买数量")
    private Long buyQuantity;

    //手机号
    @ApiModelProperty(value = "手机号")
    private String phone;

    //地址
    @ApiModelProperty(value = "地址")
    private String address;

    //收货人
    @ApiModelProperty(value = "收货人")
    private String consignee;
}
