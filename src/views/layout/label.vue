<template>
  <div class="label">
    <div class="content">
      <p>标 签</p>
    </div>
    <div class="card-label">
      <span v-for="item in title" :key="item" @click="$router.push('/tags')">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LabelPage',
  data () {
    return {
      title: ['Node.js', 'BFC', '动画', 'babel', 'Fetch', 'Git', 'jQuery', 'CloudBase', 'ES6', '浏览器', '正则表达式', 'nginx', 'Redux', 'AntD', '搜索算法', '脚本', 'Cpp', 'JSON', 'HTTP', 'Webify', '性能优化', 'Webpack', 'HTML', 'PubSub', 'Axios', 'React', '网络基础', '数组', 'TCP', 'GitHub', 'LeetCode', 'CSS', 'Flex', 'JavaScript', 'this', 'HTTPS', '数据结构', 'Linux', 'jsdelivr', 'TypeScript', '实用技巧', '模块化', 'Hexo', 'CDN', '排序算法']
    }
  }
}
</script>

<style lang="less" scoped>
.label{
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
  .card-label{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #0c1d1b;
    padding: 40px;
    font-size: 20px;
    border-radius: 25px;
    color: #fff;
    span{
      display: block;
      font-size: 22px;
      margin: 6px;
      height: 30px;
      line-height: 30px;
      border-radius: 10px;
      text-align: center;
      padding: 0px 8px;
    }
    span:hover{
      background-color: #62a4da;
      transition: all 0.3s;
      cursor: pointer;
    }
  }
}
</style>
