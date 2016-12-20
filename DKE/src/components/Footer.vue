<template>
  <div>
    <div class="container-fluid footer_bg1">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-8 col-xs-12">
            <div class="row">
              <div class="col-md-2 col-sm-2 col-xs-2">
                <p class="title">移动广告</p>
                <ul class="list-unstyled">
                  <li><a href="">APP推广</a></li>
                  <li><a href="">点击广告</a></li>
                  <li><a href="">DSP</a></li>
                  <li><a href="">合作伙伴</a></li>
                </ul>
              </div>
              <div class="col-md-2 col-sm-2 col-xs-2">
                <p class="title">游戏联运</p>
                <ul class="list-unstyled">
                  <li><a href="">六游戏中心</a></li>
                  <li><a href="">平台优势</a></li>
                  <li><a href="">优秀伙伴</a></li>
                </ul>
              </div>
              <div class="col-md-2 col-sm-2 col-xs-2">
                <p class="title">微信推广</p>
                <ul class="list-unstyled">
                  <li><a href="">信媒在线</a></li>
                  <li><a href="">推广优势</a></li>
                  <li><a href="">经典案例</a></li>
                </ul>
              </div>
              <div class="col-md-2 col-sm-2 col-xs-2">
                <p class="title">电商金融</p>
                <ul class="list-unstyled">
                  <li><a href="">电商推广</a></li>
                  <li><a href="">金融推广</a></li>
                </ul>
              </div>
              <div class="col-md-2 col-sm-2 col-xs-2">
                <p class="title">口碑营销</p>
                <ul class="list-unstyled">
                  <li><a href="">点点赚钱</a></li>
                  <li><a href="">推广优势</a></li>
                  <li><a href="">合作价值</a></li>
                </ul>
              </div>
              <div class="col-md-2 col-sm-2 col-xs-2">
                <p class="title">关于我们</p>
                <ul class="list-unstyled">
                  <li><a href="">关于点客</a></li>
                  <li><a href="">加入我们</a></li>
                  <li><a href="">联系我们</a></li>
                  <li><a href="">网络协议</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="col-md-6 col-sm-6 col-xs-6 ewm">
              <img class="img-responsive" src="http://www.dke.cn/images/ewm_wb.png" alt="">
              <span class="title">官方微博</span>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6 ewm">
              <img class="img-responsive" src="http://www.dke.cn/images/ewm_wx.png" alt="">
              <span class="title">官方微信</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid footer_bg2">
      <p class="title">点客传媒国内最专业的移动广告平台</p>
      <p><span>北京点客网络科技有限公司版权所有&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>2016-12-18&nbsp;<a href="http://github.com/Arinu">@Arinu</a>重构&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>本页面仅供学习研究使用</span></p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'footer'
}
</script>
<style scoped>
  .footer_bg1{
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: #34495e;
  }
  .footer_bg1 p.title{
    font-size: 18px;
    color: #fff;
  }
  .footer_bg1 a{
    color: #999;
    line-height: 1.7;
    text-decoration: none;
  }
  .footer_bg1 .ewm{
    text-align: center;
  }
  .footer_bg1 .ewm img{
    margin: 0 auto;
  }
  .footer_bg1 .ewm span.title{
    color: #fff;
  }
  .footer_bg2{
    background-color: #213140;
    text-align: center;
    color: #888;
    font-size: 12px;
  }
  .footer_bg2 p.title{
    margin-top: 20px;
  }
  .footer_bg2 a{
    text-decoration: none;
    /*color: #;*/
  }
  @media (max-width: 1000px){
    .footer_bg1 p.title{
      font-size: 13px;
    }
    .footer_bg1 .list-unstyled li{
      font-size: 12px
    }
  }
  @media (max-width: 768px){
    .footer_bg1 p.title{
      font-size: 16px;
    }
    .footer_bg1 .list-unstyled li{
      font-size: 14px；
    }
  }
</style>