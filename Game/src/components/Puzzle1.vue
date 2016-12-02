<template>
  <div class="puzzle">
    <h1><span title="点击我可作弊" @click="okk">拼图游戏</span></h1>
    <button type="button" @click="random">重新来过</button>
    <puzzle-box1 :fragments="puzzles"></puzzle-box1>
  </div>
</template>

<script>
import PuzzleBox1 from './Puzzle1/PuzzleBox1'

export default {
  name: 'puzzle1',
  data (){
    return {
      puzzles: []
    }
  },
  components: {
    PuzzleBox1
  },
  watch: {
    puzzles: {
      handler (puzzles){
        this.puzzles = this.puzzles
      },
      deep: true
    }
  },
  methods: {
    random(){
      var puzzlearr = []
      for(var i=1; i<16;i++){
        puzzlearr.push(i)
      }
      puzzlearr.sort(function(){
        return Math.random() - 0.5
      })
      puzzlearr.push('')
      this.puzzles = puzzlearr
    },
    okk(){
      var puzzlearr = []
      for(var i=1; i<16;i++){
        puzzlearr.push(i)
      }
      puzzlearr.push('')
      this.puzzles = puzzlearr
    }
  },
  created (){
    this.random()
  },
}
</script>

<style scoped>
.puzzle {
  color: #2c3e50;
  margin-top: 60px;
}
button{
  cursor: pointer;
  margin-top: 10px;
  padding: 5px 30px;
  font-size: 18px;
  font-weight: 700;
  color: #fce680;
  background-color: #6577ca;
  border: 1px solid #456db3;
  border-radius: 5px;
}
</style>
