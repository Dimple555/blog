<template>
  <div class="say">
    <div class="content">
      <p>自 言 自 语</p>
    </div>
    <div class="saycard">
      <div class="sayitem" v-for="item in list" :key="item.id">
        <div class="avatorBox">
          <img :src="item.avatar" alt="">
        </div>
        <div class="contenBox">
          <p class="content-saying">{{item.saying}}</p>
          <p class="content-date">{{item.date}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/avatar/01.jpg'
import img2 from '@/assets/avatar/02.jpg'
import img3 from '@/assets/avatar/03.jpg'
import img4 from '@/assets/avatar/04.jpg'
import img5 from '@/assets/avatar/05.jpg'
import img6 from '@/assets/avatar/06.jpg'
import img7 from '@/assets/avatar/07.jpg'
import img8 from '@/assets/avatar/08.jpg'
import img9 from '@/assets/avatar/09.jpg'
import img10 from '@/assets/avatar/10.jpg'
import img11 from '@/assets/avatar/11.jpg'
import img12 from '@/assets/avatar/12.jpg'
import img13 from '@/assets/avatar/13.jpg'
import img14 from '@/assets/avatar/14.jpg'
import img15 from '@/assets/avatar/15.jpg'
export default {
  name: 'SayPage',
  data () {
    return {
      list: [
        {
          id: 1,
          avatar: img1,
          saying: '工作后明显变懒了😂，2024 继续学习、更新',
          date: '2024-03-18 11:08:04'
        },
        {
          id: 2,
          avatar: img2,
          saying: '所有数据一不小心全删除了😥😥，只恢复到4月的数据',
          date: '2023-09-23 17:11:18'
        },
        {
          id: 3,
          avatar: img3,
          saying: '最近时间把博客后台管理重写一下😥',
          date: '2023-04-04 00:01:55'
        },
        {
          id: 4,
          avatar: img4,
          saying: '还是老老实实用对象存储作图床吧，jsDelivr+Github太不稳定了😢😢',
          date: '2022-06-01 20:33:57'
        },
        {
          id: 5,
          avatar: img5,
          saying: '今日终于把博客重构完上线了！😴😁',
          date: '2022-03-29 20:46:40'
        },
        {
          id: 6,
          avatar: img6,
          saying: '还剩下黑暗模式/壁纸切换功能，再适配移动端，重构版就完成了！😁',
          date: '2022-03-23 21:18:56'
        },
        {
          id: 7,
          avatar: img7,
          saying: '最近使用自建的脚手架重构博客，优化代码逻辑，样式基本不变（主要是之前写的代码太烂了😓😓）。',
          date: '2022-03-11 23:44:48'
        },
        {
          id: 8,
          avatar: img8,
          saying: '新年好！🌟🌟',
          date: '2022-01-01 14:57:45'
        },
        {
          id: 9,
          avatar: img9,
          saying: '昨日发现部署在服务器上的发邮件服务API挂了，好几条留言没及时看到😰😰。检查了一下，是API接口SSL证书的问题，接口不加证书用http就可以，为什么突然挂，目前未知。今天将发邮件服务放到了云函数上😴',
          date: '2021-12-13 16:46:54'
        },
        {
          id: 10,
          avatar: img10,
          saying: '想把博客改造成服务端渲染的，学习学习😰😰',
          date: '2021-10-07 01:03:36'
        },
        {
          id: 11,
          avatar: img11,
          saying: '找到了一个宝藏网站：https://chinese.freecodecamp.org/',
          date: '2021-09-19 21:36:22'
        },
        {
          id: 12,
          avatar: img12,
          saying: '个人博客系统正式上线啦！😉😉😉',
          date: '2021-08-25 10:49:22'
        },
        {
          id: 13,
          avatar: img13,
          saying: '根据 GitHub 仓库上每次提交的的 commit 记录，编写建站日志...✔️',
          date: '2021-08-23 21:40:26'
        },
        {
          id: 14,
          avatar: img14,
          saying: '博客系统基本完成，当然后期还会稍微改改细节、添加功能！开始搬运文章...💦💦💦',
          date: '2021-08-20 17:05:03'
        },
        {
          id: 15,
          avatar: img15,
          saying: '前后台项目仓库分离，并使用腾讯云 webify 自动部署。😉',
          date: '2021-07-27 21:28:22'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.say{
  width: 1000px;
  padding-top: 170px;
  margin: 0 auto;
  .content{
    padding-bottom: 200px;
    text-align: center;
    p{
      font-size: 56px;
      font-weight: 700;
      color: #fff;
    }
  }
  .saycard{
    // display: flex;
    // flex-direction: column;
    // justify-content: space-between;
    background-color: #0c1d1b;
    padding: 40px;
    font-size: 20px;
    border-radius: 25px;
    .sayitem{
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      .avatorBox{
        margin-right: 20px;
        img{
          width: 70px;
          line-height: 32px;
          border-radius: 14px;
        }
      }
      .contenBox{
        width: 830px;
        border-radius: 14px;
        padding: 20px 20px 10px 20px;
        background-color: #163633;
        color: #fff;
        .content-saying{
          font-size: 20px;
          line-height: 32px;
        }
        .content-date{
          font-size:18px;
          width: 200px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          background: #275f59;
          border-radius: 10px;
          margin-left: 600px;
        }
      }
    }
  }
}
</style>
