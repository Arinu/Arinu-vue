import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Puzzle from './components/Puzzle'
import Puzzle1 from './components/Puzzle1'
// var app = Vue.extend(App);

Vue.use(VueRouter)
const routes = [
  // {path:'/',component: App,name:'app'},
  // {path:'*',redirect: { name: 'App',component: App }},
  {path:'/puzzle',component: Puzzle,name: 'Puzzle'},
  {path:'/puzzle1',component: Puzzle1,name: 'Puzzle1'},
]
const router = new VueRouter({
  routes
})

// const app = new Vue({
//   el: '#app',
//   router
// })

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})







// router.map({
//   '/index':{
//     name: 'index',
//   },
//   '/Puzzle':{
//     name: 'Puzzle',
//     component: Puzzle
//   },
//   '/Puzzle1':{
//     name: 'Puzzle1',
//     component: Puzzle1
//   }
// });

// router.start(app,'#app')

