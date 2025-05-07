package com.ruoyi.back.controller;

import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.core.page.TableDataInfo;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.system.domain.vo.SysBackRankingVo;
import com.ruoyi.system.entity.SysRanking;
import com.ruoyi.system.service.ISysRankingService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/system/ranking")
@Api(tags = "排行榜-后台管理")
public class SysBackRanking extends BaseController {

    @Autowired
    private ISysRankingService sysRankingService;

    /**
     * 查询排行榜列表
     */
    @GetMapping("/list")
    @ApiOperation("查询排行榜列表")
    public TableDataInfo list(SysRanking sysRanking)
    {
        startPage();
        List<SysBackRankingVo> list = sysRankingService.selectSysRankingList(sysRanking);
        return getDataTable(list);
    }

    /**
     * 导出排行榜列表
     */
    @PostMapping("/export")
    @ApiOperation("导出排行榜列表")
    public void export(HttpServletResponse response, SysRanking sysRanking)
    {
        List<SysBackRankingVo> list = sysRankingService.selectSysRankingList(sysRanking);
        ExcelUtil<SysBackRankingVo> util = new ExcelUtil<SysBackRankingVo>(SysBackRankingVo.class);
        util.exportExcel(response, list, "排行榜数据");
    }

    /**
     * 获取排行榜详细信息
     */
    @GetMapping(value = "/{id}")
    @ApiOperation("获取排行榜详细信息")
    public AjaxResult getInfo(@PathVariable("id") Long id)
    {
        return success(sysRankingService.selectSysRankingById(id));
    }

    /**
     * 新增排行榜
     */
    @PostMapping
    @ApiOperation("新增排行榜")
    public AjaxResult add(@RequestBody SysRanking sysRanking)
    {
        return toAjax(sysRankingService.insertSysRanking(sysRanking));
    }

    /**
     * 修改排行榜
     */
    @PutMapping
    @ApiOperation("修改排行榜")
    public AjaxResult edit(@RequestBody SysRanking sysRanking)
    {
        return toAjax(sysRankingService.updateSysRanking(sysRanking));
    }

    /**
     * 删除排行榜
     */
    @DeleteMapping("/{ids}")
    @ApiOperation("删除排行榜")
    public AjaxResult remove(@PathVariable Long[] ids)
    {
        return toAjax(sysRankingService.deleteSysRankingByIds(ids));
    }

}

