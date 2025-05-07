package com.ruoyi.system.mapper;

import com.ruoyi.system.entity.SysFollow;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.ruoyi.system.entity.SysMobileEndUser;

import java.util.List;

/**
 * <p>
 * 关注表 Mapper 接口
 * </p>
 *
 * @author author
 * @since 2024-06-29
 */
public interface SysFollowMapper extends BaseMapper<SysFollow> {
    List<SysMobileEndUser> acquisitionFollowListByUserId(Long userId);

}
