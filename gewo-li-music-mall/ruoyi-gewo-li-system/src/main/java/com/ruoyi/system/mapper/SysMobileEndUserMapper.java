package com.ruoyi.system.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.ruoyi.system.domain.vo.SysSongVo;
import com.ruoyi.system.entity.SysMobileEndUser;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Update;

import java.util.List;

/**
 * <p>
 * 移动端用户 Mapper 接口
 * </p>
 *
 * @author author
 * @since 2024-04-12
 */
public interface SysMobileEndUserMapper extends BaseMapper<SysMobileEndUser> {
    /**
     * 添加/修改手机号
     *
     * @param id
     * @param phoneNumber
     * @return
     */
    Integer signInPhoneNumber(@Param(value = "id") Long id, @Param("phoneNumber") String phoneNumber);

    /**
     * 根据用户Id修改当前用户角色类型
     *
     * @param userId
     * @param roleType
     * @return
     */
    Integer modifyUserRoleTypeByUserId(@Param("userId") Long userId, @Param("roleType") Integer roleType);

    /**
     * 根据用户Id获取当前用户作品
     *
     * @param userId
     * @return
     */
    List<SysSongVo> findMobileEndUserWorksByUserId(Long userId);

    /**
     * 音乐人审核
     *
     * @param userId
     * @param status
     * @param avatar
     * @return
     */
    Integer musiciansReview(@Param("userId") Long userId, @Param("status") Integer status, @Param("avatar") String avatar);

    /**
     * 音乐人修改签约状态
     *
     * @param userId
     * @param status
     * @param avatar
     * @return
     */
    Integer musiciansSign(@Param("userId") Long userId, @Param("status") Integer status, @Param("avatar") String avatar);

    /**
     * 制作人审核
     *
     * @param userId
     * @param status
     * @param avatar
     * @return
     */
    Integer producerReview(@Param("userId") Long userId, @Param("status") Integer status, @Param("avatar") String avatar);


    /**
     * 查询移动端用户
     *
     * @param id 移动端用户主键
     * @return 移动端用户
     */
    public SysMobileEndUser selectSysMobileEndUserById(Long id);

    /**
     * 查询移动端用户列表
     *
     * @param sysMobileEndUser 移动端用户
     * @return 移动端用户集合
     */
    public List<SysMobileEndUser> selectSysMobileEndUserList(SysMobileEndUser sysMobileEndUser);


    /**
     * 修改移动端用户
     *
     * @param sysMobileEndUser 移动端用户
     * @return 结果
     */
    public Integer updateSysMobileEndUser(SysMobileEndUser sysMobileEndUser);

    /**
     * 删除移动端用户
     *
     * @param id 移动端用户主键
     * @return 结果
     */
    public int deleteSysMobileEndUserById(Long id);

    /**
     * 批量删除移动端用户
     *
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteSysMobileEndUserByIds(Long[] ids);

    /**
     * 修改用户身份信息
     *
     * @param sysMobileEndUser
     * @return
     */
    public Integer modifyUserIdentityInfo(SysMobileEndUser sysMobileEndUser);


    /**
     * 增加用户积分
     *
     * @param id
     * @param score
     * @return
     */
    @Update("update sys_mobile_end_user set score = score + #{score} where id = #{id}")
    Integer increaseUserScore(@Param("id") Long id, @Param("score") Long score);

    /**
     * 减少用户积分
     *
     * @param id
     * @param score
     * @return
     */
    @Update("update sys_mobile_end_user set score = score - #{score} where id = #{id}")
    Integer reduceUserScore(@Param("id") Long id, @Param("score") Long score);
}
