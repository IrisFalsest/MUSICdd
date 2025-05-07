package com.ruoyi.alet.controller;


import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.system.entity.SysTemplate;
import com.ruoyi.system.service.ISysTemplateService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * <p>
 * 模板表 前端控制器
 * </p>
 *
 * @author author
 * @since 2024-07-23
 */
@RestController
@RequestMapping("/template")
@Api(tags = "模板")
public class SysTemplateController extends BaseController {
    @Autowired
    private ISysTemplateService sysTemplateService;

    /**
     * 根据用户id查询模板
     */
    @GetMapping("/{userId}")
    @ApiOperation("根据用户id查询模板")
    public AjaxResult selectSysTemplateByUserId(@PathVariable Long userId) {
        return success(sysTemplateService.selectSysTemplateByUserId(userId));
    }

    /**
     * 新增模板
     */
    @PostMapping
    @ApiOperation("新增模板")
    public AjaxResult add(@RequestBody SysTemplate sysTemplate) {
        return toAjax(sysTemplateService.insertSysTemplate(sysTemplate));
    }

    /**
     * 修改模板
     */
    @PutMapping
    @ApiOperation("修改模板")
    public AjaxResult edit(@RequestBody SysTemplate sysTemplate) {
        return toAjax(sysTemplateService.updateSysTemplate(sysTemplate));
    }

    /**
     * 删除模板
     */
    @DeleteMapping("/{ids}")
    @ApiOperation("删除模板")
    public AjaxResult remove(@PathVariable Long[] ids) {
        return toAjax(sysTemplateService.deleteSysTemplateByIds(ids));
    }
}
