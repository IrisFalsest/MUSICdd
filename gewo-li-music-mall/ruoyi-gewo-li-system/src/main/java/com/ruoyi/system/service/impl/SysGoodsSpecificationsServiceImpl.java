package com.ruoyi.system.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ruoyi.common.utils.DateUtils;
import com.ruoyi.system.entity.SysGoodsSpecifications;
import com.ruoyi.system.mapper.SysGoodsSpecificationsMapper;
import com.ruoyi.system.service.ISysGoodsSpecificationsService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 商品规格表 服务实现类
 * </p>
 *
 * @author author
 * @since 2024-05-12
 */
@Service
public class SysGoodsSpecificationsServiceImpl extends ServiceImpl<SysGoodsSpecificationsMapper, SysGoodsSpecifications> implements ISysGoodsSpecificationsService {
    @Autowired
    private SysGoodsSpecificationsMapper sysGoodsSpecificationsMapper;

    @Override
    public List<SysGoodsSpecifications> findGoodsSpecificationsList(Long goodsId) {
        return sysGoodsSpecificationsMapper.selectList(new QueryWrapper<SysGoodsSpecifications>().eq("goods_id",goodsId));
    }

    /**
     * 查询商品规格
     *
     * @param id 商品规格主键
     * @return 商品规格
     */
    @Override
    public SysGoodsSpecifications selectSysGoodsSpecificationsById(Long id)
    {
        return sysGoodsSpecificationsMapper.selectSysGoodsSpecificationsById(id);
    }

    /**
     * 查询商品规格列表
     *
     * @param sysGoodsSpecifications 商品规格
     * @return 商品规格
     */
    @Override
    public List<SysGoodsSpecifications> selectSysGoodsSpecificationsList(SysGoodsSpecifications sysGoodsSpecifications)
    {
        return sysGoodsSpecificationsMapper.selectSysGoodsSpecificationsList(sysGoodsSpecifications);
    }

    /**
     * 新增商品规格
     *
     * @param sysGoodsSpecifications 商品规格
     * @return 结果
     */
    @Override
    public int insertSysGoodsSpecifications(SysGoodsSpecifications sysGoodsSpecifications)
    {
        sysGoodsSpecifications.setCreateTime(DateUtils.getNowDate());
        return sysGoodsSpecificationsMapper.insertSysGoodsSpecifications(sysGoodsSpecifications);
    }

    /**
     * 修改商品规格
     *
     * @param sysGoodsSpecifications 商品规格
     * @return 结果
     */
    @Override
    public int updateSysGoodsSpecifications(SysGoodsSpecifications sysGoodsSpecifications)
    {
        return sysGoodsSpecificationsMapper.updateSysGoodsSpecifications(sysGoodsSpecifications);
    }

    /**
     * 批量删除商品规格
     *
     * @param ids 需要删除的商品规格主键
     * @return 结果
     */
    @Override
    public int deleteSysGoodsSpecificationsByIds(Long[] ids)
    {
        return sysGoodsSpecificationsMapper.deleteSysGoodsSpecificationsByIds(ids);
    }

    /**
     * 删除商品规格信息
     *
     * @param id 商品规格主键
     * @return 结果
     */
    @Override
    public int deleteSysGoodsSpecificationsById(Long id)
    {
        return sysGoodsSpecificationsMapper.deleteSysGoodsSpecificationsById(id);
    }
}
