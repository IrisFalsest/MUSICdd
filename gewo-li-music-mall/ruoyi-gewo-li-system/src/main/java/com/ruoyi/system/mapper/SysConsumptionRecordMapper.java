package com.ruoyi.system.mapper;

import com.ruoyi.system.entity.SysConsumptionRecord;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;

/**
 * 积分消耗记录Mapper接口
 *
 * @author ruoyi
 * @date 2024-05-20
 */
public interface SysConsumptionRecordMapper extends BaseMapper<SysConsumptionRecord>
{
    /**
     * 查询积分消耗记录
     *
     * @param id 积分消耗记录主键
     * @return 积分消耗记录
     */
    public SysConsumptionRecord selectSysConsumptionRecordById(Long id);

    /**
     * 查询积分消耗记录列表
     *
     * @param sysConsumptionRecord 积分消耗记录
     * @return 积分消耗记录集合
     */
    public List<SysConsumptionRecord> selectSysConsumptionRecordList(SysConsumptionRecord sysConsumptionRecord);

    /**
     * 新增积分消耗记录
     *
     * @param sysConsumptionRecord 积分消耗记录
     * @return 结果
     */
    public int insertSysConsumptionRecord(SysConsumptionRecord sysConsumptionRecord);

    /**
     * 修改积分消耗记录
     *
     * @param sysConsumptionRecord 积分消耗记录
     * @return 结果
     */
    public int updateSysConsumptionRecord(SysConsumptionRecord sysConsumptionRecord);

    /**
     * 删除积分消耗记录
     *
     * @param id 积分消耗记录主键
     * @return 结果
     */
    public int deleteSysConsumptionRecordById(Long id);

    /**
     * 批量删除积分消耗记录
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteSysConsumptionRecordByIds(Long[] ids);
}
