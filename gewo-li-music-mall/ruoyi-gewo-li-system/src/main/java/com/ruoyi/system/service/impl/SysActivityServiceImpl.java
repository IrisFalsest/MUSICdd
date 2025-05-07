package com.ruoyi.system.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ruoyi.common.utils.DateUtils;
import com.ruoyi.system.domain.vo.ActivityVo;
import com.ruoyi.system.entity.SysActivity;
import com.ruoyi.system.entity.SysRanking;
import com.ruoyi.system.mapper.SysActivityMapper;
import com.ruoyi.system.mapper.SysRankingMapper;
import com.ruoyi.system.service.ISysActivityService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 活动表 服务实现类
 * </p>
 *
 * @author 王志伟
 * @since 2024-04-15
 */
@Service
public class SysActivityServiceImpl extends ServiceImpl<SysActivityMapper, SysActivity> implements ISysActivityService {

    @Autowired
    private SysActivityMapper sysActivityMapper;

    @Autowired
    private SysRankingMapper rankingMapper;

    @Override
    public ActivityVo findActivity(Long userId) {

        ActivityVo activityVo = new ActivityVo();
        SysActivity activity = sysActivityMapper.selectOne(new QueryWrapper<SysActivity>().eq("status", "0"));
        if (null != activity) {
            Long rankingCount = rankingMapper.findRankingCount();
            activity.setPeopleCount(rankingCount);
            Long rankingHeat = rankingMapper.findRankingHeat();
            if (null != rankingHeat) {
                activity.setPopularity(rankingHeat.toString());
            }
            if (null != activity && null != activityVo) {
                BeanUtils.copyProperties(activity, activityVo);
            }
            QueryWrapper queryWrapper = new QueryWrapper();
            queryWrapper.eq("user_id", userId);
            queryWrapper.eq("ranking_type", 4);
            queryWrapper.eq("status", 0);
            SysRanking ranking = rankingMapper.selectOne(queryWrapper);
            if (null == ranking) {
                activityVo.setIsParticipate(0);
            } else {
                activityVo.setIsParticipate(1);
            }
        }
        return activityVo;
    }

    @Override
    public Integer increaseActivityVisits(Long id) {
        return sysActivityMapper.increaseActivityVisits(id);
    }

    /**
     * 查询活动
     *
     * @param id 活动主键
     * @return 活动
     */
    @Override
    public SysActivity selectSysActivityById(Long id) {
        return sysActivityMapper.selectSysActivityById(id);
    }

    /**
     * 查询活动列表
     *
     * @param sysActivity 活动
     * @return 活动
     */
    @Override
    public List<SysActivity> selectSysActivityList(SysActivity sysActivity) {
        return sysActivityMapper.selectSysActivityList(sysActivity);
    }

    /**
     * 新增活动
     *
     * @param sysActivity 活动
     * @return 结果
     */
    @Override
    public int insertSysActivity(SysActivity sysActivity) {
        sysActivity.setCreateTime(DateUtils.getNowDate());
        return sysActivityMapper.insertSysActivity(sysActivity);
    }

    /**
     * 修改活动
     *
     * @param sysActivity 活动
     * @return 结果
     */
    @Override
    public int updateSysActivity(SysActivity sysActivity) {
        return sysActivityMapper.updateSysActivity(sysActivity);
    }

    /**
     * 批量删除活动
     *
     * @param ids 需要删除的活动主键
     * @return 结果
     */
    @Override
    public int deleteSysActivityByIds(Long[] ids) {
        return sysActivityMapper.deleteSysActivityByIds(ids);
    }

    /**
     * 删除活动信息
     *
     * @param id 活动主键
     * @return 结果
     */
    @Override
    public int deleteSysActivityById(Long id) {
        return sysActivityMapper.deleteSysActivityById(id);
    }
}
