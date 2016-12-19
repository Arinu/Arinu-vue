<template>
  <div>
    <div class="container-fluid weixin_bg1"></div>
    <div class="container weixin_tab1">
      <div class="title"></div>
      <div class="row">
        <div class="col-md-3 col-sm-3 col-xs-6">
          <img class="img-responsive" src="http://www.dke.cn/images/web_weixin_11.png" alt="">
          <p class="title">品牌宣传</p>
          <p class="info">酷炫阅读体验，讲述品牌故事，让用户过目不忘。</p>
        </div>
        <div class="col-md-3 col-sm-3 col-xs-6">
          <img class="img-responsive" src="http://www.dke.cn/images/web_weixin_03.png" alt="">
          <p class="title">产品推广</p>
          <p class="info">音频/视频全支持，展示产品工艺。极速传播你的新品。</p>
        </div>
        <div class="col-md-3 col-sm-3 col-xs-6">
          <img class="img-responsive" src="http://www.dke.cn/images/web_weixin_05.png" alt="">
          <p class="title">活动促销</p>
          <p class="info">在线抽奖/活动邀请函，有效聚集目标用户，意见在线购买。</p>
        </div>
        <div class="col-md-3 col-sm-3 col-xs-6">
          <img class="img-responsive" src="http://www.dke.cn/images/web_weixin_08.png" alt="">
          <p class="title">在线交易</p>
          <p class="info">便捷的支付流程，实现订单转化，助你提升移动交易销量，轻松突破！</p>
        </div>
      </div>
    </div>
    <div class="container-fluid weixin_bg2">
      <p class="title">重构移动互联商业连接</p>
      <p class="title">最精准的微信移动互联推广解决方案</p>
      <button type="button" class="btn">立即开启</button>
    </div>
    <div class="container weixin_tab2">
      <p class="title">他们都在这里...</p>
      <div class="photo">
        <a><img src="http://www.dke.cn/images/weixin/1.jpg"></a>
        <a><img src="http://www.dke.cn/images/weixin/2.jpg"></a>
        <a><img src="http://www.dke.cn/images/weixin/3.jpg"></a>
        <a><img src="http://www.dke.cn/images/weixin/4.jpg"></a>
        <a><img src="http://www.dke.cn/images/weixin/5.jpg"></a>
        <a><img src="http://www.dke.cn/images/weixin/6.jpg"></a>
        <a><img src="http://www.dke.cn/images/weixin/7.jpg"></a>
        <a><img src="http://www.dke.cn/images/weixin/8.jpg"></a>
        <a><img src="http://www.dke.cn/images/weixin/9.jpg"></a>
        <a><img src="http://www.dke.cn/images/weixin/10.jpg"></a>
        <a><img src="http://www.dke.cn/images/weixin/11.jpg"></a>
        <a><img src="http://www.dke.cn/images/weixin/12.jpg"></a>
        <a><img src="http://www.dke.cn/images/weixin/13.jpg"></a>
        <a><img src="http://www.dke.cn/images/weixin/14.jpg"></a>
        <a><img src="http://www.dke.cn/images/weixin/15.jpg"></a>
        <a><img src="http://www.dke.cn/images/weixin/16.jpg"></a>
        <a><img src="http://www.dke.cn/images/weixin/17.jpg"></a>
        <a><img src="http://www.dke.cn/images/weixin/18.jpg"></a>
        <a><img src="http://www.dke.cn/images/weixin/19.jpg"></a>
        <a><img src="http://www.dke.cn/images/weixin/20.jpg"></a>
        <a><img src="http://www.dke.cn/images/weixin/21.jpg"></a>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
  .weixin_bg1{
    height: 320px;
    background: url(http://www.dke.cn/theme/weixin_bg1.png) no-repeat center center #e9eff3;
  }
  .weixin_tab1{
    padding-bottom: 20px;
  }
  .weixin_tab1 div.title{
    height: 120px;
    background: url(http://www.dke.cn/theme/weixin_bg2.png) no-repeat center center #fff;
  }
  .weixin_tab1 img.img-responsive{
    margin: 10px auto;
  }
  .weixin_tab1 p.title{
    font-size: 22px;
    text-align: center;
    color: #696969;
  }
  .weixin_tab1 p.info{
    padding: 10px 20px;
    color: #999999;
    line-height: 1.7;
  }
  .weixin_bg2{
    height: 320px;
    padding-top: 50px;
    text-align: center;
    background: url(http://www.dke.cn/theme/weixin_bg3.png) no-repeat center center #000;
  }
  .weixin_bg2 p.title{
    color: #fff;
    font-size: 28px;
  }
  .weixin_bg2 button{
    color: #bbb;
    padding: 10px 30px;;
    font-size: 22px;
    margin-top: 50px;
    border: 1px solid #bbb;
    border-radius: 6px;
    background-color: transparent;
  }
  .weixin_tab2{
    padding: 50px;
    min-width: 560px;
  }
  .weixin_tab2 p.title{
    font-size: 36px;
    text-align: center;
  }
  .weixin_tab2 div.photo{
    margin-top: 40px;
    padding-left: 40px;
  }
  .weixin_tab2 div.photo a{
    display: inline-block;
    padding: 10px 20px;
  }
  .weixin_tab2 div.photo a img{
    width: 100px;
    height: 100px;
  }
  @media (min-width: 768px){
    .weixin_bg2 p.title{
      font-size: 36px;
    }
  }
</style>