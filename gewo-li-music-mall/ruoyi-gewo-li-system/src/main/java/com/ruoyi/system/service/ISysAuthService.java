package com.ruoyi.system.service;

import com.ruoyi.system.entity.SysAuth;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 * 用户认证表 服务类
 * </p>
 *
 * @author author
 * @since 2024-08-01
 */
public interface ISysAuthService extends IService<SysAuth> {
    /**
     * 查询用户认证
     *
     * @param id 用户认证主键
     * @return 用户认证
     */
    public SysAuth selectSysAuthById(Long id);

    /**
     * 查询用户认证列表
     *
     * @param sysAuth 用户认证
     * @return 用户认证集合
     */
    public List<SysAuth> selectSysAuthList(SysAuth sysAuth);

    /**
     * 新增用户认证
     *
     * @param sysAuth 用户认证
     * @return 结果
     */
    public int insertSysAuth(SysAuth sysAuth);

    /**
     * 修改用户认证
     *
     * @param sysAuth 用户认证
     * @return 结果
     */
    public int updateSysAuth(SysAuth sysAuth);

    /**
     * 批量删除用户认证
     *
     * @param ids 需要删除的用户认证主键集合
     * @return 结果
     */
    public int deleteSysAuthByIds(Long[] ids);

    /**
     * 删除用户认证信息
     *
     * @param id 用户认证主键
     * @return 结果
     */
    public int deleteSysAuthById(Long id);
}
