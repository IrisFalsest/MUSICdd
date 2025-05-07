package com.ruoyi.system.service.impl;

import cn.hutool.http.HttpRequest;
import cn.hutool.http.HttpUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.ruoyi.common.constant.CacheConstants;
import com.ruoyi.common.core.domain.entity.SysUser;
import com.ruoyi.common.core.domain.model.LoginUser;
import com.ruoyi.common.core.redis.RedisCache;
import com.ruoyi.common.utils.StringUtils;
import com.ruoyi.common.utils.TokenUtil;
import com.ruoyi.system.domain.dto.SysAuthDto;
import com.ruoyi.system.entity.SysMobileEndUser;
import com.ruoyi.system.entity.SysRanking;
import com.ruoyi.system.mapper.SysMobileEndUserMapper;
import com.ruoyi.system.mapper.SysRankingMapper;
import com.ruoyi.system.service.ISysUserService;
import com.ruoyi.common.constant.weChat.WeChatConstant;
import com.ruoyi.system.service.SysMobileEndLoginService;
import io.netty.util.internal.StringUtil;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@Service
public class SysMobileEndLoginServiceImpl implements SysMobileEndLoginService {
    @Autowired
    private ISysUserService userService;

    @Autowired
    private SysMobileEndUserMapper mobileEndUserMapper;

    @Autowired
    private SysRankingMapper rankingMapper;

    @Autowired
    private SysConfigServiceImpl configService;

    @Autowired
    private TokenUtil tokenUtil;

    @Autowired
    private RedisCache redisCache;

    @Override
    public Map<String, Object> weChatUserLogin(String code) {
        Map<String, Object> responseParam = new HashMap<>();
        try {
            // 使用微信登录凭证 code 获取用户信息
            String apiUrl = "https://api.weixin.qq.com/sns/jscode2session?appid=" + WeChatConstant.APP_ID + "&secret=" + WeChatConstant.SECRET + "&js_code=" + code + "&grant_type=authorization_code";
            // 发送请求获取用户信息
            String response = HttpRequest.get(apiUrl).execute().body();
            //解析结果
            JSONObject responseBody = JSONObject.parseObject(response);
            String openId = responseBody.getString("openid");
            if (responseBody == null) {
                responseParam.put("error", "微信异常");
                return responseParam;
            }
            if (openId == null) {
                responseParam.put("error", "code无效或Appid无效");
                return responseParam;
            }

//            判断当前用户是否为新用户 0:否 1:是
            Integer inFlag = 0;
//            新增或放开拦截
            SysMobileEndUser wechatUser = mobileEndUserMapper.selectOne(new LambdaQueryWrapper<SysMobileEndUser>().eq(SysMobileEndUser::getOpenId, openId));
            if (null == wechatUser) {
                wechatUser = this.addUser(1, openId, null);
                inFlag = 1;
                increaseScore(wechatUser.getId(), "sys.user.register");
            } else {
                if (wechatUser.getStatus() == 1) {
                    responseParam.put("error", "用户已被禁用");
                    return responseParam;
                }
            }

            String key = "user:" + wechatUser.getId() + "name:";

            if (!redisCache.hasKey(key)) {
                increaseScore(wechatUser.getId(), "sys.user.login");
                redisCache.expireAtMidnight(key, wechatUser.getNickName());
            }

            System.out.println("openId = " + openId);
            LoginUser loginUser = new LoginUser();
            SysUser sysUser = userService.selectUserById(Long.valueOf("1"));
            loginUser.setUser(sysUser);
            responseParam.put("token", tokenUtil.createToken(loginUser));
            responseParam.put("user", wechatUser);
            responseParam.put("inFlag", inFlag);
            return responseParam;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public String signInPhoneNumber(Long id, String code) {
        if (StringUtil.isNullOrEmpty(code)) return "code为空";
        String tokenUrl = String.format("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=%s&secret=%s", WeChatConstant.APP_ID, WeChatConstant.SECRET);
        JSONObject token = JSON.parseObject(HttpUtil.get(tokenUrl));
        String url = "https://api.weixin.qq.com/wxa/business/getuserphonenumber?access_token=" + token.getString("access_token");
        Map<String, String> paramMap = new HashMap<>();
        paramMap.put("code", code);
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<Map<String, String>> httpEntity = new HttpEntity<>(paramMap, headers);
        //通过RestTemplate发送请求，获取到用户手机号码
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Object> response = restTemplate.postForEntity(url, httpEntity, Object.class);
        String phoneNumber = null;
        if (response.getStatusCode() == HttpStatus.OK) {
            Map<String, Object> responseBodyMap = (Map<String, Object>) response.getBody();
            Map<String, Object> phoneInfoMap = (Map<String, Object>) responseBodyMap.get("phone_info");
            phoneNumber = (String) phoneInfoMap.get("phoneNumber");
        }
        if (phoneNumber == null) return "用户手机号码解析失败";
        System.out.println(response);
        mobileEndUserMapper.signInPhoneNumber(id, phoneNumber);
        return phoneNumber;
    }

    @Override
    public Map<String, Object> mobileEndLoginByPhone(Integer code, String phoneNumber) {
        Map<String, Object> responseParam = new HashMap<>();
        Set<Integer> generatedNumbers = redisCache.getCacheSet(CacheConstants.SEND_SMS_RANDOM);
        if (generatedNumbers.contains("phone:" + phoneNumber + ",code:" + code)) {
            LambdaQueryWrapper<SysMobileEndUser> queryWrapper = new LambdaQueryWrapper<>();
            queryWrapper.eq(SysMobileEndUser::getPhone, phoneNumber);
            queryWrapper.isNull(SysMobileEndUser::getOpenId);
            SysMobileEndUser user = mobileEndUserMapper.selectOne(queryWrapper);
            if (null != user && 1 == user.getStatus()) {
                responseParam.put("warn", "该用户已被禁用");
                return responseParam;
            }
            if (null == user) {
                user = this.addUser(2, null, phoneNumber);
            }
            LoginUser loginUser = new LoginUser();
            SysUser sysUser = userService.selectUserById(Long.valueOf("1"));
            loginUser.setUser(sysUser);
            responseParam.put("token", tokenUtil.createToken(loginUser));
            responseParam.put("user", user);
            redisCache.removeValue(CacheConstants.SEND_SMS_RANDOM, "phone:" + phoneNumber + ",code:" + code);
            return responseParam;
        }
        responseParam.put("warn", "验证码错误");
        return responseParam;
    }

    @Override
    public Integer modifyUserIdentityInfo(SysAuthDto authDto, Integer roleType) {
        Integer result = 0;
        SysMobileEndUser mobileEndUser = new SysMobileEndUser();
        mobileEndUser.setRoleType(roleType);
        if (roleType == 2) {
            mobileEndUser.setMusiciansReviewStatus(2);
        } else if (roleType == 3) {
            mobileEndUser.setProducerReviewStatus(2);
        }
        BeanUtils.copyProperties(authDto, mobileEndUser);
        result += mobileEndUserMapper.modifyUserIdentityInfo(mobileEndUser);

        SysRanking ranking = new SysRanking();
        ranking.setUserId(authDto.getId());
        ranking.setRankingType("4");
        BeanUtils.copyProperties(authDto, ranking);
        result += rankingMapper.insertSysRanking(ranking);
        return result;
    }

    private SysMobileEndUser addUser(Integer type, String openId, String phoneNumber) {
        SysMobileEndUser wechatUser = mobileEndUserMapper.selectOne(new LambdaQueryWrapper<SysMobileEndUser>().eq(SysMobileEndUser::getOpenId, openId));
        if (null != wechatUser) {
            return wechatUser;
        }
        wechatUser = mobileEndUserMapper.selectOne(new LambdaQueryWrapper<SysMobileEndUser>().eq(SysMobileEndUser::getPhone, phoneNumber));
        if (null != wechatUser) {
            return wechatUser;
        }
        SysMobileEndUser user = new SysMobileEndUser();
        if (type == 1) user.setOpenId(openId);
        if (type == 2) user.setPhone(phoneNumber);
        user.setScore(Long.valueOf("0"));
        user.setCreateTime(LocalDateTime.now());
        user.setModifyTime(LocalDateTime.now());
        mobileEndUserMapper.insert(user);
        return user;
    }

    private SysMobileEndUser increaseScore(Long userId, String key) {
        if (StringUtils.isNotBlank(key)) {
            String configValue = configService.selectConfigByKey(key);
            if (StringUtils.isNotBlank(configValue)) {
                SysMobileEndUser user = mobileEndUserMapper.selectById(userId);
                user.setScore(user.getScore() + Long.valueOf(configValue));
                if ("sys.user.register".equals(key)) {
                    mobileEndUserMapper.insert(user);
                } else if ("sys.user.login".equals(key)) {
                    mobileEndUserMapper.updateById(user);
                }
                return user;
            }
        }
        return null;
    }
}
