package com.ruoyi.system.service;

import com.ruoyi.system.domain.vo.ActivityVo;
import com.ruoyi.system.entity.SysActivity;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 * 活动表 服务类
 * </p>
 *
 * @author 王志伟
 * @since 2024-04-15
 */
public interface ISysActivityService extends IService<SysActivity> {

    ActivityVo findActivity(Long userId);

    /**
     * 增加访问量
     *
     * @return
     */
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
     * 批量删除活动
     *
     * @param ids 需要删除的活动主键集合
     * @return 结果
     */
    public int deleteSysActivityByIds(Long[] ids);

    /**
     * 删除活动信息
     *
     * @param id 活动主键
     * @return 结果
     */
    public int deleteSysActivityById(Long id);
}
