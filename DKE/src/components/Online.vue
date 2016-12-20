<template>
  <div>
    <div class="vessel" :style="{'height': VesHeight+'px','transform': 'translateY(' + VesSlateY + '%)'}">
      <div class="container-fluid online_bg1">
        <div class="bg_photo_1"></div>
        <div class="container bg1_box">
          <div class="bg1_text">
              <p class="title">推广优势-媒体资源丰富</p>
              <p class="info">平台海量汇集国内一线大中小手机媒体共计千余家，囊括千万手机上网用户，可以满足众多行业广告主的推广要求</p>
          </div>
        </div>
        <div class="container bg_link">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-6">
              <a class="on" @click="two" href="javascript:void(0);">电商推广</a>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6">
              <a class="on" @click="three" href="javascript:void(0);">金融推广</a>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid online_bg2">
        <div class="bg_photo_2"></div>
        <div class="container bg2_box">
          <div class="bg2_text">
            <p class="title">独家最新的广告资源支持，让渠道的广告永远更新</p>
            <p class="info">线上媒体，做首页或首屏广告，加大曝光率</p>
            <p class="info">全渠道覆盖，线上线下同步，增大与用户的链接机会</p>
            <p class="info">用一个活动，聚集用户，让他们体验产品的优势</p>
            <p class="info">让他们相信的人说话，为产品征得新的用户</p>
          </div>
          <div class="row bg2_icon">
            <div class="col-md-4 col-sm-4 col-xs-4">
              <img src="http://www.dke.cn/theme/web_commerce_05.png" alt="">
            </div>
            <div class="col-md-4 col-sm-4 col-xs-4">
              <img src="http://www.dke.cn/theme/web_commerce_07.png" alt="">
            </div>
            <div class="col-md-4 col-sm-4 col-xs-4">
              <img src="http://www.dke.cn/theme/web_commerce_09.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid online_bg3">
        <div class="bg_photo_3"></div>
        <div class="container bg3_box">
          <div class="bg3_text">
            <p class="title">严密的评估分析推广成本，为客户节约每一分钱</p>
            <p class="info">制定防止刷量的策略</p>
            <p class="info">对渠道严格控制，防止出现导量现象</p>
            <p class="info">不断优化，提高用户质量，让广告主物超所值</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data (){
      return {
        VesHeight: undefined,
        VesSlateY: 0,
        scroll: false,
        size: false
      }
    },
    mounted (){
      $('html,body').css({'height': '100%','overflow': 'hidden'});
      this.VesHeight =  $('html,body').height();
      $(document).on('mousewheel DOMMouseScroll',this.wheel);
      $(document).keydown(function(e){
        switch(e.keyCode){
          case 9: case 18:
          return false;
        }
      })
      $(window).on('resize',this.resize)
    },
    beforeDestroy (){
      $(document).off('mousewheel DOMMouseScroll',this.wheel)
      $(document).off('keydown',false)
      $(window).off('resize',this.resize)
      $('html,body').css({'height': '','overflow': ''})
    },
    methods: {
      wheel (e){
        console.log(66)
        //WebKit内核，Trident内核 => mousewheel
        //Gecko内核 => DOMMouseScroll
        // e.preventDefault();
        var value = e.originalEvent.wheelDelta || -e.originalEvent.detail;
        //e.originalEvent.wheelDelta => 120(up) or -120(down) 谷歌IE内核
        //e.originalEvent.detail => -3(up) or 3(down) 火狐内核
        var delta = Math.max(-1, Math.min(1, value));
        // console.log(delta < 0 ? 'down' : 'up');
        delta < 0 ? this.next() : this.prev();
      },
      prev (){
        if (this.scroll){return false};
        this.scroll = true; 
        setTimeout(function(){
          this.scroll = false;
        }.bind(this),800)
        this.VesSlateY = this.VesSlateY===0 ? 0 : this.VesSlateY+100;
      },
      next (){
        if (this.scroll){return false};
        this.scroll = true;
        setTimeout(function(){
          this.scroll = false;
        }.bind(this),800)
        this.VesSlateY = this.VesSlateY===-200 ? -200 : this.VesSlateY-100;
      },
      two (){
        this.VesSlateY = -100
      },
      three (){
        this.VesSlateY = -200
      },
      resize (){
        if (this.size){return false};
        this.size = true;
        setTimeout(function(){
          this.size = false;
        }.bind(this),300)
        this.VesHeight =  $('html,body').height()
      }
    }
  }
</script>
<style scoped>
  .vessel{
    position: relative;
    transform: translate3d(0px, 0%, 0px);
    -o-transform: translate3d(0px, 0%, 0px);
    -ms-transform: translate3d(0px, 0%, 0px);
    -webkit-transform: translate3d(0px, 0%, 0px);
    transition: all .6s ease;
    -o-transition: all .6s ease;
    -ms-transition: all .6s ease;
    -webkit-transition: all .6s ease;
  }
  .online_bg1 a.on{
    display: block;
    height: 100px;
    line-height: 100px;
    font-size: 36px;
    text-align: center;
    text-decoration: none;
    background-color: #fcfcfc;
  }
  .online_bg1 a:after{
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0;
    height: 3px;
    background-color: #53c786;
    transition: .6s;
    -o-transition: .6s;
    -ms-transition: .6s;
    -webkit-transition: .6s;
  }
  .online_bg1 a:hover:after,.online_bg1 a:focus:after{
    width: 100%;
    left: 0%
  }
  .online_bg1,.online_bg2,.online_bg3{
    height: 100%;
    padding: 0;
    overflow: hidden;
    position: relative;
    background-color: #fcfcfc;
  }
  .online_bg1 .bg_photo_1{
    height: 750px;
    background: url(http://www.dke.cn/theme/commerce1.jpg) no-repeat center center #fcfcfc;
  }
  .online_bg1 .bg1_box{
    position: absolute;
    top: 30%;
    left: 0%;
    padding: 50px 80px;
  }
  .online_bg1 .bg1_text{
    background-color: rgba(240, 240, 240, 0.5);
    padding: 15px;
    border-radius: 10px;
    text-align: center;
  }
  .online_bg1 p.title{
    font-size: 36px;
  }
  .online_bg1 p.info{
    font-size: 18px;
  }
  .online_bg2{
    text-align: center;
  }
  .online_bg2 .bg2_box{
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%,0);
    -o-transform: translate(-50%,0);
    -ms-transform: translate(-50%,0);
    -webkit-transform: translate(-50%,0);
  }
  .online_bg2 .bg_photo_2{
    height: 1080px;
    background: url(http://www.dke.cn/theme/commerce2.jpg) no-repeat center center #fcfcfc;
  }
  .online_bg2 p.title{
    font-size: 40px;
  }
  .online_bg2 p.info{
    font-size: 20px;
  }
  .online_bg2 .bg2_icon{
    margin-top: 30px;
  }
  .online_bg3{
    text-align: center;
  }
  .online_bg3 .bg_photo_3{
    height: 1080px;
    background: url(http://www.dke.cn/theme/commerce3.jpg) no-repeat center center #fcfcfc;
  }
  .online_bg3 .bg3_box{
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%,0);
    -o-transform: translate(-50%,0);
    -ms-transform: translate(-50%,0);
    -webkit-transform: translate(-50%,0);
  }
  .online_bg3 p.title{
    font-size: 40px;
  }
  .online_bg3 p.info{
    font-size: 20px;
  }
  @media (max-width: 768px){
    .online_bg2 .bg2_box,.online_bg3 .bg3_box{
      width: 90%;
    }
  }
  @media (min-width: 768px){
    .online_bg1 .bg1_box{
      left: 5%;
      padding: 50px 80px;
    }
  }
  @media (min-width: 992px){
    .online_bg1 .bg1_box{
      padding: 50px 200px;
      position: absolute;
      top: 30%;
      left: -10%; 
    }
  }
  @media (min-width: 1200px){
    .online_bg1 .bg1_box{
      padding: 50px 300px;
    }
  }
</style>