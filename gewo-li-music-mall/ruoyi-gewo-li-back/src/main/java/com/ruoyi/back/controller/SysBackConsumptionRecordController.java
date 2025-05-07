package com.ruoyi.back.controller;

import java.util.List;
import javax.servlet.http.HttpServletResponse;

import com.ruoyi.system.entity.SysConsumptionRecord;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.system.service.ISysConsumptionRecordService;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.common.core.page.TableDataInfo;

/**
 * 积分消耗记录Controller
 *
 * @author ruoyi
 * @date 2024-05-20
 */
@RestController
@RequestMapping("/system/record")
@Api(tags = "积分消耗记录")
public class SysBackConsumptionRecordController extends BaseController {
    @Autowired
    private ISysConsumptionRecordService sysConsumptionRecordService;

    /**
     * 查询积分消耗记录列表
     */
    @GetMapping("/list")
    @ApiOperation("查询积分消耗记录列表")
    public TableDataInfo list(SysConsumptionRecord sysConsumptionRecord) {
        startPage();
        List<SysConsumptionRecord> list = sysConsumptionRecordService.selectSysConsumptionRecordList(sysConsumptionRecord);
        return getDataTable(list);
    }

    /**
     * 导出积分消耗记录列表
     */
    @PostMapping("/export")
    @ApiOperation("导出积分消耗记录列表")
    public void export(HttpServletResponse response, SysConsumptionRecord sysConsumptionRecord) {
        List<SysConsumptionRecord> list = sysConsumptionRecordService.selectSysConsumptionRecordList(sysConsumptionRecord);
        ExcelUtil<SysConsumptionRecord> util = new ExcelUtil<SysConsumptionRecord>(SysConsumptionRecord.class);
        util.exportExcel(response, list, "积分消耗记录数据");
    }

    /**
     * 获取积分消耗记录详细信息
     */
    @GetMapping(value = "/{id}")
    @ApiOperation("获取积分消耗记录详细信息")
    public AjaxResult getInfo(@PathVariable("id") Long id) {
        return success(sysConsumptionRecordService.selectSysConsumptionRecordById(id));
    }

    /**
     * 新增积分消耗记录
     */
    @PostMapping
    @ApiOperation("新增积分消耗记录")
    public AjaxResult add(@RequestBody SysConsumptionRecord sysConsumptionRecord) {
        return toAjax(sysConsumptionRecordService.insertSysConsumptionRecord(sysConsumptionRecord));
    }

    /**
     * 修改积分消耗记录
     */
    @PutMapping
    @ApiOperation("修改积分消耗记录")
    public AjaxResult edit(@RequestBody SysConsumptionRecord sysConsumptionRecord) {
        return toAjax(sysConsumptionRecordService.updateSysConsumptionRecord(sysConsumptionRecord));
    }

    /**
     * 删除积分消耗记录
     */
    @DeleteMapping("/{ids}")
    @ApiOperation("删除积分消耗记录")
    public AjaxResult remove(@PathVariable Long[] ids) {
        return toAjax(sysConsumptionRecordService.deleteSysConsumptionRecordByIds(ids));
    }
}
