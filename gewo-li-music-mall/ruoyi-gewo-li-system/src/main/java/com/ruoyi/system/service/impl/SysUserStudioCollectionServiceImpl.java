package com.ruoyi.system.service.impl;

import com.ruoyi.common.utils.DateUtils;
import com.ruoyi.system.domain.dto.SysUserStudioDto;
import com.ruoyi.system.entity.SysMobileEndUser;
import com.ruoyi.system.entity.SysRecordingStudio;
import com.ruoyi.system.entity.SysUserSongCollection;
import com.ruoyi.system.entity.SysUserStudioCollection;
import com.ruoyi.system.mapper.SysUserStudioCollectionMapper;
import com.ruoyi.system.service.ISysMobileEndUserService;
import com.ruoyi.system.service.ISysUserStudioCollectionService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 用户录音棚收藏表 服务实现类
 * </p>
 *
 * @author 王志伟
 * @since 2024-05-13
 */
@Service
public class SysUserStudioCollectionServiceImpl extends ServiceImpl<SysUserStudioCollectionMapper, SysUserStudioCollection> implements ISysUserStudioCollectionService {

    @Autowired
    private SysUserStudioCollectionMapper sysUserStudioCollectionMapper;

    @Autowired
    private ISysMobileEndUserService userService;

    @Override
    public Integer userSongCollection(SysUserStudioDto sysUserStudioDto) {
        SysUserStudioCollection sysUserStudioCollection = new SysUserStudioCollection();
        if (null != sysUserStudioDto){
            BeanUtils.copyProperties(sysUserStudioDto,sysUserStudioCollection);
            SysMobileEndUser sysMobileEndUser = userService.selectSysMobileEndUserById(sysUserStudioDto.getUserId());
            sysUserStudioCollection.setCreateBy(sysMobileEndUser.getName());
            sysUserStudioCollection.setCreateTime(DateUtils.getNowDate());
            return sysUserStudioCollectionMapper.insert(sysUserStudioCollection);
        }
        return null;
    }

    @Override
    public List<SysRecordingStudio> acquisitionUserStudioCollectionListByUserId(Long userId) {
        return sysUserStudioCollectionMapper.acquisitionUserStudioCollectionListByUserId(userId);
    }
}
