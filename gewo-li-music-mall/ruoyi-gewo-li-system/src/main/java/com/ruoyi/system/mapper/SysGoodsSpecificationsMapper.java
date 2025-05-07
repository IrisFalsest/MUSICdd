package com.ruoyi.system.mapper;

import com.ruoyi.system.entity.SysGoodsSpecifications;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;

/**
 * <p>
 * 商品规格表 Mapper 接口
 * </p>
 *
 * @author author
 * @since 2024-05-12
 */
public interface SysGoodsSpecificationsMapper extends BaseMapper<SysGoodsSpecifications> {

    /**
     * 查询商品规格
     *
     * @param id 商品规格主键
     * @return 商品规格
     */
    public SysGoodsSpecifications selectSysGoodsSpecificationsById(Long id);

    /**
     * 查询商品规格列表
     *
     * @param sysGoodsSpecifications 商品规格
     * @return 商品规格集合
     */
    public List<SysGoodsSpecifications> selectSysGoodsSpecificationsList(SysGoodsSpecifications sysGoodsSpecifications);

    /**
     * 新增商品规格
     *
     * @param sysGoodsSpecifications 商品规格
     * @return 结果
     */
    public int insertSysGoodsSpecifications(SysGoodsSpecifications sysGoodsSpecifications);

    /**
     * 修改商品规格
     *
     * @param sysGoodsSpecifications 商品规格
     * @return 结果
     */
    public int updateSysGoodsSpecifications(SysGoodsSpecifications sysGoodsSpecifications);

    /**
     * 删除商品规格
     *
     * @param id 商品规格主键
     * @return 结果
     */
    public int deleteSysGoodsSpecificationsById(Long id);

    /**
     * 批量删除商品规格
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteSysGoodsSpecificationsByIds(Long[] ids);

}
