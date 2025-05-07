package com.ruoyi.system.service;

import com.ruoyi.system.domain.dto.SysFollowDto;
import com.ruoyi.system.entity.SysFollow;
import com.baomidou.mybatisplus.extension.service.IService;
import com.ruoyi.system.entity.SysMobileEndUser;

import java.util.List;

/**
 * <p>
 * 关注表 服务类
 * </p>
 *
 * @author author
 * @since 2024-06-29
 */
public interface ISysFollowService extends IService<SysFollow> {

    Integer userFollow(SysFollowDto followDto);

    List<SysMobileEndUser> acquisitionFollowListByUserId(Long userId);

}
