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
  import {randomcolor} from "./radomcolor/randomcolor";
  import * as d3 from 'd3';
  export default {
    name: "lineChart",
    data(){
      return{
        dataNum:1000,
        dataGroups:5,
        dataLoadTime:0,
        graphTime:0,
        svg:null,
      }
    },
    methods:{
      init:function(){
        let datas=createLineDatas(this.dataNum,'line',this.dataGroups);
        console.log(datas)

        let margin = {top: 20, right: 20, bottom: 30, left: 50};
        let width=this.$el.querySelector('#chartContainer').clientWidth -margin.left -margin.right;
        let height=this.$el.querySelector('#chartContainer').clientHeight - margin.top - margin.bottom;
        if(!this.svg){
          this.svg=d3.select('#chartContainer').append('svg')
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g").attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");
        }
        let timeCollection=[];
        let dataCollection=[];

        for(let i=0;i<datas.length;i++){
          let data=datas[i]
          let tempTime=data.data.map(item=>{return item[0]})
          timeCollection=timeCollection.concat(tempTime)

          let tempData=data.data.map(item=>{return item[1]})
          dataCollection=dataCollection.concat(tempData)
        }

        let xScale=d3.scaleTime() //x轴比例尺
          .domain(d3.extent(timeCollection))
          .range([0,width])

        let yScale=d3.scaleLinear()//y轴比例尺
          .domain([0,d3.max(dataCollection)])
          .range([height,0])

        for(let i=0;i<datas.length;i++){
          let data=datas[i]
          // let xScale=d3.scaleTime() //x轴比例尺
          //   .domain(d3.extent(data.data,function(d){return d[0]}))
          //   .range([0,width])
          //
          // let yScale=d3.scaleLinear()//y轴比例尺
          //   .domain([0,d3.max(data.data,function(d){return d[1]})])  //
          //   .range([height,0])
          for(let i=0;i<data.data.length;i++){
            let item=data.data[i];
            let y=item[1];

            if(yScale(y)<0){
              console.log(yScale(y))
            }
          }
          let valueLine=d3.line()
            .x(function(d){return xScale(d[0])})
            .y(function(d){return yScale(d[1])})

          this.svg.append('path')
            .data([data.data])
            .attr('class','line')
            .attr('stroke',randomcolor())
            .attr('d',valueLine)
            // .attr("transform", "translate("+margin.left+",-" + margin.top + ")")
        }

        this.svg.append('g')
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(xScale))

        this.svg.append('g')
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
    stroke-width:2px;
  }
</style>
