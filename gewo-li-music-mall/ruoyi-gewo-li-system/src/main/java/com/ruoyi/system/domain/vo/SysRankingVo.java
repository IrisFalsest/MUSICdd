package com.ruoyi.system.domain.vo;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

/**
 * 排行榜VO类
 */
@Data
public class SysRankingVo {
    @ApiModelProperty(value = "id")
    private Long id;

    @ApiModelProperty(value = "名次")
    private Integer ranking;

    @ApiModelProperty(value = "用户id")
    private Long userId;

    @ApiModelProperty(value = "昵称")
    private String nickName;

    @ApiModelProperty(value = "头像")
    private String avatar;

    @ApiModelProperty(value = "热度")
    private Float userHeat;

    @ApiModelProperty(value = "备注")
    private String remark;

    @ApiModelProperty(value = "赛区")
    private String competitionZone;

    @ApiModelProperty(value = "参赛照片")
    private String participatingPhoto;

    @ApiModelProperty(value = "参赛宣言")
    private String entryDeclaration;

    @ApiModelProperty(value = "是否关注（1：已关注   0：未关注）")
    private Integer isFollow;

    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")                    // 表示返回时间类型
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")      // 表示接收时间类型
    @ApiModelProperty(value = "签约时间")
    private LocalDateTime signTime;
}
