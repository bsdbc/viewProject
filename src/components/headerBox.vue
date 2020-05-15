<template>
    <div class="header">
      <span>测试计划:</span><br/>
      <span>1.单页单个图表单条线，不同数据量下图表占用的浏览器内存对比</span>&nbsp;
      <span>2.单页多个同类型图表不同数据量下渲染速度对比，点击legend响应速度直观对比</span><br/>
    </div>
</template>

<script>
    export default {
        name: "headerBox"
    }
</script>

<style scoped>
  .header{
    width: 100%;
    height: 100%;
    padding: 0 20px;
  }
</style>
