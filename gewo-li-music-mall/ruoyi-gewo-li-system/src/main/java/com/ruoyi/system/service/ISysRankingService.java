package com.ruoyi.system.service;

import com.ruoyi.system.domain.dto.SysRankingDto;
import com.ruoyi.system.domain.dto.SysUserFollowDto;
import com.ruoyi.system.domain.vo.SysBackRankingVo;
import com.ruoyi.system.domain.vo.SysRankingVo;
import com.ruoyi.system.entity.SysRanking;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 排行榜表 服务类
 * </p>
 *
 * @author author
 * @since 2024-04-17
 */
public interface ISysRankingService extends IService<SysRanking> {
    /**
     * let 根据排行榜类型获取排行榜  排行榜类型（1：金牌制作人   2：签约制作人   3：新晋制作人   4：音乐人）
     *
     * @param userFollowDto
     * @return
     */
    List<SysRankingVo> findRankingByType(SysUserFollowDto userFollowDto);

    /**
     * let 根据活动排行榜类型获取活动排行榜  排行榜类型（1：金牌制作人   2：签约制作人   3：新晋制作人   4：音乐人）
     *
     * @param type
     * @return
     */
    List<SysRankingVo> findActivityRankingByType(Integer type);

    /**
     * let 根据活动排行榜类型和名称获取活动排行榜  排行榜类型（1：金牌制作人   2：签约制作人   3：新晋制作人   4：音乐人）
     *
     * @param rankingDto
     * @return
     */
    List<SysRankingVo> findActivityRankingByTypeAndNameOrUserId(SysRankingDto rankingDto);

    /**
     * let 根据活动排行榜编号获取当前详情
     *
     * @param rankingDto
     * @return
     */
    Map<String,Object> findActivityRankingById(SysRankingDto rankingDto);

    /**
     * 排行榜用户热度增加
     *
     * @param rankingDto
     * @return
     */
    Integer modifyUserHeatByUserId(SysRankingDto rankingDto);

    /**
     * 查询排行榜
     *
     * @param id 排行榜主键
     * @return 排行榜
     */
    public SysRanking selectSysRankingById(Long id);

    /**
     * 查询排行榜列表
     *
     * @param sysRanking 排行榜
     * @return 排行榜集合
     */
    public List<SysBackRankingVo> selectSysRankingList(SysRanking sysRanking);

    /**
     * 新增排行榜
     *
     * @param sysRanking 排行榜
     * @return 结果
     */
    public int insertSysRanking(SysRanking sysRanking);

    /**
     * 修改排行榜
     *
     * @param sysRanking 排行榜
     * @return 结果
     */
    public int updateSysRanking(SysRanking sysRanking);

    /**
     * 批量删除排行榜
     *
     * @param ids 需要删除的排行榜主键集合
     * @return 结果
     */
    public int deleteSysRankingByIds(Long[] ids);

    /**
     * 删除排行榜信息
     *
     * @param id 排行榜主键
     * @return 结果
     */
    public int deleteSysRankingById(Long id);


}
