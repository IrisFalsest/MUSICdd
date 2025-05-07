package com.ruoyi.system.service;

import com.ruoyi.system.domain.dto.SysUserSongDto;
import com.ruoyi.system.domain.vo.SysSongVo;
import com.ruoyi.system.entity.SysUserSongCollection;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 * 用户歌曲收藏表 服务类
 * </p>
 *
 * @author author
 * @since 2024-04-19
 */
public interface ISysUserSongCollectionService extends IService<SysUserSongCollection> {
    /**
     * 根据用户id获取当前用户歌曲收藏列表
     *
     * @param userId
     * @return
     */
    List<SysSongVo> acquisitionUserSongCollectionListByUserId(Long userId);

    Integer userSongCollection(SysUserSongDto sysUserSongDto);
}
