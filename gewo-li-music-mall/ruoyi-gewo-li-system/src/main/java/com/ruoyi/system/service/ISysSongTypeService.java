package com.ruoyi.system.service;

import com.ruoyi.system.entity.SysSongType;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 * 歌曲类别表 服务类
 * </p>
 *
 * @author author
 * @since 2024-04-19
 */
public interface ISysSongTypeService extends IService<SysSongType> {
    /**
     * 查询歌曲类别
     *
     * @param id 歌曲类别主键
     * @return 歌曲类别
     */
    public SysSongType selectSysSongTypeById(Long id);

    /**
     * 查询歌曲类别列表
     *
     * @param sysSongType 歌曲类别
     * @return 歌曲类别集合
     */
    public List<SysSongType> selectSysSongTypeList(SysSongType sysSongType);

    /**
     * 新增歌曲类别
     *
     * @param sysSongType 歌曲类别
     * @return 结果
     */
    public int insertSysSongType(SysSongType sysSongType);

    /**
     * 修改歌曲类别
     *
     * @param sysSongType 歌曲类别
     * @return 结果
     */
    public int updateSysSongType(SysSongType sysSongType);

    /**
     * 批量删除歌曲类别
     *
     * @param ids 需要删除的歌曲类别主键集合
     * @return 结果
     */
    public int deleteSysSongTypeByIds(Long[] ids);

    /**
     * 删除歌曲类别信息
     *
     * @param id 歌曲类别主键
     * @return 结果
     */
    public int deleteSysSongTypeById(Long id);
}
