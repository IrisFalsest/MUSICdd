package com.ruoyi.back.controller;

import java.util.List;
import javax.servlet.http.HttpServletResponse;

import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.system.entity.SysComplaintRecords;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
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
import com.ruoyi.system.service.ISysComplaintRecordsService;
import com.ruoyi.common.core.page.TableDataInfo;

/**
 * 投诉建议Controller
 *
 * @author ruoyi
 * @date 2024-05-20
 */
@RestController
@RequestMapping("/system/records")
@Api(tags = "投诉建议")
public class SysBackComplaintRecordsController extends BaseController {
    @Autowired
    private ISysComplaintRecordsService sysComplaintRecordsService;

    /**
     * 查询投诉建议列表
     */
    @GetMapping("/list")
    @ApiOperation("查询投诉建议列表")
    public TableDataInfo list(SysComplaintRecords sysComplaintRecords) {
        startPage();
        List<SysComplaintRecords> list = sysComplaintRecordsService.selectSysComplaintRecordsList(sysComplaintRecords);
        return getDataTable(list);
    }

    /**
     * 导出投诉建议列表
     */
    @PostMapping("/export")
    @ApiOperation("导出投诉建议列表")
    public void export(HttpServletResponse response, SysComplaintRecords sysComplaintRecords) {
        List<SysComplaintRecords> list = sysComplaintRecordsService.selectSysComplaintRecordsList(sysComplaintRecords);
        ExcelUtil<SysComplaintRecords> util = new ExcelUtil<SysComplaintRecords>(SysComplaintRecords.class);
        util.exportExcel(response, list, "投诉建议数据");
    }

    /**
     * 获取投诉建议详细信息
     */
    @GetMapping(value = "/{id}")
    @ApiOperation("获取投诉建议详细信息")
    public AjaxResult getInfo(@PathVariable("id") Long id) {
        return success(sysComplaintRecordsService.selectSysComplaintRecordsById(id));
    }

    /**
     * 新增投诉建议
     */
    @PostMapping
    @ApiOperation("新增投诉建议")
    public AjaxResult add(@RequestBody SysComplaintRecords sysComplaintRecords) {
        return toAjax(sysComplaintRecordsService.insertSysComplaintRecords(sysComplaintRecords));
    }

    /**
     * 修改投诉建议
     */
    @PutMapping
    @ApiOperation("修改投诉建议")
    public AjaxResult edit(@RequestBody SysComplaintRecords sysComplaintRecords) {
        return toAjax(sysComplaintRecordsService.updateSysComplaintRecords(sysComplaintRecords));
    }

    /**
     * 删除投诉建议
     */
    @DeleteMapping("/{ids}")
    @ApiOperation("删除投诉建议")
    public AjaxResult remove(@PathVariable Long[] ids) {
        return toAjax(sysComplaintRecordsService.deleteSysComplaintRecordsByIds(ids));
    }
}
