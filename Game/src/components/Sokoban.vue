<template>
 <div class="Sokoban">
   <h1>推箱子</h1>
   <p><button type="button" @click="reset">重新来过</button></p>
   <button @click="last">上一关</button><button @click="next">下一关</button>
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
        now: 1,//当前关卡索引
        pass: [],
        present: [],
        level1: [
                0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,3,0,0,0,0,0,0,0,
                0,0,0,0,0,1,0,0,0,0,0,0,0,
                0,0,0,0,0,1,0,0,0,0,0,0,0,
                0,0,0,0,0,1,0,0,0,0,0,0,0,
                0,0,0,0,0,2,1,2,1,1,1,3,0,
                0,3,1,1,1,2,4,0,0,0,0,0,0,
                0,0,0,0,0,0,2,0,0,0,0,0,0,
                0,0,0,0,0,0,1,0,0,0,0,0,0,
                0,0,0,0,0,0,1,0,0,0,0,0,0,
                0,0,0,0,0,0,1,0,0,0,0,0,0,
                0,0,0,0,0,0,3,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,0,0,0],
        level2:[
                0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,4,1,1,0,0,0,0,0,0,0,
                0,0,0,1,2,2,0,0,0,0,0,0,0,
                0,0,0,1,2,1,0,0,0,3,0,0,0,
                0,0,0,0,0,1,0,0,0,3,0,0,0,
                0,0,0,0,0,1,1,1,1,3,0,0,0,
                0,0,0,0,1,1,1,0,1,1,0,0,0,
                0,0,0,0,1,1,1,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,0,0,0],
        level3:[
                0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,1,1,1,1,1,0,0,0,0,0,
                0,0,0,2,0,0,0,1,1,1,0,0,0,
                0,0,1,4,1,2,1,1,2,1,0,0,0,
                0,0,1,3,3,0,1,2,1,0,0,0,0,
                0,0,0,3,3,0,1,1,1,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,0,0,0],
        level4:[
                0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,1,1,0,0,0,0,0,0,
                0,0,0,0,4,2,1,0,0,0,0,0,0,
                0,0,0,0,0,2,1,0,0,0,0,0,0,
                0,0,0,0,0,1,2,1,0,0,0,0,0,
                0,0,0,0,3,2,1,1,0,0,0,0,0,
                0,0,0,0,3,3,2,3,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,0,0,0]
                
                //0 墙壁(无法推动)
                //1 通道
                //2 箱子(可推动)
                //3 坑(可当做通道)
                //4 主角
      }
    },
    methods: {
      reset(){
        console.log(this.levl1)
        this.present = this['level'+this.now].slice()
      },
      reset_pass(){
        // 记录当前关卡通关条件
        this.pass = []
        for(let i=0,g=this.present.length; i<g; i++){
          this.present[i] === 3 && this.pass.push(i)
        }
      },
      next(){
        this.now===4?false:this.now++
        this.reset()
        this.reset_pass()
      },
      last(){
        this.now===1?false:this.now--
        this.reset()
        this.reset_pass()
      },
      move(m){
        let pass_v = 0
        const me = this.present.indexOf(4)
        const n = this.pass.indexOf(me)//移动前位置是否是坑
        switch(this.present[me+1*m]){
          case 1 : case 3:
            const s = n === -1 ? 1 : 3
            this.present.splice(me+1*m,1,4)
            this.present.splice(me,1,s)
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
        }
        if(pass_v===this.pass.length){
          setTimeout(function(){
            alert('Happy, Have pass!')
          },0)
        }
      }
    },
    created (){
      // 初始化
      this.reset()
      this.reset_pass()
      document.onkeydown = function(e){
        const x = Math.sqrt(this.present.length)
        e.keyCode===37 && this.move(-1)
        e.keyCode===38 && this.move(-x)
        e.keyCode===39 && this.move(+1)
        e.keyCode===40 && this.move(+x)
      }.bind(this)
    }
  })
</script>
<style scoped>
  .Sokoban{
    margin-top: 40px;
  }
  ul{
    width: 650px;
    height: 650px;
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