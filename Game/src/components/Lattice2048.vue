<template>
  <div class="box">
    <h1>2048</h1>
    <p>得分: {{score}}</p>
    <p><button type="button" @click="reset">重新来过</button></p>
    <ul>
      <li
        v-for="item in lattices"
        :class="{
          'two':item===2?true:false,
          'four':item===4?true:false,
          'eight':item===8?true:false,
          'sixteen':item===16?true:false,
          'thirty_two':item===32?true:false,
          'sixty_four':item===64?true:false,
          'oneh_twenty_eight':item===128?true:false,
          'twoh_fifty_six':item===256?true:false,
          'fiveh_twenty_one':item===512?true:false,
          'onet_twenty_four':item===1024?true:false,
          'twot_forty_eight':item===2048?true:false,
          'fourt_ninety_six':item===4096?true:false,
          'eightt_oneh':item===8192?true:false,
          'ten_thousand':item===10684?true:false,
          'thirty_thousand':item===32768?true:false,
          'sixty_thousand':item===65536?true:false,
          'highest':item===131072?true:false
        }"
        v-text="item"
      ></li>
    </ul>
  </div>
</template>

<script>  
export default ({
  name: 'lattice2048',
  data (){
    return {
      lattices: [],
      score: 0
    }
  },
  methods: {
    reset(){
      var latticearr = []
      for(let i=0; i<16;i++){
        latticearr.push('')
      }
      latticearr[Math.floor(Math.random()*16)] = this.twoORfour()
      this.lattices = latticearr
      this.score = 0
    },
    twoORfour(){
      return Math.random() < 0.8 ? 2 : 4
    },
    random(){
      const newarr = []
      this.lattices.map(function(item,index){
        item === '' && newarr.push(index)
      })
      newarr.length !== 0 && this.lattices.splice(newarr[Math.floor(Math.random()*newarr.length)],1,this.twoORfour())
      newarr.length === 0 && this.gameover()
    },
    move(P,L,O,n,i){
      //P 表示操作时，格与格之间跨度的值（根据遍历顺序来决定正负）
      //L 表示操作时，每行/列的尾部的索引值
      //O 正1或负1，用来转换值的正负
      Kfor: for(let j=L+O*n; j>0; j--){
              const k = this.lattices[i+j*P]
              if(!k){
                this.lattices.splice(i+j*P,1,this.lattices[i])
                this.lattices.splice(i,1,'')
              }else if(k===this.lattices[i]){ //判断是否相等
                for(let l=1; l<j; l++){ //逆向判断中间是否有值，有则跳过
                  if(this.lattices[i+l*P]){continue Kfor}
                }
                const m = k*2
                this.score += m
                this.lattices.splice(i+j*P,1,m)
                this.lattices.splice(i,1,'')
              }
      }
    },
    moveLeft(){ //P:-1
      arrFor: for(let i=0; i<16; i++){ //**正序
              const n = i%4
              if(!this.lattices[i]){continue arrFor}
              if(n===0){continue arrFor}
              this.move(-1,0,1,n,i)
      }
      this.random()
    },
    moveRight(){ //p:1
      arrFor: for(let i=15; i>=0; i--){ //**倒序
              const n = i%4
              if(!this.lattices[i]){continue arrFor}
              if(n===3){continue arrFor}
              this.move(1,3,-1,n,i)
      }
      this.random()
    },
    moveTop(){ //p:-4
      arrFor: for(let i=0; i<16; i++){ //**正序
              const n = Math.floor(i/4)
              if(!this.lattices[i]){continue arrFor}
              if(n===0){continue arrFor}
              this.move(-4,0,1,n,i)
      }
      this.random()
    },
    moveDown(){ //p:+4
      arrFor: for(let i=15; i>=0; i--){ //**倒序
              const n = Math.floor(i/4)
              if(!this.lattices[i]){continue arrFor}
              if(n===3){continue arrFor}
              this.move(4,3,-1,n,i)
      }
      this.random()
    },
    gameover(){
      let arr = []
      for(let i=0; i<16; i++){
        const item = this.lattices[i]
        if(item && this.lattices[i-4]!==item && this.lattices[i+4]!==item){
          if(this.lattices[i+1]!==item && i%4===0){
            arr.push(i)
          }else if(this.lattices[i-1]!==item && i%4===3){
            arr.push(i)
          }else if(this.lattices[i-1]!==item && this.lattices[i+1]!==item){
            arr.push(i)
          }
        }
        arr.length===16 && alert('Game Over');
      }
    }
  },
  created (){
    this.reset();
    document.onkeydown = function(e){
      e.keyCode===37 && this.moveLeft()//左
      e.keyCode===39 && this.moveRight()//右
      e.keyCode===38 && this.moveTop()//上
      e.keyCode===40 && this.moveDown()//下
    }.bind(this)
  }
})
</script>

<style scoped>
.box{
  margin: 60px auto 40px auto;
}
button{
  cursor: pointer;
  margin-top: 10px;
  padding: 3px 20px;
  font-size: 16px;
  font-weight: 700;
  color: #fce680;
  background-color: #6577ca;
  border: 1px solid #456db3;
  border-radius: 3px;
}
p{
  font-weight: 700;
}
ul{
  width: 500px;
  height: 500px;
  margin: 30px auto 0 auto;
  background-color:#bb9c7e;
  box-shadow: 0px 0px 30px 5px #999;
  text-align: left;
  border-radius: 15px;
}
li{
  display:inline-block;
  width: 100px;
  height: 100px;
  margin-top: 20px;
  margin-left: 20px;
  color: #cfffd1;;
  background-color:#cebead;
  font-size: 48px;
  line-height: 100px;
  vertical-align: middle;
  border-radius: 5px;
}
li[class~=two]{
  background-color: rgb(238, 228, 218);
}
li[class~=four]{
  background-color: #ece0c7;
}
li[class~=eight]{
  background-color: #f1b179;
}
li[class~=sixteen]{
  background-color: #f59563;
}
li[class~=thirty_two]{
  background-color: #f67c5f;
}
li[class~=sixty_four]{
  background-color: #f65e3c;
}
li[class~=oneh_twenty_eight]{
  background-color: #ecce71;
  font-size: 42px
}
li[class~=twoh_fifty_six]{
  background-color: #eccb61;
  font-size: 42px
}
li[class~=fiveh_twenty_one]{
  background-color: #ecc750;
  font-size: 42px
}
li[class~=onet_twenty_four]{
  background-color: #edc440;
  font-size: 38px
}
li[class~=twot_forty_eight]{
  background-color: #edc12e;
  font-size: 38px
}
li[class~=fourt_ninety_six]{
  background-color: #ff3d3d;
  font-size: 38px
}
li[class~=eightt_oneh]{
  background-color: #ff1e1e;
  font-size: 38px
}
li[class~=ten_thousand]{
  background-color: #ff1e1d;
  font-size: 32px
}
li[class~=thirty_thousand]{
  background-color: #ff1e1d;
  font-size: 32px
}
li[class~=sixty_thousand]{
  background-color: #ff1e1d;
  font-size: 32px
}
li[class~=highest]{
  background-color: #ff1e1d;
  font-size: 28px
}
</style>