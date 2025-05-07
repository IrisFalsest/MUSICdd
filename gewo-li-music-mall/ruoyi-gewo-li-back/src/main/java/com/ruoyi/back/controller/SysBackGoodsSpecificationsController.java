package com.ruoyi.back.controller;


import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.core.page.TableDataInfo;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.system.entity.SysGoodsSpecifications;
import com.ruoyi.system.service.ISysGoodsSpecificationsService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/system/specifications")
@Api(tags = "商品规格-后台管理")
public class SysBackGoodsSpecificationsController extends BaseController {
    @Autowired
    private ISysGoodsSpecificationsService sysGoodsSpecificationsService;

    /**
     * 查询商品规格列表
     */
    @GetMapping("/list")
    @ApiOperation("查询商品规格列表")
    public TableDataInfo list(SysGoodsSpecifications sysGoodsSpecifications)
    {
        startPage();
        List<SysGoodsSpecifications> list = sysGoodsSpecificationsService.selectSysGoodsSpecificationsList(sysGoodsSpecifications);
        return getDataTable(list);
    }

    /**
     * 导出商品规格列表
     */
    @PostMapping("/export")
    @ApiOperation("导出商品规格列表")
    public void export(HttpServletResponse response, SysGoodsSpecifications sysGoodsSpecifications)
    {
        List<SysGoodsSpecifications> list = sysGoodsSpecificationsService.selectSysGoodsSpecificationsList(sysGoodsSpecifications);
        ExcelUtil<SysGoodsSpecifications> util = new ExcelUtil<SysGoodsSpecifications>(SysGoodsSpecifications.class);
        util.exportExcel(response, list, "商品规格数据");
    }

    /**
     * 获取商品规格详细信息
     */
    @GetMapping(value = "/{id}")
    @ApiOperation("获取商品规格详细信息")
    public AjaxResult getInfo(@PathVariable("id") Long id)
    {
        return success(sysGoodsSpecificationsService.selectSysGoodsSpecificationsById(id));
    }

    /**
     * 新增商品规格
     */
    @PostMapping
    @ApiOperation("新增商品规格")
    public AjaxResult add(@RequestBody SysGoodsSpecifications sysGoodsSpecifications)
    {
        return toAjax(sysGoodsSpecificationsService.insertSysGoodsSpecifications(sysGoodsSpecifications));
    }

    /**
     * 修改商品规格
     */
    @PutMapping
    @ApiOperation("修改商品规格")
    public AjaxResult edit(@RequestBody SysGoodsSpecifications sysGoodsSpecifications)
    {
        return toAjax(sysGoodsSpecificationsService.updateSysGoodsSpecifications(sysGoodsSpecifications));
    }

    /**
     * 删除商品规格
     */
    @DeleteMapping("/{ids}")
    @ApiOperation("删除商品规格")
    public AjaxResult remove(@PathVariable Long[] ids)
    {
        return toAjax(sysGoodsSpecificationsService.deleteSysGoodsSpecificationsByIds(ids));
    }
}
