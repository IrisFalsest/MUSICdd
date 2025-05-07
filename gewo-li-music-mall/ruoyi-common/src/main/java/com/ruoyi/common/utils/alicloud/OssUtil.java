package com.ruoyi.common.utils.alicloud;


import com.aliyun.oss.ClientException;
import com.aliyun.oss.OSS;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.OSSException;
import com.ruoyi.common.constant.aliCloud.AliCloudConstant;
import com.ruoyi.common.constant.aliCloud.OssConstant;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Slf4j
@Component
public class OssUtil {

    /**
     * 文件上传
     *
     * @param bytes
     * @param objectName
     * @return
     */
    public String upload(byte[] bytes, String objectName,Integer type) {

        // 创建OSSClient实例。
        OSS ossClient = new OSSClientBuilder().build(OssConstant.ENDPOINT, AliCloudConstant.ACCESS_KEY, AliCloudConstant.ACCESS_KEY_SECRET);

        try {
            // 创建PutObject请求。
            if(type == 1) {
                ossClient.putObject(OssConstant.BUCKET_NAME, OssConstant.AVATAR + "/" + objectName, new ByteArrayInputStream(bytes));
            }
            if(type == 2){
                ossClient.putObject(OssConstant.BUCKET_NAME,OssConstant.SONG_COVER_PHOTO + "/" + objectName, new ByteArrayInputStream(bytes));
            }
            if(type == 3){
                ossClient.putObject(OssConstant.BUCKET_NAME,OssConstant.SONG + "/" +  objectName, new ByteArrayInputStream(bytes));
            }
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Caught an ClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with OSS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message:" + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }

        //文件访问路径规则 https://BucketName.Endpoint/ObjectName
        StringBuilder stringBuilder = new StringBuilder("https://");
        stringBuilder
                .append(OssConstant.ACCESS_ADDRESS)
                .append("/");
        if(type == 1){
            stringBuilder.append(OssConstant.AVATAR);
        }
        if(type == 2){
            stringBuilder.append(OssConstant.SONG_COVER_PHOTO);
        }
        if(type == 3){
            stringBuilder.append(OssConstant.SONG);
        }
        stringBuilder
                .append("/")
                .append(objectName);
        log.info("文件上传到:{}", stringBuilder.toString());

        return stringBuilder.toString();
    }

}
