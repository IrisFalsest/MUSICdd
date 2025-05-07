package com.ruoyi.system.service;


import com.ruoyi.system.domain.dto.SysAuthDto;

import java.util.Map;

public interface SysMobileEndLoginService {
    /**
     * 小程序：小程序用户登录
     *
     * @param code
     * @return 返回集合
     */
    Map<String, Object> weChatUserLogin(String code);

    /**
     * 注册/修改手机号码传入参数
     *
     * @return 返回执行结果
     */
    String signInPhoneNumber(Long id, String code);

    /**
     * APP：移动端登录 手机号登录/注册
     *
     * @param phoneNumber
     * @return 返回集合
     */
    Map<String, Object> mobileEndLoginByPhone(Integer code, String phoneNumber);

    /**
     * 修改用户身份信息
     *
     * @param authDto
     * @param roleType
     * @return
     */
    Integer modifyUserIdentityInfo(SysAuthDto authDto, Integer roleType);
}
