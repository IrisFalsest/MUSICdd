package com.ruoyi.back.controller;

import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.core.page.TableDataInfo;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.system.entity.SysActivity;
import com.ruoyi.system.service.ISysActivityService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/system/activity")
@Api(tags = "活动-后台管理")
public class SysBackActivityController extends BaseController {

    @Autowired
    private ISysActivityService sysActivityService;

    /**
     * 查询活动列表
     */
    @GetMapping("/list")
    @ApiOperation("查询活动列表")
    public TableDataInfo list(SysActivity sysActivity)
    {
        startPage();
        List<SysActivity> list = sysActivityService.selectSysActivityList(sysActivity);
        return getDataTable(list);
    }

    /**
     * 导出活动列表
     */
    @PostMapping("/export")
    @ApiOperation("导出活动列表")
    public void export(HttpServletResponse response, SysActivity sysActivity)
    {
        List<SysActivity> list = sysActivityService.selectSysActivityList(sysActivity);
        ExcelUtil<SysActivity> util = new ExcelUtil<SysActivity>(SysActivity.class);
        util.exportExcel(response, list, "活动数据");
    }

    /**
     * 获取活动详细信息
     */
    @GetMapping(value = "/{id}")
    @ApiOperation("获取活动详细信息")
    public AjaxResult getInfo(@PathVariable("id") Long id)
    {
        return success(sysActivityService.selectSysActivityById(id));
    }

    /**
     * 新增活动
     */
    @PostMapping
    @ApiOperation("新增活动")
    public AjaxResult add(@RequestBody SysActivity sysActivity)
    {
        return toAjax(sysActivityService.insertSysActivity(sysActivity));
    }

    /**
     * 修改活动
     */
    @PutMapping
    @ApiOperation("修改活动")
    public AjaxResult edit(@RequestBody SysActivity sysActivity)
    {
        return toAjax(sysActivityService.updateSysActivity(sysActivity));
    }

    /**
     * 删除活动
     */
    @DeleteMapping("/{ids}")
    @ApiOperation("删除活动")
    public AjaxResult remove(@PathVariable Long[] ids)
    {
        return toAjax(sysActivityService.deleteSysActivityByIds(ids));
    }
}
