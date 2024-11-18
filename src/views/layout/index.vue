<template>
  <div class="layout">
    <!-- 设置通用样式 -->
    <div class="nav">
      <div class="nav-content wrapper">
        <div class="left">
          <a class="iconfont icon-home" href="#/home"></a>
        </div>
        <div class="center">
          <li>
            <a href="#">文章</a>
            <div class="select">
              <a href="#/find">找文章</a>
              <a href="#/category">分类</a>
              <a href="#/label">标签</a>
            </div>
          </li>
          <li><a href="#/say">说说</a></li>
          <li><a href="#/message">留言</a></li>
          <li><a href="#/link">友链</a></li>
          <li><a href="#/production">作品</a></li>
          <li><a href="#/log">建站</a></li>
          <li><a href="#/about">关于</a></li>
        </div>
        <div class="right">
          <span><a class="iconfont icon-icon-gerenzhongxinhuanse"></a></span>
          <span><a class="iconfont icon-shezhi"></a></span>
        </div>
      </div>
    </div>
    <!-- 二级路由出口： 二级路由所展示的位置 -->
    <router-view></router-view>
    <!-- 底部 -->
    <div class="foot">
      <p>个人博客系统  [源代码]</p>
      <p>浙ICP备2020043821号-1</p>
      <p>
        <span class="siteFrame--GHenQInxkJ">React</span>
        <span class="siteFrame--GHenQInxkJ">React Router</span>
        <span class="siteFrame--GHenQInxkJ">Redux</span>
        <span class="siteFrame--GHenQInxkJ">Webpack</span>
        <span class="siteFrame--GHenQInxkJ">AntD</span>
        <span class="siteFrame--GHenQInxkJ">ahooks</span>
        <span class="siteFrame--GHenQInxkJ">CloudBase</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex'
}
</script>

<style lang="less" scoped>
.layout {
  background: url('@/assets/bg0.webp') center / cover no-repeat fixed;
  height: 100vh;/* 使布局占满整个视口高度 */
  overflow: auto;
}
.nav{
  height: 60px;
  padding-top: 8px;
  background-color: #163633;
  .nav-content{
    height: 44px;
    line-height:44px;
    display: flex;
    justify-content: space-between;
    font-size: 22px;
    color: #fff;
    font-weight: 700;
    .left{
    width: 60px;
    text-align: center;
    cursor: pointer;
    a{
      color: #fff;
      font-size: 28px;
    }
    }
    .left:hover{
      background: #62a4da;
      border-radius: 14px;
    }
    .center{
      position: relative;
      width: 540px;
      display: flex;
      justify-content: space-between;
      li{
        width: 60px;
        text-align: center;
        cursor: pointer;
        a{
          color: #fff;
        }
        .select{
          position: absolute;
          left: -10px;
          top: -150px;
          width: 90px;
          padding: 10px 10px 0 ;
          border-radius: 14px;
          font-size: 18px;
          font-weight: 400;
          background-color: #163633;
          transition: all 0.4s;
          a{
            display: block;
            height: 34px;
            line-height: 34px;
            margin-bottom: 10px;
            border-radius: 12px;
            background-color: #275f59;
          }
          a:hover{
            background-color: #62a4da;
          }
        }
      }
      li:hover{
        border-radius: 14px;
        background-color: #62a4da;
      }
      li:hover .select{
        top:60px
      }
    }
    .right{
      display: flex;
      justify-content: space-between;
      span{
        display: block;
        width: 60px;
        height: 44px;
        text-align:center;
        line-height: 44px;
        margin-left: 20px;
        cursor: pointer;
        a{
          font-size: 28px;
        }
      }
      span:hover{
          border-radius: 14px;
          background: #62a4da;
        }
    }
  }
}
.foot{
  height: 120px;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  text-align: center;
  font-size: 16px;
  padding-top: 15px;
  margin-top:30px;
  p{
    margin-bottom: 12px;
    span{
      padding: 2px 8px;
      margin-right:10px;
      border-radius: 6px;
      background-color: #0c1d1b;
    }
    span:hover{
      background-color: #62a4da;
    }
  }
}
</style>
