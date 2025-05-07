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
 * 用户歌曲收藏表
 * </p>
 *
 * @author author
 * @since 2024-04-19
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("sys_user_song_collection")
@ApiModel(value="SysUserSongCollection对象", description="用户歌曲收藏表")
public class SysUserSongCollection implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "用户歌曲收藏主键")
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(value = "用户id（对应 sys_mobile_end_user表 id字段）")
    private Long userId;

    @ApiModelProperty(value = "歌曲id（对应 sys_song表 id字段）")
    private Long songId;

    @ApiModelProperty(value = "创建人")
    private String createBy;

    @ApiModelProperty(value = "创建时间")
    @TableField(fill = FieldFill.INSERT)
    private Date createTime;

    @ApiModelProperty(value = "修改人")
    private String modifyBy;

    @ApiModelProperty(value = "修改时间")
    private LocalDateTime modifyTime;


}
