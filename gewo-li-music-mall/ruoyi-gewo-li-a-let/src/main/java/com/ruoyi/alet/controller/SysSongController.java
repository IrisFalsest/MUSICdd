package com.ruoyi.alet.controller;


import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.system.domain.dto.SongListDto;
import com.ruoyi.system.service.ISysSongService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * <p>
 * 歌曲表 前端控制器
 * </p>
 *
 * @since 2024-04-19
 */
@RestController
@RequestMapping("/song")
@Api(tags = "歌曲")
public class SysSongController {
    @Autowired
    private ISysSongService songService;

    @GetMapping("/acquisitionSongRanking")
    @ApiOperation("获取歌曲排行榜")
    @ApiImplicitParam(name = "type", value = "类型（1：在售歌单   2：热歌榜   3：新歌榜）")
    public AjaxResult findSongRanking(Integer type, SongListDto songListDto) {
        return AjaxResult.success(songService.findSongRanking(type, songListDto));
    }

    @GetMapping("/acquisitionSong")
    @ApiOperation("获取歌曲列表")
    @ApiImplicitParam(name = "songType", value = "歌曲类型（0：获取所有）")
    public AjaxResult findSongBySongType(SongListDto songListDto) {
        return AjaxResult.success(songService.findSongBySongType(songListDto.getSongType(), songListDto.getUserId()));
    }

    @GetMapping("/searchSong")
    @ApiOperation("搜索歌曲（歌曲名或制作人）")
    public AjaxResult searchSongBySongNameOrProducer(String songNameOrProducer) {
        return AjaxResult.success(songService.searchSongBySongNameOrProducer(songNameOrProducer));
    }
}
