<template>
  <div>
    <div class="container-fluid news_bg1"></div>
    <div class="container news_content">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <ul class="nav nav-pills nav-justified" role="tablist">
            <li role="presentation" :class="{info: true, on: true, active: isactive(news_nav.info)}"><a href="#/news/info">{{news_nav.info.name}}</a></li>
            <li role="presentation" :class="{notice: true, on: true, active: isactive(news_nav.notice)}"><a href="#/news/notice">{{news_nav.notice.name}}</a></li>
            <li role="presentation" :class="{analysis: true, on: true, active: isactive(news_nav.analysis)}"><a href="#/news/analysis">{{news_nav.analysis.name}}</a></li>
          </ul>
        </div>
        <div class="col-lg-12 col-md-12">
          <router-view class="news_info"><div>User {{ $route.params.id }}</div></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'news',
    data (){
      return {
        news_nav: {
          info: {href: '/news/info', class:'info', name: '新闻资讯'},
          notice: {href: '/news/notice', class:'notice', name: '点客公告'},
          analysis: {href: '/news/analysis', class:'analysis', name: '市场分析'}
        }
      }
    },
    methods: {
      isactive (item){
        if(this.$route.path===item.href){
          return true
        }else{return false}
      }
    }
  }
</script>
<style>
  .news_bg1{
    height: 320px;
    background: url(http://www.dke.cn/theme/news_bg1.png) no-repeat center center #fff;
  }
  .news_content{
    padding: 30px;
  }
  .news_content .nav-justified li.info a{
    display: block;
    background: url(http://www.dke.cn/theme/news_blue.png) no-repeat 90px center;
  }
  .news_content .nav-justified li.notice a{
    display: block;
    background: url(http://www.dke.cn/theme/gonggao_blue.png) no-repeat 90px center;
  }
  .news_content .nav-justified li.analysis a{
    display: block;
    background: url(http://www.dke.cn/theme/xieyi_blue.png) no-repeat 90px center;
  }
  .news_content .nav-justified li.info.active a{
    background-image: url(http://www.dke.cn/theme/news_white.png);
  }
  .news_content .nav-justified li.notice.active a{
    background-image: url(http://www.dke.cn/theme/gonggao_white.png);
  }
  .news_content .nav-justified li.analysis.active a{
    background-image: url(http://www.dke.cn/theme/xieyi_white.png);
  }
  .news_content .nav-justified li.active a{
    background-color: #428bca;
  }
  .news_content .nav-justified li a{
    font-size: 24px;
  }
  @media (min-width: 768px ){
    .news_content .nav-justified>li.on>a{
      background-position-x: 30px;
    }
  }
  @media (min-width: 992px ){
    .news_content .nav-justified>li.on>a{
      background-position-x: 50px;
    }
  }
  @media (min-width: 1170px ){
    .news_content .nav-justified>li.on>a{
      background-position-x: 80px;
    }
  }
</style>