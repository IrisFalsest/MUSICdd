package com.ruoyi.common.constant.aliCloud;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class SendSMSConstant {
    public static String TEMPLATE_CODE;

    public static String SIGN_NAME;

    @Value("${sendSMS.templateCode}")
    private String templateCode;

    @Value("${sendSMS.signName}")
    private String signName;

    @PostConstruct
    public void init(){
        TEMPLATE_CODE = templateCode;
        SIGN_NAME = signName;
    }
}
