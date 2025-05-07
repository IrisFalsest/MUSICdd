package com.ruoyi.alet.controller;


import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.system.domain.dto.UserRewardPointsDto;
import com.ruoyi.system.entity.SysMobileEndUser;
import com.ruoyi.system.entity.SysSong;
import com.ruoyi.system.service.ISysMobileEndUserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <p>
 * 移动端用户 前端控制器
 * </p>
 */
@RestController
@RequestMapping("/mobileEndUser")
@Api(tags = "移动端用户")
public class SysMobileEndUserController {
    @Autowired
    private ISysMobileEndUserService mobileEndUserService;

    @GetMapping(value = "/info")
    @ApiOperation("获取当前用户信息")
    public AjaxResult findUserInfo(Long userId) {
        Map<String,Object> result = new HashMap<>();
        SysMobileEndUser user = mobileEndUserService.getById(userId);
        List<SysSong> songList = mobileEndUserService.findMobileEndUserWorksByUserId(userId);
        result.put("user",user);
        result.put("songList",songList);
        return AjaxResult.success(result);
    }

    @GetMapping(value = "/mobileEndUserWorks")
    @ApiOperation("获取用户作品")
    public AjaxResult findMobileEndUserWorksByUserId(Long userId) {
        return AjaxResult.success(mobileEndUserService.findMobileEndUserWorksByUserId(userId));
    }

    @PutMapping(value = "/rewardPoints")
    @ApiOperation("用户赠送积分")
    public AjaxResult userRewardPoints(UserRewardPointsDto userRewardPointsDto) {
        mobileEndUserService.userRewardPoints(userRewardPointsDto);
        return AjaxResult.success("赠送成功");
    }

    @PutMapping(value = "/modifyScore")
    @ApiOperation("修改用户积分")
    public AjaxResult modifyUserScore(Long[] ids, Long score){
        mobileEndUserService.modifyUserScore(ids, score);
        return AjaxResult.success("修改成功");
    }

    @PutMapping(value = "/addScore")
    @ApiOperation("增加用户积分")
    public AjaxResult addUserScore(Long[] ids, Long score){
        mobileEndUserService.addUserScore(ids, score);
        return AjaxResult.success("修改成功");
    }
}
