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
  import chartOptions from "./chartOptions";
  import {createLineDatas} from "../common/dataFactory";
  import Highcharts from 'highcharts'
  export default {
    name: "chart",
    props:{
    },
    data(){
      return{
        chart:null,
        chartOptions:null,
        type:'line',
        dataNum:100,
        dataGroups:1,
        dataLoadTime:0,
        graphTime:0,
        startGraphTime:null,
        endGraphTimeSum:0,
      }
    },
    created() {
      this.chartOptions=chartOptions.getChartOptions(this.type)
    },
    methods:{
      init:function(){
        let startLoad=new Date().getTime();
        let series=createLineDatas(this.dataNum,'spline',this.dataGroups)
        let endLoad=new Date().getTime();

        this.dataLoadTime=endLoad-startLoad;

        if(!this.chartOptions){
          this.chartOptions=chartOptions.getChartOptions(this.type)
        }
        let $temp=this;
        series=series.map(item=>{
          item.events={};
          item.events.afterAnimate=function(){
            // console.log(this.index)
            if(this.index == series.length-1){
              $temp.graphTime=(new Date().getTime() - $temp.startGraphTime);
            }
          };
          return item;
        })

        this.$set(this.chartOptions,'series',series);

        if(this.chart){
          this.chart.destroy();
        }

        this.startGraphTime=new Date().getTime();
        this.endGraphTimeSum=0;
        this.graphTime=0;

        this.chart=Highcharts.chart('chartContainer',Object.assign({},this.chartOptions));
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
    },
    destroyed() {
      if(this.chart){
        this.chart.destroy();
      }
    }
  }
</script>

<style scoped>
  .inline-div{
    display: inline-block;
  }
</style>
