<template>
  <div class="carousel slide mycarousel" id="mycarousel">
    <ul class="carousel-indicators">
      <li data-target=".mycarousel" data-slide-to="0" class="active"></li>
      <li data-target=".mycarousel" data-slide-to="1"></li>
      <li data-target=".mycarousel" data-slide-to="2"></li>
    </ul>
    <div class="carousel-inner myinner">
      <div class="item active"><img src="//www.dke.cn/images/home/banner1.jpg" alt=""></div>
      <div class="item"><img src="//www.dke.cn/images/home/banner2.jpg" alt=""></div>
      <div class="item"><img src="//www.dke.cn/images/home/banner3.jpg" alt=""></div>
    </div>
    <a class="left carousel-control" href="#mycarousel" role="button" data-slide="prev">
			<span class="glyphicon glyphicon-chevron-left"></span>
		</a>
    <!--<a href="#mycarousel" class="carousel-control left" data-slide="prev">&lsaquo;</a>-->
    <!--<a href="#mycarousel" class="carousel-control right" data-slide="next">&rsaquo;</a>-->
    <a class="right carousel-control" href="#mycarousel" role="button" data-slide="next">
			<span class="glyphicon glyphicon-chevron-right"></span>
		</a>
  </div>
</template>
<script>
  export default {
    name: 'carousel',
  }
</script>
<style scoped>
  ul.carousel-indicators li{
    width: 15px;
    height: 15px;
  }
  a.carousel-control{
    font-size: 30px;
  }
  @media (max-width: 1000px){
    .carousel-inner > .item > img{
      height: 300px;
    }
  }
</style>
