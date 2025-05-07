package com.ruoyi.alet.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.system.domain.dto.SysUserSongDto;
import com.ruoyi.system.entity.SysUserSongCollection;
import com.ruoyi.system.service.ISysUserSongCollectionService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 * 用户歌曲收藏表 前端控制器
 * </p>
 *
 * @since 2024-04-19
 */
@RestController
@RequestMapping("/userSongCollection")
@Api(tags = "用户歌曲收藏")
public class SysUserSongCollectionController {
    @Autowired
    private ISysUserSongCollectionService userSongCollectionService;

    @PostMapping(value = "/userSongCollection")
    @ApiOperation("用户歌曲收藏")
    public AjaxResult userSongCollection(SysUserSongDto sysUserSongDto){
        Integer save = userSongCollectionService.userSongCollection(sysUserSongDto);
        if(save > 0){
            return AjaxResult.success("收藏成功！");
        }
        return AjaxResult.success("收藏失败！");
    }

    @GetMapping(value = "/acquisitionUserSongCollection")
    @ApiOperation("获取用户歌曲收藏")
    public AjaxResult acquisitionUserSongCollectionListByUserId(Long userId){
        return AjaxResult.success(userSongCollectionService.acquisitionUserSongCollectionListByUserId(userId));
    }

    @ApiOperation("删除用户歌曲收藏")
    @PostMapping(value = "/deleteUserSongCollection")
    public AjaxResult modifyUserSongCollectionStatus(SysUserSongDto sysUserSongDto){
        return AjaxResult.success(userSongCollectionService.remove(
                new QueryWrapper<SysUserSongCollection>()
                        .eq("user_id",sysUserSongDto.getUserId())
                        .eq("song_id",sysUserSongDto.getSongId())
        ));
    }
}
