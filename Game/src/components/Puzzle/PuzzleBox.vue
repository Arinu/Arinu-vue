<template>
  <ul>
    <li
    v-for="(fragment, index) in fragments"
    :class="{li_num: true,blank:!fragment}"
    v-text="fragment"
    @click="move(index,fragment)"
    ></li>
  </ul>
</template>

<script>
  export default {
    name: 'PuzzleBox',
    props: ['fragments'],
    methods: {
      move(index,fragment){
        var topNum = index-4,
            rightNum = index+1,
            bottomNum = index+4,
            leftNum = index-1;
        if(this.fragments[topNum] === ''){
          this.fragments.splice(topNum,1,fragment)
          this.fragments.splice(index,1,'')
        }
        if(this.fragments[rightNum] === '' && rightNum%4 !== 0){
          this.fragments.splice(rightNum,1,fragment)
          this.fragments.splice(index,1,'')
        }
        if(this.fragments[bottomNum] === ''){
          this.fragments.splice(bottomNum,1,fragment)
          this.fragments.splice(index,1,'')
        }
        if(this.fragments[leftNum] === '' && index%4 !== 0){
          this.fragments.splice(leftNum,1,fragment)
          this.fragments.splice(index,1,'')
        }
        //是否通关
        if(this.fragments[15]==='' && this.fragments[0]===1){
          var newarr = this.fragments.slice(0,15)
          var fi = newarr.every((item,index) => item === index+1)
          if(fi){
            alert('恭喜，已通关')
          }
        }
      }
    }
  }
</script>

<style scoped>
ul{
  width: 400px;
  height: 400px;
  margin: 30px auto 0 auto;
  box-shadow: 0px 0px 30px 5px #555;
}
li{
  display:inline-block;
  width: 100px;
  height: 100px;
  color: #fce680;;
  font-size: 20px;
  line-height: 100px;
  vertical-align: middle;
  border: 1px solid #bbb;
}
li[class=li_num]{
  cursor: pointer;
  background:#019aa2;;
}
li[class~=blank]{
  background: #eee;
  box-shadow: inset 0px 0px 10px #000
}
@media (max-width:980px){
  ul{
    width: 800px;
    height: 800px;
  }
  li{
    width: 200px;
    height: 200px;
    line-height: 200px;
    font-size: 36px
  }
}
</style>
