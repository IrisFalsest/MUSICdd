package com.ruoyi.alet.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.system.domain.dto.SysFollowDto;
import com.ruoyi.system.entity.SysFollow;
import com.ruoyi.system.entity.SysUserStudioCollection;
import com.ruoyi.system.service.ISysFollowService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * <p>
 * 关注表 前端控制器
 * </p>
 *
 * @author author
 * @since 2024-06-29
 */
@RestController
@RequestMapping("/follow")
@Api(tags = "关注")
public class SysFollowController {
    @Autowired
    private ISysFollowService followService;

    @PostMapping(value = "/userFollow")
    @ApiOperation("用户关注")
    public AjaxResult userStudioCollection(SysFollowDto followDto){
        Integer save = followService.userFollow(followDto);
        if(save > 0){
            return AjaxResult.success("关注成功！");
        }
        return AjaxResult.success("关注失败！");
    }

    @GetMapping(value = "/acquisitionFollowListByUserId")
    @ApiOperation("获取用户关注列表")
    public AjaxResult acquisitionFollowListByUserId(Long userId){
        return AjaxResult.success(followService.acquisitionFollowListByUserId(userId));
    }

    @ApiOperation("删除关注")
    @PostMapping(value = "/deleteFollow")
    public AjaxResult deleteFollow(SysFollowDto followDto){
        return AjaxResult.success(followService.remove(
                new QueryWrapper<SysFollow>()
                        .eq("user_id",followDto.getUserId())
                        .eq("follow_users",followDto.getFollowUsers())
        ));
    }

}
