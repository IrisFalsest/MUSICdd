package com.ruoyi.system.service;

import com.ruoyi.system.domain.dto.StudioViewDto;
import com.ruoyi.system.entity.SysRecordingStudio;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 * 录音棚表 服务类
 * </p>
 *
 * @author author
 * @since 2024-04-24
 */
public interface ISysRecordingStudioService extends IService<SysRecordingStudio> {


    /**
     * 查询录音棚
     *
     * @param id 录音棚主键
     * @return 录音棚
     */
    public SysRecordingStudio selectSysRecordingStudioById(Long id);

    /**
     * 查询录音棚列表
     *
     * @param sysRecordingStudio 录音棚
     * @return 录音棚集合
     */
    public List<SysRecordingStudio> selectSysRecordingStudioList(SysRecordingStudio sysRecordingStudio);

    /**
     * 新增录音棚
     *
     * @param sysRecordingStudio 录音棚
     * @return 结果
     */
    public int insertSysRecordingStudio(SysRecordingStudio sysRecordingStudio);

    /**
     * 修改录音棚
     *
     * @param sysRecordingStudio 录音棚
     * @return 结果
     */
    public int updateSysRecordingStudio(SysRecordingStudio sysRecordingStudio);

    /**
     * 批量删除录音棚
     *
     * @param ids 需要删除的录音棚主键集合
     * @return 结果
     */
    public int deleteSysRecordingStudioByIds(Long[] ids);

    /**
     * 删除录音棚信息
     *
     * @param id 录音棚主键
     * @return 结果
     */
    public int deleteSysRecordingStudioById(Long id);

    List<SysRecordingStudio> findStudioView(StudioViewDto studioViewDto);
}
