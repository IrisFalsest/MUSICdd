package com.ruoyi.system.mapper;

import com.ruoyi.system.domain.dto.SongListDto;
import com.ruoyi.system.domain.vo.SysSongVo;
import com.ruoyi.system.entity.SysSong;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Update;

import java.util.List;

/**
 * <p>
 * 歌曲表 Mapper 接口
 * </p>
 *
 * @author author
 * @since 2024-04-19
 */
public interface SysSongMapper extends BaseMapper<SysSong> {
    /**
     * let 获取歌曲排行榜
     *
     * @param type 类型（1：在售歌单   2：热歌榜   新歌榜）
     * @return
     */
    List<SysSong> findSongRanking(@Param("type") Integer type, @Param("songListDto") SongListDto songListDto);

    /**
     * 审核歌曲
     *
     * @param songId
     * @param status
     * @return
     */
    @Update("update sys_song set review_status = #{status} where id = #{songId}")
    Integer reviewSongs(@Param("songId") Long songId, @Param("status") Integer status);

    /**
     * 歌曲上下架
     *
     * @param songId
     * @param status
     * @return
     */
    @Update("update sys_song set status = #{status} where id = #{songId}")
    Integer songsUpOrDownShelves(@Param("songId") Long songId, @Param("status") Integer status);

    /**
     * 根据歌曲类型获取歌曲
     *
     * @param songType
     * @return
     */
    List<SysSong> findSongBySongType(@Param("songType") Integer songType, @Param("userId") Integer userId);

    /**
     * 搜索歌曲（歌曲名/制作人）
     *
     * @param songNameOrProducer
     * @return
     */
    List<SysSong> searchSongBySongNameOrProducer(String songNameOrProducer);

    /**
     * 查询歌曲
     *
     * @param id 歌曲主键
     * @return 歌曲
     */
    public SysSong selectSysSongById(Long id);

    /**
     * 查询歌曲列表
     *
     * @param sysSong 歌曲
     * @return 歌曲集合
     */
    public List<SysSong> selectSysSongList(SysSong sysSong);

    /**
     * 新增歌曲
     *
     * @param sysSong 歌曲
     * @return 结果
     */
    public int insertSysSong(SysSong sysSong);

    /**
     * 修改歌曲
     *
     * @param sysSong 歌曲
     * @return 结果
     */
    public int updateSysSong(SysSong sysSong);

    /**
     * 删除歌曲
     *
     * @param id 歌曲主键
     * @return 结果
     */
    public int deleteSysSongById(Long id);

    /**
     * 批量删除歌曲
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteSysSongByIds(Long[] ids);
}
