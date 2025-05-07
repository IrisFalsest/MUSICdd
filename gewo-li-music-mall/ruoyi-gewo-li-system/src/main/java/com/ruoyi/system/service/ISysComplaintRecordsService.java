package com.ruoyi.system.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.ruoyi.system.entity.SysComplaintRecords;

import java.util.List;

/**
 * 投诉建议Service接口
 *
 * @author ruoyi
 * @date 2024-05-20
 */
public interface ISysComplaintRecordsService extends IService<SysComplaintRecords> {
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
     * 批量删除投诉建议
     *
     * @param ids 需要删除的投诉建议主键集合
     * @return 结果
     */
    public int deleteSysComplaintRecordsByIds(Long[] ids);

    /**
     * 删除投诉建议信息
     *
     * @param id 投诉建议主键
     * @return 结果
     */
    public int deleteSysComplaintRecordsById(Long id);
}
