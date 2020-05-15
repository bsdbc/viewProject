<template>
    <div class="d3Test2"></div>
</template>

<script>
  import * as d3 from 'd3'
  export default {
    name: "d3Test2",
    methods:{
      init:function(){
        let width=400;
        let height=400;
        let svg=d3.select(".d3Test2") //添加一个svg画布
                  .append('svg')
                  .attr('width',width)
                  .attr('height',height);

        let padding = {top:20,right:30,bottom:20,left:30} //画布周边的空白

        const dataset = [10, 20, 30, 40, 33, 24, 12, 5]; //定义一组数据

        let xScale = d3.scale.ordinal()
                              .domain(d3.range(dataset.length))
                              .rangeRoundBands([0, width - padding.left - padding.right]);

        let yScale = d3.scale.linear()
                              .domain([0,d3.max(dataset)])
                              .range([height - padding.top - padding.bottom, 0]);

        //定义x轴
        let xAxis = d3.svg.axis()
          .scale(xScale)
          .orient("bottom");

        //定义y轴
        let yAxis = d3.svg.axis()
          .scale(yScale)
          .orient("left");

        let rectPadding = 4;

        let rects=svg.selectAll('.my-rect')
                      .data(dataset)
                      .enter()
                      .append('rect')
                      .attr('class','my-rect')
                      .attr('transform','translate('+padding.left+','+padding.top+')')
                      .attr('x',function(d,i){
                        return xScale(i)+rectPadding/2
                      })
                      .attr('y',function(d,i){
                        return yScale(d);
                      })
                      .attr('width',xScale.rangeBand() - rectPadding)
                      .attr('height',function(d){
                        return height - padding.top - padding.bottom - yScale(d);
                      })
                      .attr('fill','steelblue');
        let texts = svg.selectAll(".my-text")
          .data(dataset)
          .enter()
          .append("text")
          .attr("class","my-text")
          .attr("transform","translate(" + padding.left + "," + padding.top + ")")
          .attr("x", function(d,i){
            return xScale(i) + rectPadding/2;
          } )
          .attr("y",function(d){
            return yScale(d);
          })
          .attr("dx",function(){
            return (xScale.rangeBand() - rectPadding)/2;
          })
          .attr("dy",function(d){
            return 20;
          })
          .text(function(d){
            return d;
          })
          .style({
            "fill":"#FFF",
            "text-anchor":"middle"
          });

        svg.append("g")
          .attr("class","axis")
          .attr("transform","translate(" + padding.left + "," + (height - padding.bottom) + ")")
          .call(xAxis);

        //添加y轴
        svg.append("g")
          .attr("class","axis")
          .attr("transform","translate(" + padding.left + "," + padding.top + ")")
          .call(yAxis);
      },
    },
    mounted() {
      this.init();
    }
  }
</script>

<style >
  .axis path,
  .axis line{
    fill: none;
    stroke: black;
    shape-rendering: crispEdges;
  }

  .axis text {
    font-family: sans-serif;
    font-size: 11px;
  }
</style>
