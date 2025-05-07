package com.ruoyi.system.domain.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class SysUserFollowDto {
    @ApiModelProperty(value = "用户id")
    private Long userId;

    @ApiModelProperty(value = "关注用户id")
    private Long followUsers;

    @ApiModelProperty(value = "排行榜类型（1：金牌制作人   2：签约制作人   3：新晋制作人   4：音乐人）")
    private Integer type;
}
