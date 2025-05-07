package com.ruoyi.system.service.impl;

import com.aliyun.oss.common.utils.StringUtils;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.ruoyi.common.utils.DateUtils;
import com.ruoyi.system.domain.dto.SongListDto;
import com.ruoyi.system.domain.dto.SysSongDto;
import com.ruoyi.system.domain.vo.SysSongVo;
import com.ruoyi.system.entity.SysMobileEndUser;
import com.ruoyi.system.entity.SysSong;
import com.ruoyi.system.mapper.SysMobileEndUserMapper;
import com.ruoyi.system.mapper.SysSongMapper;
import com.ruoyi.system.service.ISysSongService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.mozilla.universalchardet.UniversalDetector;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.ByteBuffer;
import java.nio.CharBuffer;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

/**
 * <p>
 * 歌曲表 服务实现类
 * </p>
 *
 * @author author
 * @since 2024-04-19
 */
@Service
public class SysSongServiceImpl extends ServiceImpl<SysSongMapper, SysSong> implements ISysSongService {
    @Autowired
    private SysSongMapper songMapper;

    @Autowired
    private SysMobileEndUserMapper userMapper;

    @Override
    public List<SysSong> findSongRanking(Integer type, SongListDto songListDto) {
        return songMapper.findSongRanking(type, songListDto);
    }

    @Override
    public List<SysSong> acquisitionSongsList(SysSongDto song) {
        LambdaQueryWrapper<SysSong> songLambdaQueryWrapper = new LambdaQueryWrapper<>();

//        获取制作人名称模糊查询
        if (null != song && !StringUtils.isNullOrEmpty(song.getCreateUser())) {
            List<SysSong> songList = new ArrayList<>();
            LambdaQueryWrapper<SysMobileEndUser> userLambdaQueryWrapper = new LambdaQueryWrapper<>();
            userLambdaQueryWrapper.like(SysMobileEndUser::getNickName, song.getCreateUser());
//            获取角色为制作人的用户
            userLambdaQueryWrapper.eq(SysMobileEndUser::getRoleType, 3);
            List<SysMobileEndUser> sysMobileEndUsers = userMapper.selectList(userLambdaQueryWrapper);
//            遍历用户
            sysMobileEndUsers.forEach(mobileEndUser -> {
                songLambdaQueryWrapper.eq(SysSong::getCreateBy, mobileEndUser.getId());
                List<SysSong> sysSongs = songMapper.selectList(songLambdaQueryWrapper);
                sysSongs.forEach(songs -> {
                    songList.add(songs);
                });
            });
            return songList;
        }

        if (null != song && !StringUtils.isNullOrEmpty(song.getSongName())) {
            songLambdaQueryWrapper.like(SysSong::getSongName, song.getSongName());
        }

        if (null != song && null != song.getCreateTime()) {
            songLambdaQueryWrapper.eq(SysSong::getCreateTime, song.getCreateTime());
        }
        return songMapper.selectList(songLambdaQueryWrapper);
    }

    /*@Override
    public StringBuffer analyzingLyrics(MultipartFile file) {
        if (!file.getOriginalFilename().endsWith(".lrc")) {
            // 直接返回
            return new StringBuffer("歌词文件格式错误");
        }
        StringBuffer content = new StringBuffer();
        InputStream is = null;
        BufferedInputStream bis = null;
        try {
            BufferedReader reader = null;
            is = file.getInputStream();
            bis = new BufferedInputStream(is);
            bis.mark(4);
            byte[] first3bytes = new byte[3];
            //找到文件前三个字节并自动判断文档类型
            bis.read(first3bytes);
            bis.reset();

            if (first3bytes[0] == (byte) 0xEF && first3bytes[1] == (byte) 0xBB
                    && first3bytes[2] == (byte) 0xBF) {// utf-8

                reader = new BufferedReader(new InputStreamReader(bis, "utf-8"));

            } else if (first3bytes[0] == (byte) 0xFF
                    && first3bytes[1] == (byte) 0xFE) {

                reader = new BufferedReader(
                        new InputStreamReader(bis, "unicode"));
            } else if (first3bytes[0] == (byte) 0xFE
                    && first3bytes[1] == (byte) 0xFF) {

                reader = new BufferedReader(new InputStreamReader(bis,
                        "utf-16be"));
            } else if (first3bytes[0] == (byte) 0xFF
                    && first3bytes[1] == (byte) 0xFF) {

                reader = new BufferedReader(new InputStreamReader(bis,
                        "utf-16le"));
            } else {

                reader = new BufferedReader(new InputStreamReader(bis, "GBK"));
            }
            String str = reader.readLine();

            while (str != null) {
                content.append(str).append("\n");
                str = reader.readLine();
            }
            System.out.println(content);
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (is != null) {
                try {
                    is.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if (bis != null) {
                try {
                    bis.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return content;
    }*/

    @Override
    public StringBuffer analyzingLyrics(MultipartFile file) {
        if (!file.getOriginalFilename().endsWith(".lrc")) {
            return new StringBuffer("歌词文件格式错误");
        }

        StringBuffer content = new StringBuffer();
        try {
            byte[] bytes = file.getBytes();
            UniversalDetector detector = new UniversalDetector(null);
            detector.handleData(bytes, 0, bytes.length);
            detector.dataEnd();
            String encoding = detector.getDetectedCharset();

            String contentStr = new String(bytes, encoding);
            content.append(contentStr);

            System.out.println(content);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return content;
    }

    @Override
    public Integer reviewSongs(Long songId, Integer status) {
        return songMapper.reviewSongs(songId, status);
    }

    @Override
    public Integer songsUpOrDownShelves(Long songId, Integer status) {
        return songMapper.songsUpOrDownShelves(songId, status);
    }

    @Override
    public List<SysSong> findSongBySongType(Integer songType, Integer userId) {
        if (null == songType) {
            return null;
        }
        return songMapper.findSongBySongType(songType, userId);
    }

    @Override
    public List<SysSong> searchSongBySongNameOrProducer(String songNameOrProducer) {
        return songMapper.searchSongBySongNameOrProducer(songNameOrProducer);
    }


    /**
     * 查询歌曲
     *
     * @param id 歌曲主键
     * @return 歌曲
     */
    @Override
    public SysSong selectSysSongById(Long id) {
        return songMapper.selectSysSongById(id);
    }

    /**
     * 查询歌曲列表
     *
     * @param sysSong 歌曲
     * @return 歌曲
     */
    @Override
    public List<SysSong> selectSysSongList(SysSong sysSong) {
        return songMapper.selectSysSongList(sysSong);
    }

    /**
     * 新增歌曲
     *
     * @param sysSong 歌曲
     * @return 结果
     */
    @Override
    public int insertSysSong(SysSong sysSong) {
        sysSong.setCreateTime(DateUtils.getNowDate());
        return songMapper.insertSysSong(sysSong);
    }

    /**
     * 修改歌曲
     *
     * @param sysSong 歌曲
     * @return 结果
     */
    @Override
    public int updateSysSong(SysSong sysSong) {
        return songMapper.updateSysSong(sysSong);
    }

    /**
     * 批量删除歌曲
     *
     * @param ids 需要删除的歌曲主键
     * @return 结果
     */
    @Override
    public int deleteSysSongByIds(Long[] ids) {
        return songMapper.deleteSysSongByIds(ids);
    }

    /**
     * 删除歌曲信息
     *
     * @param id 歌曲主键
     * @return 结果
     */
    @Override
    public int deleteSysSongById(Long id) {
        return songMapper.deleteSysSongById(id);
    }
}
