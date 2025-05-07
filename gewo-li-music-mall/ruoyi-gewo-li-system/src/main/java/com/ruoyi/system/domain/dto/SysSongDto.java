package com.ruoyi.system.domain.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.time.LocalDateTime;

/**
 * 歌曲响应类
 */
@Data
public class SysSongDto {
    @ApiModelProperty(value = "歌曲名称")
    private String songName;

    @ApiModelProperty(value = "歌曲制作人")
    private String createUser;

    @ApiModelProperty(value = "创建时间")
    private LocalDateTime createTime;
}
