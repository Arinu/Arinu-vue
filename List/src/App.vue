<template>
  <div id="app">
    <h1>目录</h1>
    <input type="text" v-model="li_data" v-on:keyup.enter="add_li" placeholder="输入后按回车提交">
    <list v-bind="{msdata:list}"/>
  </div>
</template>
<script>
import Local from './LocalStorage.js'
import List from './components/list'
export default {
  name: 'app',
  data () {
    return {
      list: Local.get(),
      li_data: ''
    }
  },
  components:{
    List
  },
  watch: {
    list: {
      handler (list){
        Local.set(this.list);
      },
      deep: true
    }
  },
  methods: {
    add_li () {
      this.list.push({
        message: this.li_data,
        isli: true
      })
      this.li_data = ''
      Local.set(this.list);
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 50px auto 0;
  width: 500px;
}
input{
  width: 50%;
  height: 22px;
  margin-top: 10px;
  border-radius: 3px;
  border: 1px solid #D691F3;
  text-align: center;
  font-size: 14px;
}
</style>
