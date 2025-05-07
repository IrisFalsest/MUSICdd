package com.ruoyi.alet.controller;

import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.system.domain.dto.SysRankingDto;
import com.ruoyi.system.domain.dto.SysUserFollowDto;
import com.ruoyi.system.entity.SysMobileEndUser;
import com.ruoyi.system.entity.SysRanking;
import com.ruoyi.system.service.ISysMobileEndUserService;
import com.ruoyi.system.service.ISysRankingService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/ranking")
@Api(tags = "排行榜")
public class SysRankingController {
    @Autowired
    private ISysRankingService rankingService;

    @GetMapping(value = "/acquisitionRanking")
    @ApiOperation("根据排行榜类型获取排行榜 （传关注用户ID就是用户详情）-------是否收藏")
    @ApiImplicitParam(name = "type",value = "根据排行榜类型获取排行榜  排行榜类型（1：金牌制作人   2：签约制作人   3：新晋制作人   4：音乐人")
    public AjaxResult findRankingByType(SysUserFollowDto userFollowDto){
        return AjaxResult.success(rankingService.findRankingByType(userFollowDto));
    }

    @GetMapping(value = "/acquisitionActivityRanking/{type}")
    @ApiOperation("根据活动排行榜类型获取活动排行榜")
    @ApiImplicitParam(name = "type",value = "根据活动排行榜类型获取活动排行榜  排行榜类型（1：金牌制作人   2：签约制作人   3：新晋制作人   4：音乐人")
    public AjaxResult findActivityRankingByType(@PathVariable Integer type){
        return AjaxResult.success(rankingService.findActivityRankingByType(type));
    }

    @GetMapping(value = "/acquisitionActivityRankingByTypeAndNameOrUserId")
    @ApiOperation("根据活动排行榜类型获取活动排行榜（传名称或用户id）")
    public AjaxResult findActivityRankingByTypeAndNameOrUserId(SysRankingDto rankingDto){
        return AjaxResult.success(rankingService.findActivityRankingByTypeAndNameOrUserId(rankingDto));
    }

    @GetMapping(value = "/acquisitionActivityRankingById")
    @ApiOperation("根据活动排行榜编号获取当前详情")
    public AjaxResult findActivityRankingById(SysRankingDto rankingDto){
        return AjaxResult.success(rankingService.findActivityRankingById(rankingDto));
    }

    @PutMapping
    @ApiOperation("添加活动排行榜中的用户")
    public AjaxResult addActivityRanking(SysRanking ranking){
        return AjaxResult.success(rankingService.save(ranking));
    }

    @PostMapping(value = "/modifyHeat")
    @ApiOperation("排行榜用户热度增加")
    public AjaxResult modifyUserHeatByUserId(SysRankingDto rankingDto){
        return AjaxResult.success(rankingService.modifyUserHeatByUserId(rankingDto));
    }
}
