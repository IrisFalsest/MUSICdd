package com.ruoyi.alet.controller;


import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.system.domain.dto.StudioViewDto;
import com.ruoyi.system.entity.SysRecordingStudio;
import com.ruoyi.system.service.ISysRecordingStudioService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * <p>
 * 录音棚表 前端控制器
 * </p>
 *
 * @author author
 * @since 2024-04-24
 */
@RestController
@RequestMapping("/recordingStudio")
@Api(tags = "录音棚")
public class SysRecordingStudioController extends BaseController {

    @Autowired
    private ISysRecordingStudioService iSysRecordingStudioService;

    @GetMapping("/findStudioView")
    @ApiOperation("录音棚列表（传录音棚ID就是录音棚详情）-------是否收藏")
    public AjaxResult findStudioView(StudioViewDto studioViewDto){

        List<SysRecordingStudio> studioView = iSysRecordingStudioService.findStudioView(studioViewDto);
        return AjaxResult.success(studioView);
    }

}
