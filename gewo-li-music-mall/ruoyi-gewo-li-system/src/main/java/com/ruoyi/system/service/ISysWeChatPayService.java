package com.ruoyi.system.service;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

public interface ISysWeChatPayService {
    /**
     * 歌曲微信支付回调
     *
     * @param request
     * @return
     * @throws IOException
     */
    String songCallback(HttpServletRequest request) throws Exception;

    /**
     * 歌曲APP微信支付回调
     *
     * @param request
     * @return
     * @throws IOException
     */
    String songAppCallback(HttpServletRequest request) throws Exception;


    /**
     * 商品微信支付回调
     *
     * @param request
     * @return
     * @throws IOException
     */
    String goodsCallback(HttpServletRequest request) throws Exception;


    /**
     * 商品APP微信支付回调
     *
     * @param request
     * @return
     * @throws IOException
     */
    String goodsAppCallback(HttpServletRequest request) throws Exception;
}
