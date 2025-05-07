package com.ruoyi.system.mapper;

import com.ruoyi.system.entity.SysAuth;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;

/**
 * <p>
 * 用户认证表 Mapper 接口
 * </p>
 *
 * @author author
 * @since 2024-08-01
 */
public interface SysAuthMapper extends BaseMapper<SysAuth> {
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
     * 删除用户认证
     *
     * @param id 用户认证主键
     * @return 结果
     */
    public int deleteSysAuthById(Long id);

    /**
     * 批量删除用户认证
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteSysAuthByIds(Long[] ids);
}
