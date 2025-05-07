package com.ruoyi.alet.controller;

import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.core.domain.model.LoginUser;
import com.ruoyi.common.utils.TokenUtil;
import com.ruoyi.common.utils.alicloud.AuthUtil;
import com.ruoyi.common.utils.alicloud.SendSmsUtil;
import com.ruoyi.system.domain.dto.SysAuthDto;
import com.ruoyi.system.service.ISysUserService;
import com.ruoyi.system.service.SysMobileEndLoginService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/user")
@Api(tags = "移动端登录")
public class LoginController {
    @Autowired
    private SysMobileEndLoginService mobileEndLoginService;

    @Autowired
    private ISysUserService userService;

    @Autowired
    private SendSmsUtil sendSmsUtil;

    @Autowired
    private TokenUtil tokenUtil;

    @RequestMapping(value = "/wxLogin", method = RequestMethod.POST)
    @ApiOperation("小程序用户登录")
    public AjaxResult login(String code) {
        return AjaxResult.success(mobileEndLoginService.weChatUserLogin(code));
    }

    @RequestMapping(value = "/signInPhoneNumber", method = RequestMethod.POST)
    @ApiOperation("小程序 修改/注册用户手机号码")
    public AjaxResult signInPhoneNumber(Long id, String code) {
        return AjaxResult.success(mobileEndLoginService.signInPhoneNumber(id, code));
    }

    @PostMapping("/auth")
    @ApiOperation("二要素校验")
    public AjaxResult auth(@RequestBody SysAuthDto authDto) {
        return AjaxResult.success(AuthUtil.auth(authDto.getName(), authDto.getCardNo()));
    }

    @PostMapping(value = "/musiciansSubmit")
    @ApiOperation("音乐人身份信息提交")
    public AjaxResult musiciansSubmit(@RequestBody SysAuthDto authDto){
        Integer result = mobileEndLoginService.modifyUserIdentityInfo(authDto,2);
        if (null != result && result > 0){
            return AjaxResult.success("提交成功");
        }
        return AjaxResult.success("提交失败");
    }

    @PostMapping(value = "/producerSubmit")
    @ApiOperation("制作人身份信息提交")
    public AjaxResult producerSubmit(@RequestBody SysAuthDto authDto){
        Integer result = mobileEndLoginService.modifyUserIdentityInfo(authDto,3);
        if (null != result && result > 0){
            return AjaxResult.success("提交成功");
        }
        return AjaxResult.success("提交失败");
    }

    @PostMapping(value = "/sendSms")
    @ApiOperation("根据手机号获取验证码")
    public AjaxResult sendSms(String phoneNumber) {
        return sendSmsUtil.sendSms(phoneNumber);
    }

    @GetMapping(value = "/smsFlag")
    @ApiOperation("判断验证码是否存在")
    public AjaxResult smsFlag(String phoneNumber,String code) {
        return sendSmsUtil.smsFlag(phoneNumber,code);
    }

    @PostMapping(value = "/login")
    @ApiOperation("手机号 登录/注册")
    public AjaxResult mobileEndLoginByPhone(Integer code, String phoneNumber) {
        return AjaxResult.success(mobileEndLoginService.mobileEndLoginByPhone(code, phoneNumber));
    }

    @GetMapping(value = "/getToken")
    @ApiOperation("获取token")
    public AjaxResult getToken() {
        LoginUser loginUser = new LoginUser();
        loginUser.setUser(userService.selectUserById(Long.valueOf("1")));
        return AjaxResult.success(tokenUtil.createToken(loginUser));
    }
}
