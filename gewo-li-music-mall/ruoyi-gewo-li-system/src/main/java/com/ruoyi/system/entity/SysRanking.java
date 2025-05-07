package com.ruoyi.system.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import java.time.LocalDateTime;
import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.TableField;
import java.io.Serializable;
import java.util.Date;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * <p>
 * 排行榜表
 * </p>
 *
 * @author author
 * @since 2024-04-17
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("sys_ranking")
@ApiModel(value="SysRanking对象", description="排行榜表")
public class SysRanking implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "主键id")
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(value = "用户id")
    private Long userId;

    @ApiModelProperty(value = "用户热度")
    private Float userHeat;

    @ApiModelProperty(value = "成绩（分数）")
    private Integer score;

    @ApiModelProperty(value = "备注")
    private String remark;

    @ApiModelProperty(value = "赛区")
    private String competitionZone;

    @ApiModelProperty(value = "参赛照片")
    private String participatingPhoto;

    @ApiModelProperty(value = "参赛宣言")
    private String entryDeclaration;

    @ApiModelProperty(value = "排行榜类型（1：金牌制作人   2：签约制作人   3：新晋制作人   4：音乐人）")
    private String rankingType;

    @ApiModelProperty(value = "创建人")
    private String createBy;

    @ApiModelProperty(value = "创建时间")
    @TableField(fill = FieldFill.INSERT)
    private Date createTime;

    @ApiModelProperty(value = "修改人")
    private String modifyBy;

    @ApiModelProperty(value = "修改时间")
    private LocalDateTime modifyTime;

    @ApiModelProperty(value = "是否可用（0：是   1：否）")
    private Integer status;


}
