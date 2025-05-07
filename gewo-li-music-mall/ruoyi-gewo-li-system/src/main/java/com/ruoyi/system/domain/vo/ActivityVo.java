package com.ruoyi.system.domain.vo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Date;

@Data
public class ActivityVo {
    @ApiModelProperty(value = "活动主键")
    private Long id;

    @ApiModelProperty(value = "活动名")
    private String activityName;

    @ApiModelProperty(value = "活动结束时间")
    private Date endTime;

    @ApiModelProperty(value = "参加活动人数")
    private Long peopleCount;

    @ApiModelProperty(value = "活动描述")
    private String activityDescription;

    @ApiModelProperty(value = "人气值")
    private String popularity;

    @ApiModelProperty(value = "访问量")
    private Long activityVisits;

    @ApiModelProperty(value = "创建人")
    private String createBy;

    @ApiModelProperty(value = "创建时间")
    private Date createTime;

    @ApiModelProperty(value = "修改人")
    private String modifyBy;

    @ApiModelProperty(value = "修改时间")
    private LocalDateTime modifyTime;

    @ApiModelProperty(value = "活动状态")
    private Integer status;

    @ApiModelProperty(value = "该用户是否参加活动（0：未参加   1：已参加）")
    private Integer isParticipate;
}
