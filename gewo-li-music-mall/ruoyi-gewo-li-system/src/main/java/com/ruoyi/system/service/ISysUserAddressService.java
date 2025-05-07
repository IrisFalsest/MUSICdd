package com.ruoyi.system.service;

import com.ruoyi.system.entity.SysUserAddress;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 * 用户地址表 服务类
 * </p>
 *
 * @author author
 * @since 2024-04-19
 */
public interface ISysUserAddressService extends IService<SysUserAddress> {
    /**
     * 根据用户id获取用户地址
     *
     * @param userId
     * @return
     */
    List<SysUserAddress> findUserAddress(Long userId);
}
