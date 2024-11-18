<template>
  <div class="home">
    <div class="content">
      <p class="tittle">飞 鸟 小 站</p>
      <p class="main">烟雪微月澹长空，银汉秋期万古同。</p>
    </div>
    <div class="body">
      <div class="section">
        <div class="items">
          <div class="card" v-for="item in 8" :key="item">
          <div class="title">一道代码题看 CommonJS 模块化规范</div>
          <p class="contents">根据CommonJS模块化规范，一个单独的JS文件就是一个模块，每个模块是一个单独的作用域，在模块内部定义的变量，无法在其他模块中所读取。若想要在模块间进行通信，需使用模块的导出与导入语法：单独的作用域，在模块内部定义的变量，无法在其他模块中所读取。若想要在模块间进行通信，需使用模块的导出与导</p>
          <div class="info">
            <span class="date">2022-09-20</span>
            <div class="tags">
              <span>JavaScript</span>
              <span>模块化</span>
          </div>
          </div>
          </div>
        </div>
        <div class="pagination">
          <!-- :total:数据的总条目数，:page-size:每页显示的条目数 -->
          <el-pagination
            background
            layout="prev, pager, next"
            :total="152"
            :page-size="8"
            :pager-count="7">
          </el-pagination>
        </div>
      </div>
      <div class="aside">
        <div class="card-one">
          <p class="text">
            晚上好，
            <br>
            我叫<span class="color">飞鸟</span>,
            <br>
            欢迎来到
            <br>
            我的<span class="color">个人博客</span>。
          </p>
          <img src="https://img.lzxjack.top:99/202203302348298.webp" class="avator" alt="">
        </div>
        <div class="card-two">
          <li><a href="https://github.com/" target="_blank" class="iconfont icon-github"></a></li>
          <li><a href="https://www.csdn.net/" target="_blank" class="iconfont icon-csdn-copy-copy"></a></li>
          <li class="li-code">
            <a href="#"  class="iconfont icon-weixin"></a>
            <div><img src="https://img.lzxjack.top:99/202203302344287.webp" alt=""></div>
          </li>
          <li class="li-code">
            <a href="#"  class="iconfont icon-QQ"></a>
            <div><img src="https://img.lzxjack.top:99/202203302344487.webp" alt=""></div>
          </li>
        </div>
        <div class="card-three">
          <li>
            <p>文章</p>
            <p>150</p>
          </li>
          <li>
            <p>分类</p>
            <p>12</p>
          </li>
          <li>
            <p>标签</p>
            <p>45</p>
          </li>
        </div>
        <div class="card-four">
          <p>后台管理平台已更新2.0版本，欢迎右上角体验~</p>
        </div>
        <div class="card-five"></div>
        <div class="card-six">
          <div class="card-top">
            <li><span>Node.js</span><span>BFC</span><span>动画</span></li>
            <li><span>babel</span><span>Fetch</span><span>Git</span><span>jQuery</span></li>
            <li><span>CloudBase</span><span>ES6</span><span>浏览器</span></li>
            <li><span>正则表达式</span><span>nginx</span><span>Redux</span></li>
            <li><span>AntD</span><span>搜索算法</span><span>脚本</span></li>
            <li><span>Cpp</span><span>JSON</span><span>HTTP</span></li>
            <li><span>Webify</span><span>性能优化</span></li>
            <li><span>Webpack</span><span>HTML</span><span>PubSub</span></li>
            <li><span>Axios</span><span>React</span><span>网络基础</span></li>
            <li><span>数组</span><span>TCP</span><span>GitHub</span></li>
            <li><span>LeetCode</span><span>CSS</span><span>Flex</span></li>
            <li><span>JavaScript</span><span>this</span><span>HTTPS</span></li>
            <li><span>数据结构</span><span>Linux</span><span>jsdelivr</span></li>
            <li><span>TypeScript</span><span>实用技巧</span></li>
            <li><span>模块化</span><span>Hexo</span><span>CDN</span></li>
            <li><span>排序算法</span></li>
          </div>
          <div class="card-bottom">
            <p><span>总浏览量</span> <span>6891次</span></p>
            <p><span>运行时间</span> <span>1429天</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style lang="less" scoped>
.home{
  width: 1200px;
  padding-top: 320px;
  margin: 0 auto;
  .content{
    color: #fff;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 380px;
    .tittle{
      font-size: 56px;
      font-weight: 600;
      height: 88px;
      line-height: 88px;
      margin-bottom: 10px;
    }
    .main{
      font-size: 28px;
      height: 44px;
      line-height: 44px;
    }
  }
  .body{
    display: flex;
    justify-content: space-between;
    width: 1200px;
    .section{
      width: 920px;
      .card{
        height: 250px;
        padding: 20px;
        margin-bottom: 20px;
        border-radius: 18px;
        text-align:center;
        color: #fff;
        background-color: #0c1d1b;
        .title{
          height: 80px;
          line-height: 80px;
          font-size: 28px;
          font-weight: 700;
        }
        .contents{
          font-size: 18px;
          height: 80px;
          line-height: 26px;
        }
        .info{
          display: flex;
          justify-content: space-between;
          height: 50px;
          padding-top: 20px;
          font-size: 16px;
          .date{
            width: 120px;
            padding: 0 5px;
            border-radius: 8px;
            line-height: 30px;
            background-color: #163633;
          }
          .tags {
            display: flex;
            align-items: center;
            span {
              padding: 5px 10px;
              border-radius: 8px;
              background-color: #163633;
              font-size: 16px;
              margin-left: 20px;
            }
          }
        }
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
    .aside{
      width: 260px;
      height: 1500px;
      color: #fff;
      .card-one{
        position: relative;
        height: 200px;
        border-radius: 18px;
        background: #0c1d1b;
        overflow: hidden;
        margin-bottom: 20px;
        .text{
          font-size: 20px;
          position: absolute;
          top: 30px;
          left: 20px;
          line-height: 34px;
          .color{
            color: #62a4da;
          }
        }
        .avator{
          position: absolute;
          top: 0;
          right:-20px;
        }
      }
      .card-two{
        display: flex;
        justify-content: space-between;
        height: 84px;
        background-color: #0c1d1b;
        border-radius: 18px;
        margin-bottom: 20px;
        padding: 20px;
        li{
          position: relative;
          width: 44px;
          height: 44px;
          padding: 7px;
          a{
            color: #fff;
            font-size: 30px;
          }
        }
        .li-code div{
          display: none;
          position: absolute;
          left: -50px;
          top: -160px;
          width: 160px;
          height: 160px;
          border-radius: 14px;
          background-color:#0c1d1b;
          img{
            width: 120px;
            height: 120px;
            transform: translate(20px,20px);
          }
        }
        li:hover{
          background-color: #62a4da;
          border-radius: 12px;
        }
        .li-code:hover div{
          display: block;
        }
      }
      .card-three{
        height: 80px;
        background-color: #0c1d1b;
        border-radius: 18px;
        margin-bottom: 20px;
        padding:10px 20px;
        text-align: center;
        display: flex;
        justify-content: space-around;
        li{
          p{
            font-size: 18px;
            height: 30px;
            line-height: 30px;
          }
          p:last-child{
            color: #62a4da;
            font-weight: 700;
          }
        }
      }
      .card-four{
        height: 120px;
        background-color: #0c1d1b;
        border-radius: 18px;
        margin-bottom: 20px;
        padding: 20px;
        p{
          padding: 14px;
          background-color:#163633;
          border-radius: 18px;
          line-height: 25px;
        }
      }
      .card-five{
        height: 260px;
        background-color: #0c1d1b;
        border-radius: 18px;
        margin-bottom: 20px;
      }
      .card-six{
        position: sticky;
        top:80px;
        .card-top{
          height: 564px;
          padding: 10px;
          background-color: #0c1d1b;
          border-radius: 18px;
          margin-bottom: 20px;
          li{
            height: 30px;
            line-height: 30px;
            font-size: 18px;
            margin: 4px 0;
            span{
              padding: 3px 8px;
              height: 30px;
              line-height: 30px;
            }
            span:hover{
              background-color: #62a4da;
              border-radius: 10px;
              cursor: pointer;
            }
          }
        }
        .card-bottom{
          height: 120px;
          background-color: #0c1d1b;
          border-radius: 18px;
          margin-bottom: 20px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          p{
            width: 220px;
            height: 36px;
            line-height: 36px;
            text-align:center;
            font-size: 18px;
            span:first-child{
              margin-right: 20px;
            }
          }
          p:hover{
            border-radius: 12px;
            background: #62a4da;
          }
        }
      }
    }
  }
}
</style>
