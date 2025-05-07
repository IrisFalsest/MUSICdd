package com.ruoyi.alet.controller;

import com.ruoyi.system.service.ISysWeChatPayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/weChat/pay")
public class PayController {
    @Autowired
    private ISysWeChatPayService weChatPayService;

    /**
     * 歌曲微信支付回调
     *
     * @param request
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/songCallback", method = RequestMethod.POST)
    public String songCallback(HttpServletRequest request) throws Exception {
        return weChatPayService.songCallback(request);
    }

    /**
     * APP歌曲微信支付回调
     *
     * @param request
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/songAppCallback", method = RequestMethod.POST)
    public String songAppCallback(HttpServletRequest request) throws Exception {
        return weChatPayService.songAppCallback(request);
    }

    /**
     * 商品微信支付回调
     *
     * @param request
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/goodsCallback", method = RequestMethod.POST)
    public String goodsCallback(HttpServletRequest request) throws Exception {
        return weChatPayService.goodsCallback(request);
    }

    /**
     * 商品APP微信支付回调
     *
     * @param request
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/goodsAppCallback", method = RequestMethod.POST)
    public String goodsAppCallback(HttpServletRequest request) throws Exception {
        return weChatPayService.goodsAppCallback(request);
    }
}
