<template>
  <div class="log">
    <div class="content">
      <p>建 站 日 志</p>
    </div>
    <div class="card-log">

    </div>
  </div>
</template>

<script>
export default {
  name: 'LogPage'

}
</script>

<style lang="less" scoped>
.log{
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
  .card-log{
    height: 11900px;
    background-color: #0c1d1b;
    padding: 40px;
    font-size: 20px;
    border-radius: 25px;
    color: #fff;
  }
}
</style>
