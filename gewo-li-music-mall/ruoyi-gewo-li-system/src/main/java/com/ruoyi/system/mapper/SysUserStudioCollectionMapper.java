package com.ruoyi.system.mapper;

import com.ruoyi.system.entity.SysRecordingStudio;
import com.ruoyi.system.entity.SysUserStudioCollection;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;

/**
 * <p>
 * 用户录音棚收藏表 Mapper 接口
 * </p>
 *
 * @author 王志伟
 * @since 2024-05-13
 */
public interface SysUserStudioCollectionMapper extends BaseMapper<SysUserStudioCollection> {

    List<SysRecordingStudio> acquisitionUserStudioCollectionListByUserId(Long userId);
}
