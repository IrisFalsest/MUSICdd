<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="商品名称" prop="goodsName">
        <el-input
          v-model="queryParams.goodsName"
          placeholder="请输入商品名称"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="商品类别" prop="goodsTypeId">
        <el-select v-model="queryParams.goodsTypeId" placeholder="请选择">
            <el-option
              v-for="item in typeList"
              :key="item.id"
              :label="item.typeName"
              :value="item.id">
            </el-option>
          </el-select>
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['system:goods:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['system:goods:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:goods:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="goodsList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="商品类别" align="center" prop="goodsTypeId">
          <template slot-scope="scope">
              {{scope.row.goodsTypeId|goodsType(that)}}
            </template>
      </el-table-column>
      <el-table-column label="商品名称" align="center" prop="goodsName" />
      <el-table-column label="商品图片" align="center" prop="goodsImageUrl">
        <template slot-scope="scope">
          <img v-show="scope.row.goodsImageUrl" class="goodsImageUrl" :src="scope.row.goodsImageUrl" alt="" />
        </template>
    </el-table-column>
    <el-table-column label="商品轮播图" align="center" prop="goodsChart">
        <template slot-scope="scope">
            <el-carousel height="150px">
              <el-carousel-item v-for="item in swiperFun(scope.row.goodsChart)" :key="item">
                  <img class="goodsImageUrl" :src="item"/>
              </el-carousel-item>
            </el-carousel>
          </template>
    </el-table-column>
    <el-table-column label="商品详情图" align="center" prop="goodsDetail">
        <template slot-scope="scope">
            <el-carousel height="150px">
              <el-carousel-item v-for="item in swiperFun(scope.row.goodsDetail)" :key="item">
                  <img class="goodsImageUrl" :src="item"/>
              </el-carousel-item>
            </el-carousel>
          </template>
    </el-table-column>
      <el-table-column label="商品描述" align="center" prop="goodsInfo" />
      <el-table-column label="商品原价" align="center" prop="goodsOriginalPrice" />
      <el-table-column label="商品现价" align="center" prop="goodsCurrentPrice" />
      <el-table-column label="商品热度" align="center" prop="goodsHeat" />
      <el-table-column label="状态" align="center" prop="status" >
          <template slot-scope="scope">
            <el-switch
            v-model="scope.row.status"
            :active-value="0"
            :inactive-value="1"
            @change="handleStatusChange(scope.row)"
            active-text="启用"
            inactive-text="弃用"
          ></el-switch>
          </template>
      </el-table-column>
      <!-- <el-table-column label="审核状态" align="center" prop="reviewStatus" /> -->
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:goods:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:goods:remove']"
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

    <!-- 添加或修改商品对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="商品类别" prop="goodsTypeId">
          <el-select v-model="form.goodsTypeId" placeholder="请选择商品类别">
              <el-option
                v-for="item in typeList"
                :key="item.id"
                :label="item.typeName"
                :value="item.id"></el-option>
              </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="商品名称" prop="goodsName">
          <el-input v-model="form.goodsName" placeholder="请输入商品名称" />
        </el-form-item>
        <el-form-item label="商品图片" prop="goodsImageUrl">
          <imgUpload :dataObj='{type:2}' :value="form.goodsImageUrl" @input='changeImg' :limit='1' />
        </el-form-item>
        <el-form-item label="商品轮播图" prop="goodsChart">
          <imgUpload :dataObj='{type:2}' :value="form.goodsChart" @input='changeImg1' :limit='9' />
        </el-form-item>
        <el-form-item label="商品详情图" prop="goodsDetail">
          <imgUpload :dataObj='{type:2}' :value="form.goodsDetail" @input='changeImg2' :limit='9' />
        </el-form-item>
        <el-form-item label="商品描述" prop="goodsInfo">
          <el-input v-model="form.goodsInfo" placeholder="请输入商品描述" />
        </el-form-item>
        <el-form-item label="商品原价" prop="goodsOriginalPrice">
          <el-input v-model="form.goodsOriginalPrice" placeholder="请输入商品原价" />
        </el-form-item>
        <el-form-item label="商品现价" prop="goodsCurrentPrice">
          <el-input v-model="form.goodsCurrentPrice" placeholder="请输入商品现价" />
        </el-form-item>
        <el-form-item label="商品热度" prop="goodsHeat">
          <el-input v-model="form.goodsHeat" placeholder="请输入商品热度" />
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
import { listGoods, getGoods, delGoods, addGoods, updateGoods } from "@/api/system/goods";
import { listType } from "@/api/system/shopType";
import imgUpload from "@/components/ImageUpload/index";

export default {
  name: "Goods",
  data() {
    return {
        that:this,
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
      // 商品表格数据
      goodsList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        goodsTypeId: null,
        goodsName: null,
        goodsImageUrl: null,
        goodsChart:null,
        goodsDetail:null,
        goodsInfo: null,
        goodsOriginalPrice: null,
        goodsCurrentPrice: null,
        goodsHeat: null,
        modifyBy: null,
        modifyTime: null,
        status: null,
        reviewStatus: null
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      },
      typeList:[]
    };
  },
  created() {
    this.getList();
    this.getTypeList()
  },
  methods: {
      swiperFun(e){
          if(e){
              return e.split(',')
          }else{
              return []
          }
      },
      getTypeList(){
          listType(this.queryParams).then(response => {
            this.typeList = response.rows;
          });
      },
    /** 查询商品列表 */
    getList() {
      this.loading = true;
      listGoods(this.queryParams).then(response => {
        this.goodsList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    handleStatusChange(row){
        updateGoods(row).then(res=>{
          this.$message.success('更新状态成功')
          this.getList()
        })
    },
    changeImg(e){
        this.form.goodsImageUrl = e
    },
    changeImg1(e){
        this.form.goodsChart = e
    },
    changeImg2(e){
        this.form.goodsDetail = e
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
        goodsTypeId: null,
        goodsName: null,
        goodsImageUrl: null,
        goodsChart:null,
        goodsDetail:null,
        goodsInfo: null,
        goodsOriginalPrice: null,
        goodsCurrentPrice: null,
        goodsHeat: null,
        createBy: null,
        createTime: null,
        modifyBy: null,
        modifyTime: null,
        status: null,
        reviewStatus: null
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
      this.title = "添加商品";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getGoods(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改商品";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateGoods(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addGoods(this.form).then(response => {
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
      this.$modal.confirm('是否确认删除商品编号为"' + ids + '"的数据项？').then(function() {
        return delGoods(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/goods/export', {
        ...this.queryParams
      }, `goods_${new Date().getTime()}.xlsx`)
    }
  },
  filters:{
      goodsType(e,that){
          let arr = that.typeList.filter((item) => {
            return item.id  == e;
          });
          return arr[0].typeName || ''
      }
  },
  components: {
      imgUpload
  },
};
</script>
<style scoped lang="scss">
    .goodsImageUrl{
        width: 60px;
        height: 60px;
    }
    ::v-deep .el-carousel__item{
        display: flex !important;
        align-items: center;
        justify-content: center;
    }
</style>