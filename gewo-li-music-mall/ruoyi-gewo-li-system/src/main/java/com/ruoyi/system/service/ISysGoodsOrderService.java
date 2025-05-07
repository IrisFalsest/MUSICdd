package com.ruoyi.system.service;

import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.system.domain.dto.OrdersPaymentDTO;
import com.ruoyi.system.domain.vo.GoodsOrderVo;
import com.ruoyi.system.domain.vo.OrderPaymentVO;
import com.ruoyi.system.entity.SysGoodsOrder;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 * 商品订单 服务类
 * </p>
 *
 * @author author
 * @since 2024-05-14
 */
public interface ISysGoodsOrderService extends IService<SysGoodsOrder> {
    /**
     * 订单支付
     *
     * @param ordersPaymentDTO
     * @return
     */
    OrderPaymentVO payment(OrdersPaymentDTO ordersPaymentDTO);

    /**
     * App微信支付
     * @param ordersPaymentDTO
     * @return
     */
    AjaxResult appWeChatPay(OrdersPaymentDTO ordersPaymentDTO);

    /**
     * 根据用户id获取当前所有订单
     *
     * @param userId
     * @return
     */
    List<SysGoodsOrder> findGoodsOrderByUserId(Long userId);

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
     * 批量删除商品订单
     *
     * @param ids 需要删除的商品订单主键集合
     * @return 结果
     */
    public int deleteSysGoodsOrderByIds(String[] ids);

    /**
     * 删除商品订单信息
     *
     * @param id 商品订单主键
     * @return 结果
     */
    public int deleteSysGoodsOrderById(String id);
}
