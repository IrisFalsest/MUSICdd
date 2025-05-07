package com.ruoyi.system.service;

import com.ruoyi.system.domain.dto.SysUserStudioDto;
import com.ruoyi.system.entity.SysRecordingStudio;
import com.ruoyi.system.entity.SysUserStudioCollection;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 * 用户录音棚收藏表 服务类
 * </p>
 *
 * @author 王志伟
 * @since 2024-05-13
 */
public interface ISysUserStudioCollectionService extends IService<SysUserStudioCollection> {

    Integer userSongCollection(SysUserStudioDto sysUserStudioDto);

    List<SysRecordingStudio> acquisitionUserStudioCollectionListByUserId(Long userId);
}
