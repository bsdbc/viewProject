<template>
  <div style="height: 100%;width: 100%;">
    <div id="chartContainer" class="chart-container"></div>
    <div style="height: 200px;width: 100%;">
      <div class="inline-div">
        <span>数据量：</span>
        <el-input-number v-model="dataNum" @change="dataNumChange" :min="1" :step="100"></el-input-number>
      </div>
      <div class="inline-div">
        <span>数据条数：</span>
        <el-input-number v-model="dataGroups" @change="dataGroupsChange" :min="1"  :step="1"></el-input-number>
      </div>
      <div class="inline-div">
        <span>数据加载速度：</span>
        <span>{{dataLoadTime}}ms</span>
      </div>
      <div class="inline-div">
        <span>渲染速度：</span>
        <span>{{graphTime}}ms</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {createLineDatas} from "../common/dataFactory";
  import * as d3 from 'd3';
  export default {
    name: "lineChart",
    data(){
      return{
        dataNum:100,
        dataGroups:1,
        dataLoadTime:0,
        graphTime:0,
      }
    },
    methods:{
      init:function(){
        let data=createLineDatas(this.dataNum,'line',this.dataGroups)[0];
        console.log(data)

        let margin = {top: 20, right: 20, bottom: 30, left: 50};
        let width=this.$el.querySelector('#chartContainer').clientWidth -margin.left -margin.right;
        let height=this.$el.querySelector('#chartContainer').clientHeight - margin.top - margin.bottom;

        let xScale=d3.scaleTime() //x轴坐标轴
          .domain(d3.extent(data.data,function(d,i){return d[0]}))
          .range([0,width])

        let yScale=d3.scaleLinear()//y轴坐标轴
          .domain([0,d3.max(data.data,function(d){return d[1]})])  //
          .range([height,0])

        let valueLine=d3.line()
                        .x(function(d){return xScale(d[0])})
                        .y(function(d){return yScale(d[1])})

        let svg=d3.select('#chartContainer').append('svg')
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g").attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
        svg.append('path')
            .data([data.data])
            .attr('class','line')
            .attr('d',valueLine)

        svg.append('g')
          .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(xScale))

        svg.append('g')
            .call(d3.axisLeft(yScale))
      },
      dataNumChange:function(){
        this.init();
      },
      dataGroupsChange:function(){
        this.init();
      },
    },
    mounted() {
      this.init();
    }
  }
</script>

<style scoped>
  .inline-div{
    display: inline-block;
  }
</style>
<style>
  .line{
    fill:none;
    stroke:green;
    stroke-width:2px;
  }
</style>
