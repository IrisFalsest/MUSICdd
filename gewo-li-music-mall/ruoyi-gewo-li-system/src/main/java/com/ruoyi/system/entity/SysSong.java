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
 * 歌曲表
 * </p>
 *
 * @author author
 * @since 2024-04-19
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("sys_song")
@ApiModel(value="SysSong对象", description="歌曲表")
public class SysSong implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "歌曲主键")
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(value = "歌曲标题")
    private String songTitle;

    @ApiModelProperty(value = "歌曲名称")
    private String songName;

    @ApiModelProperty(value = "所属专辑")
    private String album;

    @ApiModelProperty(value = "歌曲对应类型（对应 sys_song_type表 id字段）")
    private Long songTypeId;

    @ApiModelProperty(value = "歌曲时长（单位：秒）")
    private Integer duration;

    @ApiModelProperty(value = "歌曲存放路径")
    private String songFileUrl;

    @ApiModelProperty(value = "歌曲MV封面存放地址")
    private String songMvCoverPhotoUrl;

    @ApiModelProperty(value = "歌曲封面存放地址")
    private String songCoverPhotoUrl;

    @ApiModelProperty(value = "歌曲MV存放路径")
    private String songMvUrl;

    @ApiModelProperty(value = "歌曲完整歌词")
    private String songLyrics;

    @ApiModelProperty(value = "歌曲原价")
    private Float originalPrice;

    @ApiModelProperty(value = "歌曲现价")
    private Float currentPrice;

    @ApiModelProperty(value = "歌曲热度")
    private Float songHeat;

    @ApiModelProperty(value = "是否可以使用积分购买（0：否   1：是）")
    private Integer isScoreBuy;

    @ApiModelProperty(value = "积分总额")
    private Long scoreSum;

    @ApiModelProperty(value = "是否赠送积分（0：否   1：是）")
    private Integer isGiftScore;

    @ApiModelProperty(value = "赠送积分")
    private Long giftScore;

    @ApiModelProperty(value = "用户Id")
    private Integer userId;

    @ApiModelProperty(value = "作曲人")
    private String composer;

    @ApiModelProperty(value = "作词人")
    private String lyricist;

    @ApiModelProperty(value = "创建人（制作人）")
    private String createBy;

    @ApiModelProperty(value = "创建时间")
    @TableField(fill = FieldFill.INSERT)
    private Date createTime;

    @ApiModelProperty(value = "修改人")
    private String modifyBy;

    @ApiModelProperty(value = "修改时间")
    private LocalDateTime modifyTime;

    @ApiModelProperty(value = "状态（0：上架   1：下架）")
    private Integer status;

    @ApiModelProperty(value = "审核状态（1：未审核   2：审核通过   3：审核不通过）")
    private Integer reviewStatus;

    @ApiModelProperty(value = "来源（0：let   1：back）")
    private Integer source;

    @ApiModelProperty(value = "歌唱类型（1：原唱   2：翻唱）")
    private Integer singType;

    @ApiModelProperty(value = "是否收藏")
    @TableField(exist = false)
    private Integer isCollect;

    @ApiModelProperty(value = "是否关注")
    @TableField(exist = false)
    private Integer isFollow;

    @ApiModelProperty(value = "是否购买")
    @TableField(exist = false)
    private Integer isBuy;

    @ApiModelProperty(value = "头像")
    @TableField(exist = false)
    private String avatar;

    @ApiModelProperty(value = "类别名称")
    @TableField(exist = false)
    private String typeName;
}
