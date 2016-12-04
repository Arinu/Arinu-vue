<template>
 <div class="Sokoban">
   <h1>推箱子</h1>
   <p><button type="button" @click="reset">重新来过</button></p>
   <ul>
     <li
      v-for="item in present"
      :class="{
        'route':item===1?true:false,
        'box':item===2?true:false,
        'target':item===3?true:false,
        'protagonist':item===4?true:false
      }"
     ></li>
   </ul>
 </div>
</template>
<script>
  export default ({
    name: 'sokoban',
    data (){
      return {
        pass: [],
        present: [],
        leve1: [
                0,0,0,0,0,0,0,0,
                0,0,0,3,0,0,0,0,
                0,0,0,1,0,0,0,0,
                0,0,0,2,1,2,3,0,
                0,3,1,2,4,0,0,0,
                0,0,0,0,2,0,0,0,
                0,0,0,0,3,0,0,0,
                0,0,0,0,0,0,0,0]
      }
    },
    methods: {
      reset(){
        
      },
      moveLeft(){
        const me = this.present.indexOf(4);
        console.log(me)
        switch(this.present[me-1]){
          case 1 : case 3:
            this.present.splice(me-1,1,4)
            this.present.splice(me,1,this.present[me-1])
            console.log('buhuichufa')
            break;
          case 2:
            switch(this.present[me-2]){
              case 1: case 3: 
              this.present.splice(me-2,3,2,4,1)
            }
            break;
        }
      },
      moveTop(){

      },
      moveRight(){

      },
      moveDown(){

      }
    },
    created (){
      console.log(this.present);
      console.log(this.leve1.slice(0))
      // 初始化
      this.present = this.leve1.slice(0)
      // 记录当前关卡通关条件
      for(let i=0,g=this.present.length; i<g; i++){
        this.present[i]===3 && this.pass.push(i)
      }
      document.onkeydown = function(e){
        e.keyCode===37 && this.moveLeft()
        e.keyCode===38 && this.moveTop()
        e.keyCode===39 && this.moveRight()
        e.keyCode===40 && this.moveDown()
      }.bind(this)
    }
  })
</script>
<style>
  .Sokoban{
    margin-top: 40px;
  }
  ul{
    width: 400px;
    height: 400px;
    margin: 20px auto 20px auto;
    background-color: #8c9aa7;
  }
  li{
    display: inline-block;
    width: 50px;
    height: 50px;
    line-height: 50px;
    vertical-align: middle;
    border-radius: 20%;
  }
  li[class~=wall]{
    background-color: #8c9aa7;
  }
  li[class~=route]{
    background-color: #2789ca;
  }
  li[class~=box]{
    background-color: #e28e12;
    border: 2px solid #924db7;
  }
  li[class~=target]{
    background-color: #f16157;
    border: 2px solid #ef8181;
  }
  li[class~=protagonist]{
    background-color: #1d62da;
    border: 2px solid #dcdcdc;
  }
</style>