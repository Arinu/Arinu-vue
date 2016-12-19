import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Mbad from './components/Mbad'
import Game from './components/Game'
import Weixin from './components/Weixin'
import Index from './components/Index'
import Online from './components/Online'
/* eslint-disable no-new */
Vue.use(VueRouter)
const routes = [
  {path:'/',component: Index, name: '主页'},
  {path:'/mbad',component: Mbad, name: '移动广告'},
  {path:'/game',component: Game, name: '游戏联运'},
  {path:'/Weixin',component: Weixin, name: '微信推广'},
  {path:'/Online',component: Online, name: '电商金融'}
]
const router = new VueRouter({
  routes
})
router.afterEach(function(to, from, next){
  document.title = to.name;
})
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
