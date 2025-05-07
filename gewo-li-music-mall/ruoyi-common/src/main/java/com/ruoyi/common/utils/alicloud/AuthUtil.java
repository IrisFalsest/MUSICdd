package com.ruoyi.common.utils.alicloud;

import com.alibaba.fastjson.JSONObject;
import com.ruoyi.common.constant.aliCloud.AuthConstant;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.utils.http.AuthHttpUtil;
import org.apache.http.HttpResponse;
import org.apache.http.util.EntityUtils;

import java.util.HashMap;
import java.util.Map;

public class AuthUtil {
    /**
     * 二要素校验方法
     *
     * @param name
     * @param idNumber
     * @return
     */
    public static AjaxResult auth(String name, String idNumber) {
        String host = "https://sxidcheck.market.alicloudapi.com";
        String path = "/idcard/check";
        String method = "POST";
        String appcode = AuthConstant.APP_CODE;
        Map<String, String> headers = new HashMap<String, String>();
        //最后在header中的格式(中间是英文空格)为Authorization:APPCODE 83359fd73fe94948385f570e3c139105
        headers.put("Authorization", "APPCODE " + appcode);
        Map<String, String> querys = new HashMap<String, String>();
        querys.put("name", name);
        querys.put("idCard", idNumber);
        Map<String, String> bodys = new HashMap<String, String>();

        return AjaxResult.success("身份证号和姓名一致");
//        try {
//            HttpResponse response = AuthHttpUtil.doPost(host, path, method, headers, querys, bodys);
//            //获取response的body
//            String data = EntityUtils.toString(response.getEntity());
//            System.out.println(data);
//            JSONObject jsonObject = JSONObject.parseObject(data);
//            String code = jsonObject.getString("code");
//
////            charge 返回数据为1 则身份证号和姓名一致   charge 返回数据为2 则参数错误/姓名或身份证错误
//            if (null != code && code.equals("0")) {
//                JSONObject resultObj = jsonObject.getJSONObject("data");
//                String result = resultObj.getString("result");
//                if(result != null && result.equals("1")){
//                    return AjaxResult.success("身份证号和姓名一致");
//                } else if (result != null && result.equals("2")){
//                    return AjaxResult.success("身份证号和姓名不一致");
//                } else {
//                    return AjaxResult.success("无此身份证记录");
//                }
//            } else {
//                String msg = jsonObject.getString("msg");
//                return AjaxResult.warn(msg);
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//            return AjaxResult.error("系统错误,请联系管理员");
//        }
    }
}
