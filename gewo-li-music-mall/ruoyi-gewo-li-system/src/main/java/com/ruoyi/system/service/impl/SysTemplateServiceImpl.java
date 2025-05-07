package com.ruoyi.system.service.impl;

import com.ruoyi.system.domain.vo.SysTemplateVo;
import com.ruoyi.system.entity.SysTemplate;
import com.ruoyi.system.mapper.SysTemplateMapper;
import com.ruoyi.system.service.ISysTemplateService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

/**
 * <p>
 * 模板表 服务实现类
 * </p>
 *
 * @author author
 * @since 2024-07-23
 */
@Service
public class SysTemplateServiceImpl extends ServiceImpl<SysTemplateMapper, SysTemplate> implements ISysTemplateService {
    @Autowired
    private SysTemplateMapper sysTemplateMapper;

    /**
     * 查询模板
     *
     * @param id 模板主键
     * @return 模板
     */
    @Override
    public SysTemplate selectSysTemplateById(Long id) {
        return sysTemplateMapper.selectSysTemplateById(id);
    }

    /**
     * 查询模板列表
     *
     * @param sysTemplate 模板
     * @return 模板
     */
    @Override
    public List<SysTemplate> selectSysTemplateList(SysTemplate sysTemplate) {
        return sysTemplateMapper.selectSysTemplateList(sysTemplate);
    }

    /**
     * 新增模板
     *
     * @param sysTemplate 模板
     * @return 结果
     */
    @Override
    public int insertSysTemplate(SysTemplate sysTemplate) {
        sysTemplate.setCreateTime(LocalDateTime.now());
        return sysTemplateMapper.insertSysTemplate(sysTemplate);
    }

    /**
     * 修改模板
     *
     * @param sysTemplate 模板
     * @return 结果
     */
    @Override
    public int updateSysTemplate(SysTemplate sysTemplate) {
        return sysTemplateMapper.updateSysTemplate(sysTemplate);
    }

    /**
     * 批量删除模板
     *
     * @param ids 需要删除的模板主键
     * @return 结果
     */
    @Override
    public int deleteSysTemplateByIds(Long[] ids) {
        return sysTemplateMapper.deleteSysTemplateByIds(ids);
    }

    /**
     * 删除模板信息
     *
     * @param id 模板主键
     * @return 结果
     */
    @Override
    public int deleteSysTemplateById(Long id) {
        return sysTemplateMapper.deleteSysTemplateById(id);
    }

    @Override
    public SysTemplateVo selectSysTemplateByUserId(Long userId) {
        return sysTemplateMapper.selectSysTemplateByUserId(userId);
    }
}
