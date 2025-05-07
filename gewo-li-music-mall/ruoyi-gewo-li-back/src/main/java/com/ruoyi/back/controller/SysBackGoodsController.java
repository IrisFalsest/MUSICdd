package com.ruoyi.back.controller;


import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.core.page.TableDataInfo;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.system.entity.SysGoods;
import com.ruoyi.system.service.ISysGoodsService;
import com.ruoyi.system.service.ISysGoodsTypeService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/system/goods")
@Api(tags = "商品-后台管理")
public class SysBackGoodsController extends BaseController {
    @Autowired
    private ISysGoodsService sysGoodsService;

    /**
     * 查询商品列表
     */
    @GetMapping("/list")
    @ApiOperation("查询商品列表")
    public TableDataInfo list(SysGoods sysGoods)
    {
        startPage();
        List<SysGoods> list = sysGoodsService.selectSysGoodsList(sysGoods);
        return getDataTable(list);
    }

    /**
     * 导出商品列表
     */
    @PostMapping("/export")
    @ApiOperation("导出商品列表")
    public void export(HttpServletResponse response, SysGoods sysGoods)
    {
        List<SysGoods> list = sysGoodsService.selectSysGoodsList(sysGoods);
        ExcelUtil<SysGoods> util = new ExcelUtil<SysGoods>(SysGoods.class);
        util.exportExcel(response, list, "商品数据");
    }

    /**
     * 获取商品详细信息
     */
    @GetMapping(value = "/{id}")
    @ApiOperation("获取商品详细信息")
    public AjaxResult getInfo(@PathVariable("id") Long id)
    {
        return success(sysGoodsService.selectSysGoodsById(id));
    }

    /**
     * 新增商品
     */
    @PostMapping
    @ApiOperation("新增商品")
    public AjaxResult add(@RequestBody SysGoods sysGoods)
    {
        return toAjax(sysGoodsService.insertSysGoods(sysGoods));
    }

    /**
     * 修改商品
     */
    @PutMapping
    @ApiOperation("修改商品")
    public AjaxResult edit(@RequestBody SysGoods sysGoods)
    {
        return toAjax(sysGoodsService.updateSysGoods(sysGoods));
    }

    /**
     * 删除商品
     */
    @DeleteMapping("/{ids}")
    @ApiOperation("删除商品")
    public AjaxResult remove(@PathVariable Long[] ids)
    {
        return toAjax(sysGoodsService.deleteSysGoodsByIds(ids));
    }

}
