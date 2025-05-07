package com.ruoyi.alet.controller;

import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.system.domain.vo.ActivityVo;
import com.ruoyi.system.entity.SysActivity;
import com.ruoyi.system.service.ISysActivityService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/activity")
@Api(tags = "活动")
public class SysActivityController {

    @Autowired
    private ISysActivityService iSysActivityService;

    @GetMapping("/acquisitionActivity")
    @ApiOperation("获取活动")
    public AjaxResult findActivity(Long userId) {
        ActivityVo activity = iSysActivityService.findActivity(userId);
        if (null != activity) {
            return AjaxResult.success(activity);
        } else {
            return AjaxResult.warn("暂无活动,请联系管理员进行添加");
        }
    }

    @PostMapping("/activityVisits")
    @ApiOperation("增加访问量")
    public AjaxResult increaseActivityVisits(Long id) {
        return AjaxResult.success(iSysActivityService.increaseActivityVisits(id));
    }

    @PutMapping(value = "/addActivity")
    @ApiOperation("添加活动")
    public AjaxResult addActivity(SysActivity activity) {
        return AjaxResult.success(iSysActivityService.save(activity));
    }

    @DeleteMapping(value = "/deleteActivity")
    @ApiOperation("删除活动")
    public AjaxResult deleteActivity(@RequestBody List<Long> activityId) {
        return AjaxResult.success(iSysActivityService.removeByIds(activityId));
    }

    @PostMapping(value = "/modifyActivity")
    @ApiOperation("修改活动")
    public AjaxResult modifyActivity(SysActivity activity) {
        return AjaxResult.success(iSysActivityService.updateById(activity));
    }

}
