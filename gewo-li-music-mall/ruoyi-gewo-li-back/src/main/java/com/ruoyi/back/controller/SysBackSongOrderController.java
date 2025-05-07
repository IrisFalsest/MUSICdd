package com.ruoyi.back.controller;

import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.core.page.TableDataInfo;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.system.domain.vo.SongOrderVo;
import com.ruoyi.system.entity.SysSongOrder;
import com.ruoyi.system.service.ISysSongOrderService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * 歌曲订单Controller
 *
 * @author ruoyi
 * @date 2024-05-28
 */
@RestController
@RequestMapping("/system/songOrder")
@Api(tags = "歌曲订单-后台管理")
public class SysBackSongOrderController extends BaseController {
    @Autowired
    private ISysSongOrderService sysSongOrderService;

    /**
     * 查询歌曲订单列表
     */
    @GetMapping("/list")
    @ApiOperation("查询歌曲订单列表")
    public TableDataInfo list(SysSongOrder sysSongOrder) {
        startPage();
        List<SongOrderVo> list = sysSongOrderService.selectSysSongOrderList(sysSongOrder);
        return getDataTable(list);
    }

    /**
     * 导出歌曲订单列表
     */
    @PostMapping("/export")
    @ApiOperation("导出歌曲订单列表")
    public void export(HttpServletResponse response, SysSongOrder sysSongOrder) {
        List<SongOrderVo> list = sysSongOrderService.selectSysSongOrderList(sysSongOrder);
        ExcelUtil<SongOrderVo> util = new ExcelUtil<SongOrderVo>(SongOrderVo.class);
        util.exportExcel(response, list, "歌曲订单数据");
    }

    /**
     * 获取歌曲订单详细信息
     */
    @GetMapping(value = "/{id}")
    @ApiOperation("获取歌曲订单详细信息")
    public AjaxResult getInfo(@PathVariable("id") String id) {
        return success(sysSongOrderService.selectSysSongOrderById(id));
    }

    /**
     * 新增歌曲订单
     */
    @PostMapping
    @ApiOperation("新增歌曲订单")
    public AjaxResult add(@RequestBody SysSongOrder sysSongOrder) {
        return toAjax(sysSongOrderService.insertSysSongOrder(sysSongOrder));
    }

    /**
     * 修改歌曲订单
     */
    @PutMapping
    @ApiOperation("修改歌曲订单")
    public AjaxResult edit(@RequestBody SysSongOrder sysSongOrder) {
        return toAjax(sysSongOrderService.updateSysSongOrder(sysSongOrder));
    }

    /**
     * 删除歌曲订单
     */
    @DeleteMapping("/{ids}")
    @ApiOperation("删除歌曲订单")
    public AjaxResult remove(@PathVariable Long[] ids) {
        return toAjax(sysSongOrderService.deleteSysSongOrderByIds(ids));
    }
}
