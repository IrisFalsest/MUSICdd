package com.ruoyi.system.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import java.time.LocalDateTime;
import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.TableField;
import java.io.Serializable;
import java.util.Date;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * <p>
 * 商品表
 * </p>
 *
 * @author author
 * @since 2024-05-12
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("sys_goods")
@ApiModel(value="SysGoods对象", description="商品表")
public class SysGoods implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "商品主键")
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(value = "商品类别id")
    private Long goodsTypeId;

    @ApiModelProperty(value = "商品名称")
    private String goodsName;

    @ApiModelProperty(value = "商品图片路径")
    private String goodsImageUrl;

    @ApiModelProperty(value = "商品轮播图")
    private String goodsChart;

    @ApiModelProperty(value = "商品描述")
    private String goodsInfo;

    @ApiModelProperty(value = "商品详情")
    private String goodsDetail;

    @ApiModelProperty(value = "商品原价")
    private Float goodsOriginalPrice;

    @ApiModelProperty(value = "商品现价")
    private Float goodsCurrentPrice;

    @ApiModelProperty(value = "商品热度")
    private Float goodsHeat;

    @ApiModelProperty(value = "是否可以使用积分购买（0：否   1：是）")
    private Integer isScoreBuy;

    @ApiModelProperty(value = "积分总额")
    private Long scoreSum;

    @ApiModelProperty(value = "是否赠送积分（0：否   1：是）")
    private Integer isGiftScore;

    @ApiModelProperty(value = "赠送积分")
    private Long giftScore;

    @ApiModelProperty(value = "创建人")
    private String createBy;

    @ApiModelProperty(value = "创建时间")
    @TableField(fill = FieldFill.INSERT)
    private Date createTime;

    @ApiModelProperty(value = "修改人")
    private String modifyBy;

    @ApiModelProperty(value = "修改时间")
    private LocalDateTime modifyTime;

    @ApiModelProperty(value = "状态（0：上架   1：下架）")
    private Integer status;

    @ApiModelProperty(value = "审核状态（1：未审核    2：审核通过   3：审核不通过）")
    private Integer reviewStatus;


}
