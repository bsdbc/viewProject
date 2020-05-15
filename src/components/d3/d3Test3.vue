<template>
    <div id="d3"></div>
</template>

<script>
  import * as d3 from 'd3'
  export default {
    name: "d3Test3",
    methods:{
      init:function(){
        let data=[10, 20, 30, 25, 15];
        let li=d3.select('#d3').selectAll('li')
                  .data(data)
                  .enter()
                  .append('li')
                  .classed('my-li',true)
                  .text(function(d){
                    console.log(this)
                    return d;
                  })
      }
    },
    mounted() {
      this.init();
    }
  }
</script>

<style scoped>

</style>
