package com.ruoyi.system.mapper;

import com.ruoyi.system.entity.SysIndexImage;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;

/**
 * <p>
 * 首页轮播图表 Mapper 接口
 * </p>
 *
 * @author author
 * @since 2024-07-05
 */
public interface SysIndexImageMapper extends BaseMapper<SysIndexImage> {
    /**
     * 查询首页轮播图
     *
     * @param id 首页轮播图主键
     * @return 首页轮播图
     */
    public SysIndexImage selectSysIndexImageById(Long id);

    /**
     * 查询首页轮播图列表
     *
     * @param sysIndexImage 首页轮播图
     * @return 首页轮播图集合
     */
    public List<SysIndexImage> selectSysIndexImageList(SysIndexImage sysIndexImage);

    /**
     * 新增首页轮播图
     *
     * @param sysIndexImage 首页轮播图
     * @return 结果
     */
    public int insertSysIndexImage(SysIndexImage sysIndexImage);

    /**
     * 修改首页轮播图
     *
     * @param sysIndexImage 首页轮播图
     * @return 结果
     */
    public int updateSysIndexImage(SysIndexImage sysIndexImage);

    /**
     * 删除首页轮播图
     *
     * @param id 首页轮播图主键
     * @return 结果
     */
    public int deleteSysIndexImageById(Long id);

    /**
     * 批量删除首页轮播图
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteSysIndexImageByIds(Long[] ids);
}
