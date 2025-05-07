package com.ruoyi.system.mapper;

import com.ruoyi.system.domain.vo.GoodsOrderVo;
import com.ruoyi.system.entity.SysGoodsOrder;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;

/**
 * <p>
 * 商品订单 Mapper 接口
 * </p>
 *
 * @author author
 * @since 2024-05-14
 */
public interface SysGoodsOrderMapper extends BaseMapper<SysGoodsOrder> {
    /**
     * 查询商品订单
     *
     * @param id 商品订单主键
     * @return 商品订单
     */
    public SysGoodsOrder selectSysGoodsOrderById(String id);

    /**
     * 查询商品订单列表
     *
     * @param sysGoodsOrder 商品订单
     * @return 商品订单集合
     */
    public List<GoodsOrderVo> selectSysGoodsOrderList(SysGoodsOrder sysGoodsOrder);

    /**
     * 新增商品订单
     *
     * @param sysGoodsOrder 商品订单
     * @return 结果
     */
    public int insertSysGoodsOrder(SysGoodsOrder sysGoodsOrder);

    /**
     * 修改商品订单
     *
     * @param sysGoodsOrder 商品订单
     * @return 结果
     */
    public int updateSysGoodsOrder(SysGoodsOrder sysGoodsOrder);

    /**
     * 删除商品订单
     *
     * @param id 商品订单主键
     * @return 结果
     */
    public int deleteSysGoodsOrderById(String id);

    /**
     * 批量删除商品订单
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteSysGoodsOrderByIds(String[] ids);
}
