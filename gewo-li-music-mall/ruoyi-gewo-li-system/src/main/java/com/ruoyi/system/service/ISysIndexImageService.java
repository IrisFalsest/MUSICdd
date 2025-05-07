package com.ruoyi.system.service;

import com.ruoyi.system.entity.SysIndexImage;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 * 首页轮播图表 服务类
 * </p>
 *
 * @author author
 * @since 2024-07-05
 */
public interface ISysIndexImageService extends IService<SysIndexImage> {
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
     * 批量删除首页轮播图
     *
     * @param ids 需要删除的首页轮播图主键集合
     * @return 结果
     */
    public int deleteSysIndexImageByIds(Long[] ids);

    /**
     * 删除首页轮播图信息
     *
     * @param id 首页轮播图主键
     * @return 结果
     */
    public int deleteSysIndexImageById(Long id);
}
