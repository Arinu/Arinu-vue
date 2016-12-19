<template>
  <div>
    <div class="container-fluid mbad_bg1">
      <a class="" href="http://www.dearclick.com" target="_block"></a>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-3 col-xs-3"><a class="target" @click="to_mbad_bg2" href="javascript:void(0)" target="_self">应用推广</a></div>
        <div class="col-md-3 col-sm-3 col-xs-3"><a class="target" @click="to_mbad_bg3" href="javascript:void(0)" target="_self">点击广告</a></div>
        <div class="col-md-3 col-sm-3 col-xs-3"><a class="target" @click="to_mbad_bg4" href="javascript:void(0)" target="_self">MOSDK</a></div>
        <div class="col-md-3 col-sm-3 col-xs-3"><a class="target" @click="to_mbad_bg5" href="javascript:void(0)" target="_self">精选案例</a></div>
      </div>
    </div>
    <div class="container-fluid mbad_backg mbad_bg2">
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-sm-7 col-md-offset-4 col-sm-offset-4 mbad_box">
            <p class="title">资源丰富 海量汇集</p>
            <p class="info">点客与10万应用媒体对接合作，主要为应用软件和手机游戏，众多具有影响力应用，整体用户覆盖全中国手机网民</p>
            <button type="button" class="btn btn-default">进入网站 >></button>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mbad_backg mbad_bg3">
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-sm-7 col-md-offset-4 col-sm-offset-4 mbad_box">
            <p class="title">细化覆盖 点击精准</p>
            <p class="info">多纬度立体定向模型，尽量科学地满足广告精准定位需求，更精准的点击效果，更高质量的转化</p>
            <button type="button" class="btn btn-default">进入网站 >></button>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mbad_backg mbad_bg4">
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-sm-7 col-md-offset-4 col-sm-offset-4 mbad_box">
            <p class="title">技术纯熟 效果显著</p>
            <p class="info">为开发者提供高效易用的移动广告SDK，支持四大主流智能手机操作系统，拥有图片通栏、全屏广告、视频前贴片等丰富广告形式，帮助开发者将流量迅速转化为广告收益</p>
            <button type="button" class="btn btn-default">进入网站 >></button>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mbad_backg mbad_bg5">
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-sm-7 col-md-offset-4 col-sm-offset-4 mbad_box">
            <p class="title">技术纯熟 效果显著</p>
            <p class="info">为开发者提供高效易用的移动广告SDK，支持四大主流智能手机操作系统，拥有图片通栏、全屏广告、视频前贴片等丰富广告形式，帮助开发者将流量迅速转化为广告收益</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'mbad',
    methods: {
      to_mbad_bg2 (){
        $('html, body').animate({
          scrollTop: $('.mbad_bg2').offset().top
        },1000)
      },
      to_mbad_bg3 (){
        $('html, body').animate({
          scrollTop: $('.mbad_bg3').offset().top
        },1000)
      },
      to_mbad_bg4 (){
        $('html, body').animate({
          scrollTop: $('.mbad_bg4').offset().top
        },1000)
      },
      to_mbad_bg5 (){
        $('html, body').animate({
          scrollTop: $('.mbad_bg5').offset().top
        },1000)
      }
    }
  }
</script>
<style scoped>
  .mbad_bg1{
    padding: 0;
  }
  .mbad_bg1 a{
    width: 100%;
    height: 320px;
    display: block;
    background: url(//www.dke.cn/theme/mbad_bg6.jpg) no-repeat center #90BC38;
  }
  a.target{
    height: 130px;
    line-height: 130px;
    font-size: 20px;
    color: #000;
    display: block;
    text-align: center;
    text-decoration: none;
  }
  a.target:hover,a.target:focus{
    color: #185b94;
  }
  a.target:after{
    content: '';
    width: 0;
    position: absolute;
    left: 50%;
    bottom: 0;
    height: 3px;
    transition: .6s;
    background-color: #53c786;
  }
  a.target:hover:after,a.target:active:after{
    width: 100%;
    left: 0%;
  }
  .mbad_backg{
    padding: 0;
    height: 790px;
  }
  .mbad_backg p.title{
    font-size: 44px;
  }
  .mbad_backg p.info{
    font-size: 20px;
  }
  .mbad_backg button{
    margin-top: 20px;
    font-size: 18px;
    background-color: transparent;
  }
  .mbad_backg .mbad_box{
    text-align: center;
    padding: 30px;
  }
  .mbad_bg2{
    height: 720px;
    background: url(//www.dke.cn/theme/mbad_bg1.jpg) no-repeat center #90BC38;
  }
  .mbad_bg2 .mbad_box{
    margin-top: 200px;
  }
  .mbad_bg3{
    background: url(//www.dke.cn/theme/mbad_bg3.jpg) no-repeat center #90BC38;
  }
  .mbad_bg3 .mbad_box{
    margin-top: 260px;
  }
  .mbad_bg4{
    background: url(//www.dke.cn/theme/mbad_bg4.png) no-repeat center #90BC38;
  }
  .mbad_bg4 .mbad_box{
    margin-top: 290px;
  }
  .mbad_bg5{
    background: url(//www.dke.cn/theme/mbad_bg5.jpg) no-repeat center #90BC38;
  }
  .mbad_bg5 .mbad_box{
    margin-top: 280px;
  }
  @media (min-width: 768px){
    a.target{
      font-size: 22px;
    }

  }
  @media (min-width: 992px){
    .mbad_backg p.title{
      font-size: 56px;
    }
  }
</style>