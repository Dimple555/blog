<template>
  <div class="message">
    <div class="content">
      <p>留 言 板</p>
    </div>
    <div class="card-message">
      <div class="header">
        <p>凌晨好，我叫<span>飞鸟</span></p>
        <p>欢迎来到我的博客!</p>
        <p>可以在这里留言、吐槽，</p>
        <p class="friend">交换友链。</p>
      </div>
      <div class="siteLink">
        <div class="links">本站链接:</div>
        <p>name: 飞鸟</p>
        <p>link: https://lzxjack.top</p>
        <p>descr: 一只平凡的鸟罢了。</p>
      </div>
      <div class="divider"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessagePage'
}
</script>

<style lang="less" scoped>
.message{
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
  .card-message{
    height: 2000px;
    background-color: #0c1d1b;
    padding: 40px;
    font-size: 20px;
    border-radius: 25px;
    color: #fff;
    .header{
      font-size: 30px;
      font-weight: 700;
      p{
        margin-bottom: 10px;
        span{
          color: #62a4da;
        }
      }
      .friend{
        color:#62a4da ;
      }
    }
    .siteLink{
      text-align: left;
      .links{
        font-size: 26px;
        color: #a7a7a7;
        font-weight: 700;
      }
      p{
        font-size: 20px;
        line-height: 32px;
      }
    }
    .divider{
      border-top: 5px dashed #a7a7a7;
      margin: 24px 0;
      padding-top: 20px;
    }
  }
}
</style>
