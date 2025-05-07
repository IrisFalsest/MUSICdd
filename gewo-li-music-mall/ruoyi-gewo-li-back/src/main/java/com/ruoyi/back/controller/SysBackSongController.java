package com.ruoyi.back.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.github.pagehelper.PageInfo;
import com.ruoyi.common.constant.HttpStatus;
import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.core.page.TableDataInfo;
import com.ruoyi.common.utils.PageUtils;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.system.domain.dto.SysSongDto;
import com.ruoyi.system.entity.SysSong;
import com.ruoyi.system.service.ISysSongService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.aspectj.weaver.loadtime.Aj;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.List;

/**
 * 后台管理 --- 歌曲
 */

@RestController
@RequestMapping("/system/song")
@Api(tags = "歌曲-后台管理")
public class SysBackSongController extends BaseController {
    @Autowired
    private ISysSongService songService;

    /**
     * 查询歌曲列表
     */
    @GetMapping("/list")
    @ApiOperation("查询歌曲列表")
    public TableDataInfo list(SysSong sysSong)
    {
        startPage();
        List<SysSong> list = songService.selectSysSongList(sysSong);
        return getDataTable(list);
    }

    /**
     * 导出歌曲列表
     */
    @PostMapping("/export")
    @ApiOperation("导出歌曲列表")
    public void export(HttpServletResponse response, SysSong sysSong)
    {
        List<SysSong> list = songService.selectSysSongList(sysSong);
        ExcelUtil<SysSong> util = new ExcelUtil<SysSong>(SysSong.class);
        util.exportExcel(response, list, "歌曲数据");
    }

    /**
     * 获取歌曲详细信息
     */
    @GetMapping(value = "/{id}")
    @ApiOperation("获取歌曲详细信息")
    public AjaxResult getInfo(@PathVariable("id") Long id)
    {
        return success(songService.selectSysSongById(id));
    }

    /**
     * 新增歌曲
     */
    @PostMapping
    @ApiOperation("新增歌曲")
    public AjaxResult add(@RequestBody SysSong sysSong)
    {
        return toAjax(songService.insertSysSong(sysSong));
    }

    /**
     * 修改歌曲
     */
    @PutMapping
    @ApiOperation("修改歌曲")
    public AjaxResult edit(@RequestBody SysSong sysSong)
    {
        return toAjax(songService.updateSysSong(sysSong));
    }

    /**
     * 删除歌曲
     */
    @DeleteMapping("/{ids}")
    @ApiOperation("删除歌曲")
    public AjaxResult remove(@PathVariable Long[] ids)
    {
        return toAjax(songService.deleteSysSongByIds(ids));
    }

    @PostMapping("/review")
    @ApiOperation("审核歌曲")
    public AjaxResult reviewSongs(Long songId, Integer status) {
        return AjaxResult.success(songService.reviewSongs(songId, status));
    }

    @PostMapping("/upOrDownShelves")
    @ApiOperation("歌曲上下架")
    public AjaxResult songsUpOrDownShelves(Long songId, Integer status) {
        return AjaxResult.success(songService.songsUpOrDownShelves(songId, status));
    }

}
