package com.ruoyi.back.controller;


import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.core.page.TableDataInfo;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.system.entity.SysGoodsType;
import com.ruoyi.system.service.ISysGoodsTypeService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/system/goodsType")
@Api(tags = "商品类别-后台管理")
public class SysBackGoodsTypeController extends BaseController {
    @Autowired
    private ISysGoodsTypeService sysGoodsTypeService;

    /**
     * 查询商品类别列表
     */
    @GetMapping("/list")
    @ApiOperation("查询商品类别列表")
    public TableDataInfo list(SysGoodsType sysGoodsType)
    {
        startPage();
        List<SysGoodsType> list = sysGoodsTypeService.selectSysGoodsTypeList(sysGoodsType);
        return getDataTable(list);
    }

    /**
     * 导出商品类别列表
     */
    @PostMapping("/export")
    @ApiOperation("导出商品类别列表")
    public void export(HttpServletResponse response, SysGoodsType sysGoodsType)
    {
        List<SysGoodsType> list = sysGoodsTypeService.selectSysGoodsTypeList(sysGoodsType);
        ExcelUtil<SysGoodsType> util = new ExcelUtil<SysGoodsType>(SysGoodsType.class);
        util.exportExcel(response, list, "商品类别数据");
    }

    /**
     * 获取商品类别详细信息
     */
    @GetMapping(value = "/{id}")
    @ApiOperation("获取商品类别详细信息")
    public AjaxResult getInfo(@PathVariable("id") Long id)
    {
        return success(sysGoodsTypeService.selectSysGoodsTypeById(id));
    }

    /**
     * 新增商品类别
     */
    @PostMapping
    @ApiOperation("新增商品类别")
    public AjaxResult add(@RequestBody SysGoodsType sysGoodsType)
    {
        return toAjax(sysGoodsTypeService.insertSysGoodsType(sysGoodsType));
    }

    /**
     * 修改商品类别
     */
    @PutMapping
    @ApiOperation("修改商品类别")
    public AjaxResult edit(@RequestBody SysGoodsType sysGoodsType)
    {
        return toAjax(sysGoodsTypeService.updateSysGoodsType(sysGoodsType));
    }

    /**
     * 删除商品类别
     */
    @DeleteMapping("/{ids}")
    @ApiOperation("删除商品类别")
    public AjaxResult remove(@PathVariable Long[] ids)
    {
        return toAjax(sysGoodsTypeService.deleteSysGoodsTypeByIds(ids));
    }
}
