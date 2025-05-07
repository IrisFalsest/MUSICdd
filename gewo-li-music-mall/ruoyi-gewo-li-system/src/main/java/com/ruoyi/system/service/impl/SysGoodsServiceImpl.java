package com.ruoyi.system.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ruoyi.common.utils.DateUtils;
import com.ruoyi.system.entity.SysGoods;
import com.ruoyi.system.mapper.SysGoodsMapper;
import com.ruoyi.system.service.ISysGoodsService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 商品表 服务实现类
 * </p>
 *
 * @author author
 * @since 2024-05-12
 */
@Service
public class SysGoodsServiceImpl extends ServiceImpl<SysGoodsMapper, SysGoods> implements ISysGoodsService {
    @Autowired
    private SysGoodsMapper sysGoodsMapper;

    @Override
    public List<SysGoods> findGoodsListByGoodsType(Long goodsTypeId) {
        QueryWrapper queryWrapper = new QueryWrapper();
        queryWrapper.eq("status", 0);
        queryWrapper.eq("review_status", 2);
        if (null != goodsTypeId && 0 != goodsTypeId) {
            queryWrapper.eq("goods_type_id", goodsTypeId);
        }
        return sysGoodsMapper.selectList(queryWrapper);
    }

    /**
     * 查询商品
     *
     * @param id 商品主键
     * @return 商品
     */
    @Override
    public SysGoods selectSysGoodsById(Long id)
    {
        return sysGoodsMapper.selectSysGoodsById(id);
    }

    /**
     * 查询商品列表
     *
     * @param sysGoods 商品
     * @return 商品
     */
    @Override
    public List<SysGoods> selectSysGoodsList(SysGoods sysGoods)
    {
        return sysGoodsMapper.selectSysGoodsList(sysGoods);
    }

    /**
     * 新增商品
     *
     * @param sysGoods 商品
     * @return 结果
     */
    @Override
    public int insertSysGoods(SysGoods sysGoods)
    {
        sysGoods.setCreateTime(DateUtils.getNowDate());
        return sysGoodsMapper.insertSysGoods(sysGoods);
    }

    /**
     * 修改商品
     *
     * @param sysGoods 商品
     * @return 结果
     */
    @Override
    public int updateSysGoods(SysGoods sysGoods)
    {
        return sysGoodsMapper.updateSysGoods(sysGoods);
    }

    /**
     * 批量删除商品
     *
     * @param ids 需要删除的商品主键
     * @return 结果
     */
    @Override
    public int deleteSysGoodsByIds(Long[] ids)
    {
        return sysGoodsMapper.deleteSysGoodsByIds(ids);
    }

    /**
     * 删除商品信息
     *
     * @param id 商品主键
     * @return 结果
     */
    @Override
    public int deleteSysGoodsById(Long id)
    {
        return sysGoodsMapper.deleteSysGoodsById(id);
    }
}
