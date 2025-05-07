package com.ruoyi.back.controller;

import com.ruoyi.system.entity.SysScoreHeatConfig;
import com.ruoyi.system.service.ISysScoreHeatConfigService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

/**
 * 积分热度配置表(SysScoreHeatConfig)表控制层
 *
 * @since 2024-04-17 14:47:22
 */
@RestController
@RequestMapping("/backScoreHeatConfig")
@Api(tags = "积分热度配置")
public class SysBackScoreHeatConfigController {
    /**
     * 服务对象
     */
    @Autowired
    private ISysScoreHeatConfigService scoreHeatConfigService;

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @GetMapping(value = "{id}")
    @ApiOperation("通过主键查询单条数据")
    public ResponseEntity queryById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(scoreHeatConfigService.getById(id));
    }

    /**
     * 新增数据
     *
     * @param sysScoreHeatConfig 实体
     * @return 新增结果
     */
    @PutMapping
    @ApiOperation("新增配置")
    public ResponseEntity<SysScoreHeatConfig> add(SysScoreHeatConfig sysScoreHeatConfig) {
        scoreHeatConfigService.save(sysScoreHeatConfig);
        return ResponseEntity.ok(sysScoreHeatConfig);
    }

    /**
     * 编辑数据
     *
     * @param sysScoreHeatConfig 实体
     * @return 编辑结果
     */
    @PostMapping
    @ApiOperation("编辑配置")
    public ResponseEntity<SysScoreHeatConfig> edit(SysScoreHeatConfig sysScoreHeatConfig) {
        scoreHeatConfigService.updateById(sysScoreHeatConfig);
        return ResponseEntity.ok(sysScoreHeatConfig);
    }

    /**
     * 删除数据
     *
     * @param id 主键
     * @return 删除是否成功
     */
    @DeleteMapping
    @ApiOperation("删除配置数据")
    public ResponseEntity<Boolean> deleteById(Long[] id) {
        return ResponseEntity.ok(scoreHeatConfigService.removeByIds(Arrays.asList(id)));
    }

}

