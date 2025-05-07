package com.ruoyi.back.controller;


import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.core.page.TableDataInfo;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.system.entity.SysTemplate;
import com.ruoyi.system.service.ISysTemplateService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * <p>
 * 模板表 前端控制器
 * </p>
 *
 * @author author
 * @since 2024-07-23
 */
@RestController
@RequestMapping("/system/template")
@Api(tags = "模板-后台管理系统")
public class SysBackTemplateController extends BaseController {
    @Autowired
    private ISysTemplateService sysTemplateService;

    /**
     * 查询模板列表
     */
    @GetMapping("/list")
    @ApiOperation("查询模板列表")
    public TableDataInfo list(SysTemplate sysTemplate) {
        startPage();
        List<SysTemplate> list = sysTemplateService.selectSysTemplateList(sysTemplate);
        return getDataTable(list);
    }

    /**
     * 导出模板列表
     */
    @PostMapping("/export")
    @ApiOperation("导出模板列表")
    public void export(HttpServletResponse response, SysTemplate sysTemplate) {
        List<SysTemplate> list = sysTemplateService.selectSysTemplateList(sysTemplate);
        ExcelUtil<SysTemplate> util = new ExcelUtil<SysTemplate>(SysTemplate.class);
        util.exportExcel(response, list, "模板数据");
    }

    /**
     * 获取模板详细信息
     */
    @GetMapping(value = "/{id}")
    @ApiOperation("获取模板详细信息")
    public AjaxResult getInfo(@PathVariable("id") Long id) {
        return success(sysTemplateService.selectSysTemplateById(id));
    }

    /**
     * 新增模板
     */
    @PostMapping
    @ApiOperation("新增模板")
    public AjaxResult add(@RequestBody SysTemplate sysTemplate) {
        return toAjax(sysTemplateService.insertSysTemplate(sysTemplate));
    }

    /**
     * 修改模板
     */
    @PutMapping
    @ApiOperation("修改模板")
    public AjaxResult edit(@RequestBody SysTemplate sysTemplate) {
        return toAjax(sysTemplateService.updateSysTemplate(sysTemplate));
    }

    /**
     * 删除模板
     */
    @DeleteMapping("/{ids}")
    @ApiOperation("删除模板")
    public AjaxResult remove(@PathVariable Long[] ids) {
        return toAjax(sysTemplateService.deleteSysTemplateByIds(ids));
    }
}
