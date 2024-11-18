<template>
  <div class="find">
    <div class="content">
      <p>所 有 文 章</p>
    </div>
    <div class="card-find">
      <div class="header">
        <div class="searchBox">
          <input type="text" placeholder="搜索文章标题..." v-model="searchQuery">
        </div>
        <div class="searchBtn"><span class="iconfont icon-youjiantou"></span></div>
        <div class="resetBtn"><span class="iconfont icon-zhongzhi" @click="reset"></span></div>
      </div>
      <div class="items">
        <div class="search-main" v-for="item in 10" :key="item">
          <div class="content">一道代码题看 CommonJS 模块化规范</div>
          <div class="date">2022-09-20</div>
        </div>
      </div>
      <div class="pagination">
          <!-- :total:数据的总条目数，:page-size:每页显示的条目数 -->
          <el-pagination
            background
            layout="prev, pager, next"
            :total="150"
            :page-size="10"
            :pager-count="9">
          </el-pagination>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FindPage',
  data () {
    return {
      searchQuery: ''
    }
  },
  methods: {
    reset () {
      this.searchQuery = '' // 清空输入框的值
    }
  }
}
</script>

<style lang="less" scoped>
.find{
  width: 1000px;
  padding-top: 170px;
  margin: 0 auto;
  text-align: center;
  .content{
    padding-bottom: 200px;
    text-align: center;
    p{
      font-size: 56px;
      font-weight: 700;
      color: #fff;
    }
  }
  .card-find{
      background-color: #0c1d1b;
      padding: 40px;
      font-size: 20px;
      border-radius: 25px;
      color: #fff;
      .header{
        height: 50px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        .searchBox{
          input{
            display: block;
            width: 780px;
            height: 50px;
            padding: 0 20px;
            border-radius: 14px;
            font-size: 22px;
          }
        }
        span{
          display: block;
          width: 50px;
          height: 50px;
          font-size: 22px;
          line-height: 50px;
          border-radius: 12px;
          background: #163633;
        }
        span:hover{
          transition: all 0.3s;
          background-color: #62a4da;
        }
      }
      .search-main{
        display: flex;
        height: 60px;
        line-height: 60px;
        border-radius: 20px;
        padding:0 20px;
        background-color: #163633;
        margin-bottom: 20px;
        .content{
          width: 780px;
          text-align: center;
          font-size: 22px;
        }
        .date{
          width: 140px;
          font-size: 20px;
          padding: 0 10px;
        }
      }
      .search-main:hover{
        transition: all 0.3s;
        background-color: #62a4da;
      }
      .pagination{
        text-align: center;
        /deep/ .el-pagination{
          height: 50px;
          .btn-prev,
          .el-pager li,
          .btn-next{
            width: 50px;
            height: 50px;
            line-height: 50px;
            border-radius: 12px;
            background-color: #163633;
            color: #fff;
          }
          .btn-prev:hover,
          .el-pager li:hover,
          .btn-next:hover{
            background-color: #62a4da;
          }
        }
      }
  }
}
</style>
