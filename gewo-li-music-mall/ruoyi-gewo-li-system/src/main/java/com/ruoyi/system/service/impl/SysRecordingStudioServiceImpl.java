package com.ruoyi.system.service.impl;

import com.ruoyi.common.utils.DateUtils;
import com.ruoyi.system.domain.dto.StudioViewDto;
import com.ruoyi.system.entity.SysRecordingStudio;
import com.ruoyi.system.mapper.SysRecordingStudioMapper;
import com.ruoyi.system.service.ISysRecordingStudioService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 录音棚表 服务实现类
 * </p>
 *
 * @author author
 * @since 2024-04-24
 */
@Service
public class SysRecordingStudioServiceImpl extends ServiceImpl<SysRecordingStudioMapper, SysRecordingStudio> implements ISysRecordingStudioService {

    @Autowired
    private SysRecordingStudioMapper sysRecordingStudioMapper;

    /**
     * 查询录音棚
     *
     * @param id 录音棚主键
     * @return 录音棚
     */
    @Override
    public SysRecordingStudio selectSysRecordingStudioById(Long id)
    {
        return sysRecordingStudioMapper.selectSysRecordingStudioById(id);
    }

    /**
     * 查询录音棚列表
     *
     * @param sysRecordingStudio 录音棚
     * @return 录音棚
     */
    @Override
    public List<SysRecordingStudio> selectSysRecordingStudioList(SysRecordingStudio sysRecordingStudio)
    {
        return sysRecordingStudioMapper.selectSysRecordingStudioList(sysRecordingStudio);
    }

    /**
     * 新增录音棚
     *
     * @param sysRecordingStudio 录音棚
     * @return 结果
     */
    @Override
    public int insertSysRecordingStudio(SysRecordingStudio sysRecordingStudio)
    {
        sysRecordingStudio.setCreateTime(DateUtils.getNowDate());
        return sysRecordingStudioMapper.insertSysRecordingStudio(sysRecordingStudio);
    }

    /**
     * 修改录音棚
     *
     * @param sysRecordingStudio 录音棚
     * @return 结果
     */
    @Override
    public int updateSysRecordingStudio(SysRecordingStudio sysRecordingStudio)
    {
        return sysRecordingStudioMapper.updateSysRecordingStudio(sysRecordingStudio);
    }

    /**
     * 批量删除录音棚
     *
     * @param ids 需要删除的录音棚主键
     * @return 结果
     */
    @Override
    public int deleteSysRecordingStudioByIds(Long[] ids)
    {
        return sysRecordingStudioMapper.deleteSysRecordingStudioByIds(ids);
    }

    /**
     * 删除录音棚信息
     *
     * @param id 录音棚主键
     * @return 结果
     */
    @Override
    public int deleteSysRecordingStudioById(Long id)
    {
        return sysRecordingStudioMapper.deleteSysRecordingStudioById(id);
    }


    @Override
    public List<SysRecordingStudio> findStudioView(StudioViewDto studioViewDto) {
        return sysRecordingStudioMapper.findStudioView(studioViewDto);
    }
}
