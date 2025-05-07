package com.ruoyi.back.controller;

import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.utils.alicloud.OssUtil;
import com.ruoyi.common.utils.uuid.UUID;
import com.ruoyi.system.service.ISysSongService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/file")
@Slf4j
@Api(tags = "文件")
public class SysFileController {
    @Autowired
    private OssUtil ossUtil;

    @Autowired
    private ISysSongService songService;

    @PostMapping("/ossUpload")
    @ApiOperation("oss对象上传")
    @ApiImplicitParam(name = "type", value = "上传类型 （1：头像   2：歌单封面   3：歌曲音频）")
    public AjaxResult ossUploadFile(@RequestParam("file") MultipartFile file, Integer type) {
        try {
            //获取原始文件名称
            String originalFilename = file.getOriginalFilename();
            //截取原始文件名后缀(originalFilename.lastIndexOf(".")获取最后一个点的位置开始截取
            String extension = originalFilename.substring(originalFilename.lastIndexOf("."));
            //构造新的文件名称
            String objectName = UUID.randomUUID().toString() + extension;

            //文件的请求路径
            String filePath = ossUtil.upload(file.getBytes(), objectName, type);
            log.info("文件上传路径：{}", filePath);
            return AjaxResult.success(filePath);
        } catch (IOException e) {
            log.info("文件上传失败；{}", e);
        }
        return AjaxResult.error("err");
    }


    @PostMapping("/songLyrics")
    @ApiOperation("解析歌词")
    public AjaxResult analyzingLyrics(@RequestParam("file") MultipartFile file) {
        return AjaxResult.success(songService.analyzingLyrics(file));
    }
}
