package com.ruoyi.system.service;

import com.ruoyi.system.entity.SysGoodsType;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 * 商品类别表 服务类
 * </p>
 *
 * @author author
 * @since 2024-05-12
 */
public interface ISysGoodsTypeService extends IService<SysGoodsType> {
    /**
     * 获取商品类别列表
     *
     * @return
     */
    List<SysGoodsType> findGoodsTypeList();


    /**
     * 查询商品类别
     *
     * @param id 商品类别主键
     * @return 商品类别
     */
    public SysGoodsType selectSysGoodsTypeById(Long id);

    /**
     * 查询商品类别列表
     *
     * @param sysGoodsType 商品类别
     * @return 商品类别集合
     */
    public List<SysGoodsType> selectSysGoodsTypeList(SysGoodsType sysGoodsType);

    /**
     * 新增商品类别
     *
     * @param sysGoodsType 商品类别
     * @return 结果
     */
    public int insertSysGoodsType(SysGoodsType sysGoodsType);

    /**
     * 修改商品类别
     *
     * @param sysGoodsType 商品类别
     * @return 结果
     */
    public int updateSysGoodsType(SysGoodsType sysGoodsType);

    /**
     * 批量删除商品类别
     *
     * @param ids 需要删除的商品类别主键集合
     * @return 结果
     */
    public int deleteSysGoodsTypeByIds(Long[] ids);

    /**
     * 删除商品类别信息
     *
     * @param id 商品类别主键
     * @return 结果
     */
    public int deleteSysGoodsTypeById(Long id);

}
