package com.ruoyi.system.service.impl;

import com.ruoyi.system.entity.SysIndexImage;
import com.ruoyi.system.mapper.SysIndexImageMapper;
import com.ruoyi.system.service.ISysIndexImageService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

/**
 * <p>
 * 首页轮播图表 服务实现类
 * </p>
 *
 * @author author
 * @since 2024-07-05
 */
@Service
public class SysIndexImageServiceImpl extends ServiceImpl<SysIndexImageMapper, SysIndexImage> implements ISysIndexImageService {
    @Autowired
    private SysIndexImageMapper sysIndexImageMapper;

    /**
     * 查询首页轮播图
     *
     * @param id 首页轮播图主键
     * @return 首页轮播图
     */
    @Override
    public SysIndexImage selectSysIndexImageById(Long id)
    {
        return sysIndexImageMapper.selectSysIndexImageById(id);
    }

    /**
     * 查询首页轮播图列表
     *
     * @param sysIndexImage 首页轮播图
     * @return 首页轮播图
     */
    @Override
    public List<SysIndexImage> selectSysIndexImageList(SysIndexImage sysIndexImage)
    {
        return sysIndexImageMapper.selectSysIndexImageList(sysIndexImage);
    }

    /**
     * 新增首页轮播图
     *
     * @param sysIndexImage 首页轮播图
     * @return 结果
     */
    @Override
    public int insertSysIndexImage(SysIndexImage sysIndexImage)
    {
        sysIndexImage.setCreateTime(LocalDateTime.now());
        return sysIndexImageMapper.insertSysIndexImage(sysIndexImage);
    }

    /**
     * 修改首页轮播图
     *
     * @param sysIndexImage 首页轮播图
     * @return 结果
     */
    @Override
    public int updateSysIndexImage(SysIndexImage sysIndexImage)
    {
        return sysIndexImageMapper.updateSysIndexImage(sysIndexImage);
    }

    /**
     * 批量删除首页轮播图
     *
     * @param ids 需要删除的首页轮播图主键
     * @return 结果
     */
    @Override
    public int deleteSysIndexImageByIds(Long[] ids)
    {
        return sysIndexImageMapper.deleteSysIndexImageByIds(ids);
    }

    /**
     * 删除首页轮播图信息
     *
     * @param id 首页轮播图主键
     * @return 结果
     */
    @Override
    public int deleteSysIndexImageById(Long id)
    {
        return sysIndexImageMapper.deleteSysIndexImageById(id);
    }
}
