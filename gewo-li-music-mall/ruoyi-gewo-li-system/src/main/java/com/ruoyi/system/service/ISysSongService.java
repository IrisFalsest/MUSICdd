package com.ruoyi.system.service;

import com.ruoyi.system.domain.dto.SongListDto;
import com.ruoyi.system.domain.dto.SysSongDto;
import com.ruoyi.system.domain.vo.SysSongVo;
import com.ruoyi.system.entity.SysSong;
import com.baomidou.mybatisplus.extension.service.IService;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * <p>
 * 歌曲表 服务类
 * </p>
 *
 * @author author
 * @since 2024-04-19
 */
public interface ISysSongService extends IService<SysSong> {
    /**
     * let 获取歌曲排行榜
     *
     * @param type 类型（1：在售歌单   2：热歌榜   3：新歌榜）
     * @return
     */
    List<SysSong> findSongRanking(Integer type, SongListDto songListDto);

    /**
     * back 获取歌曲列表
     *
     * @param song
     * @return
     */
    List<SysSong> acquisitionSongsList(SysSongDto song);

    /**
     * back 解析歌词
     *
     * @param file
     * @return
     */
    StringBuffer analyzingLyrics(MultipartFile file);

    /**
     * back 审核歌曲
     *
     * @param songId
     * @param status
     * @return
     */
    Integer reviewSongs(Long songId, Integer status);

    /**
     * back 歌曲上下架
     *
     * @param songId
     * @param status
     * @return
     */
    Integer songsUpOrDownShelves(Long songId, Integer status);

    /**
     * 根据歌曲类型获取歌曲
     *
     * @param songType
     * @return
     */
    List<SysSong> findSongBySongType(Integer songType, Integer userId);

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
     * 批量删除歌曲
     *
     * @param ids 需要删除的歌曲主键集合
     * @return 结果
     */
    public int deleteSysSongByIds(Long[] ids);

    /**
     * 删除歌曲信息
     *
     * @param id 歌曲主键
     * @return 结果
     */
    public int deleteSysSongById(Long id);
}
