<template>
  <div class="tags">
    <div class="content">
      <p>内容细节</p>
    </div>
    <div class="card-tags">

    </div>
  </div>
</template>

<script>
export default {
  name: 'TagPage'
}
</script>

<style lang="less" scoped>
.tags{
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
  .card-tags{
    height: 500px;
      background-color: #0c1d1b;
      padding: 40px;
      font-size: 20px;
      border-radius: 25px;
      color: #fff;
  }
}
</style>
