package com.ruoyi.back.controller;


import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.core.page.TableDataInfo;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.system.entity.SysRecordingStudio;
import com.ruoyi.system.service.ISysRecordingStudioService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.List;

/**
 * <p>
 * 录音棚表 前端控制器
 * </p>
 *
 * @author author
 * @since 2024-04-24
 */
@RestController
@RequestMapping("/system/studio")
@Api(tags = "录音棚-后台管理")
public class SysBackRecordingStudioController extends BaseController {
    @Autowired
    private ISysRecordingStudioService sysRecordingStudioService;

    /**
     * 查询录音棚列表
     */
    @GetMapping("/list")
    @ApiOperation("查询录音棚列表")
    public TableDataInfo list(SysRecordingStudio sysRecordingStudio)
    {
        startPage();
        List<SysRecordingStudio> list = sysRecordingStudioService.selectSysRecordingStudioList(sysRecordingStudio);
        return getDataTable(list);
    }

    /**
     * 导出录音棚列表
     */
    @PostMapping("/export")
    @ApiOperation("导出录音棚列表")
    public void export(HttpServletResponse response, SysRecordingStudio sysRecordingStudio)
    {
        List<SysRecordingStudio> list = sysRecordingStudioService.selectSysRecordingStudioList(sysRecordingStudio);
        ExcelUtil<SysRecordingStudio> util = new ExcelUtil<SysRecordingStudio>(SysRecordingStudio.class);
        util.exportExcel(response, list, "录音棚数据");
    }

    /**
     * 获取录音棚详细信息
     */
    @GetMapping(value = "/{id}")
    @ApiOperation("获取录音棚详细信息")
    public AjaxResult getInfo(@PathVariable("id") Long id)
    {
        return success(sysRecordingStudioService.selectSysRecordingStudioById(id));
    }

    /**
     * 新增录音棚
     */
    @PostMapping
    @ApiOperation("新增录音棚")
    public AjaxResult add(@RequestBody SysRecordingStudio sysRecordingStudio)
    {
        return toAjax(sysRecordingStudioService.insertSysRecordingStudio(sysRecordingStudio));
    }

    /**
     * 修改录音棚
     */
    @PutMapping
    @ApiOperation("修改录音棚")
    public AjaxResult edit(@RequestBody SysRecordingStudio sysRecordingStudio)
    {
        return toAjax(sysRecordingStudioService.updateSysRecordingStudio(sysRecordingStudio));
    }

    /**
     * 删除录音棚
     */
    @DeleteMapping("/{ids}")
    @ApiOperation("删除录音棚")
    public AjaxResult remove(@PathVariable Long[] ids)
    {
        return toAjax(sysRecordingStudioService.deleteSysRecordingStudioByIds(ids));
    }
}
