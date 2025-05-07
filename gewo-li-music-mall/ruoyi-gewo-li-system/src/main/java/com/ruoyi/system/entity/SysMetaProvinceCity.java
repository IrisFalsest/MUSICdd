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
 * 省市区
 * </p>
 *
 * @author author
 * @since 2024-04-12
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("sys_meta_province_city")
@ApiModel(value="SysMetaProvinceCity对象", description="省市区")
public class SysMetaProvinceCity implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "主键")
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    @ApiModelProperty(value = "唯一ID")
    private Integer uid;

    @ApiModelProperty(value = "名称")
    private String name;

    @ApiModelProperty(value = "深度")
    private Integer levelId;

    @ApiModelProperty(value = "父类唯一ID")
    private Integer pUid;

    @ApiModelProperty(value = "是否叶子 0：否  1：是")
    private Integer isLeaf;

    @ApiModelProperty(value = "添加人")
    private Integer createBy;

    @ApiModelProperty(value = "添加时间")
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;

    @ApiModelProperty(value = "修改人")
    private Integer updateBy;

    @ApiModelProperty(value = "修改时间")
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updateTime;


}
