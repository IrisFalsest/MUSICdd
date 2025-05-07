package com.ruoyi.common.constant.aliCloud;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class AuthConstant {

    public static String APP_CODE;

    @Value("${auth.appCode}")
    private String appCode;

    @PostConstruct
    public void init(){
        APP_CODE = appCode;
    }
}
