package com.ruoyi.common.constant.aliCloud;

import org.jdom2.output.support.SAXTarget;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class OssConstant {
    public static String ENDPOINT;

    public static String BUCKET_NAME;

    public static String AVATAR;

    public static String SONG_COVER_PHOTO;

    public static String SONG;

    public static String ACCESS_ADDRESS;

    @Value("${oss.endpoint}")
    private String endpoint;

    @Value("${oss.bucketName}")
    private String bucketName;

    @Value("${oss.avatar}")
    private String avatar;

    @Value("${oss.songCoverPhoto}")
    private String songCoverPhoto;

    @Value("${oss.song}")
    private String song;

    @Value("${oss.accessAddress}")
    private String accessAddress;

    @PostConstruct
    public void init(){
        ENDPOINT = endpoint;
        BUCKET_NAME = bucketName;
        AVATAR = avatar;
        SONG_COVER_PHOTO = songCoverPhoto;
        SONG = song;
        ACCESS_ADDRESS = accessAddress;
    }
}
