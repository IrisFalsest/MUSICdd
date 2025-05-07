package com.ruoyi.system.domain.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalDateTime;

//二要素校验响应类
@Data
public class SysAuthDto {
    @ApiModelProperty(value = "用户id")
    private Long id;

    @ApiModelProperty(value = "姓名")
    private String name;

    @ApiModelProperty(value = "身份证号")
    private String cardNo;

    @ApiModelProperty(value = "电话")
    private String reviewPhone;

    @ApiModelProperty(value = "艺名")
    private String stageName;

    @ApiModelProperty(value = "赛区")
    private String competitionZone;

    @ApiModelProperty(value = "参赛照片")
    private String participatingPhoto;

    @ApiModelProperty(value = "参赛宣言")
    private String entryDeclaration;

    @ApiModelProperty(value = "工作单位")
    private String workUnit;

    @ApiModelProperty(value = "性别（1：男   2：女）")
    private Integer sex;

    @DateTimeFormat(pattern = "yyyy-MM-dd")                    // 表示返回时间类型
    @JsonFormat(pattern="yyyy-MM-dd", timezone = "GMT+8")      // 表示接收时间类型
    @ApiModelProperty(value = "出生日期")
    private LocalDate birthDate;

    @ApiModelProperty(value = "备注")
    private String remark;
}
