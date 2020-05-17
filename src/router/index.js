import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['../components/home.vue'], resolve),
      children:[
        {
          path:'highchart/line',
          component:resolve => require(['../components/highcharts/lineChart.vue'], resolve),
        },
        {
          path:'echarts/line',
          component:resolve => require(['../components/echarts/lineChart.vue'], resolve),
        },
        {
          path:'d3/test',
          component:resolve => require(['../components/d3/d3Test6.vue'], resolve),
        },
        {
          path:'d3/line',
          component:resolve => require(['../components/d3/multLineChart.vue'], resolve),
        },
      ]
    }
  ]
})
