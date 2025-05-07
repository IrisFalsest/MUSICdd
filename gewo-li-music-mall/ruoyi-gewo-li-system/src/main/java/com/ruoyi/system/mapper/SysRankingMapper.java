package com.ruoyi.system.mapper;

import com.ruoyi.system.domain.dto.SysRankingDto;
import com.ruoyi.system.domain.dto.SysUserFollowDto;
import com.ruoyi.system.domain.vo.SysBackRankingVo;
import com.ruoyi.system.domain.vo.SysRankingVo;
import com.ruoyi.system.entity.SysRanking;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;

/**
 * <p>
 * 排行榜表 Mapper 接口
 * </p>
 *
 * @author author
 * @since 2024-04-17
 */
public interface SysRankingMapper extends BaseMapper<SysRanking> {
    /**
     * 查找非签约制作人排行榜  排行榜类型（1：金牌制作人   2：签约制作人   3：新晋制作人   4：音乐人）
     *
     * @return
     */
    List<SysRankingVo> findRankingByNotSignProducerType(SysUserFollowDto userFollowDto);

    /**
     * 查找新晋制作人排行榜
     *
     * @return
     */
    List<SysRankingVo> findRankingByNewEntrantsType(SysUserFollowDto userFollowDto);

    /**
     * 查找签约制作人排行榜
     *
     * @return
     */
    List<SysRankingVo> findRankingBySignProducerType(SysUserFollowDto userFollowDto);

    /**
     * 查找音乐人
     *
     * @return
     */
    List<SysRankingVo> findRankingByMusicians(SysUserFollowDto userFollowDto);

    /**
     * 获取音乐人数量
     *
     * @return
     */
    Long findRankingCount();

    /**
     * 获取音乐人热度
     *
     * @return
     */
    Long findRankingHeat();

    /**
     * 根据类型获取活动排行榜（1：金牌制作人   2：签约制作人   3：新晋制作人   4：音乐人）
     *
     * @param type
     * @return
     */
    List<SysRankingVo> findRankingByActivityMusicians(Integer type);


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
     * 删除排行榜
     *
     * @param id 排行榜主键
     * @return 结果
     */
    public int deleteSysRankingById(Long id);

    /**
     * 批量删除排行榜
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteSysRankingByIds(Long[] ids);
}
