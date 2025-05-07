package com.ruoyi.system.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import java.time.LocalDateTime;
import java.sql.Blob;
import java.io.Serializable;
import java.util.Date;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * <p>
 * 活动表
 * </p>
 *
 * @author 王志伟
 * @since 2024-04-15
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("sys_activity")
@ApiModel(value="SysActivity对象", description="活动表")
public class SysActivity implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "活动主键")
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(value = "活动名")
    @TableField("activity_name")
    private String activityName;

    @ApiModelProperty(value = "活动结束时间")
    @TableField("end_time")
    private Date endTime;

    @ApiModelProperty(value = "参加活动人数")
    @TableField("people_count")
    private Long peopleCount;

    @ApiModelProperty(value = "活动描述")
    @TableField("activity_description")
    private String activityDescription;

    @ApiModelProperty(value = "人气值")
    @TableField("popularity")
    private String popularity;

    @ApiModelProperty(value = "访问量")
    @TableField("activity_visits")
    private Long activityVisits;

    @ApiModelProperty(value = "创建人")
    @TableField("create_by")
    private String createBy;

    @ApiModelProperty(value = "创建时间")
    @TableField("create_time")
    private Date createTime;

    @ApiModelProperty(value = "修改人")
    @TableField("modify_by")
    private String modifyBy;

    @ApiModelProperty(value = "修改时间")
    @TableField("modify_time")
    private LocalDateTime modifyTime;

    @ApiModelProperty(value = "活动状态")
    @TableField("status")
    private Integer status;

}
