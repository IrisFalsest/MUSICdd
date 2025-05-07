package com.ruoyi.system.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.ruoyi.system.entity.SysUserAddress;
import com.ruoyi.system.mapper.SysUserAddressMapper;
import com.ruoyi.system.service.ISysUserAddressService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 用户地址表 服务实现类
 * </p>
 *
 * @author author
 * @since 2024-04-19
 */
@Service
public class SysUserAddressServiceImpl extends ServiceImpl<SysUserAddressMapper, SysUserAddress> implements ISysUserAddressService {
    @Autowired
    private SysUserAddressMapper userAddressMapper;

    @Override
    public List<SysUserAddress> findUserAddress(Long userId) {
        LambdaQueryWrapper<SysUserAddress> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(SysUserAddress::getUserId,userId);
        return userAddressMapper.selectList(queryWrapper);
    }
}
