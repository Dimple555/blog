<template>
  <div class="production">
    <div class="content">
      <p>小 作 品</p>
    </div>
    <div class="card-production">1</div>
  </div>
</template>

<script>
export default {
  name: 'ProductionPage'
}
</script>

<style lang="less" scoped>
.production{
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
  .card-production{
    height: 2000px;
    background-color: #0c1d1b;
    padding: 40px;
    font-size: 20px;
    border-radius: 25px;
    color: #fff;
  }
}
</style>
