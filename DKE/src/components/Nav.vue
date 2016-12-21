<template>
  <nav class="navbar navbar-blue navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <a class="navber-brand" href="#/"><img src="http://www.dke.cn/theme/logo.png" alt=""></a>
        
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span v-for="index in 3" class="icon-bar"></span>
        </button>
        
      </div>
      <div class="collapse navbar-collapse">
        <div class="nav navbar-nav navbar-right">
          <li :class="{active: isactive(item)}" v-for="item in navbar_nav"><a :href="'#' + item.href">{{item.text}}</a></li>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    name: 'nav',
    data (){
      return {
        navbar_nav: [
          {href: '/', text: '首页'},
          {href: '/mbad', text: '移动广告'},
          {href: '/game', text: '游戏联运'},
          {href: '/wx', text: '微信推广'},
          {href: '/online', text: '电商金融'},
          {href: '/reputation', text: '口碑营销'},
          {href: '/news/info', text: '新闻动态'},
          {href: '/about', text: '关于我们'},
        ]
      }
    },
    methods: {
      isactive (item){
        if(item.href.length===1 && this.$route.path===item.href){
          return true;
        }
        if(this.$route.path!==1 && item.href.length!==1 && this.$route.path.indexOf(item.href.slice(0,3))>-1){
          return true;
        }
        return false
      }
    },
    watch: {
      $route: {
        handler(data){
          //  console.log(data)
        },
        deep: true
      }
    }
  }
</script>
<style scoped>
  .navbar-blue{
    height: 100px;
    line-height: 100px;
    background-color: #34495e;
  }
  .navbar-header {
    line-height: 99px;
  }
  .navbar-header .navbar-toggle{
    padding: 15px;
    margin-top: 27px;
    background-color: #6a7cab;
    width: 54px;
  }
  .navbar-header .navbar-toggle .icon-bar{
    background-color: #fff;
  }
  .navbar-nav{
    background-color: #34495e !important;
  }
  .navbar-nav li a{
    color: #fff;
    padding: 0 20px;
    font-size: 18px;
    line-height: 100px;
    height: 100px;
  }
  .navbar-nav li a:after{
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 3px;
    transition: .6s;
    background-color: #53c786;
  }
  .navbar-nav>li>a:hover:after,.navbar-nav>li.active>a:after{
    width: 100%;
    left: 0%
  }
  .navbar-nav>li.active>a,.navbar-nav>li>a:hover,.navbar-nav>li>a:focus{
    color: #43B7EF !important;
    padding-top: 2px;
    background-color: #21313f !important;
  }
  .navbar-collapse{
    max-height: 100%;
  }
  @media (max-width: 1200px){
    .navbar-nav li a{
      font-size: 14px;
      padding: 0 10px;
    }
  }
  @media (max-width: 1000px){
    .navbar-nav li a{
      font-size: 12px;
      padding: 0 6px;
    }
  }
  @media (max-width: 767px){
    .navbar-nav{
      margin-top:0;
    }
    .navbar-nav li a{
      height: 60px;
      font-size: 18px;
      line-height: 60px;
      text-align: center;
    }
  }
</style>