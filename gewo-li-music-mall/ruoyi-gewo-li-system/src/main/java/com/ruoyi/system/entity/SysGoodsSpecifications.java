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
 * 商品规格表
 * </p>
 *
 * @author author
 * @since 2024-05-12
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("sys_goods_specifications")
@ApiModel(value="SysGoodsSpecifications对象", description="商品规格表")
public class SysGoodsSpecifications implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "规格主键")
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(value = "商品id")
    private Long goodsId;

    @ApiModelProperty(value = "规格标题")
    private String specificationsTitle;

    @ApiModelProperty(value = "价格")
    private Float price;

    @ApiModelProperty(value = "规格图片路径")
    private String specificationsImageUrl;

    @ApiModelProperty(value = "库存")
    private Long stock;

    @ApiModelProperty(value = "排序（优先级）")
    private Integer sort;

    @ApiModelProperty(value = "创建人")
    private String createBy;

    @ApiModelProperty(value = "创建时间")
    @TableField(fill = FieldFill.INSERT)
    private Date createTime;

    @ApiModelProperty(value = "父级Id")
    private Long parentId;

    @ApiModelProperty(value = "修改人")
    private String modifyBy;

    @ApiModelProperty(value = "修改时间")
    private LocalDateTime modifyTime;

    @ApiModelProperty(value = "状态（0：上架   1：下架）")
    private Integer status;


}
