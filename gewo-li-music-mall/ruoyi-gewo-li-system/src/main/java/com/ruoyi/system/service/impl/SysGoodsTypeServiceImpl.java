package com.ruoyi.system.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ruoyi.common.utils.DateUtils;
import com.ruoyi.system.entity.SysGoodsType;
import com.ruoyi.system.mapper.SysGoodsTypeMapper;
import com.ruoyi.system.service.ISysGoodsTypeService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 商品类别表 服务实现类
 * </p>
 *
 * @author author
 * @since 2024-05-12
 */
@Service
public class SysGoodsTypeServiceImpl extends ServiceImpl<SysGoodsTypeMapper, SysGoodsType> implements ISysGoodsTypeService {
    @Autowired
    private SysGoodsTypeMapper sysGoodsTypeMapper;

    @Override
    public List<SysGoodsType> findGoodsTypeList() {
        return sysGoodsTypeMapper.selectList(new QueryWrapper<SysGoodsType>().eq("status",0));
    }


    /**
     * 查询商品类别
     *
     * @param id 商品类别主键
     * @return 商品类别
     */
    @Override
    public SysGoodsType selectSysGoodsTypeById(Long id)
    {
        return sysGoodsTypeMapper.selectSysGoodsTypeById(id);
    }

    /**
     * 查询商品类别列表
     *
     * @param sysGoodsType 商品类别
     * @return 商品类别
     */
    @Override
    public List<SysGoodsType> selectSysGoodsTypeList(SysGoodsType sysGoodsType)
    {
        return sysGoodsTypeMapper.selectSysGoodsTypeList(sysGoodsType);
    }

    /**
     * 新增商品类别
     *
     * @param sysGoodsType 商品类别
     * @return 结果
     */
    @Override
    public int insertSysGoodsType(SysGoodsType sysGoodsType)
    {
        sysGoodsType.setCreateTime(DateUtils.getNowDate());
        return sysGoodsTypeMapper.insertSysGoodsType(sysGoodsType);
    }

    /**
     * 修改商品类别
     *
     * @param sysGoodsType 商品类别
     * @return 结果
     */
    @Override
    public int updateSysGoodsType(SysGoodsType sysGoodsType)
    {
        return sysGoodsTypeMapper.updateSysGoodsType(sysGoodsType);
    }

    /**
     * 批量删除商品类别
     *
     * @param ids 需要删除的商品类别主键
     * @return 结果
     */
    @Override
    public int deleteSysGoodsTypeByIds(Long[] ids)
    {
        return sysGoodsTypeMapper.deleteSysGoodsTypeByIds(ids);
    }

    /**
     * 删除商品类别信息
     *
     * @param id 商品类别主键
     * @return 结果
     */
    @Override
    public int deleteSysGoodsTypeById(Long id)
    {
        return sysGoodsTypeMapper.deleteSysGoodsTypeById(id);
    }
}
