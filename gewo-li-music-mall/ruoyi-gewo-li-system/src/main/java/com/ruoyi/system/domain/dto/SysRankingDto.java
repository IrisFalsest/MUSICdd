package com.ruoyi.system.domain.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class SysRankingDto {
    @ApiModelProperty(value = "用户id")
    private Long userId;

    @ApiModelProperty
    private Long rankingId;

    @ApiModelProperty(value = "用户热度")
    private Integer userHeat;

    @ApiModelProperty(value = "排行榜类型（1：金牌制作人   2：签约制作人   3：新晋制作人   4：成人音乐人 5：儿童音乐人 ）")
    private Integer type;

    @ApiModelProperty(value = "用户名称")
    private String name;
}
