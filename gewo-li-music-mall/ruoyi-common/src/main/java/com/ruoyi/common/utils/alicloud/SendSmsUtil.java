package com.ruoyi.common.utils.alicloud;

import com.aliyuncs.CommonRequest;
import com.aliyuncs.CommonResponse;
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.dysmsapi.model.v20170525.SendSmsRequest;
import com.aliyuncs.dysmsapi.model.v20170525.SendSmsResponse;
import com.aliyuncs.exceptions.ClientException;
import com.aliyuncs.http.MethodType;
import com.aliyuncs.profile.DefaultProfile;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.google.gson.Gson;
import com.ruoyi.common.constant.CacheConstants;
import com.ruoyi.common.constant.aliCloud.AliCloudConstant;
import com.ruoyi.common.constant.aliCloud.SendSMSConstant;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.core.domain.entity.SysUser;
import com.ruoyi.common.core.domain.model.LoginUser;
import com.ruoyi.common.core.redis.RedisCache;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.Set;

@Component
public class SendSmsUtil {
    @Autowired
    private RedisCache redisCache;

    /**
     * 发送短信
     *
     * @param phoneNumber
     * @return
     */
    public AjaxResult sendSms(String phoneNumber) {
        DefaultProfile profile = DefaultProfile.getProfile(
                "cn-beijing", // 服务器地域
                AliCloudConstant.ACCESS_KEY, // Access Key ID
                AliCloudConstant.ACCESS_KEY_SECRET); // Access Key Secret

        IAcsClient client = new DefaultAcsClient(profile);
        // 构建请求：
        CommonRequest request = new CommonRequest();
        request.setSysMethod(MethodType.POST);
        request.setSysDomain("dysmsapi.aliyuncs.com");
        request.setSysVersion("2017-05-25");
        request.setSysAction("SendSms");

        // 自定义参数：
        request.putQueryParameter("PhoneNumbers", phoneNumber);// 手机号
        request.putQueryParameter("SignName", SendSMSConstant.SIGN_NAME);// 短信签名
        request.putQueryParameter("TemplateCode", SendSMSConstant.TEMPLATE_CODE);// 短信模版CODE

        // 构建短信验证码
        Map codeMap = new HashMap();
        codeMap.put("code", generateUniqueFourDigitNumber(phoneNumber));
        request.putQueryParameter("TemplateParam", new Gson().toJson(codeMap));
        try {
            CommonResponse response = client.getCommonResponse(request);
            System.out.println(response.getHttpResponse().isSuccess());
            boolean success = response.getHttpResponse().isSuccess();
            if (success) {
                return AjaxResult.success("发送成功");
            } else {
                return AjaxResult.success("发送失败");
            }
        } catch (ClientException e) {
            e.printStackTrace();
            throw new RuntimeException("系统错误,请联系管理员");
        }
    }

    /**
     * 获取验证码并存入缓存
     *
     * @return
     */
    private Integer generateUniqueFourDigitNumber(String phoneNumber) {
        while (true) {
            Random random = new Random();
            int randomNumber = random.nextInt(9000) + 1000;
            Set<Integer> generatedNumbers = redisCache.getCacheSet(CacheConstants.SEND_SMS_RANDOM);
            if (generatedNumbers.contains(random)) continue;
            redisCache.setCacheSet(CacheConstants.SEND_SMS_RANDOM, "phone:" + phoneNumber + ",code:" + randomNumber);
            return randomNumber;
        }
    }

    /**
     * 判断验证码是否存在
     *
     * @return
     */
    public AjaxResult smsFlag(String phoneNumber, String code) {
        Set<Integer> generatedNumbers = redisCache.getCacheSet(CacheConstants.SEND_SMS_RANDOM);
        if (generatedNumbers.contains("phone:" + phoneNumber + ",code:" + code)) {
//            redisCache.removeValue(CacheConstants.SEND_SMS_RANDOM, "phone:" + phoneNumber + ",code:" + code);
            return AjaxResult.warn("验证码正确");
        }
        return AjaxResult.warn("验证码错误");
    }
}
