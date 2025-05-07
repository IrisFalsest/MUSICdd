package com.ruoyi.alet.controller;


import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.system.service.ISysGoodsSpecificationsService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 * 商品规格表 前端控制器
 * </p>
 *
 */
@RestController
@RequestMapping("/goodsSpecifications")
@Api(tags = "商品规格")
public class SysGoodsSpecificationsController {
    @Autowired
    private ISysGoodsSpecificationsService goodsSpecificationsService;

    @GetMapping("/goodsSpecificationsList")
    @ApiOperation("根据商品id获取当前商品所有规格")
    public AjaxResult findGoodsSpecificationsList(Long goodsId){
        return AjaxResult.success(goodsSpecificationsService.findGoodsSpecificationsList(goodsId));
    }

}
