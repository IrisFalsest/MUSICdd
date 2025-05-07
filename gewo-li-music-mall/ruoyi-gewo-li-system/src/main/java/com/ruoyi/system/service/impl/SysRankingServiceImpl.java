package com.ruoyi.system.service.impl;

import cn.hutool.core.util.ObjectUtil;
import com.ruoyi.common.utils.DateUtils;
import com.ruoyi.common.utils.StringUtils;
import com.ruoyi.system.domain.dto.SysRankingDto;
import com.ruoyi.system.domain.dto.SysUserFollowDto;
import com.ruoyi.system.domain.vo.SysBackRankingVo;
import com.ruoyi.system.domain.vo.SysRankingVo;
import com.ruoyi.system.entity.SysGoods;
import com.ruoyi.system.entity.SysRanking;
import com.ruoyi.system.mapper.SysGoodsMapper;
import com.ruoyi.system.mapper.SysRankingMapper;
import com.ruoyi.system.service.ISysRankingService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * <p>
 * 排行榜表 服务实现类
 * </p>
 *
 * @author author
 * @since 2024-04-17
 */
@Service
public class SysRankingServiceImpl extends ServiceImpl<SysRankingMapper, SysRanking> implements ISysRankingService {

    @Autowired
    private SysRankingMapper sysRankingMapper;

    @Autowired
    private SysGoodsMapper goodsMapper;

    @Override
    public List<SysRankingVo> findRankingByType(SysUserFollowDto userFollowDto) {
        if (userFollowDto.getType() == 1) {
            return sysRankingMapper.findRankingByNotSignProducerType(userFollowDto);
        }
        if (userFollowDto.getType() == 2) {
            return sysRankingMapper.findRankingBySignProducerType(userFollowDto);
        }
        if (userFollowDto.getType() == 3) {
            return sysRankingMapper.findRankingByNewEntrantsType(userFollowDto);
        }
        if (userFollowDto.getType() == 4) {
            return sysRankingMapper.findRankingByMusicians(userFollowDto);
        }
        return null;
    }

    @Override
    public List<SysRankingVo> findActivityRankingByType(Integer type) {
        return sysRankingMapper.findRankingByActivityMusicians(type);
    }

    @Override
    public List<SysRankingVo> findActivityRankingByTypeAndNameOrUserId(SysRankingDto rankingDto) {
        List<SysRankingVo> rankingByActivityMusicians = sysRankingMapper.findRankingByActivityMusicians(rankingDto.getType());
        for (int i = 0; i < rankingByActivityMusicians.size(); i++) {
            SysRankingVo sysRankingVo = rankingByActivityMusicians.get(i);
            sysRankingVo.setRanking(i + 1);
        }
        if (StringUtils.isNotBlank(rankingDto.getName())) {
            List<SysRankingVo> result = rankingByActivityMusicians.stream()
                    .filter(rankingVo -> rankingVo.getNickName().contains(rankingDto.getName()))
                    .collect(Collectors.toList());
            return result;
        }

        if (ObjectUtil.isNotNull(rankingDto.getUserId())) {
            List<SysRankingVo> result = rankingByActivityMusicians.stream()
                    .filter(rankingVo -> rankingVo.getUserId().equals(rankingDto.getUserId()))
                    .collect(Collectors.toList());
            return result;
        }
        return rankingByActivityMusicians;
    }

    @Override
    public Map<String, Object> findActivityRankingById(SysRankingDto rankingDto) {
        Map<String, Object> result = new HashMap<>();
        List<SysRankingVo> rankingByActivityMusicians = sysRankingMapper.findRankingByActivityMusicians(rankingDto.getType());

        int index = 0;

        //        前一名
        SysRankingVo thePrevious = null;
        for (int i = 0; i < rankingByActivityMusicians.size(); i++) {
            SysRankingVo sysRankingVo = rankingByActivityMusicians.get(i);
            sysRankingVo.setRanking(i + 1);
            if (sysRankingVo.getId().equals(rankingDto.getRankingId()) && i != 0) {
                index = i - 1;
                //        前一名
                thePrevious = rankingByActivityMusicians.get(index);
            }
        }

//        当前
        List<SysRankingVo> current = rankingByActivityMusicians.stream()
                .filter(rankingVo -> rankingVo.getId().equals(rankingDto.getRankingId()))
                .collect(Collectors.toList());

        List<SysGoods> goodsList = goodsMapper.selectList(null);

        if (null != thePrevious) {
            Float userHeat = thePrevious.getUserHeat();
            SysRankingVo sysRankingVo = current.get(0);

            if (userHeat > sysRankingVo.getUserHeat()) {
                userHeat -= sysRankingVo.getUserHeat();
            }
            Float finalUserHeat = userHeat;
            goodsList = goodsList.stream()
                    .filter(goods -> goods.getGiftScore() >= finalUserHeat && goods.getIsGiftScore() == 1)
                    .collect(Collectors.toList());
            result.put("score", finalUserHeat);
        } else {
            result.put("score", 0);
            goodsList = goodsList.stream()
                    .filter(goods -> goods.getIsGiftScore() == 1)
                    .collect(Collectors.toList());
        }
        result.put("goods", goodsList);
        result.put("user", current);
        return result;
    }

    @Override
    public Integer modifyUserHeatByUserId(SysRankingDto rankingDto) {
        return sysRankingMapper.modifyUserHeatByUserId(rankingDto);
    }

    /**
     * 查询排行榜
     *
     * @param id 排行榜主键
     * @return 排行榜
     */
    @Override
    public SysRanking selectSysRankingById(Long id) {
        return sysRankingMapper.selectSysRankingById(id);
    }

    /**
     * 查询排行榜列表
     *
     * @param sysRanking 排行榜
     * @return 排行榜
     */
    @Override
    public List<SysBackRankingVo> selectSysRankingList(SysRanking sysRanking) {
        return sysRankingMapper.selectSysRankingList(sysRanking);
    }

    /**
     * 新增排行榜
     *
     * @param sysRanking 排行榜
     * @return 结果
     */
    @Override
    public int insertSysRanking(SysRanking sysRanking) {
        sysRanking.setUserHeat(Float.valueOf("0"));
        sysRanking.setCreateTime(DateUtils.getNowDate());
        return sysRankingMapper.insertSysRanking(sysRanking);
    }

    /**
     * 修改排行榜
     *
     * @param sysRanking 排行榜
     * @return 结果
     */
    @Override
    public int updateSysRanking(SysRanking sysRanking) {
        return sysRankingMapper.updateSysRanking(sysRanking);
    }

    /**
     * 批量删除排行榜
     *
     * @param ids 需要删除的排行榜主键
     * @return 结果
     */
    @Override
    public int deleteSysRankingByIds(Long[] ids) {
        return sysRankingMapper.deleteSysRankingByIds(ids);
    }

    /**
     * 删除排行榜信息
     *
     * @param id 排行榜主键
     * @return 结果
     */
    @Override
    public int deleteSysRankingById(Long id) {
        return sysRankingMapper.deleteSysRankingById(id);
    }


}
