<template>
 <div class="Sokoban">
   <h1>推箱子</h1>
   <p><button type="button" @click="reset">重新来过</button></p>
   <!--<button>下一关</button>-->
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
        now: 1,
        pass: [],
        present: [],
        leve1: [
                0,0,0,0,0,0,0,0,0,
                0,0,0,3,0,0,0,0,0,
                0,0,0,1,0,0,0,0,0,
                0,0,0,2,1,2,2,3,0,
                0,3,1,2,4,0,0,0,0,
                0,0,0,0,2,0,0,0,0,
                0,0,0,0,2,0,0,0,0,
                0,0,0,0,3,0,0,0,0,
                0,0,0,0,0,0,0,0,0],
        leve2: [
                0,0,0,0,0,0,0,0,0,
                0,4,1,1,0,0,0,0,0,
                0,1,2,2,0,0,0,0,0,
                0,1,2,1,0,0,0,3,0,
                0,0,0,1,0,0,0,3,0,
                0,0,0,1,1,1,1,3,0,
                0,0,1,1,1,0,1,1,0,
                0,0,1,1,1,0,0,0,0,
                0,0,0,0,0,0,0,0,0]
                
                //0 墙壁(无法推动)
                //1 通道
                //2 箱子(可推动)
                //3 坑(可当做通道)
                //4 主角
      }
    },
    methods: {
      reset(){
        
      },
      moveLeft(){
        // const m = -1
        // const me = this.present.indexOf(4)
        // const n = this.pass.indexOf(me)
        // console.log(me)
        // switch(this.present[me+1*m]){
        //   case 1 : case 3:
        //     const s = n===-1?this.present[me+1*m]:3
        //     this.present.splice(me+1*m,1,4)
        //     this.present.splice(me,1,s)
        //     console.log(n)
        //   break;
        //   case 2:
        //     switch(this.present[me+2*m]){
        //       case 1: case 3: 
        //       const k = n===-1?1:3
        //       this.present.splice(me+2*m,3,2,4,1)
        //     }
        //   break;
        // }
        this.move(-1)
      },
      moveTop(){
        const x = Math.sqrt(this.present.length)
        this.move(-x)
      },
      moveRight(){
        this.move(+1)
      },
      moveDown(){
        const x = Math.sqrt(this.present.length)
        this.move(+x)
      },
      move(m){
        let pass_v = 0
        const me = this.present.indexOf(4)
        const n = this.pass.indexOf(me)
        console.log(me)
        switch(this.present[me+1*m]){
          case 1 : case 3:
            const s = n === -1 ? this.present[me+1*m] : 3
            this.present.splice(me+1*m,1,4)
            this.present.splice(me,1,s)
            console.log(n)
          break;
          case 2:
            switch(this.present[me+2*m]){
              case 1: case 3: 
              const k = n === -1 ? 1 : 3
              this.present.splice(me+2*m,1,2)
              this.present.splice(me+1*m,1,4)
              this.present.splice(me,1,k)
            }
          break;
        }
        for(var item in this.pass){
          this.present[this.pass[item]]===2 && pass_v++
          console.log('a: '+this.pass[item])
        }
        if(pass_v===this.pass.length){
          setTimeout(function(){
            alert('Happy, Have pass!')
          },0)
        }
      }
    },
    created (){
      console.log(this.present);
      console.log(this.leve1.slice(0))
      // 初始化
      this.present = this.leve2.slice(0)
      // 记录当前关卡通关条件
      for(let i=0,g=this.present.length; i<g; i++){
        this.present[i] === 3 && this.pass.push(i)
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
<style scoped>
  .Sokoban{
    margin-top: 40px;
  }
  ul{
    width: 450px;
    height: 450px;
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