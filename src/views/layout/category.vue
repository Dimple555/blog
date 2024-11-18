<template>
  <div class="category">
    <div class="content">
      <p>分 类</p>
    </div>
    <div class="card-category">
      <div class="item" v-for="item in labels" :key="item.id" @click="$router.push('/tags')">{{item.title}} <span class="count">{{item.count}}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryPage',
  data () {
    return {
      labels: [
        { id: 1, title: 'Hexo 博客相关', count: 3 },
        { id: 2, title: 'LeetCode 题解', count: 18 },
        { id: 3, title: 'JavaScript 常见问题', count: 21 },
        { id: 4, title: 'HTTP 学习记录', count: 7 },
        { id: 5, title: 'Demo', count: 5 },
        { id: 6, title: 'React 学习笔记', count: 22 },
        { id: 7, title: '站点搭建', count: 6 },
        { id: 8, title: '前端基础', count: 25 },
        { id: 9, title: 'JavaScript 手撕代码', count: 9 },
        { id: 10, title: 'JavaScript 数据结构与算法', count: 15 },
        { id: 11, title: 'CSS', count: 14 },
        { id: 12, title: '杂七杂八', count: 15 }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.category{
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
  .card-category{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #0c1d1b;
    padding: 40px 40px 30px 40px;
    font-size: 20px;
    border-radius: 25px;
    color: #fff;
    .item{
      position: relative;
      width: 450px;
      height: 50px;
      line-height: 50px;
      background-color: #163633;
      border-radius: 14px;
      margin-bottom: 10px;
      span{
        position: absolute;
        right: 20px;
      }
    }
    .item:hover{
      transition: all 0.3s;
      background-color: #62a4da;
      cursor: pointer;
    }
  }
}
</style>
