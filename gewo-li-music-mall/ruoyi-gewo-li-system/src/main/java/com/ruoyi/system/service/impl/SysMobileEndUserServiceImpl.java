package com.ruoyi.system.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.utils.StringUtils;
import com.ruoyi.system.domain.dto.ReviewDto;
import com.ruoyi.system.domain.dto.UserRewardPointsDto;
import com.ruoyi.system.domain.vo.SysSongVo;
import com.ruoyi.system.entity.SysConsumptionRecord;
import com.ruoyi.system.entity.SysMobileEndUser;
import com.ruoyi.system.entity.SysSong;
import com.ruoyi.system.mapper.SysMobileEndUserMapper;
import com.ruoyi.system.mapper.SysSongMapper;
import com.ruoyi.system.service.ISysConsumptionRecordService;
import com.ruoyi.system.service.ISysMobileEndUserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.time.LocalDateTime;
import java.util.List;

/**
 * <p>
 * 移动端用户 服务实现类
 * </p>
 *
 * @author author
 * @since 2024-04-12
 */
@Service
public class SysMobileEndUserServiceImpl extends ServiceImpl<SysMobileEndUserMapper, SysMobileEndUser> implements ISysMobileEndUserService {
    @Autowired
    private SysMobileEndUserMapper mobileEndUserMapper;

    @Autowired
    private ISysConsumptionRecordService consumptionRecordService;

    @Autowired
    private SysSongMapper songMapper;

    @Override
    public List<SysSong> findMobileEndUserWorksByUserId(Long userId) {
        return songMapper.selectList(new QueryWrapper<SysSong>().eq("user_id", userId));
    }

    @Override
    public AjaxResult modifyUserRoleTypeByUserId(Long userId, Integer roleType) {
        if (null != roleType && roleType == 1) return AjaxResult.warn("该用户已为音乐人");
        Integer result = mobileEndUserMapper.modifyUserRoleTypeByUserId(userId, roleType);
        if (result > 0) AjaxResult.success("修改成功");
        return AjaxResult.error("修改失败");
    }

    @Override
    public List<SysMobileEndUser> findMobileEndUserList(SysMobileEndUser mobileEndUser) {
        LambdaQueryWrapper<SysMobileEndUser> queryWrapper = new LambdaQueryWrapper<>();
        if (null != mobileEndUser.getStatus() && mobileEndUser.getStatus() > 0) {
            queryWrapper.eq(SysMobileEndUser::getStatus, mobileEndUser.getStatus());
        }
        List<SysMobileEndUser> mobileEndUserList = mobileEndUserMapper.selectList(queryWrapper);
        return mobileEndUserList;
    }

    @Override
    public Integer musiciansReview(ReviewDto reviewDto) {
        return mobileEndUserMapper.musiciansReview(reviewDto.getUserId(), reviewDto.getStatus(), reviewDto.getAvatar());
    }

    @Override
    public Integer musiciansSign(ReviewDto reviewDto) {
        return mobileEndUserMapper.musiciansSign(reviewDto.getUserId(), reviewDto.getStatus(), reviewDto.getAvatar());
    }

    @Override
    public Integer producerReview(ReviewDto reviewDto) {
        return mobileEndUserMapper.producerReview(reviewDto.getUserId(), reviewDto.getStatus(), reviewDto.getAvatar());
    }

    @Override
    public List<SysMobileEndUser> getUserOrType(SysMobileEndUser sysMobileEndUser) {
        QueryWrapper<SysMobileEndUser> eq = new QueryWrapper<>();
        eq.eq("role_type", sysMobileEndUser.getRoleType());
        eq.eq(StringUtils.isNotBlank(sysMobileEndUser.getNickName()), "nick_name", sysMobileEndUser.getNickName());
        eq.eq(StringUtils.isNotBlank(sysMobileEndUser.getPhone()), "phone", sysMobileEndUser.getPhone());
        eq.eq(StringUtils.isNotBlank(sysMobileEndUser.getName()), "name", sysMobileEndUser.getName());
        eq.eq(StringUtils.isNotBlank(sysMobileEndUser.getCardNo()), "card_no", sysMobileEndUser.getCardNo());
        eq.eq(!ObjectUtils.isEmpty(sysMobileEndUser.getSignTime()), "sign_time", sysMobileEndUser.getSignTime());
        List<SysMobileEndUser> users = mobileEndUserMapper.selectList(eq);
        return users;
    }

    /**
     * 查询移动端用户
     *
     * @param id 移动端用户主键
     * @return 移动端用户
     */
    @Override
    public SysMobileEndUser selectSysMobileEndUserById(Long id) {
        return mobileEndUserMapper.selectSysMobileEndUserById(id);
    }

    /**
     * 查询移动端用户列表
     *
     * @param sysMobileEndUser 移动端用户
     * @return 移动端用户
     */
    @Override
    public List<SysMobileEndUser> selectSysMobileEndUserList(SysMobileEndUser sysMobileEndUser) {
        return mobileEndUserMapper.selectSysMobileEndUserList(sysMobileEndUser);
    }

    /**
     * 修改移动端用户
     *
     * @param sysMobileEndUser 移动端用户
     * @return 结果
     */
    @Override
    public int updateSysMobileEndUser(SysMobileEndUser sysMobileEndUser) {
        return mobileEndUserMapper.updateSysMobileEndUser(sysMobileEndUser);
    }

    /**
     * 批量删除移动端用户
     *
     * @param ids 需要删除的移动端用户主键
     * @return 结果
     */
    @Override
    public int deleteSysMobileEndUserByIds(Long[] ids) {
        return mobileEndUserMapper.deleteSysMobileEndUserByIds(ids);
    }

    @Override
    public Integer modifyUserHeatById(Long id, Long score) {
        return mobileEndUserMapper.increaseUserScore(id, score);
    }

    @Override
    public void userRewardPoints(UserRewardPointsDto userRewardPointsDto) {
//        积分赠送用户
        SysMobileEndUser giver = mobileEndUserMapper.selectById(userRewardPointsDto.getGiver());
//        积分接收用户
        SysMobileEndUser recipient = mobileEndUserMapper.selectById(userRewardPointsDto.getRecipient());

        if (giver.getScore() < userRewardPointsDto.getScore()) throw new RuntimeException("赠送积分失败，赠送积分不足");
        mobileEndUserMapper.reduceUserScore(userRewardPointsDto.getGiver(), userRewardPointsDto.getScore());
        mobileEndUserMapper.increaseUserScore(userRewardPointsDto.getRecipient(), userRewardPointsDto.getScore());
        consumptionRecordService.save(new SysConsumptionRecord().setUserId(giver.getId()).setScoreType(0).setScoreSource("赠送 " + recipient.getNickName() + " :" + userRewardPointsDto.getScore() + "积分").setScore(userRewardPointsDto.getScore()).setCreateBy(giver.getNickName()).setCreateTime(LocalDateTime.now()));
        consumptionRecordService.save(new SysConsumptionRecord().setUserId(recipient.getId()).setScoreType(1).setScoreSource("来自 " + giver.getNickName() + " :" + userRewardPointsDto.getScore() + "积分").setScore(userRewardPointsDto.getScore()).setCreateBy(recipient.getNickName()).setCreateTime(LocalDateTime.now()));
    }

    @Override
    public void modifyUserScore(Long[] ids, Long score) {
        for (Long id : ids) {
            SysMobileEndUser mobileEndUser = mobileEndUserMapper.selectById(id);
            mobileEndUser.setScore(score);
            mobileEndUserMapper.updateById(mobileEndUser);
        }
    }

    @Override
    public void addUserScore(Long[] ids, Long score) {
        for (Long id : ids) {
            mobileEndUserMapper.increaseUserScore(id, score);
        }
    }
}
