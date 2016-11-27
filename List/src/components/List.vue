<template>
  <ul>
    <li v-for="(lia,index) in lidata"
        v-bind:class="{'li-s':lia.isli}" 
        v-on:click="style(lia)">{{lia.message}}
        <span class="remove" v-on:click.stop="remove(index)">delete</span>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'list',
  props: ['msdata'],
  data (){
    return {
      lidata: this.msdata,
    }
  },
  methods: {
    style (lia) {
      lia.isli = !lia.isli
    },
    remove (index) {
      this.lidata.splice(index,1)
    }
  }
}
</script>
<style>
ul{
  margin-top: 10px;
  margin-left: 35%;
}
li{
  display: table;
  list-style: none;
  text-align: left;
  cursor: pointer;
  line-height: 24px;
}
.li-s{
  color: #499449;
  font-weight: 700;
}
.remove{
  opacity: 0;
  font-size: 16px;
  font-weight: 500;
  color: #B8B8B8;
  margin-left: 10px;
}
li:hover .remove{
  opacity: 0.9;
  color: #B9422B;
}
.remove:hover{
  font-weight: 700;
}
</style>