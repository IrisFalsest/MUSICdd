package com.ruoyi.system.mapper;

import com.ruoyi.system.domain.vo.SysSongVo;
import com.ruoyi.system.entity.SysUserSongCollection;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;

/**
 * <p>
 * 用户歌曲收藏表 Mapper 接口
 * </p>
 *
 * @author author
 * @since 2024-04-19
 */
public interface SysUserSongCollectionMapper extends BaseMapper<SysUserSongCollection> {
    /**
     * 根据用户id获取当前用户歌曲收藏列表
     *
     * @param userId
     * @return
     */
    List<SysSongVo> acquisitionUserSongCollectionListByUserId(Long userId);

}
