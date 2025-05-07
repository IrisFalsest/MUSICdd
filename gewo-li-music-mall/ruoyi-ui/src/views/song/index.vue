<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="100px">
      <el-form-item label="歌曲标题" prop="songTitle">
        <el-input
          v-model="queryParams.songTitle"
          placeholder="请输入歌曲标题"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="歌曲名称" prop="songName">
        <el-input
          v-model="queryParams.songName"
          placeholder="请输入歌曲名称"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="所属专辑" prop="album">
        <el-input
          v-model="queryParams.album"
          placeholder="请输入所属专辑"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="歌曲类型" prop="songTypeId">
        <el-select v-model="queryParams.songTypeId" placeholder="请选择">
            <el-option
              v-for="item in typeList"
              :key="item.id"
              :label="item.typeName"
              :value="item.id"
              :disabled="!item.status">
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
          v-hasPermi="['system:song:add']"
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
          v-hasPermi="['system:song:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:song:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="songList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="歌曲标题" align="center" prop="songTitle" />
      <el-table-column label="歌曲名称" align="center" prop="songName" />
      <el-table-column label="作词人" align="center" prop="lyricist" />
      <el-table-column label="作曲人" align="center" prop="composer" />
      <el-table-column label="所属专辑" align="center" prop="album" />
      <el-table-column label="歌曲类型" align="center" prop="songTypeId">
          <template slot-scope="scope">
              {{scope.row.songTypeId|songType(that)}}
            </template>
      </el-table-column>
      <!-- <el-table-column label="歌曲时长" align="center" prop="duration" /> -->
      <el-table-column label="歌曲存放路径" align="center" prop="songFileUrl">
          <template slot-scope="scope">
              <el-link v-show="scope.row.songCoverPhotoUrl" :href="scope.row.songFileUrl" type="primary">音乐</el-link>
            </template>
      </el-table-column>
      <el-table-column label="歌曲封面" align="center" prop="songCoverPhotoUrl">
          <template slot-scope="scope">
            <img v-show="scope.row.songCoverPhotoUrl" class="songCoverPhotoUrl" :src="scope.row.songCoverPhotoUrl" alt="" />
          </template>
        </el-table-column>
      <el-table-column label="歌曲原价" align="center" prop="originalPrice" />
      <el-table-column label="歌曲现价" align="center" prop="currentPrice" />
      <el-table-column label="歌曲热度" align="center" prop="songHeat" />
      <el-table-column label="制作人" align="center" prop="createBy" />
      <el-table-column label="状态" align="center" prop="status" width="140">
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
      <el-table-column label="审核状态" align="center" prop="reviewStatus">
          <template slot-scope="scope">
              <!-- 审核状态（1：未审核 2：审核通过 3：审核不通过） -->
            <el-tag :type="scope.row.reviewStatus==2?'success':scope.row.reviewStatus==3?'danger':''">
                {{scope.row.reviewStatus==2?'审核通过':scope.row.reviewStatus==3?'审核不通过':'未审核'}}
            </el-tag>
          </template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:song:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:song:remove']"
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

    <!-- 添加或修改歌曲对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="歌曲标题" prop="songTitle">
          <el-input v-model="form.songTitle" placeholder="请输入歌曲标题" />
        </el-form-item>
        <el-form-item label="歌曲名称" prop="songName">
          <el-input v-model="form.songName" placeholder="请输入歌曲名称" />
        </el-form-item>
        <el-form-item label="作词人" prop="lyricist">
          <el-input v-model="form.lyricist" placeholder="请输入作词人" />
        </el-form-item>
        <el-form-item label="作曲人" prop="composer">
          <el-input v-model="form.composer" placeholder="请输入作曲人" />
        </el-form-item>
        <el-form-item label="所属专辑" prop="album">
          <el-input v-model="form.album" placeholder="请输入所属专辑" />
        </el-form-item>
        <el-form-item label="歌曲类型" prop="songTypeId">
          <el-select v-model="form.songTypeId" placeholder="请选择歌曲类型">
              <el-option
                v-for="item in typeList"
                :key="item.id"
                :label="item.typeName"
                :value="item.id"
                :disabled="!item.status">
              </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="歌曲(MP3)" prop="songFileUrl">
            <fileUpload :dataObj='{type:3}' :value="form.songFileUrl" :fileType="['mp3']" :fileSize='30' @input='changeMp3' :limit='1' />
        </el-form-item>
        <el-form-item label="歌曲封面" prop="songCoverPhotoUrl">
            <imgUpload :dataObj='{type:2}' :value="form.songCoverPhotoUrl" @input='changeImg' :limit='1' />
        </el-form-item>
        <el-form-item label="歌曲歌词" prop="songLyrics">
          <el-input autosize v-model="form.songLyrics" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="歌曲原价" prop="originalPrice">
          <el-input v-model="form.originalPrice" placeholder="请输入歌曲原价" />
        </el-form-item>
        <el-form-item label="歌曲现价" prop="currentPrice">
          <el-input v-model="form.currentPrice" placeholder="请输入歌曲现价" />
        </el-form-item>
        <el-form-item label="歌曲热度" prop="songHeat">
          <el-input v-model="form.songHeat" placeholder="请输入歌曲热度" />
        </el-form-item>
        <el-form-item label="制作人" prop="createBy">
          <el-input v-model="form.createBy" placeholder="请输入制作人" />
        </el-form-item>
        
        <el-form-item label="审核状态" prop="reviewStatus">
            <el-radio-group v-model="form.reviewStatus" size="small">
              <el-radio :label="2" border>审核通过</el-radio>
              <el-radio :label="3" border>审核不通过</el-radio>
            </el-radio-group>
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
import { listSong, getSong, delSong, addSong, updateSong } from "@/api/system/song";
import { listType } from "@/api/system/songType";
import imgUpload from "@/components/ImageUpload/index";
import fileUpload from "@/components/FileUpload/index";

export default {
  name: "Song",
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
      // 歌曲表格数据
      songList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        songTitle: null,
        songName: null,
        lyricist:null,
        composer:null,
        album: null,
        songTypeId: null,
        duration: null,
        songFileUrl: null,
        songCoverPhotoUrl: null,
        songLyrics: null,
        originalPrice: null,
        currentPrice: null,
        songHeat: null,
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
      getTypeList(){
          listType(this.queryParams).then(response => {
            this.typeList = response.rows;
          });
      },
      changeMp3(e){
          this.form.songFileUrl = e
      },
      changeImg(e){
          this.form.songCoverPhotoUrl = e
      },
      //修改状态
      handleStatusChange(row){
          updateSong(row).then(res=>{
            this.$message.success('更新状态成功')
            this.getList()
          })
      },
    /** 查询歌曲列表 */
    getList() {
      this.loading = true;
      listSong(this.queryParams).then(response => {
        this.songList = response.rows;
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
        songTitle: null,
        songName: null,
        lyricist:null,
        composer:null,
        album: null,
        songTypeId: null,
        duration: null,
        songFileUrl: null,
        songCoverPhotoUrl: null,
        songLyrics: null,
        originalPrice: null,
        currentPrice: null,
        songHeat: null,
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
      this.title = "添加歌曲";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getSong(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改歌曲";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateSong(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addSong(this.form).then(response => {
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
      this.$modal.confirm('是否确认删除歌曲编号为"' + ids + '"的数据项？').then(function() {
        return delSong(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/song/export', {
        ...this.queryParams
      }, `song_${new Date().getTime()}.xlsx`)
    }
  },
  components: {
      imgUpload,
      fileUpload
  },
  filters:{
      songType(e,that){
          let arr = that.typeList.filter((item) => {
            return item.id  == e;
          });
          let un = ''
          if(arr.length){
              un = arr[0].typeName
          }
          return un
      }
  }
};
</script>

<style scoped>
    .songCoverPhotoUrl{
        width: 60px;
        height: 60px;
    }
</style>