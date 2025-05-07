package com.ruoyi.system.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import java.time.LocalDateTime;
import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.TableField;
import java.io.Serializable;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * <p>
 * 商品订单
 * </p>
 *
 * @author author
 * @since 2024-05-14
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("sys_goods_order")
@ApiModel(value="SysGoodsOrder对象", description="商品订单")
public class SysGoodsOrder implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "订单编号主键")
    private String id;

    @ApiModelProperty(value = "订单号")
    private String number;

    @ApiModelProperty(value = "物流单号（快递）")
    private String logisticsNo;

    @ApiModelProperty(value = "订单状态 1待付款 2待收货 3已收货 4已取消 5退款")
    private Long status;

    @ApiModelProperty(value = "用户ID")
    private Long userId;

    @ApiModelProperty(value = "商品ID")
    private Long goodsId;

    @ApiModelProperty(value = "商品库存ID")
    private Long goodsSpecificationsId;

    @ApiModelProperty(value = "购买数量")
    private Long buyQuantity;

    @ApiModelProperty(value = "下单时间")
    private LocalDateTime orderTime;

    @ApiModelProperty(value = "结账时间")
    private LocalDateTime checkoutTime;

    @ApiModelProperty(value = "支付方式 1微信，2支付宝，3积分")
    private Long payMethod;

    @ApiModelProperty(value = "支付状态 0未支付 1已支付 2退款")
    private Long payStatus;

    @ApiModelProperty(value = "实收金额")
    private Double amount;

    @ApiModelProperty(value = "支付信息")
    private String payInfo;

    @ApiModelProperty(value = "备注")
    private String remark;

    @ApiModelProperty(value = "用户名")
    private String username;

    @ApiModelProperty(value = "手机号")
    private String phone;

    @ApiModelProperty(value = "地址")
    private String address;

    @ApiModelProperty(value = "收货人")
    private String consignee;

    @ApiModelProperty(value = "订单取消原因")
    private String cancelReason;

    @ApiModelProperty(value = "订单拒绝原因")
    private String rejectionReason;

    @ApiModelProperty(value = "订单取消时间")
    private LocalDateTime cancelTime;

    @ApiModelProperty(value = "创建人")
    private String createBy;

    @ApiModelProperty(value = "创建时间")
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;

    @ApiModelProperty(value = "修改人")
    private String modifyBy;

    @ApiModelProperty(value = "修改时间")
    private LocalDateTime modifyTime;


}
