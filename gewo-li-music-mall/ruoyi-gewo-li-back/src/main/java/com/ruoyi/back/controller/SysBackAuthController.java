package com.ruoyi.back.controller;


import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.core.page.TableDataInfo;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.system.entity.SysAuth;
import com.ruoyi.system.service.ISysAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * <p>
 * 用户认证表 前端控制器
 * </p>
 *
 * @author author
 * @since 2024-08-01
 */
@RestController
@RequestMapping("/system/auth")
public class SysBackAuthController extends BaseController {
    @Autowired
    private ISysAuthService sysAuthService;

    /**
     * 查询用户认证列表
     */
    @GetMapping("/list")
    public TableDataInfo list(SysAuth sysAuth) {
        startPage();
        List<SysAuth> list = sysAuthService.selectSysAuthList(sysAuth);
        return getDataTable(list);
    }

    /**
     * 导出用户认证列表
     */
    @PostMapping("/export")
    public void export(HttpServletResponse response, SysAuth sysAuth) {
        List<SysAuth> list = sysAuthService.selectSysAuthList(sysAuth);
        ExcelUtil<SysAuth> util = new ExcelUtil<SysAuth>(SysAuth.class);
        util.exportExcel(response, list, "用户认证数据");
    }

    /**
     * 获取用户认证详细信息
     */
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") Long id) {
        return success(sysAuthService.selectSysAuthById(id));
    }

    /**
     * 新增用户认证
     */
    @PostMapping
    public AjaxResult add(@RequestBody SysAuth sysAuth) {
        return toAjax(sysAuthService.insertSysAuth(sysAuth));
    }

    /**
     * 修改用户认证
     */
    @PutMapping
    public AjaxResult edit(@RequestBody SysAuth sysAuth) {
        return toAjax(sysAuthService.updateSysAuth(sysAuth));
    }

    /**
     * 删除用户认证
     */
    @DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable Long[] ids) {
        return toAjax(sysAuthService.deleteSysAuthByIds(ids));
    }
}
