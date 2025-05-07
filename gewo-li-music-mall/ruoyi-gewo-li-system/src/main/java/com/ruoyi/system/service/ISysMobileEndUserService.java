package com.ruoyi.system.service;

import com.ruoyi.common.core.domain.AjaxResult;
import com.baomidou.mybatisplus.extension.service.IService;
import com.ruoyi.system.domain.dto.ReviewDto;
import com.ruoyi.system.domain.dto.UserRewardPointsDto;
import com.ruoyi.system.domain.vo.SysSongVo;
import com.ruoyi.system.entity.SysMobileEndUser;
import com.ruoyi.system.entity.SysSong;

import java.util.List;

/**
 * <p>
 * 移动端用户 服务类
 * </p>
 *
 * @author author
 * @since 2024-04-12
 */
public interface ISysMobileEndUserService extends IService<SysMobileEndUser> {

    /**
     * let 根据用户Id获取当前用户作品
     *
     * @param userId
     * @return
     */
    List<SysSong> findMobileEndUserWorksByUserId(Long userId);


    /**
     * let/back通用 根据用户Id修改当前用户角色类型
     *
     * @param userId
     * @param roleType
     * @return
     */
    AjaxResult modifyUserRoleTypeByUserId(Long userId, Integer roleType);

    /**
     * back 获取用户列表
     *
     * @param mobileEndUser
     * @return
     */
    List<SysMobileEndUser> findMobileEndUserList(SysMobileEndUser mobileEndUser);

    /**
     * back 音乐人审核
     *
     * @param reviewDto
     * @return
     */
    Integer musiciansReview(ReviewDto reviewDto);

    /**
     * back 音乐人修改签约状态
     *
     * @param reviewDto
     * @return
     */
    Integer musiciansSign(ReviewDto reviewDto);

    /**
     * back 制作人审核
     *
     * @param reviewDto
     * @return
     */
    Integer producerReview(ReviewDto reviewDto);

    List<SysMobileEndUser> getUserOrType(SysMobileEndUser sysMobileEndUser);


    /**
     * 查询移动端用户列表
     *
     * @param sysMobileEndUser 移动端用户
     * @return 移动端用户集合
     */
    public List<SysMobileEndUser> selectSysMobileEndUserList(SysMobileEndUser sysMobileEndUser);

    /**
     * 查询移动端用户
     *
     * @param id 移动端用户主键
     * @return 移动端用户
     */
    public SysMobileEndUser selectSysMobileEndUserById(Long id);

    /**
     * 修改移动端用户
     *
     * @param sysMobileEndUser 移动端用户
     * @return 结果
     */
    public int updateSysMobileEndUser(SysMobileEndUser sysMobileEndUser);

    /**
     * 批量删除移动端用户
     *
     * @param ids 需要删除的移动端用户主键集合
     * @return 结果
     */
    public int deleteSysMobileEndUserByIds(Long[] ids);

    /**
     * 根据用户id修改排行榜热度
     *
     * @param id
     * @param score
     * @return
     */
    Integer modifyUserHeatById(Long id, Long score);

    /**
     * 赠送用户积分
     *
     * @param userRewardPointsDto
     * @return
     */
    void userRewardPoints(UserRewardPointsDto userRewardPointsDto);

    /**
     * 修改用户积分
     *
     * @param ids
     * @param score
     */
    void modifyUserScore(Long[] ids, Long score);

    /**
     * 增加用户积分
     *
     * @param ids
     * @param score
     */
    void addUserScore(Long[] ids, Long score);
}
