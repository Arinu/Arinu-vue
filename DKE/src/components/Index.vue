<template>
  <div>
    <Carousel></Carousel>
    <div class="container">
      <div class="home_bg1"></div>
    </div>
    <div class="container home_tab1">
      <div class="row">
        <div class="col-md-4 col-sm-4">
          <div class="home_box1">
            <div class="photo">
              <a class="phone" href="http://www.dke.cn/mbad.html"></a>
            </div>
            <p class="title">移动广告</p>
            <p class="info">国内最好的移动广告平台，app推广平台，制定营销方案，汇集媒体资源，效果营销统计，更精准的广告投放，更多样的展现方式。</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-4">
          <div class="home_box1">
            <div class="photo">
              <a class="game" href="http://www.dke.cn/game.html"></a>
            </div>
            <p class="title">游戏联运</p>
            <p class="info">价值流通，共创共赢，系统化排序，资源排期，营销推广，聚合好产品给用户为好产品引导用户。</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-4">
          <div class="home_box1">
            <div class="photo">
              <a class="weixin" href="http://www.dke.cn/weixin.html"></a>
            </div>
            <p class="title">微信推广</p>
            <p class="info">点客传媒微信推广领航者，专业的运营团队，进行针对性用户研究，新颖的互动方式，全方位的服务推广。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container home_tab1">
      <div class="row">
        <div class="col-md-4 col-sm-4">
          <div class="home_box1">
            <div class="photo">
              <a class="dollar" href="http://www.dke.cn/dollar.html"></a>
            </div>
            <p class="title">电商金融</p>
            <p class="info">整合智能手机领域最优质的应用及广告资源，一流的手机网站及应用聚合，打造出无线营销的高端俱乐部，帮助客户争赢市场。</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-4">
          <div class="home_box1">
            <div class="photo">
              <a class="koubei" href="http://www.dke.cn/koubei.html"></a>
            </div>
            <p class="title">口碑营销</p>
            <p class="info">目标用户细化，行业最专业的口碑营销团队,丰富的口碑营销经验。引爆资源热点，对品牌和产品的信息内容整合进行营销。</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-4">
          <div class="home_box1">
            <div class="photo">
              <a class="anli" href="http://www.dke.cn/anli.html"></a>
            </div>
            <p class="title">案例精选</p>
            <p class="info">通过合作促进产品销量，传递品牌价值给目标客群，新技术的应用吸引用户关注品牌，深度营销目标用户。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid home_bg2">
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-sm-12 col-xs-12">
            <div class="row">
              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="home_box2">
                  <p class="title">新闻资讯</p>
                  <p class="info">【移动广告前景:手机搜索特性解析】近年来移动互联得到了快速的发展，据国外高级互联网分析师吉蒙——蒙斯特（GeneMunster）称，2015年谷歌的移动广告收入将高达45亿美元，较2014年的2...</p>
                  <span></span>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="home_box2">
                  <p class="title">点客公告</p>
                  <p class="info">【点客五周年，百万流量大放送！】特大回馈，为祝点客成立5周年，特给所有新老客户免费赠送百万流量优惠！活动时间：2016-08月活动对象：所有的APP开发商详情联系我们商务销售ren'yuan...</p>
                  <span></span>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="home_box2">
                  <p class="title">市场分析</p>
                  <p class="info">【2016年Q1财报 移动广告收入同比115.3%增长】DoNews5月10日消息，凤凰网公布2016年第一季度财报。财报显示，截至2016年3月31日，凤凰网2016年第一季度总收入为人民币3...</p>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5 col-sm-12 col-xs-12">
            <div class="home_box2_right">
              <img class="video_title img-responsive" src="http://www.dke.cn/images/video_title.png" alt="">
              <img class="video_info img-responsive" src="http://www.dke.cn/images/video.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="show">
      <!--预加载-->
      <img src="http://www.dke.cn/theme/home_phone_green.png" alt="">
      <img src="http://www.dke.cn/theme/home_game_green.png" alt="">
      <img src="http://www.dke.cn/theme/home_weixin_green.png" alt="">
      <img src="http://www.dke.cn/theme/home_dollar_green.png" alt="">
      <img src="http://www.dke.cn/theme/home_koubei_green.png" alt="">
      <img src="http://www.dke.cn/theme/home_anli_green.png" alt="">
    </div>
  </div>
</template>
<script>
  import Carousel from './carousel/Carousel.vue'
  export default {
    name: 'index',
    components: {
      Carousel
    }
  }
</script>
<style scoped>
  .home_bg1{
    background: url(http://www.dke.cn/theme/home_1.png) center center no-repeat;
    height: 120px;
  }
  .home_tab1 .home_box1{
    width: 250px;
    margin: 0 auto;
  }
  .home_tab1 .photo{
    height: 130px;
  }
  .home_tab1 a{
    display: block;
    height: 130px;
  }
  .home_tab1 p.title{
    text-align: center;
    font-size: 20px;
  }
  .home_tab1 p.info{
    color: #999;
    line-height: 1.7;
    margin-bottom: 20px;
  }
  .home_tab1 a.phone{
    background: url(http://www.dke.cn/theme/home_phone_blue.png) no-repeat center center;
  }
  .home_tab1 a.game{
    background: url(http://www.dke.cn/theme/home_game_blue.png) no-repeat center center;
  }
  .home_tab1 a.weixin{
    background: url(http://www.dke.cn/theme/home_weixin_blue.png) no-repeat center center;
  }
  .home_tab1 a.dollar{
    background: url(http://www.dke.cn/theme/home_dollar_blue.png) no-repeat center center;
  }
  .home_tab1 a.koubei{
    background: url(http://www.dke.cn/theme/home_koubei_blue.png) no-repeat center center;
  }
  .home_tab1 a.anli{
    background: url(http://www.dke.cn/theme/home_anli_blue.png) no-repeat center center;
  }
  .home_tab1 a.phone:hover{
    background: url(http://www.dke.cn/theme/home_phone_green.png) no-repeat center center;
  }
  .home_tab1 a.game:hover{
    background: url(http://www.dke.cn/theme/home_game_green.png) no-repeat center center;
  }
  .home_tab1 a.weixin:hover{
    background: url(http://www.dke.cn/theme/home_weixin_green.png) no-repeat center center;
  }
  .home_tab1 a.dollar:hover{
    background: url(http://www.dke.cn/theme/home_dollar_green.png) no-repeat center center;
  }
  .home_tab1 a.koubei:hover{
    background: url(http://www.dke.cn/theme/home_koubei_green.png) no-repeat center center;
  }
  .home_tab1 a.anli:hover{
    background: url(http://www.dke.cn/theme/home_anli_green.png) no-repeat center center;
  }
  .home_bg2{
    background-color: #e9eff3;
  }
  .home_bg2 .home_box2{
    width: 200px;
    height: 340px;
    padding: 20px;
    margin: 50px auto;
    position: relative;
    background-color: #fff;
  }
  .home_bg2 .home_box2 span{
    top: 0;
    left: 0;
    position: absolute;
    border-top: 10px solid #53b92f;
    border-left: 10px solid #53b92f;
    border-right: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
  .home_bg2 .title{
    color: #4D4D4D;
    font-size: 22px;
    margin-top: 10px;
    text-align: center;
  }
  .home_bg2 .info{
    color: #777;
    margin-top: 40px;
    line-height: 1.7;
  }
  .home_box2_right{
    margin: 50px auto;
  }
  .home_box2_right .video_title{
    margin: 0 auto;
  }
  .home_box2_right .video_info{
    margin: 19px auto 0;
  }
  .show{
    display: none !important;
  }
  @media (max-width: 1200px){
    .home_bg2 .home_box2{
      width: 160px;
      padding: 10px;
    }
    .home_bg2 .info{
      margin-top: 10px;
    }
  }
  @media (max-width: 1000px){
    .home_bg2 .home_box2{
      width: 230px;
      height: 300px;
      padding: 20px;
    }
    .home_bg2 .info{
      margin-top: 20px;
    }
    .home_bg2 .home_box2_right img{
      margin: 10px auto;
    }
  }
  @media (max-width: 768px){
    .home_tab1 .home_box1{
      width: 60%;
    }
    .home_bg2 .home_box2{
      width: 80%;
      height: 230px;
      margin: 30px auto 0;
    }
  }
</style>