import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Mbad from './components/Mbad'
import Game from './components/Game'
import Wx from './components/Wx'
import Index from './components/Index'
import Online from './components/Online'
import Reputation from './components/Reputation'
import News from './components/News'
import Info from './components/news/Info'
import Notice from './components/news/Notice'
import Analysis from './components/news/Analysis'
import About from './components/About'

/* eslint-disable no-new */
Vue.use(VueRouter)
const routes = [
  {path:'/',component: Index },
  {path:'/mbad',component: Mbad },
  {path:'/game',component: Game },
  {path:'/wx',component: Wx },
  {path:'/online',component: Online },
  {path:'/reputation',component: Reputation },
  {path:'/about',component: About },
  {path:'/:id',component: News, 
   children: [
     {path:'info',component: Info },
     {path:'notice',component: Notice },
     {path:'analysis',component: Analysis }
   ]}
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
