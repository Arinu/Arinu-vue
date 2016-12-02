<template>
  <div>
    <!--<img src="./assets/logo.png">-->
    <div class="nav">
      <h1>Vue小游戏</h1>
      <p class="link">导航： 
        <router-link to="/puzzle">拼图</router-link>
        <router-link to="/puzzle1">拼图1</router-link>
      </p>
    </div>
    <router-view></router-view>
    <!--<puzzle></puzzle>-->
  </div>
</template>

<script>
// import Puzzle from './components/Puzzle'

export default {
  name: 'app',
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  text-align: center;
  box-sizing: border-box;
  -webkit-box-siziong: border-box;
  -moz-osx-box-siziong: border-box;
  text-shadow: 1px 1px 5px #6577ca;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: '微软雅黑', Helvetica, Arial, sans-serif;
}
.link{
  margin-top: 10px;
}
</style>
