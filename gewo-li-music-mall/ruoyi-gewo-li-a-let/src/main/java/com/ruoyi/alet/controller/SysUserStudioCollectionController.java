package com.ruoyi.alet.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.system.domain.dto.SysUserSongDto;
import com.ruoyi.system.domain.dto.SysUserStudioDto;
import com.ruoyi.system.entity.SysUserStudioCollection;
import com.ruoyi.system.service.ISysUserSongCollectionService;
import com.ruoyi.system.service.ISysUserStudioCollectionService;
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
@RequestMapping("/userStudioCollection")
@Api(tags = "用户录音棚收藏")
public class SysUserStudioCollectionController {
    @Autowired
    private ISysUserStudioCollectionService userStudioCollectionService;

    @PostMapping(value = "/userStudioCollection")
    @ApiOperation("用户录音棚收藏")
    public AjaxResult userStudioCollection(SysUserStudioDto sysUserStudioDto){
        Integer save = userStudioCollectionService.userSongCollection(sysUserStudioDto);
        if(save > 0){
            return AjaxResult.success("收藏成功！");
        }
        return AjaxResult.success("收藏失败！");
    }

    @GetMapping(value = "/acquisitionUserStudioCollection")
    @ApiOperation("获取用户录音棚收藏")
    public AjaxResult acquisitionUserStudioCollection(Long userId){
        return AjaxResult.success(userStudioCollectionService.acquisitionUserStudioCollectionListByUserId(userId));
    }

    @ApiOperation("删除用户录音棚收藏")
    @PostMapping(value = "/deleteUserStudioCollection")
    public AjaxResult deleteUserStudioCollection(SysUserStudioDto sysUserStudioDto){
        return AjaxResult.success(userStudioCollectionService.remove(
                new QueryWrapper<SysUserStudioCollection>()
                        .eq("user_id",sysUserStudioDto.getUserId())
                        .eq("studio_id",sysUserStudioDto.getStudioId())
        ));
    }
}
