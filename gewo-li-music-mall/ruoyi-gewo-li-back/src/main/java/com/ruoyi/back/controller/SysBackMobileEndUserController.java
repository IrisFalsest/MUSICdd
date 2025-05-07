package com.ruoyi.back.controller;


import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.core.page.TableDataInfo;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.system.domain.dto.ReviewDto;
import com.ruoyi.system.entity.SysMobileEndUser;
import com.ruoyi.system.service.ISysMobileEndUserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * <p>
 * 移动端用户-后台管理系统 前端控制器
 * </p>
 *
 * @author author
 * @since 2024-04-16
 */
@RestController
@RequestMapping("/system/mobile/user")
@Api(tags = "移动端用户-后台管理")
public class SysBackMobileEndUserController extends BaseController {
    @Autowired
    private ISysMobileEndUserService mobileEndUserService;
    @GetMapping(value = "/getNormalUser")
    @ApiOperation("查询普通用户")
    public TableDataInfo getNormalUser(SysMobileEndUser sysMobileEndUser){
        sysMobileEndUser.setRoleType(1);
        startPage();
        return getDataTable(mobileEndUserService.getUserOrType(sysMobileEndUser));
    }

    @GetMapping(value = "/getSingerUser")
    @ApiOperation("查询歌手")
    public TableDataInfo getSingerUser(SysMobileEndUser sysMobileEndUser){
        sysMobileEndUser.setRoleType(2);
        startPage();
        return getDataTable(mobileEndUserService.getUserOrType(sysMobileEndUser));
    }

    @GetMapping(value = "/getProducerUser")
    @ApiOperation("查询制作人用户")
    public TableDataInfo getProducerUser(SysMobileEndUser sysMobileEndUser){
        sysMobileEndUser.setRoleType(3);
        startPage();
        return getDataTable(mobileEndUserService.getUserOrType(sysMobileEndUser));
    }


    /**
     * 导出移动端用户列表
     */
    @PostMapping("/export")
    @ApiOperation("导出移动端用户列表")
    public void export(HttpServletResponse response, SysMobileEndUser sysMobileEndUser)
    {
        List<SysMobileEndUser> list = mobileEndUserService.selectSysMobileEndUserList(sysMobileEndUser);
        ExcelUtil<SysMobileEndUser> util = new ExcelUtil<SysMobileEndUser>(SysMobileEndUser.class);
        util.exportExcel(response, list, "移动端用户数据");
    }

    /**
     * 获取移动端用户详细信息
     */
    @GetMapping(value = "/{id}")
    @ApiOperation("获取移动端用户详细信息")
    public AjaxResult getInfo(@PathVariable("id") Long id)
    {
        return success(mobileEndUserService.selectSysMobileEndUserById(id));
    }

    /**
     * 修改移动端用户
     */
    @PutMapping
    @ApiOperation("修改移动端用户")
    public AjaxResult edit(@RequestBody SysMobileEndUser sysMobileEndUser)
    {
        return toAjax(mobileEndUserService.updateSysMobileEndUser(sysMobileEndUser));
    }

    /**
     * 删除移动端用户
     */
    @DeleteMapping("/{ids}")
    @ApiOperation("删除移动端用户")
    public AjaxResult remove(@PathVariable Long[] ids)
    {
        return toAjax(mobileEndUserService.deleteSysMobileEndUserByIds(ids));
    }

    @PostMapping(value = "/modifyMobileEndUserRoleType")
    @ApiOperation("修改用户角色类型")
    public AjaxResult modifyUserRoleTypeByUserId(Long userId,Integer roleType){
        return AjaxResult.success(mobileEndUserService.modifyUserRoleTypeByUserId(userId, roleType));
    }

    @GetMapping(value = "/mobileEndUserList")
    @ApiOperation("获取用户列表")
    public AjaxResult findMobileEndUserList(SysMobileEndUser mobileEndUser){
        return AjaxResult.success(mobileEndUserService.findMobileEndUserList(mobileEndUser));
    }

    @PostMapping("/musiciansReview")
    @ApiOperation("音乐人审核")
    public AjaxResult musiciansReview(ReviewDto reviewDto){
        return AjaxResult.success(mobileEndUserService.musiciansReview(reviewDto));
    }

    @PostMapping("/musiciansSign")
    @ApiOperation("音乐人修改签约状态")
    public AjaxResult musiciansSign(ReviewDto reviewDto){
        return AjaxResult.success(mobileEndUserService.musiciansSign(reviewDto));
    }

    @PostMapping("/producerReview")
    @ApiOperation("制作人审核")
    public AjaxResult producerReview(ReviewDto reviewDto){
        return AjaxResult.success(mobileEndUserService.producerReview(reviewDto));
    }
}
