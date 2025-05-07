package com.ruoyi.system.domain.vo;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
public class SongOrderVo implements Serializable {

    @ApiModelProperty(value = "订单ID")
    private String id;

    @ApiModelProperty(value = "订单号")
    private String number;

    @ApiModelProperty(value = "订单状态 1待付款 2待收货 3已收货 4已取消 5退款")
    private Long status;

    @ApiModelProperty(value = "用户ID")
    private Long userId;

    @ApiModelProperty(value = "歌曲ID")
    private Long songId;

    @ApiModelProperty(value = "下单时间")
    private LocalDateTime orderTime;

    @ApiModelProperty(value = "结账时间")
    private LocalDateTime checkoutTime;

    @ApiModelProperty(value = "支付方式 1微信，2支付宝")
    private Long payMethod;

    @ApiModelProperty(value = "支付状态 0未支付 1已支付 2退款")
    private Long payStatus;

    @ApiModelProperty(value = "实收金额")
    private Double amount;

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
    private LocalDateTime createTime;

    @ApiModelProperty(value = "修改人")
    private String modifyBy;

    @ApiModelProperty(value = "修改时间")
    private LocalDateTime modifyTime;

    @ApiModelProperty(value = "歌曲标题")
    private String songTitle;

    @ApiModelProperty(value = "歌曲名称")
    private String songName;

    @ApiModelProperty(value = "作曲人")
    private String composer;

    @ApiModelProperty(value = "作词人")
    private String lyricist;

    @ApiModelProperty(value = "歌曲时长（单位：秒）")
    private Integer duration;

    @ApiModelProperty(value = "歌曲存放路径")
    private String songFileUrl;

    @ApiModelProperty(value = "歌曲封面存放地址")
    private String songCoverPhotoUrl;

    @ApiModelProperty(value = "歌曲完整歌词")
    private String songLyrics;

    @ApiModelProperty(value = "姓名")
    private String authName;

    @ApiModelProperty(value = "身份证号")
    private String cardNo;

    @ApiModelProperty(value = "手机号")
    private String authPhone;
}
