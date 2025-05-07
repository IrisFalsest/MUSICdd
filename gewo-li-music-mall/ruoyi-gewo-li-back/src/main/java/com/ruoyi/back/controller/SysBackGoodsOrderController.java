package com.ruoyi.back.controller;


import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.core.page.TableDataInfo;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.system.domain.vo.GoodsOrderVo;
import com.ruoyi.system.entity.SysGoodsOrder;
import com.ruoyi.system.service.ISysGoodsOrderService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * 商品订单Controller
 *
 * @author ruoyi
 * @date 2024-05-28
 */
@RestController
@RequestMapping("/system/goodsOrder")
@Api(tags = "商品订单-后台管理")
public class SysBackGoodsOrderController extends BaseController
{
    @Autowired
    private ISysGoodsOrderService sysGoodsOrderService;

    /**
     * 查询商品订单列表
     */
    @GetMapping("/list")
    @ApiOperation("查询商品订单列表")
    public TableDataInfo list(SysGoodsOrder sysGoodsOrder)
    {
        startPage();
        List<GoodsOrderVo> list = sysGoodsOrderService.selectSysGoodsOrderList(sysGoodsOrder);
        return getDataTable(list);
    }

    /**
     * 导出商品订单列表
     */
    @PostMapping("/export")
    @ApiOperation("导出商品订单列表")
    public void export(HttpServletResponse response, SysGoodsOrder sysGoodsOrder)
    {
        List<GoodsOrderVo> list = sysGoodsOrderService.selectSysGoodsOrderList(sysGoodsOrder);
        ExcelUtil<GoodsOrderVo> util = new ExcelUtil<GoodsOrderVo>(GoodsOrderVo.class);
        util.exportExcel(response, list, "商品订单数据");
    }

    /**
     * 获取商品订单详细信息
     */
    @GetMapping(value = "/{id}")
    @ApiOperation("获取商品订单详细信息")
    public AjaxResult getInfo(@PathVariable("id") String id)
    {
        return success(sysGoodsOrderService.selectSysGoodsOrderById(id));
    }

    /**
     * 新增商品订单
     */
    @PostMapping
    @ApiOperation("新增商品订单")
    public AjaxResult add(@RequestBody SysGoodsOrder sysGoodsOrder)
    {
        return toAjax(sysGoodsOrderService.insertSysGoodsOrder(sysGoodsOrder));
    }

    /**
     * 修改商品订单
     */
    @PutMapping
    @ApiOperation("修改商品订单")
    public AjaxResult edit(@RequestBody SysGoodsOrder sysGoodsOrder)
    {
        return toAjax(sysGoodsOrderService.updateSysGoodsOrder(sysGoodsOrder));
    }

    /**
     * 删除商品订单
     */
    @DeleteMapping("/{ids}")
    @ApiOperation("删除商品订单")
    public AjaxResult remove(@PathVariable String[] ids)
    {
        return toAjax(sysGoodsOrderService.deleteSysGoodsOrderByIds(ids));
    }
}
