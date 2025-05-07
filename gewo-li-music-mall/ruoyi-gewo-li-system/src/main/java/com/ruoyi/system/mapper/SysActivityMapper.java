package com.ruoyi.system.mapper;

import com.ruoyi.system.entity.SysActivity;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Update;

import java.util.List;

/**
 * <p>
 * 活动表 Mapper 接口
 * </p>
 *
 * @author 王志伟
 * @since 2024-04-15
 */
public interface SysActivityMapper extends BaseMapper<SysActivity> {

    @Update("update sys_activity set activity_visits = activity_visits + 1 where id = #{id}")
    Integer increaseActivityVisits(Long id);


    /**
     * 查询活动
     *
     * @param id 活动主键
     * @return 活动
     */
    public SysActivity selectSysActivityById(Long id);

    /**
     * 查询活动列表
     *
     * @param sysActivity 活动
     * @return 活动集合
     */
    public List<SysActivity> selectSysActivityList(SysActivity sysActivity);

    /**
     * 新增活动
     *
     * @param sysActivity 活动
     * @return 结果
     */
    public int insertSysActivity(SysActivity sysActivity);

    /**
     * 修改活动
     *
     * @param sysActivity 活动
     * @return 结果
     */
    public int updateSysActivity(SysActivity sysActivity);

    /**
     * 删除活动
     *
     * @param id 活动主键
     * @return 结果
     */
    public int deleteSysActivityById(Long id);

    /**
     * 批量删除活动
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteSysActivityByIds(Long[] ids);
}
