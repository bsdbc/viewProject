<template>
    <div id="d3"></div>
</template>

<script>
  import * as d3 from 'd3'
  export default {
    name: "d3Test3",
    methods:{
      init:function(){
        var data = [10, 5, 12, 15];
        let scale=20;

        let width=500;
        let height=500;
        let svg=d3.select('#d3').append('svg').attr('width',width).attr('height',height);

        let rectWidth=20;
        let padding={top:20,right:20,bottom:20,left:20};

        let bar=svg.selectAll('g')
                    .data(data)
                    .enter()
                    .append('g')
                    .attr('transform',function(d,i){
                      return 'translate('+(padding.left + (rectWidth+30)*i)+','+(height-padding.top - padding.bottom - d*scale)+")";
                    })
        bar.append('rect')
          .attr('width',rectWidth)
          .attr('height',function(d){
            return d*scale
          })
          .attr('fill','steelblue')

        bar.append('text')
                  .attr('dy','1em')
                  .text(function(d,i){
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
