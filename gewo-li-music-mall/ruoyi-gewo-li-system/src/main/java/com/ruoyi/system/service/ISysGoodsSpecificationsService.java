package com.ruoyi.system.service;

import com.ruoyi.system.entity.SysGoodsSpecifications;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 * 商品规格表 服务类
 * </p>
 *
 * @author author
 * @since 2024-05-12
 */
public interface ISysGoodsSpecificationsService extends IService<SysGoodsSpecifications> {
    /**
     * 根据商品id获取商品规格列表
     *
     * @param goodsId
     * @return
     */
    List<SysGoodsSpecifications> findGoodsSpecificationsList(Long goodsId);

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
     * 批量删除商品规格
     *
     * @param ids 需要删除的商品规格主键集合
     * @return 结果
     */
    public int deleteSysGoodsSpecificationsByIds(Long[] ids);

    /**
     * 删除商品规格信息
     *
     * @param id 商品规格主键
     * @return 结果
     */
    public int deleteSysGoodsSpecificationsById(Long id);

}
