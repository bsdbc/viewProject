<template>
    <div id="d3"></div>
</template>

<script>
  import * as d3 from 'd3'
  export default {
    name: "d3Test3",
    methods:{
      init:function(){
        let svg=d3.select('#d3').append('svg').attr('width',1000).attr('height',1000);
        svg.append('circle')
            .attr('cx',200)
            .attr('cy',200)
            .attr('r',0)
            .attr('fill','steelblue')
            .attr('stroke','black')
            .attr('stroke-width',1)
            .on('mouseover',function(d,i){
              d3.select(this).attr("fill",'yellow')
            })
            .on("mouseout",function(d,i){
              d3.select(this).attr("fill",'steelblue')
            })
            .transition()
            .each("end", function() { d3.select(this).attr('r',300) })
            .attr('r',100)
            .delay(1000)
            .duration(2000)
            .ease("bounce")
      }
    },
    mounted() {
      this.init();
    }
  }
</script>

<style scoped>

</style>
