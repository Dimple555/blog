<template>
  <div class="about">
    <div class="content">
      <p>关 于</p>
    </div>
    <div class="card-about">
      <div class="switch">
        <el-switch
          v-model="value"
          active-color="#163633"
          inactive-color="#163633"
          active-text="关于我"
          inactive-text="关于本站">
        </el-switch>
      </div>
      <div class="switch-box" v-show="!value">
        <h3>📊文章分布</h3>
        <div ref="charts" class="charts"></div>
        <div class="marked">
          <h3>✏️🖥️关于本站</h3>
          <p>本站是自己学习了<strong>React</strong>后，用<strong>React</strong>写的个人博客系统，包括<strong>博客展示页面</strong>和<strong>后台管理页面</strong>，现在看到的就是<strong>博客展示页面</strong>~ </p>
          <p>主要整理、分享一些自己的学习笔记和心得，若有错误，欢迎大家指出、交流！</p>
          <p>✅目前<strong>博客展示页面</strong>已成功升级<span>2.0</span>版本，样式基本保持原样，主要是逻辑代码进行了重构，优化了整体的性能😎。 </p>
          <p>❓<strong>后台管理页面</strong>也有重构计划，但接下来一段时间要忙起来了，<strong>短期内</strong>不会有大改动。</p>
          <p>🔖博客主要使用到的库如下：</p>
          <p><strong>前端</strong>（博客展示页面）：</p>
          <ul>
            <li>主要技术栈为<span>react</span>+<span>hooks</span>+<span>TS</span></li>
            <li>使用自建<span>webpack</span>脚手架<a href="https://github.com/lzxjack/my-react" target="_blank">my-react</a>开发</li>
            <li><span>react</span>相关库<span>React-Router</span>、<span>Redux</span>等</li>
            <li><span>AntD</span>组件库（自定义样式/按需导入）</li>
            <li><span>ahooks</span>库提供常用的<span>hooks</span></li>
            <li><span>axios</span>网络请求库</li>
            <li><span>echarts</span>图标库绘制饼图</li>
            <li>时间格式化工具<span>dayjs</span></li>
            <li><span>markdown</span>格式渲染工具<span>marked</span></li>
            <li>代码高亮渲染工具<span>highlight.js</span></li>
            <li>其他常用工具库等</li>
          </ul>
          <p><strong>其它</strong>:</p>
          <ul>
            <li><span>eslint</span>规范代码风格</li>
            <li><span>commitlint</span>保证<span>git commit</span>提交规范</li>
          </ul>
          <h3>✏️✔️本站链接</h3>
          <p>如果想和博主<strong>交换友链</strong>，可以在<a href="https://lzxjack.top/msg" target="_self">「留言板」</a>留言，欢迎各路大佬交流~</p>
          <p>我的链接：</p>
          <div class="footer">
            <p><span>name</span>: 飞鸟</p>
            <p><span>avatar</span>:<span>https</span>://lzxjack.top/</p>
            <p><span>link</span>:<span>https</span>://lzxjack.top/</p>
            <p><span>descr</span>: 一只平凡的鸟罢了。</p>
          </div>
        </div>
      </div>
      <div class="switch-me" v-show="value">
        <h3>✏️👋-你好啊，我叫飞鸟！</h3>
        <ul>
          <li>  👀 2023年毕业，就职于<strong>北京</strong>某司</li>
          <li>  💻 热爱<strong>前端开发</strong></li>
          <li>  👨&zwj;🏭希望成为一名<strong>优秀前端工程师</strong></li>
        </ul>
        <p>这是我自己写的<strong>个人博客</strong>，感谢你在茫茫互联网中找到了这里～</p>
        <p>请多多指教！😝😝😝</p>
        <p>📖<strong>联系方式</strong></p>
        <ul>
          <li>🐧QQ：<span>965555169</span></li>
          <li>✉️邮箱：<span>lzxjack1998@163.com</span></li>
          <li>💻GitHub：<a href="https://github.com/lzxjack">https://github.com/lzxjack</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'AboutPage',
  data () {
    return {
      value: false
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      this.chart = echarts.init(this.$refs.charts)
      const option = {
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            type: 'pie',
            radius: '90%',
            data: [
              { value: 18, name: 'Leetspan 题解' },
              { value: 15, name: 'JavaScript 数据结构与算法' },
              { value: 7, name: 'HTTP 学习记录' },
              { value: 6, name: '站点搭建' },
              { value: 22, name: 'React 学习笔记' },
              { value: 3, name: 'Hexo 博客相关' },
              { value: 9, name: 'JavaScript 手撕代码' },
              { value: 14, name: 'CSS' },
              { value: 5, name: '杂七杂八' },
              { value: 21, name: 'JavaScript 常见问题' },
              { value: 5, name: 'Demo' },
              { value: 25, name: '前端基础' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            label: {
              show: true,
              position: 'outside', // 标签显示在扇形区外部
              fontSize: 18, // 标签字体大小
              color: '#fff' // 标签字体颜色
            }
          }
        ]
      }
      this.chart.setOption(option)
    }
  }
}
</script>

<style lang="less" scoped>
.about {
  width: 1000px;
  padding-top: 170px;
  margin: 0 auto;
  text-align: center;
  .content {
    padding-bottom: 200px;
    text-align: center;
    p {
      font-size: 56px;
      font-weight: 700;
      color: #fff;
    }
  }
  .card-about {
    background-color: #0c1d1b;
    padding: 40px;
    font-size: 20px;
    border-radius: 25px;
    color: #fff;
    .switch{
      text-align: left;
      margin-bottom: 20px;
      ::v-deep .el-switch{
        height: 50px;
        .el-switch__label * {
          line-height: 0;
          vertical-align: middle;
          font-size: 34px !important;
          font-weight: 700;
          margin-right: 20px;

        }
        .el-switch__core{
          width: 80px !important;
          height: 36px;
          border-radius: 18px;
          margin-right: 20px;
        }
        .el-switch__core:after{
          top: 0;
          width: 36px;
          height: 36px;
          background-color: #275f59;
        }
        .el-switch__label.is-active{
          color: #fff;
        }
      }
      /deep/ .el-switch.is-checked .el-switch__core::after {
        left: 100%;
        margin-left: -36px;
      }
    }
    .switch-box{
      text-align: left;
      h3{
        height: 32px;
        line-height: 32px;
        font-weight: 700;
        margin-bottom: 10px;
      }
      .charts{
        height: 400px;
        vertical-align: center;
        margin-bottom: 20px;
      }
      .marked{
        line-height: 32px;
        h3{
          margin-bottom: 20px;
        }
        p{
          font-size: 20px;
          line-height: 32px;
          margin-bottom: 20px;
          strong{
            color: #62a4da;
          }
          span{
            padding: 3px 8px;
            border-radius: 8px;
            margin: 0 3px;
            background-color: #1d4743;
          }
        }
        ul{
          margin-bottom: 20px;
          li{
            position: relative;
            height: 40px;
            padding:4px  40px ;
            span{
              line-height: 32px;
              padding: 3px 8px;
              border-radius: 8px;
              margin: 0 3px;
              background-color: #1d4743;
            }
            a{
              color: #62a4da;
              text-decoration: underline;
              text-decoration-color:#62a4da ;
            }
            a:hover{
              color: red;
              text-decoration-color:red;
            }
          }
          li::before{
            position: absolute;
            left:15px;
            top:15px ;
            content: '';
            width: 10px;
            height: 10px;
            border-radius: 10px;
            background-color: #fff;
          }
        }
        .footer{
          background-color: #252b30;
          border-radius: 20px;
          padding: 10px 20px;
          p{
            font-size: 16px;
            margin-bottom: 10px;
            span{
              background-color: transparent;
              color:#62a4da ;
            }
          }
          p:last-child{
            margin-bottom: 0;
          }
        }
      }
    }
    .switch-me{
      text-align: left;
      font-size: 20px;
      h3{
        margin-bottom: 15px;
        font-size: 26px;
      }
      ul{
        margin-bottom: 20px;
        li{
          padding:4px 40px;
          span{
            padding: 3px 8px;
            border-radius: 8px;
            margin: 0 3px;
            background-color: #1d4743;
          }
          a{
            color: #62a4da;
            text-decoration: underline;
            text-decoration-color:#62a4da ;
          }
          a:hover{
            color: red;
            text-decoration-color:red;
          }
        }
      }
      p{
        margin-bottom: 20px;
        strong{
            color: #62a4da;
        }
      }
    }
  }
}
</style>
