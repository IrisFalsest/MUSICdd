package com.ruoyi.common.constant.aliCloud;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class AliCloudConstant {
    public static String ACCESS_KEY;
    public static String ACCESS_KEY_SECRET;

    @Value("${aliCloud.accessKey}")
    private String accessKey;

    @Value("${aliCloud.accessKeySecret}")
    private String accessKeySecret;

    @PostConstruct
    public void init(){
        ACCESS_KEY = accessKey;
        ACCESS_KEY_SECRET = accessKeySecret;
    }
}
