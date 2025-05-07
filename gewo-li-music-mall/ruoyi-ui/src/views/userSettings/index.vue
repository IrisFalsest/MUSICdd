<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="140px">
      <el-form-item label="昵称" prop="nickName">
        <el-input
          v-model="queryParams.nickName"
          placeholder="请输入昵称"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input
          v-model="queryParams.phone"
          placeholder="请输入电话"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input
          v-model="queryParams.name"
          placeholder="请输入姓名"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="身份证号" prop="cardNo">
        <el-input
          v-model="queryParams.cardNo"
          placeholder="请输入身份证号"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="签约时间" prop="signTime">
        <el-date-picker clearable
          v-model="queryParams.signTime"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="请选择签约时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['system:user:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:user:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="userList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="头像" align="center" prop="avatar">
          <template slot-scope="scope">
              <img v-show="scope.row.avatar" class="avatar" :src="scope.row.avatar" alt="" />
            </template>
      </el-table-column>
      <el-table-column label="昵称" align="center" prop="nickName" />
      <el-table-column label="电话" align="center" prop="phone" width="180" />
      <el-table-column label="余额" align="center" prop="balance" />
      <el-table-column label="积分" align="center" prop="score" />
      <el-table-column label="微信openid" align="center" prop="openId" />
      <el-table-column label="姓名" align="center" prop="name" />
      <el-table-column label="身份证号" align="center" prop="cardNo" />
      <!-- <el-table-column label="身份证正面" align="center" prop="cardFront" />
      <el-table-column label="身份证反面" align="center" prop="cardBack" /> -->
      <el-table-column label="备注" align="center" prop="remark" />
      <!-- 0未签约 1待签约 2已签约 -->
      <el-table-column label="签约状态" align="center" prop="signStatus">
        <template slot-scope="scope">
          <span>{{ scope.row.signStatus=='2'?'已签约':scope.row.signStatus=='1'?'待签约':'未签约' }}</span>
        </template>
      </el-table-column>
      <el-table-column label="是否为签约制作人" align="center" prop="isSign">
        <template slot-scope="scope">
          <span>{{ scope.row.isSign=='1'?'是':'否' }}</span>
        </template>
      </el-table-column>
      <el-table-column label="签约时间" align="center" prop="signTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.signTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="审核状态" align="center" prop="musiciansReviewStatus">
        <template slot-scope="scope">
            <el-tag type="info" v-if="scope.row.musiciansReviewStatus=='1'">未审核</el-tag>
            
            <el-popover
             v-else-if="scope.row.musiciansReviewStatus=='2'"
              v-model="scope.row.showView"
              trigger="click">
              <div>
                    <p>姓名：{{scope.row.name}}</p>
                    <p>电话：{{scope.row.phone}}</p>
                    <p>身份证号：{{scope.row.cardNo}}</p>
                    <p>备注：{{scope.row.remark}}</p>
              </div>
              <div>
                  <el-button type="warning" size="mini" @click="doMusiciansReviewStatus(scope.row,4)">审核不通过</el-button>
                  <el-button type="success" size="mini" @click="doMusiciansReviewStatus(scope.row,3)">审核通过</el-button>
              </div>
              
              <el-button type="primary" size="mini" slot="reference">待审核</el-button>
            </el-popover>
            
            <el-tag type="success" v-else-if="scope.row.musiciansReviewStatus=='3'">审核通过</el-tag>
            <el-tag type="warning" v-else-if="scope.row.musiciansReviewStatus=='4'">审核不通过</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="登录方式" align="center" prop="loginType">
        <template slot-scope="scope">
          <span>{{ scope.row.loginType=='1'?'小程序':'APP' }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:user:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:user:remove']"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改移动端用户对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="头像" prop="avatar">
            <imgUpload :dataObj='{type:1}' :value="form.avatar" @input='changeImg' :limit='1' />
        </el-form-item>
        <el-form-item label="昵称" prop="nickName">
          <el-input v-model="form.nickName" placeholder="请输入昵称" />
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="form.phone" placeholder="请输入电话" />
        </el-form-item>
        <el-form-item label="余额" prop="balance">
          <el-input v-model="form.balance" placeholder="请输入余额" />
        </el-form-item>
        <el-form-item label="积分" prop="score">
          <el-input v-model="form.score" placeholder="请输入积分" />
        </el-form-item>
        <el-form-item label="微信唯一标识列 openid" prop="openId">
          <el-input v-model="form.openId" placeholder="请输入微信唯一标识列 openid" />
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="身份证号" prop="cardNo">
          <el-input v-model="form.cardNo" placeholder="请输入身份证号" />
        </el-form-item>
        <!-- <el-form-item label="身份证正面" prop="cardFront">
          <el-input v-model="form.cardFront" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="身份证反面" prop="cardBack">
          <el-input v-model="form.cardBack" type="textarea" placeholder="请输入内容" />
        </el-form-item> -->
        <el-form-item label="备注" prop="remark">
          <el-input v-model="form.remark" placeholder="请输入备注" />
        </el-form-item>
        <el-form-item label="是否为签约制作人" prop="isSign">
          <el-input v-model="form.isSign" placeholder="请输入是否为签约制作人" />
        </el-form-item>
        <el-form-item label="签约时间" prop="signTime">
          <el-date-picker clearable
            v-model="form.signTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="请选择签约时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="修改人" prop="modifyBy">
          <el-input v-model="form.modifyBy" placeholder="请输入修改人" />
        </el-form-item>
        <el-form-item label="修改时间" prop="modifyTime">
          <el-date-picker clearable
            v-model="form.modifyTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="请选择修改时间">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listUser, getUser, delUser, addUser, updateUser, musiciansReview } from "@/api/system/userSettings";
import imgUpload from "@/components/ImageUpload/index";

export default {
  name: "User",
  components: {
      imgUpload
  },
  data() {
    return {
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 移动端用户表格数据
      userList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        avatar: null,
        nickName: null,
        phone: null,
        balance: null,
        score: null,
        openId: null,
        name: null,
        cardNo: null,
        cardFront: null,
        cardBack: null,
        roleType: null,
        signStatus: null,
        isSign: null,
        signTime: null,
        status: null,
        loginType: null,
        modifyBy: null,
        modifyTime: null
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
      doMusiciansReviewStatus(item,status){
          let postData = {
              userId:item.id,
              status
          }
          
          musiciansReview(postData).then(res => {
              item.showView = true;
              this.getList()
          })
      },
      changeImg(e){
          this.form.avatar = e
      },
    /** 查询移动端用户列表 */
    getList() {
      this.loading = true;
      listUser(this.queryParams).then(response => {
        this.userList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        id: null,
        avatar: null,
        nickName: null,
        phone: null,
        balance: null,
        score: null,
        openId: null,
        name: null,
        cardNo: null,
        cardFront: null,
        cardBack: null,
        remark: null,
        roleType: null,
        signStatus: null,
        isSign: null,
        signTime: null,
        status: null,
        loginType: null,
        createBy: null,
        createTime: null,
        modifyBy: null,
        modifyTime: null
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.id)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加移动端用户";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getUser(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改移动端用户";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateUser(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addUser(this.form).then(response => {
              this.$modal.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const ids = row.id || this.ids;
      this.$modal.confirm('是否确认删除移动端用户编号为"' + ids + '"的数据项？').then(function() {
        return delUser(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/user/export', {
        ...this.queryParams
      }, `user_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>
<style scoped>
    .avatar{
        width: 60px;
        height: 60px;
    }
</style>