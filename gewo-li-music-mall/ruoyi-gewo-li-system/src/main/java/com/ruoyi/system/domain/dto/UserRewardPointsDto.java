package com.ruoyi.system.domain.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class UserRewardPointsDto {
    @ApiModelProperty(value = "赠送用户id")
    private Long giver;

    @ApiModelProperty(value = "接收用户id")
    private Long recipient;

    @ApiModelProperty(value = "积分")
    private Long score;
}
