<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="订单号" prop="number">
        <el-input
          v-model="queryParams.number"
          placeholder="请输入订单号"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="queryParams.status" placeholder="请选择">
            <el-option
              v-for="item in statusList"
              :key="item.id"
              :label="item.statusName"
              :value="item.id">
            </el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input
          v-model="queryParams.phone"
          placeholder="请输入手机号"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:goodsOrder:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="goodsOrderList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="订单编号" width="130" align="center" prop="id" />
      <el-table-column label="商品图" align="center" prop="goodsImageUrl">
        <template slot-scope="scope">
          <img v-show="scope.row.goodsImageUrl" class="goodsImageUrl" :src="scope.row.goodsImageUrl" alt="" />
        </template>
      </el-table-column>
      <el-table-column label="商品名" align="center" prop="goodsName" />
      <el-table-column label="手机号" align="center" prop="phone" />
      <el-table-column label="地址" align="center" prop="address" />
      <el-table-column label="收货人" align="center" prop="consignee" />
      <el-table-column label="实收金额" align="center" prop="amount" />
      <el-table-column label="订单备注" align="center" prop="remark" />
      <el-table-column label="物流单号" align="center" prop="logisticsNo" />
      <el-table-column label="购买数量" align="center" prop="buyQuantity" />
      <el-table-column label="下单时间" align="center" prop="createTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.createTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="订单状态" align="center" prop="status">
        <template slot-scope="scope">
          <span v-if="scope.row.status==1">待付款</span>
          <span v-else-if="scope.row.status==2">待收货</span>
          <span v-else-if="scope.row.status==3">已收货</span>
          <span v-else-if="scope.row.status==4">已取消</span>
          <span v-else-if="scope.row.status==5">退款</span>
        </template>
      </el-table-column>
      <el-table-column label="支付方式" align="center" prop="payMethod">
        <template slot-scope="scope">
          <span v-if="scope.row.payMethod==1">微信</span>
          <span v-else-if="scope.row.payMethod==2">支付宝</span>
        </template>
      </el-table-column>
      <el-table-column label="支付状态" align="center" prop="payStatus">
        <template slot-scope="scope">
          <span v-if="scope.row.payStatus==0">未支付</span>
          <span v-else-if="scope.row.payStatus==1">已支付</span>
          <span v-else-if="scope.row.payStatus==2">已退款</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:goodsOrder:edit']"
          >修改</el-button>
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

    <!-- 添加或修改商品订单对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="600px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <el-form-item label="物流单号" prop="logisticsNo">
          <el-input v-model="form.logisticsNo" placeholder="请输入物流单号" />
        </el-form-item>
        <el-form-item label="购买数量" prop="buyQuantity">
          <el-input v-model="form.buyQuantity" placeholder="请输入购买数量" disabled />
        </el-form-item>
        <el-form-item label="下单时间" prop="createTime">
          <el-date-picker clearable
           disabled
            v-model="form.createTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="请选择下单时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="实收金额" prop="amount">
          <el-input v-model="form.amount" placeholder="请输入实收金额" disabled />
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="form.remark" placeholder="请输入备注" disabled />
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="form.phone" placeholder="请输入手机号" disabled />
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="form.address" placeholder="请输入地址" disabled />
        </el-form-item>
        <el-form-item label="收货人" prop="consignee">
          <el-input v-model="form.consignee" placeholder="请输入收货人" disabled />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" v-if='form.status==2' @click="submitForm">发 货</el-button>
        <el-button type="primary" v-if='form.status==5' @click="submitForm">退 款</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listGoodsOrder, getGoodsOrder, delGoodsOrder, addGoodsOrder, updateGoodsOrder } from "@/api/system/goodsOrder";

export default {
  name: "GoodsOrder",
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
      // 商品订单表格数据
      goodsOrderList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        number: null,
        logisticsNo: null,
        status: null,
        userId: null,
        goodsId: null,
        goodsSpecificationsId: null,
        buyQuantity: null,
        createTime: null,
        checkoutTime: null,
        payMethod: null,
        payStatus: null,
        amount: null,
        username: null,
        phone: null,
        address: null,
        consignee: null,
        cancelReason: null,
        rejectionReason: null,
        cancelTime: null,
        modifyBy: null,
        modifyTime: null
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      },
      
      statusList:[
          {
              id:1,
              statusName:'待付款'
          },{
              id:2,
              statusName:'待收货'
          },{
              id:3,
              statusName:'已收货'
          },{
              id:4,
              statusName:'已取消'
          },{
              id:5,
              statusName:'退款'
          },
      ]
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询商品订单列表 */
    getList() {
      this.loading = true;
      listGoodsOrder(this.queryParams).then(response => {
        this.goodsOrderList = response.rows;
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
        number: null,
        logisticsNo: null,
        status: null,
        userId: null,
        goodsId: null,
        goodsSpecificationsId: null,
        buyQuantity: null,
        createTime: null,
        checkoutTime: null,
        payMethod: null,
        payStatus: null,
        amount: null,
        remark: null,
        username: null,
        phone: null,
        address: null,
        consignee: null,
        cancelReason: null,
        rejectionReason: null,
        cancelTime: null,
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
      this.title = "添加商品订单";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getGoodsOrder(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改商品订单";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
              let postData = JSON.parse(JSON.stringify(this.form))
              // if(postData.status==2){
                  
              // }
            updateGoodsOrder(postData).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addGoodsOrder(this.form).then(response => {
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
      this.$modal.confirm('是否确认删除商品订单编号为"' + ids + '"的数据项？').then(function() {
        return delGoodsOrder(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/goodsOrder/export', {
        ...this.queryParams
      }, `goodsOrder_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>
