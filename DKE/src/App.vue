<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view class="view"></router-view>
    <Footnote></Footnote>
  </div>
</template>
<script>
import Navbar from './components/Nav'
import Footnote from './components/Footer'
export default {
  name: 'app',
  components: {
    Navbar,
    Footnote
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-siziong: border-box;
  -moz-osx-box-siziong: border-box;
}
#app {
  font-family: 'Microsoft Yahei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.view{
  margin-top: 100px;
}
</style>
