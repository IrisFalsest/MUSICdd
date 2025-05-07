package com.ruoyi.system.domain.vo;

import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Date;

@Data
public class SysBackRankingVo {
    @ApiModelProperty(value = "主键id")
    private Long id;

    @ApiModelProperty(value = "用户id")
    private Long userId;

    @ApiModelProperty(value = "用户热度")
    private Float userHeat;

    @ApiModelProperty(value = "排行榜备注")
    private String rankingRemark;

    @ApiModelProperty(value = "赛区")
    private String competitionZone;

    @ApiModelProperty(value = "参赛照片")
    private String participatingPhoto;

    @ApiModelProperty(value = "排行榜类型（1：金牌制作人   2：签约制作人   3：新晋制作人   4：音乐人）")
    private Integer rankingType;

    @ApiModelProperty(value = "创建人")
    private String createBy;

    @ApiModelProperty(value = "创建时间")
    @TableField(fill = FieldFill.INSERT)
    private Date createTime;

    @ApiModelProperty(value = "修改人")
    private String modifyBy;

    @ApiModelProperty(value = "修改时间")
    private LocalDateTime modifyTime;

    @ApiModelProperty(value = "是否可用（0：是   1：否）")
    private Integer status;

    @ApiModelProperty(value = "昵称")
    private String nickName;

    @ApiModelProperty(value = "名字")
    private String name;

    @ApiModelProperty(value = "电话")
    private String phone;

    @ApiModelProperty(value = "用户备注")
    private String userRemark;
}
