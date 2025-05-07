package com.ruoyi.alet.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.system.entity.SysGoodsType;
import com.ruoyi.system.service.ISysGoodsTypeService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

/**
 * <p>
 * 商品类别表 前端控制器
 * </p>
 *
 */
@RestController
@RequestMapping("/goodsType")
@Api(tags = "商品类别")
public class SysGoodsTypeController {
    @Autowired
    private ISysGoodsTypeService goodsTypeService;

    @GetMapping("/goodsTypeList")
    @ApiOperation("获取商品类别列表")
    public AjaxResult findGoodsTypeList(){
        return AjaxResult.success(goodsTypeService.findGoodsTypeList());
    }
}
