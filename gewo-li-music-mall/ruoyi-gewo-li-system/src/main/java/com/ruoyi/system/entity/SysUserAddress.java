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
 * 用户地址表
 * </p>
 *
 * @author author
 * @since 2024-04-19
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("sys_user_address")
@ApiModel(value="SysUserAddress对象", description="用户地址表")
public class SysUserAddress implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "用户地址主键")
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(value = "用户id用户id（对应 sys_mobile_end_user表 id字段）")
    private Long userId;

    @ApiModelProperty(value = "收件人全名")
    private String recipientName;

    @ApiModelProperty(value = "省份")
    private String provinceState;

    @ApiModelProperty(value = "城市名")
    private String city;

    @ApiModelProperty(value = "区域")
    private String area;

    @ApiModelProperty(value = "街道")
    private String street;

    @ApiModelProperty(value = "详细地址")
    private String addressLine;

    @ApiModelProperty(value = "联系电话")
    private String phoneNumber;

    @ApiModelProperty(value = "是否为用户默认地址（0：否   1：是）")
    private Integer isDefault;

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
