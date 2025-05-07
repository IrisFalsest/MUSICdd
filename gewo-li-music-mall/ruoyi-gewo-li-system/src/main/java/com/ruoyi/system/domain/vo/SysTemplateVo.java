package com.ruoyi.system.domain.vo;

import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class SysTemplateVo {
    @ApiModelProperty(value = "主键")
    private Long id;

    @ApiModelProperty(value = "模板名称")
    private String templateName;

    @ApiModelProperty(value = "logo图标")
    private String logoImage;

    @ApiModelProperty(value = "背景图片")
    private String backgroundImage;

    @ApiModelProperty(value = "背景图片")
    private String userBackgroundImage;

    @ApiModelProperty(value = "字段")
    private String field;

    @ApiModelProperty(value = "类型")
    private String type;

    @ApiModelProperty(value = "用户id")
    private Long userId;

    @ApiModelProperty(value = "头像")
    private String avatar;

    @ApiModelProperty(value = "昵称")
    private String nickName;

    @ApiModelProperty(value = "备注")
    private String remark;

    @ApiModelProperty(value = "创建人")
    private String createBy;

    @ApiModelProperty(value = "创建时间")
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;

    @ApiModelProperty(value = "修改人")
    private String modifyBy;

    @ApiModelProperty(value = "修改时间")
    private LocalDateTime modifyTime;

    @ApiModelProperty(value = "状态（0：正常   1：禁用）")
    private Integer status;
}
