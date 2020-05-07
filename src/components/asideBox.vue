<template>
  <el-menu default-active="2" class="aside-box">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>单图表</span>
      </template>
      <el-menu-item-group>
        <template slot="title">折线图</template>
        <el-menu-item index="1-1">highcharts</el-menu-item>
        <el-menu-item index="1-2">echarts</el-menu-item>
        <el-menu-item index="1-2">d3</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="堆叠图">
        <el-menu-item index="1-1">highcharts</el-menu-item>
        <el-menu-item index="1-2">echarts</el-menu-item>
        <el-menu-item index="1-2">d3</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="堆栈图">
        <el-menu-item index="1-1">highcharts</el-menu-item>
        <el-menu-item index="1-2">echarts</el-menu-item>
        <el-menu-item index="1-2">d3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
    export default {
        name: "aside"
    }
</script>

<style scoped>
  .aside-box{
    height: 100%;
  }
</style>
