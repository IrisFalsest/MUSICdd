package com.ruoyi.system.service.impl;

import com.ruoyi.system.entity.SysAuth;
import com.ruoyi.system.mapper.SysAuthMapper;
import com.ruoyi.system.service.ISysAuthService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

/**
 * <p>
 * 用户认证表 服务实现类
 * </p>
 *
 * @author author
 * @since 2024-08-01
 */
@Service
public class SysAuthServiceImpl extends ServiceImpl<SysAuthMapper, SysAuth> implements ISysAuthService {
    @Autowired
    private SysAuthMapper sysAuthMapper;

    /**
     * 查询用户认证
     *
     * @param id 用户认证主键
     * @return 用户认证
     */
    @Override
    public SysAuth selectSysAuthById(Long id) {
        return sysAuthMapper.selectSysAuthById(id);
    }

    /**
     * 查询用户认证列表
     *
     * @param sysAuth 用户认证
     * @return 用户认证
     */
    @Override
    public List<SysAuth> selectSysAuthList(SysAuth sysAuth) {
        return sysAuthMapper.selectSysAuthList(sysAuth);
    }

    /**
     * 新增用户认证
     *
     * @param sysAuth 用户认证
     * @return 结果
     */
    @Override
    public int insertSysAuth(SysAuth sysAuth) {
        sysAuth.setCreateTime(LocalDateTime.now());
        return sysAuthMapper.insertSysAuth(sysAuth);
    }

    /**
     * 修改用户认证
     *
     * @param sysAuth 用户认证
     * @return 结果
     */
    @Override
    public int updateSysAuth(SysAuth sysAuth) {
        return sysAuthMapper.updateSysAuth(sysAuth);
    }

    /**
     * 批量删除用户认证
     *
     * @param ids 需要删除的用户认证主键
     * @return 结果
     */
    @Override
    public int deleteSysAuthByIds(Long[] ids) {
        return sysAuthMapper.deleteSysAuthByIds(ids);
    }

    /**
     * 删除用户认证信息
     *
     * @param id 用户认证主键
     * @return 结果
     */
    @Override
    public int deleteSysAuthById(Long id) {
        return sysAuthMapper.deleteSysAuthById(id);
    }
}
