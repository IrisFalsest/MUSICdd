package com.ruoyi.system.service.impl;

import com.ruoyi.common.utils.DateUtils;
import com.ruoyi.system.domain.dto.SysFollowDto;
import com.ruoyi.system.domain.vo.SysRankingVo;
import com.ruoyi.system.entity.SysFollow;
import com.ruoyi.system.entity.SysMobileEndUser;
import com.ruoyi.system.entity.SysUserStudioCollection;
import com.ruoyi.system.mapper.SysFollowMapper;
import com.ruoyi.system.service.ISysFollowService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.ruoyi.system.service.ISysMobileEndUserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

/**
 * <p>
 * 关注表 服务实现类
 * </p>
 *
 * @author author
 * @since 2024-06-29
 */
@Service
public class SysFollowServiceImpl extends ServiceImpl<SysFollowMapper, SysFollow> implements ISysFollowService {
    @Autowired
    private ISysMobileEndUserService userService;

    @Autowired
    private SysFollowMapper followMapper;

    @Override
    public Integer userFollow(SysFollowDto followDto) {
        SysFollow follow = new SysFollow();
        if (null != followDto){
            BeanUtils.copyProperties(followDto,follow);
            SysMobileEndUser sysMobileEndUser = userService.selectSysMobileEndUserById(followDto.getUserId());
            follow.setCreateBy(sysMobileEndUser.getName());
            follow.setCreateTime(LocalDateTime.now());
            return followMapper.insert(follow);
        }
        return null;
    }

    @Override
    public List<SysMobileEndUser> acquisitionFollowListByUserId(Long userId) {
        return followMapper.acquisitionFollowListByUserId(userId);
    }
}
