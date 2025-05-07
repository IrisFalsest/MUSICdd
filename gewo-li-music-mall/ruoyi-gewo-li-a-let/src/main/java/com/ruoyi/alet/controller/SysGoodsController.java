package com.ruoyi.alet.controller;


import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.system.service.ISysGoodsService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * <p>
 * 商品表 前端控制器
 * </p>
 */
@RestController
@RequestMapping("/goods")
@Api(tags = "商品")
public class SysGoodsController extends BaseController {
    @Autowired
    private ISysGoodsService goodsService;
}
