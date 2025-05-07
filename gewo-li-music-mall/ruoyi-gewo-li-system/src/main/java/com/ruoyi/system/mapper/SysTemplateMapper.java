package com.ruoyi.system.mapper;

import com.ruoyi.system.domain.vo.SysTemplateVo;
import com.ruoyi.system.entity.SysTemplate;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;

/**
 * <p>
 * 模板表 Mapper 接口
 * </p>
 *
 * @author author
 * @since 2024-07-23
 */
public interface SysTemplateMapper extends BaseMapper<SysTemplate> {
    /**
     * 查询模板
     *
     * @param id 模板主键
     * @return 模板
     */
    public SysTemplate selectSysTemplateById(Long id);

    /**
     * 查询模板列表
     *
     * @param sysTemplate 模板
     * @return 模板集合
     */
    public List<SysTemplate> selectSysTemplateList(SysTemplate sysTemplate);

    /**
     * 新增模板
     *
     * @param sysTemplate 模板
     * @return 结果
     */
    public int insertSysTemplate(SysTemplate sysTemplate);

    /**
     * 修改模板
     *
     * @param sysTemplate 模板
     * @return 结果
     */
    public int updateSysTemplate(SysTemplate sysTemplate);

    /**
     * 删除模板
     *
     * @param id 模板主键
     * @return 结果
     */
    public int deleteSysTemplateById(Long id);

    /**
     * 批量删除模板
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteSysTemplateByIds(Long[] ids);

    /**
     * 根据用户id查询模板
     *
     * @param userId 用户id
     * @return 结果
     */
    public SysTemplateVo selectSysTemplateByUserId(Long userId);
}
