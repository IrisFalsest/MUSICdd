package com.ruoyi.system.service.impl;

import com.ruoyi.system.entity.SysComplaintRecords;
import com.ruoyi.system.mapper.SysComplaintRecordsMapper;
import com.ruoyi.system.service.ISysComplaintRecordsService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

/**
 * 投诉建议Service业务层处理
 *
 * @author ruoyi
 * @date 2024-05-20
 */
@Service
public class SysComplaintRecordsServiceImpl extends ServiceImpl<SysComplaintRecordsMapper, SysComplaintRecords> implements ISysComplaintRecordsService
{
    @Autowired
    private SysComplaintRecordsMapper sysComplaintRecordsMapper;

    /**
     * 查询投诉建议
     *
     * @param id 投诉建议主键
     * @return 投诉建议
     */
    @Override
    public SysComplaintRecords selectSysComplaintRecordsById(Long id)
    {
        return sysComplaintRecordsMapper.selectSysComplaintRecordsById(id);
    }

    /**
     * 查询投诉建议列表
     *
     * @param sysComplaintRecords 投诉建议
     * @return 投诉建议
     */
    @Override
    public List<SysComplaintRecords> selectSysComplaintRecordsList(SysComplaintRecords sysComplaintRecords)
    {
        return sysComplaintRecordsMapper.selectSysComplaintRecordsList(sysComplaintRecords);
    }

    /**
     * 新增投诉建议
     *
     * @param sysComplaintRecords 投诉建议
     * @return 结果
     */
    @Override
    public int insertSysComplaintRecords(SysComplaintRecords sysComplaintRecords)
    {
        sysComplaintRecords.setCreateTime(LocalDateTime.now());
        return sysComplaintRecordsMapper.insertSysComplaintRecords(sysComplaintRecords);
    }

    /**
     * 修改投诉建议
     *
     * @param sysComplaintRecords 投诉建议
     * @return 结果
     */
    @Override
    public int updateSysComplaintRecords(SysComplaintRecords sysComplaintRecords)
    {
        return sysComplaintRecordsMapper.updateSysComplaintRecords(sysComplaintRecords);
    }

    /**
     * 批量删除投诉建议
     *
     * @param ids 需要删除的投诉建议主键
     * @return 结果
     */
    @Override
    public int deleteSysComplaintRecordsByIds(Long[] ids)
    {
        return sysComplaintRecordsMapper.deleteSysComplaintRecordsByIds(ids);
    }

    /**
     * 删除投诉建议信息
     *
     * @param id 投诉建议主键
     * @return 结果
     */
    @Override
    public int deleteSysComplaintRecordsById(Long id)
    {
        return sysComplaintRecordsMapper.deleteSysComplaintRecordsById(id);
    }
}
