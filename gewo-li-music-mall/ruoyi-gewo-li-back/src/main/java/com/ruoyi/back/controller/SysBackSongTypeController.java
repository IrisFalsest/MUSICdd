package com.ruoyi.back.controller;


import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.core.page.TableDataInfo;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.system.entity.SysSongType;
import com.ruoyi.system.service.ISysSongTypeService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.List;

/**
 * <p>
 * 歌曲类别表 前端控制器
 * </p>
 *
 * @since 2024-04-19
 */
@RestController
@RequestMapping("/system/type")
@Api(tags = "歌曲类别-后台管理")
public class SysBackSongTypeController extends BaseController {
    @Autowired
    private ISysSongTypeService sysSongTypeService;

    /**
     * 查询歌曲类别列表
     */
    @GetMapping("/list")
    @ApiOperation("查询歌曲类别列表")
    public TableDataInfo list(SysSongType sysSongType)
    {
        startPage();
        List<SysSongType> list = sysSongTypeService.selectSysSongTypeList(sysSongType);
        return getDataTable(list);
    }

    /**
     * 导出歌曲类别列表
     */
    @PostMapping("/export")
    @ApiOperation("导出歌曲类别列表")
    public void export(HttpServletResponse response, SysSongType sysSongType)
    {
        List<SysSongType> list = sysSongTypeService.selectSysSongTypeList(sysSongType);
        ExcelUtil<SysSongType> util = new ExcelUtil<SysSongType>(SysSongType.class);
        util.exportExcel(response, list, "歌曲类别数据");
    }

    /**
     * 获取歌曲类别详细信息
     */
    @GetMapping(value = "/{id}")
    @ApiOperation("获取歌曲类别详细信息")
    public AjaxResult getInfo(@PathVariable("id") Long id)
    {
        return success(sysSongTypeService.selectSysSongTypeById(id));
    }

    /**
     * 新增歌曲类别
     */
    @PostMapping
    @ApiOperation("新增歌曲类别")
    public AjaxResult add(@RequestBody SysSongType sysSongType)
    {
        return toAjax(sysSongTypeService.insertSysSongType(sysSongType));
    }

    /**
     * 修改歌曲类别
     */
    @PutMapping
    @ApiOperation("修改歌曲类别")
    public AjaxResult edit(@RequestBody SysSongType sysSongType)
    {
        return toAjax(sysSongTypeService.updateSysSongType(sysSongType));
    }

    /**
     * 删除歌曲类别
     */
    @DeleteMapping("/{ids}")
    @ApiOperation("删除歌曲类别")
    public AjaxResult remove(@PathVariable Long[] ids)
    {
        return toAjax(sysSongTypeService.deleteSysSongTypeByIds(ids));
    }
}
