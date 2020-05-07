<template>
    <div class="home">
      <div class="r-container"><!--大的容器，宽高为body的宽高-->
        <div class="r-header">
          <header-box></header-box>
        </div><!--头部-->
        <div class="r-content-container"><!--头部下方为总的内容区-->
          <div class="r-aside">
            <aside-box></aside-box>
          </div><!--左侧菜单栏-->
          <div class="r-main"><!--右侧内容区-->
            <div class="r-content">
              <router-view />
            </div><!--右侧内容-->
            <div class="r-footer"></div><!--右侧下方底部-->
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import asideBox from "./asideBox";
  import headerBox from "./headerBox";
  export default {
    name: "home",
    components:{
      'aside-box':asideBox,
      'header-box':headerBox
    },
    methods:{

    }
  }
</script>

<style scoped>
.home{
  height: 100%;
  width: 100%;
}
</style>
