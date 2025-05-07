package com.ruoyi.system.mapper;

import com.ruoyi.system.entity.SysComplaintRecords;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;


/**
 * 投诉建议Mapper接口
 *
 * @author ruoyi
 * @date 2024-05-20
 */
public interface SysComplaintRecordsMapper extends BaseMapper<SysComplaintRecords> {
    /**
     * 查询投诉建议
     *
     * @param id 投诉建议主键
     * @return 投诉建议
     */
    public SysComplaintRecords selectSysComplaintRecordsById(Long id);

    /**
     * 查询投诉建议列表
     *
     * @param sysComplaintRecords 投诉建议
     * @return 投诉建议集合
     */
    public List<SysComplaintRecords> selectSysComplaintRecordsList(SysComplaintRecords sysComplaintRecords);

    /**
     * 新增投诉建议
     *
     * @param sysComplaintRecords 投诉建议
     * @return 结果
     */
    public int insertSysComplaintRecords(SysComplaintRecords sysComplaintRecords);

    /**
     * 修改投诉建议
     *
     * @param sysComplaintRecords 投诉建议
     * @return 结果
     */
    public int updateSysComplaintRecords(SysComplaintRecords sysComplaintRecords);

    /**
     * 删除投诉建议
     *
     * @param id 投诉建议主键
     * @return 结果
     */
    public int deleteSysComplaintRecordsById(Long id);

    /**
     * 批量删除投诉建议
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteSysComplaintRecordsByIds(Long[] ids);
}
