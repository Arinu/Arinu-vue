import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Puzzle from './components/Puzzle'
import Puzzle1 from './components/Puzzle1'
import Lattice2048 from './components/Lattice2048'
import Sokoban from './components/Sokoban'
// var app = Vue.extend(App);

Vue.use(VueRouter)
const routes = [
  // {path:'/',component: App,name:'app'},
  // {path:'*',redirect: { name: 'App',component: App }},
  {path:'/puzzle',component: Puzzle,name: 'Puzzle'},
  {path:'/puzzle1',component: Puzzle1,name: 'Puzzle1'},
  {path:'/lattice2048',component: Lattice2048,name: 'Lattice2048'},
  {path:'/Sokoban',component: Sokoban,name: 'Sokoban'}
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

