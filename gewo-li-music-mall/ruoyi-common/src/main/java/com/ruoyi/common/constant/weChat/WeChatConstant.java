package com.ruoyi.common.constant.weChat;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

/**
 * 登录凭证校验参数
 */
@Component
public class WeChatConstant {
    public static String APP_ID;
    public static String SECRET;

    public static String MCH_ID;

    public static String KEY;

    public static String TRADE_TYPE;

    public static String SONG_NOTIFY_URL;

    public static String SONG_APP_NOTIFY_URL;

    public static String GOODS_NOTIFY_URL;

    public static String GOODS_APP_NOTIFY_URL;

    @Value("${weChat.appId}")
    private String appId;

    @Value("${weChat.secret}")
    private String secret;

    @Value("${weChat.mchId}")
    private String mchId;

    @Value("${weChat.key}")
    private String key;

    @Value("${weChat.tradeType}")
    private String tradeType;

    @Value("${weChat.songNotifyUrl}")
    private String songNotifyUrl;

    @Value("${weChat.appSongNotifyUrl}")
    private String appSongNotifyUrl;

    @Value("${weChat.goodsNotifyUrl}")
    private String goodsNotifyUrl;

    @Value("${weChat.appGoodsNotifyUrl}")
    private String appGoodsNotifyUrl;

    public static final String WECHAT_PAY_URL = "https://api.mch.weixin.qq.com/pay/unifiedorder";

    //Bean初始化执行
    @PostConstruct
    public void init() {
        SECRET = secret;
        APP_ID = appId;
        MCH_ID = mchId;
        KEY = key;
        TRADE_TYPE = tradeType;
        SONG_APP_NOTIFY_URL = songNotifyUrl;
        SONG_NOTIFY_URL = appSongNotifyUrl;
        GOODS_NOTIFY_URL = goodsNotifyUrl;
        GOODS_APP_NOTIFY_URL = appGoodsNotifyUrl;
    }
}
