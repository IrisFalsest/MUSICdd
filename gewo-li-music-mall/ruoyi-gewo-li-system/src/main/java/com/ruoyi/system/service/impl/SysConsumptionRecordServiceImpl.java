package com.ruoyi.system.service.impl;

import com.ruoyi.system.entity.SysConsumptionRecord;
import com.ruoyi.system.mapper.SysConsumptionRecordMapper;
import com.ruoyi.system.service.ISysConsumptionRecordService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

/**
 * 积分消耗记录Service业务层处理
 *
 * @author ruoyi
 * @date 2024-05-20
 */
@Service
public class SysConsumptionRecordServiceImpl extends ServiceImpl<SysConsumptionRecordMapper, SysConsumptionRecord> implements ISysConsumptionRecordService
{
    @Autowired
    private SysConsumptionRecordMapper sysConsumptionRecordMapper;

    /**
     * 查询积分消耗记录
     *
     * @param id 积分消耗记录主键
     * @return 积分消耗记录
     */
    @Override
    public SysConsumptionRecord selectSysConsumptionRecordById(Long id)
    {
        return sysConsumptionRecordMapper.selectSysConsumptionRecordById(id);
    }

    /**
     * 查询积分消耗记录列表
     *
     * @param sysConsumptionRecord 积分消耗记录
     * @return 积分消耗记录
     */
    @Override
    public List<SysConsumptionRecord> selectSysConsumptionRecordList(SysConsumptionRecord sysConsumptionRecord)
    {
        return sysConsumptionRecordMapper.selectSysConsumptionRecordList(sysConsumptionRecord);
    }

    /**
     * 新增积分消耗记录
     *
     * @param sysConsumptionRecord 积分消耗记录
     * @return 结果
     */
    @Override
    public int insertSysConsumptionRecord(SysConsumptionRecord sysConsumptionRecord)
    {
        sysConsumptionRecord.setCreateTime(LocalDateTime.now());
        return sysConsumptionRecordMapper.insertSysConsumptionRecord(sysConsumptionRecord);
    }

    /**
     * 修改积分消耗记录
     *
     * @param sysConsumptionRecord 积分消耗记录
     * @return 结果
     */
    @Override
    public int updateSysConsumptionRecord(SysConsumptionRecord sysConsumptionRecord)
    {
        return sysConsumptionRecordMapper.updateSysConsumptionRecord(sysConsumptionRecord);
    }

    /**
     * 批量删除积分消耗记录
     *
     * @param ids 需要删除的积分消耗记录主键
     * @return 结果
     */
    @Override
    public int deleteSysConsumptionRecordByIds(Long[] ids)
    {
        return sysConsumptionRecordMapper.deleteSysConsumptionRecordByIds(ids);
    }

    /**
     * 删除积分消耗记录信息
     *
     * @param id 积分消耗记录主键
     * @return 结果
     */
    @Override
    public int deleteSysConsumptionRecordById(Long id)
    {
        return sysConsumptionRecordMapper.deleteSysConsumptionRecordById(id);
    }
}
