<template>
    <div id="d3"></div>
</template>

<script>
  import * as d3 from 'd3'
  export default {
    name: "d3Test3",
    methods:{
      init:function(){
        let margin = {top: 20, right: 20, bottom: 30, left: 50};
        let width = 960 - margin.left - margin.right;
        let height = 500 - margin.top - margin.bottom;
        let data=[
          {year:2006,population:40},
          {year:2008,population:45},
          {year:2010,population:48},
          {year:2012,population:51},
          {year:2014,population:53},
          {year:2016,population:57},
          {year:2017,population:62},
          ]

        var x = d3.scaleTime().range([0, width]);
        var y = d3.scaleLinear().range([height, 0]);

        let valueline = d3.line()
          .x(function(d) { return x(d.year); })
          .y(function(d) { return y(d.population); });
        console.log(valueline)
        var svg = d3.select("#d3").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g").attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
        x.domain(d3.extent(data, function(d) { return d.year; }));
        y.domain([0, d3.max(data, function(d) { return d.population; })]);

        svg.append("path")
          .data([data])
          .attr("class", "line")
          .attr("d", valueline);

        // Add the X Axis
        svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));

        // Add the Y Axis
        svg.append("g")
          .call(d3.axisLeft(y));

      },
    },
    mounted() {
      this.init();
    }
  }
</script>

<style>
  .line{
    fill:none;
    stroke:green;
    stroke-width:2px;
  }
</style>
