<template>
  <div class="link">
    <div class="content">
      <p>友 情 链 接</p>
    </div>
    <div class="card-link">
      <div class="user" v-for="item in users" :key="item.id">
        <a href="http://42.192.52.51/" target="_blank">
          <div class="left">
            <img :src="item.url" alt="">
          </div>
          <div class="right">
            <h4>{{item.title}}</h4>
            <p>{{item.content}}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinkPage',
  data () {
    return {
      users: [
        { id: 1, url: 'https://img.lzxjack.top:99/202208072327435.webp', title: '孤鸟', content: '我，面壁者罗辑，现在对三体世界喊话!' },
        { id: 2, url: 'https://img.lzxjack.top:99/202203311718520.webp', title: 'Yiyang Sun', content: 'Student of UESTC. Frontend developer.' },
        { id: 3, url: 'https://img.lzxjack.top:99/202203311718511.webp', title: '俊劫的学习基地', content: '一个前端学习资源很多的小混子' },
        { id: 4, url: 'https://img.lzxjack.top:99/202208072334375.webp', title: 'lzp的个人网站', content: '唯有热爱，可抵岁月漫长' },
        { id: 5, url: 'https://img.lzxjack.top:99/202203311718513.webp', title: '@小佑前端_', content: '学而不厌 不耻下问' },
        { id: 6, url: 'https://img.lzxjack.top:99/202203311718522.webp', title: '如此肤浅', content: '但行好事，莫问前程！' },
        { id: 7, url: 'https://img.lzxjack.top:99/202209282312587.webp', title: 'Huang Blog', content: '人生如戏' },
        { id: 8, url: 'https://img.lzxjack.top:99/202209282305304.webp', title: '一名菜鸡', content: '一名正在努力的菜鸡' },
        { id: 9, url: 'https://img.lzxjack.top:99/202203311718519.webp', title: 'iMaeGoo’s Blog', content: '虹墨空间站' },
        { id: 10, url: 'https://img.lzxjack.top:99/202204070824513.webp', title: 'XKの博客', content: '一个干净整洁的个人博客' },
        { id: 11, url: 'https://img.lzxjack.top:99/202203311655126.webp', title: '小N同学', content: '青石落晚巷 故人未还乡' },
        { id: 12, url: 'https://img.lzxjack.top:99/202203311718530.webp', title: 'legroft’s blog', content: 'legroft的划水日常' },
        { id: 13, url: 'https://img.lzxjack.top:99/202209282306661.webp', title: 'June 12', content: 'June 12，小陈的个人博客！' },
        { id: 14, url: 'https://img.lzxjack.top:99/202203311200674.webp', title: 'Cu Blog', content: '安全新人小醋的快乐收集处' },
        { id: 15, url: 'https://img.lzxjack.top:99/202208202326032.webp', title: '冬天剥壳', content: '少时曾许凌云志；当许世间第一流。' },
        { id: 16, url: 'https://img.lzxjack.top:99/202203311718512.webp', title: 'yyzBlog', content: '四方上下曰宇，古往今来曰宙' },
        { id: 17, url: 'https://img.lzxjack.top:99/202203311718530.webp', title: '鲨鱼辣椒', content: 'keep real' },
        { id: 18, url: 'https://img.lzxjack.top:99/202203311657068.webp', title: 'BARAN的小站', content: '指尖跳动留下足迹.' },
        { id: 19, url: 'https://img.lzxjack.top:99/202203311718522.webp', title: 'Bai’s Blog', content: '学习 && Share && 只是快乐的生活~' },
        { id: 20, url: 'https://q1.qlogo.cn/g?b=qq&nk=3397926791&s=100', title: '狐仙阁', content: '一个自由分享资源的网站' },
        { id: 21, url: 'https://img.lzxjack.top:99/202203311718518.webp', title: 'FiveFire的博客', content: '啥也不会的菜鸟，开发编程' },
        { id: 22, url: 'https://img.lzxjack.top:99/202203311718526.webp', title: 'CODER·YANG', content: '人生如逆旅，我亦是行人' },
        { id: 23, url: 'https://pljzy.top/images/logo4.jpg', title: '孤鸟', content: 'legroft的划水日常' },
        { id: 24, url: 'https://img.lzxjack.top:99/202208072327435.webp', title: 'ZY 知识库', content: '一个技术探索与分享的平台' },
        { id: 25, url: 'https://img.lzxjack.top:99/202203311718528.webp', title: 'MJ’s Blog', content: '醒亦念卿，梦亦念卿' },
        { id: 26, url: 'https://img.lzxjack.top:99/202304090106039.jpg', title: '满心Hrn', content: '追求让人充实，分享让人快乐' },
        { id: 27, url: 'https://img.lzxjack.top:99/202208072327435.webp', title: '轨道兔', content: '为我自己，为友与仇，人与兽，爱者与不爱者。' },
        { id: 28, url: 'https://img.lzxjack.top:99/202203311702542.webp', title: '途中的树', content: '走出自己的傲慢，承认自己的局限。' },
        { id: 29, url: 'https://img.lzxjack.top:99/20210407120844.ico', title: 'SL’s Blog', content: '梦中做梦,做了个白日梦' },
        { id: 30, url: 'https://img.lzxjack.top:99/202208072329049.webp', title: '山海亦有归期', content: '身为蝼蚁，当有鸿鹄之志' },
        { id: 31, url: 'https://img.lzxjack.top:99/202203311718517.webp', title: '梁典典', content: '梁典典的博客' },
        { id: 32, url: 'https://img.lzxjack.top:99/202203311718509.webp', title: '自然博客', content: 'hello world~' },
        { id: 33, url: 'https://img.lzxjack.top:99/202203311718524.webp', title: '柠檬大师的空间站', content: '一个不善言辞的Java攻城狮' },
        { id: 34, url: 'https://img.lzxjack.top:99/202203311718510.webp', title: 'Ordis', content: 'Ordis’Blog' },
        { id: 35, url: 'https://q1.qlogo.cn/g?b=qq&nk=1010988124&s=100', title: '叶德钦的个人博客', content: '个人学习博客' },
        { id: 36, url: 'https://img.lzxjack.top:99/202203311718516.webp', title: '前端LeBron', content: '詹蜜 字节前端工程师。公众号“前端LeBron”!' },
        { id: 37, url: 'https://img.lzxjack.top:99/202203311718521.webp', title: '时过境迁Wayne博客', content: '以梦为马，不负韶华。' },
        { id: 38, url: 'https://img.lzxjack.top:99/202203311656977.webp', title: 'Hermoso', content: '时间如一捧流沙,缓缓的在指间流尽' },
        { id: 39, url: 'https://img.lzxjack.top:99/202304090106039.jpg', title: 'Leet', content: 'Out of my mind.' },
        { id: 40, url: 'https://img.lzxjack.top:99/202208072334652.webp', title: 'Gahotx', content: 'Don’t repeat yourself' },
        { id: 41, url: 'https://img.lzxjack.top:99/202208072327435.webp', title: '孤鸟', content: '我，面壁者罗辑，现在对三体世界喊话!' },
        { id: 42, url: 'https://img.lzxjack.top:99/202208072327435.webp', title: '孤鸟', content: '我，面壁者罗辑，现在对三体世界喊话!' },
        { id: 43, url: 'https://img.lzxjack.top:99/202208072327435.webp', title: '孤鸟', content: '我，面壁者罗辑，现在对三体世界喊话!' },
        { id: 44, url: 'https://img.lzxjack.top:99/202208072327435.webp', title: '孤鸟', content: '我，面壁者罗辑，现在对三体世界喊话!' },
        { id: 45, url: 'https://img.lzxjack.top:99/202208072327435.webp', title: '孤鸟', content: '我，面壁者罗辑，现在对三体世界喊话!' },
        { id: 46, url: 'https://img.lzxjack.top:99/202208072327435.webp', title: '孤鸟', content: '我，面壁者罗辑，现在对三体世界喊话!' },
        { id: 47, url: 'https://img.lzxjack.top:99/202208072327435.webp', title: '孤鸟', content: '我，面壁者罗辑，现在对三体世界喊话!' },
        { id: 48, url: 'https://img.lzxjack.top:99/202208072327435.webp', title: '孤鸟', content: '我，面壁者罗辑，现在对三体世界喊话!' },
        { id: 49, url: 'https://img.lzxjack.top:99/202208072327435.webp', title: '孤鸟', content: '我，面壁者罗辑，现在对三体世界喊话!' },
        { id: 50, url: 'https://img.lzxjack.top:99/202208072327435.webp', title: '孤鸟', content: '我，面壁者罗辑，现在对三体世界喊话!' },
        { id: 51, url: 'https://img.lzxjack.top:99/202208072327435.webp', title: '孤鸟', content: '我，面壁者罗辑，现在对三体世界喊话!' },
        { id: 52, url: 'https://img.lzxjack.top:99/202208072327435.webp', title: '孤鸟', content: '我，面壁者罗辑，现在对三体世界喊话!' },
        { id: 53, url: 'https://img.lzxjack.top:99/202208072327435.webp', title: '孤鸟', content: '我，面壁者罗辑，现在对三体世界喊话!' },
        { id: 54, url: 'https://img.lzxjack.top:99/202208072327435.webp', title: '孤鸟', content: '我，面壁者罗辑，现在对三体世界喊话!' },
        { id: 55, url: 'https://img.lzxjack.top:99/202208072327435.webp', title: '孤鸟', content: '我，面壁者罗辑，现在对三体世界喊话!' },
        { id: 56, url: 'https://img.lzxjack.top:99/202208072327435.webp', title: '孤鸟', content: '我，面壁者罗辑，现在对三体世界喊话!' },
        { id: 57, url: 'https://img.lzxjack.top:99/202208072327435.webp', title: '孤鸟', content: '我，面壁者罗辑，现在对三体世界喊话!' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.link{
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
  .card-link{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 2000px;
    background-color: #0c1d1b;
    padding: 40px;
    font-size: 20px;
    border-radius: 25px;
    color: #fff;
    .user{
      width: 290px;
      height: 90px;
      background-color: #163633;
      border-radius: 20px;
      padding: 10px;
      a{
        display: block;
        display: flex;
        justify-content: space-between;
        .left{
          img{
            width: 70px;
            height: 70px;
            border-radius: 10px;
          }
        }
        .right{
          width: 100%;
          padding-left: 10px;
          h4{
            text-align: center;
            color: #62a4da;
            font-size: 20px;
          }
          p{
            text-align: left;
            font-size: 16px;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
