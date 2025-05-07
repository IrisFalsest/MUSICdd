package com.ruoyi.system.domain.vo;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 歌曲VO类
 */
@Data
public class SysSongVo {
    @ApiModelProperty
    private Long id;

    @ApiModelProperty
    private Long songId;

    @ApiModelProperty(value = "歌曲名称")
    private String songName;

    @ApiModelProperty(value = "歌曲时常（单位：秒）")
    private Integer duration;

    @ApiModelProperty(value = "歌曲封面存放地址")
    private String songCoverPhotoUrl;

    @ApiModelProperty(value = "歌曲存放路径")
    private String songFileUrl;

    @ApiModelProperty(value = "歌曲完整歌词")
    private String songLyrics;

    @ApiModelProperty(value = "创建人（制作人）")
    private String createUser;

    @ApiModelProperty(value = "歌曲原价")
    private Float originalPrice;

    @ApiModelProperty(value = "歌曲现价")
    private Float currentPrice;
}
