package com.ruoyi.back.controller;


import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.core.page.TableDataInfo;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.system.entity.SysIndexImage;
import com.ruoyi.system.service.ISysIndexImageService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * <p>
 * 首页轮播图表 前端控制器
 * </p>
 *
 * @author author
 * @since 2024-07-05
 */
@RestController
@RequestMapping("/system/image")
@Api(tags = "轮播图")
public class SysBackIndexImageController extends BaseController
{
    @Autowired
    private ISysIndexImageService sysIndexImageService;

    /**
     * 查询首页轮播图列表
     */
    @GetMapping("/list")
    @ApiOperation("查询轮播图列表")
    public TableDataInfo list(SysIndexImage sysIndexImage)
    {
        startPage();
        List<SysIndexImage> list = sysIndexImageService.selectSysIndexImageList(sysIndexImage);
        return getDataTable(list);
    }

    /**
     * 导出首页轮播图列表
     */
    @PostMapping("/export")
    @ApiOperation("导出轮播图列表")
    public void export(HttpServletResponse response, SysIndexImage sysIndexImage)
    {
        List<SysIndexImage> list = sysIndexImageService.selectSysIndexImageList(sysIndexImage);
        ExcelUtil<SysIndexImage> util = new ExcelUtil<SysIndexImage>(SysIndexImage.class);
        util.exportExcel(response, list, "首页轮播图数据");
    }

    /**
     * 获取首页轮播图详细信息
     */
    @GetMapping(value = "/{id}")
    @ApiOperation("获取轮播图详细信息")
    public AjaxResult getInfo(@PathVariable("id") Long id)
    {
        return success(sysIndexImageService.selectSysIndexImageById(id));
    }

    /**
     * 新增首页轮播图
     */
    @PostMapping
    @ApiOperation("新增轮播图")
    public AjaxResult add(@RequestBody SysIndexImage sysIndexImage)
    {
        return toAjax(sysIndexImageService.insertSysIndexImage(sysIndexImage));
    }

    /**
     * 修改首页轮播图
     */
    @PutMapping
    @ApiOperation("修改轮播图")
    public AjaxResult edit(@RequestBody SysIndexImage sysIndexImage)
    {
        return toAjax(sysIndexImageService.updateSysIndexImage(sysIndexImage));
    }

    /**
     * 删除首页轮播图
     */
    @DeleteMapping("/{ids}")
    @ApiOperation("删除轮播图")
    public AjaxResult remove(@PathVariable Long[] ids)
    {
        return toAjax(sysIndexImageService.deleteSysIndexImageByIds(ids));
    }
}
