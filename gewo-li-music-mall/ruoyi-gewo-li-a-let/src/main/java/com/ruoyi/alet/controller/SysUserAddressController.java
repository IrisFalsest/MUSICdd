package com.ruoyi.alet.controller;


import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.system.entity.SysUserAddress;
import com.ruoyi.system.service.ISysUserAddressService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * <p>
 * 用户地址表 前端控制器
 * </p>
 *
 * @since 2024-04-19
 */
@RestController
@RequestMapping("/userAddress")
@Api(tags = "用户地址")
public class SysUserAddressController {
    @Autowired
    private ISysUserAddressService userAddressService;

    @PutMapping(value = "/addUserAddress")
    @ApiOperation("添加用户地址")
    public AjaxResult addUserAddress(SysUserAddress userAddress){
        return AjaxResult.success(userAddressService.save(userAddress));
    }

    @DeleteMapping(value = "/deleteUserAddress")
    @ApiOperation("删除用户地址")
    public AjaxResult deleteUserAddress(Integer id){
        return AjaxResult.success(userAddressService.removeById(id));
    }

    @PostMapping(value = "/modifyUserAddress")
    @ApiOperation("修改用户地址")
    public AjaxResult modifyUserAddress(SysUserAddress userAddress){
        return AjaxResult.success(userAddressService.updateById(userAddress));
    }

    @GetMapping(value = "/acquisitionUserAddress")
    @ApiOperation("获取用户地址")
    public AjaxResult findUserAddress(Long userId){
        return AjaxResult.success(userAddressService.findUserAddress(userId));
    }
}
