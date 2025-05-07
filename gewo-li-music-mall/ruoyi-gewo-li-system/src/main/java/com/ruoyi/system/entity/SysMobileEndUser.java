package com.ruoyi.system.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

import java.time.LocalDate;
import java.time.LocalDateTime;
import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.TableField;
import java.io.Serializable;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
import org.springframework.format.annotation.DateTimeFormat;

/**
 * <p>
 * 移动端用户
 * </p>
 *
 * @author author
 * @since 2024-04-17
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("sys_mobile_end_user")
@ApiModel(value="SysMobileEndUser对象", description="移动端用户")
public class SysMobileEndUser implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "主键id")
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(value = "头像")
    private String avatar;

    @ApiModelProperty(value = "背景图片")
    private String backgroundImage;

    @ApiModelProperty(value = "昵称")
    private String nickName;

    @ApiModelProperty(value = "艺名")
    private String stageName;

    @ApiModelProperty(value = "电话")
    private String phone;

    @ApiModelProperty(value = "工作单位")
    private String workUnit;

    @ApiModelProperty(value = "信息认证所填写电话")
    private String reviewPhone;

    @ApiModelProperty(value = "余额")
    private Float balance;

    @ApiModelProperty(value = "积分")
    private Long score;

    @ApiModelProperty(value = "微信唯一标识列 openid")
    private String openId;

    @ApiModelProperty(value = "姓名")
    private String name;

    @ApiModelProperty(value = "身份证号")
    private String cardNo;

    @ApiModelProperty(value = "身份证正面")
    private String cardFront;

    @ApiModelProperty(value = "身份证反面")
    private String cardBack;

    @DateTimeFormat(pattern = "yyyy-MM-dd")                    // 表示返回时间类型
    @JsonFormat(pattern="yyyy-MM-dd", timezone = "GMT+8")      // 表示接收时间类型
    @ApiModelProperty(value = "出生日期")
    private LocalDate birthDate;

    @ApiModelProperty(value = "性别（1：男   2：女）")
    private Integer sex;

    @ApiModelProperty(value = "备注")
    private String remark;

    @ApiModelProperty(value = "角色类型（1：普通用户   2：音乐人   3：制作人）")
    private Integer roleType;

    @ApiModelProperty(value = "音乐人审核状态（1：未审核    2：待审核   3：审核通过   4：审核不通过）")
    private Integer musiciansReviewStatus;

    @ApiModelProperty(value = "制作人审核状态（1：未审核    2：待审核   3：审核通过   4：审核不通过）")
    private Integer producerReviewStatus;

    @ApiModelProperty(value = "音乐人签约状态（1：未签约   2：待签约   3：已签约）")
    private Integer musiciansSignStatus;

    @ApiModelProperty(value = "签约状态（1：未签约   2：待签约   3：已签约）")
    private Integer signStatus;

    @ApiModelProperty(value = "是否为签约制作人（0：否   1：是）")
    private Integer isSign;

    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")                    // 表示返回时间类型
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")      // 表示接收时间类型
    @ApiModelProperty(value = "签约时间")
    private Date signTime;

    @ApiModelProperty(value = "状态（0：启用   1：禁用）")
    private Integer status;

    @ApiModelProperty(value = "登录方式（1：小程序   2：APP   3：PC）")
    private Integer loginType;

    @ApiModelProperty(value = "创建人")
    private String createBy;

    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")                    // 表示返回时间类型
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")      // 表示接收时间类型
    @ApiModelProperty(value = "创建时间")
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;

    @ApiModelProperty(value = "修改人")
    private String modifyBy;

    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")                    // 表示返回时间类型
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")      // 表示接收时间类型
    @ApiModelProperty(value = "修改时间")
    private LocalDateTime modifyTime;


}
