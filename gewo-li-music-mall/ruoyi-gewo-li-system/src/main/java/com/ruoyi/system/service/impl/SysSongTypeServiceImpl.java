package com.ruoyi.system.service.impl;

import com.ruoyi.common.utils.DateUtils;
import com.ruoyi.system.entity.SysSongType;
import com.ruoyi.system.mapper.SysSongTypeMapper;
import com.ruoyi.system.service.ISysSongTypeService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 歌曲类别表 服务实现类
 * </p>
 *
 * @author author
 * @since 2024-04-19
 */
@Service
public class SysSongTypeServiceImpl extends ServiceImpl<SysSongTypeMapper, SysSongType> implements ISysSongTypeService {

    @Autowired
    private SysSongTypeMapper sysSongTypeMapper;

    /**
     * 查询歌曲类别
     *
     * @param id 歌曲类别主键
     * @return 歌曲类别
     */
    @Override
    public SysSongType selectSysSongTypeById(Long id)
    {
        return sysSongTypeMapper.selectSysSongTypeById(id);
    }

    /**
     * 查询歌曲类别列表
     *
     * @param sysSongType 歌曲类别
     * @return 歌曲类别
     */
    @Override
    public List<SysSongType> selectSysSongTypeList(SysSongType sysSongType)
    {
        return sysSongTypeMapper.selectSysSongTypeList(sysSongType);
    }

    /**
     * 新增歌曲类别
     *
     * @param sysSongType 歌曲类别
     * @return 结果
     */
    @Override
    public int insertSysSongType(SysSongType sysSongType)
    {
        sysSongType.setCreateTime(DateUtils.getNowDate());
        return sysSongTypeMapper.insertSysSongType(sysSongType);
    }

    /**
     * 修改歌曲类别
     *
     * @param sysSongType 歌曲类别
     * @return 结果
     */
    @Override
    public int updateSysSongType(SysSongType sysSongType)
    {
        return sysSongTypeMapper.updateSysSongType(sysSongType);
    }

    /**
     * 批量删除歌曲类别
     *
     * @param ids 需要删除的歌曲类别主键
     * @return 结果
     */
    @Override
    public int deleteSysSongTypeByIds(Long[] ids)
    {
        return sysSongTypeMapper.deleteSysSongTypeByIds(ids);
    }

    /**
     * 删除歌曲类别信息
     *
     * @param id 歌曲类别主键
     * @return 结果
     */
    @Override
    public int deleteSysSongTypeById(Long id)
    {
        return sysSongTypeMapper.deleteSysSongTypeById(id);
    }

}
