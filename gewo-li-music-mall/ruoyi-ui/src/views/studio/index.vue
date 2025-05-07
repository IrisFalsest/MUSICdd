<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="88px">
      <el-form-item label="录音棚店名" prop="studioName">
        <el-input
          v-model="queryParams.studioName"
          placeholder="请输入录音棚店名"
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
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['system:studio:add']"
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
          v-hasPermi="['system:studio:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:studio:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="studioList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="录音棚店名" align="center" width="180" prop="studioName" />
      <el-table-column label="录音棚标签" align="center" prop="studioLabel" />
      <el-table-column label="原价" align="center" prop="originalPrice" />
      <el-table-column label="现价" align="center" prop="currentPrice" />
      <el-table-column label="录音棚面积(㎡)" align="center" prop="studioArea" />
      <el-table-column label="朝向" align="center" prop="facing" />
      <el-table-column label="录音棚热度" align="center" prop="studioHeat" />
      <el-table-column label="录音棚地址" align="center" prop="studioAddress" />
      <el-table-column label="经度" align="center" prop="longitude" />
      <el-table-column label="纬度" align="center" prop="latitude" />
      <el-table-column label="录音棚封面" align="center" prop="coverPhotoUrl">
          <template slot-scope="scope">
              <img v-show="scope.row.coverPhotoUrl" class="songCoverPhotoUrl" :src="scope.row.coverPhotoUrl" alt="" />
            </template>
      </el-table-column>
      <el-table-column label="轮播图" align="center" prop="carouselChart">
          <template slot-scope="scope">
              <el-carousel height="150px">
                <el-carousel-item v-for="item in swiperFun(scope.row.carouselChart)" :key="item">
                    <img class="songCoverPhotoUrl" :src="item"/>
                </el-carousel-item>
              </el-carousel>
            </template>
      </el-table-column>
      <el-table-column label="详情图片" align="center" prop="detailImages">
          <template slot-scope="scope">
              <el-carousel height="150px">
                <el-carousel-item v-for="item in swiperFun(scope.row.detailImages)" :key="item">
                    <img class="songCoverPhotoUrl" :src="item"/>
                </el-carousel-item>
              </el-carousel>
            </template>
      </el-table-column>
      <el-table-column label="是否可定制" align="center" prop="isCustomization">
         <template slot-scope="scope">
           <el-tag :type="scope.row.isCustomization==1?'danger':''">
               {{scope.row.isCustomization==1?'否':'是'}}
           </el-tag>
         </template> 
      </el-table-column>
      <el-table-column label="状态" align="center" prop="status" width="150">
          <template slot-scope="scope">
            <el-switch
            v-model="scope.row.status"
            :active-value="1"
            :inactive-value="0"
            @change="handleStatusChange(scope.row)"
            active-text="启用"
            inactive-text="弃用"
          ></el-switch>
          </template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:studio:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:studio:remove']"
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
    <!-- 添加或修改录音棚对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="录音棚店名" prop="studioName">
          <el-input v-model="form.studioName" placeholder="请输入录音棚店名" />
        </el-form-item>
        <el-form-item label="录音棚标签" prop="studioLabel">
            <el-checkbox-group v-model="studioLabel">
              <el-checkbox v-for="item in cities" :label="item" :key="item">{{item}}</el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="原价" prop="originalPrice">
          <el-input v-model="form.originalPrice" placeholder="请输入原价" />
        </el-form-item>
        <el-form-item label="现价" prop="currentPrice">
          <el-input v-model="form.currentPrice" placeholder="请输入现价" />
        </el-form-item>
        <el-form-item label="录音棚面积(㎡)" prop="studioArea">
          <el-input v-model="form.studioArea" placeholder="请输入录音棚面积" />
        </el-form-item>
        <el-form-item label="朝向" prop="facing">
          <el-input v-model="form.facing" placeholder="请输入朝向" />
        </el-form-item>
        <el-form-item label="录音棚热度" prop="studioHeat">
          <el-input v-model="form.studioHeat" placeholder="请输入录音棚热度" />
        </el-form-item>
        <el-form-item label="录音棚地址" prop="studioAddress">
          <el-input v-model="form.studioAddress" placeholder="请输入录音棚地址" />
        </el-form-item>
        <el-form-item label="录音棚经纬度" prop="longitude">
            <el-input v-model="form.longitude" placeholder="录音棚经度" />
            <el-input v-model="form.latitude" placeholder="录音棚纬度" />
            
            <map-container
                  :defaultPoint="point"
                  @sendLoction="getLoction"
                ></map-container>
        </el-form-item>
        <el-form-item label="录音棚封面" prop="coverPhotoUrl">
          <imgUpload :dataObj='{type:2}' :value="form.coverPhotoUrl" @input='changeCoverPhotoUrl' :limit='1' />
        </el-form-item>
        <el-form-item label="轮播图" prop="carouselChart">
            <imgUpload :dataObj='{type:2}' :value="form.carouselChart" @input='changeCarouselChart' :limit='10' />
        </el-form-item>
        <el-form-item label="详情图片" prop="detailImages">
          <imgUpload :dataObj='{type:2}' :value="form.detailImages" @input='changeDetailImages' :limit='10' />
        </el-form-item>
        <el-form-item label="是否可定制" prop="isCustomization">
          <el-switch
            v-model="form.isCustomization"
            :active-value="0"
            :inactive-value="1"
            active-text="是"
            inactive-text="否"
          ></el-switch>
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
import { listStudio, getStudio, delStudio, addStudio, updateStudio } from "@/api/system/studio";
import imgUpload from "@/components/ImageUpload/index";
import MapContainer from "@/components/MapContainer/MapContainer.vue";

export default {
  name: "Studio",
  components: {
      imgUpload,
      MapContainer
  },
  data() {
    return {
        point:['116.409252','39.90325'],
        studioLabel:[],
        cities:['功能强劲','拍制一体','交通便利','优质服务'],
        baseUrl: process.env.VUE_APP_BASE_API,
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
      // 录音棚表格数据
      studioList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        studioName: null,
        studioLabel: null,
        originalPrice: null,
        currentPrice: null,
        studioArea: null,
        facing: null,
        studioHeat: null,
        studioAddress: null,
        coverPhotoUrl: null,
        carouselChart: null,
        detailImages: null,
        modifyBy: null,
        modifyTime: null,
        isCustomization: null,
        status: null
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
    let that = this;
  },
  methods: {
      getLoction(point, address) {
          console.log(point)
          
        this.form.longitude = point[0];
        this.form.latitude = point[1];
      },
      swiperFun(e){
          if(e){
              return e.split(',')
          }else{
              return []
          }
          
      },
      changeCoverPhotoUrl(e){
          this.form.coverPhotoUrl = e
      },
      changeCarouselChart(e){
          this.form.carouselChart = e
      },
      changeDetailImages(e){
          this.form.detailImages = e
      },
      //修改状态
      handleStatusChange(row){
          updateStudio(row).then(res=>{
            this.$message.success('更新状态成功')
            this.getList()
          })
      },
    /** 查询录音棚列表 */
    getList() {
      this.loading = true;
      listStudio(this.queryParams).then(response => {
        this.studioList = response.rows;
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
        studioName: null,
        studioLabel: null,
        originalPrice: null,
        currentPrice: null,
        studioArea: null,
        facing: null,
        studioHeat: null,
        studioAddress: null,
        coverPhotoUrl: null,
        carouselChart: null,
        detailImages: null,
        createBy: null,
        createTime: null,
        modifyBy: null,
        modifyTime: null,
        isCustomization: null,
        status: null,
        longitude:null,
        latitude:null,
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
      this.title = "添加录音棚";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getStudio(id).then(response => {
          this.studioLabel = response.data.studioLabel.split(',')
        this.form = response.data;
        this.open = true;
        this.title = "修改录音棚";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
            this.form.studioLabel = this.studioLabel.join(',')
          if (this.form.id != null) {
            updateStudio(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addStudio(this.form).then(response => {
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
      this.$modal.confirm('是否确认删除录音棚编号为"' + ids + '"的数据项？').then(function() {
        return delStudio(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/studio/export', {
        ...this.queryParams
      }, `studio_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>

<style scoped lang="scss">
    .songCoverPhotoUrl{
        width: 60px;
        height: 60px;
    }
    ::v-deep .el-carousel__item{
        display: flex !important;
        align-items: center;
        justify-content: center;
    }
</style>