package com.ruoyi.system.mapper;

import com.ruoyi.system.domain.vo.SongOrderVo;
import com.ruoyi.system.entity.SysSongOrder;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;

/**
 * <p>
 * 歌曲订单表 Mapper 接口
 * </p>
 *
 * @author 王志伟
 * @since 2024-05-06
 */
public interface SysSongOrderMapper extends BaseMapper<SysSongOrder> {
    /**
     * 查询歌曲订单
     *
     * @param id 歌曲订单主键
     * @return 歌曲订单
     */
    public SysSongOrder selectSysSongOrderById(String id);

    /**
     * 查询歌曲订单列表
     *
     * @param sysSongOrder 歌曲订单
     * @return 歌曲订单集合
     */
    public List<SongOrderVo> selectSysSongOrderList(SysSongOrder sysSongOrder);

    /**
     * 新增歌曲订单
     *
     * @param sysSongOrder 歌曲订单
     * @return 结果
     */
    public int insertSysSongOrder(SysSongOrder sysSongOrder);

    /**
     * 修改歌曲订单
     *
     * @param sysSongOrder 歌曲订单
     * @return 结果
     */
    public int updateSysSongOrder(SysSongOrder sysSongOrder);

    /**
     * 删除歌曲订单
     *
     * @param id 歌曲订单主键
     * @return 结果
     */
    public int deleteSysSongOrderById(Long id);

    /**
     * 批量删除歌曲订单
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteSysSongOrderByIds(Long[] ids);
}
