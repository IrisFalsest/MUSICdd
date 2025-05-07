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
 * 录音棚表
 * </p>
 *
 * @author author
 * @since 2024-04-24
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("sys_recording_studio")
@ApiModel(value="SysRecordingStudio对象", description="录音棚表")
public class SysRecordingStudio implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "录音棚主键")
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(value = "录音棚店名")
    private String studioName;

    @ApiModelProperty(value = "录音棚标签")
    private String studioLabel;

    @ApiModelProperty(value = "原价")
    private Float originalPrice;

    @ApiModelProperty(value = "现价")
    private Float currentPrice;

    @ApiModelProperty(value = "录音棚面积")
    private Float studioArea;

    @ApiModelProperty(value = "朝向")
    private String facing;

    @ApiModelProperty(value = "录音棚热度")
    private Float studioHeat;

    @ApiModelProperty(value = "录音棚地址")
    private String studioAddress;

    @ApiModelProperty(value = "录音棚封面")
    private String coverPhotoUrl;

    @ApiModelProperty(value = "轮播图")
    private String carouselChart;

    @ApiModelProperty(value = "详情图片")
    private String detailImages;

    @ApiModelProperty(value = "创建人")
    private String createBy;

    @ApiModelProperty(value = "创建时间")
    @TableField(fill = FieldFill.INSERT)
    private Date createTime;

    @ApiModelProperty(value = "修改人")
    private String modifyBy;

    @ApiModelProperty(value = "修改时间")
    private LocalDateTime modifyTime;

    @ApiModelProperty(value = "是否可定制（0：是   1：否）")
    private Integer isCustomization;

    @ApiModelProperty(value = "状态（0：上架   1：下架）")
    private Integer status;

    @ApiModelProperty(value = "经度")
    private String longitude;

    @ApiModelProperty(value = "纬度")
    private String latitude;

    @ApiModelProperty(value = "是否收藏")
    @TableField(exist = false)
    private Integer isCollect;

}
