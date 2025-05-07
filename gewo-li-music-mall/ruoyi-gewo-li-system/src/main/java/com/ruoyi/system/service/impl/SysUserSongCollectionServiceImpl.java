package com.ruoyi.system.service.impl;

import com.ruoyi.common.utils.DateUtils;
import com.ruoyi.common.utils.SecurityUtils;
import com.ruoyi.system.domain.dto.SysUserSongDto;
import com.ruoyi.system.domain.vo.SysSongVo;
import com.ruoyi.system.entity.SysMobileEndUser;
import com.ruoyi.system.entity.SysUserSongCollection;
import com.ruoyi.system.mapper.SysUserSongCollectionMapper;
import com.ruoyi.system.service.ISysMobileEndUserService;
import com.ruoyi.system.service.ISysUserSongCollectionService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * <p>
 * 用户歌曲收藏表 服务实现类
 * </p>
 *
 * @author author
 * @since 2024-04-19
 */
@Service
public class SysUserSongCollectionServiceImpl extends ServiceImpl<SysUserSongCollectionMapper, SysUserSongCollection> implements ISysUserSongCollectionService {
    @Autowired
    private SysUserSongCollectionMapper userSongCollectionMapper;

    @Autowired
    private ISysMobileEndUserService userService;

    @Override
    public List<SysSongVo> acquisitionUserSongCollectionListByUserId(Long userId) {
        return userSongCollectionMapper.acquisitionUserSongCollectionListByUserId(userId);
    }

    @Override
    public Integer userSongCollection(SysUserSongDto sysUserSongDto) {
        SysUserSongCollection sysUserSongCollection = new SysUserSongCollection();
        if (null != sysUserSongDto){
            BeanUtils.copyProperties(sysUserSongDto,sysUserSongCollection);
            SysMobileEndUser sysMobileEndUser = userService.selectSysMobileEndUserById(sysUserSongDto.getUserId());
            sysUserSongCollection.setCreateBy(sysMobileEndUser.getName());
            sysUserSongCollection.setCreateTime(DateUtils.getNowDate());
            return userSongCollectionMapper.insert(sysUserSongCollection);
        }
        return null;
    }
}
