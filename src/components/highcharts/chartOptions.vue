<script>
  const lineOptions={
    chart: {
      zoomType: 'x'
    },
    boost: {
      useGPUTranslations: true
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: {
        millisecond: '%H:%M:%S.%L',
        second: '%H:%M:%S',
        minute: '%H:%M',
        hour: '%H:%M',
        day: '%m-%d',
        week: '%m-%d',
        month: '%Y-%m',
        year: '%Y'
      },
      // formatter:null,
    },
    tooltip: {
      dateTimeLabelFormats: {
        millisecond: '%H:%M:%S.%L',
        second: '%H:%M:%S',
        minute: '%H:%M',
        hour: '%H:%M',
        day: '%Y-%m-%d',
        week: '%m-%d',
        month: '%Y-%m',
        year: '%Y'
      },
      // formatter:null,

    },
    plotOptions:{
      spline:{
        animation:true,//是否开启初始化动画
        animationLimit: Infinity,
        connectNulls:true,//是否连接空值点，默认false
        enableMouseTracking:true,//数据量比较大的情况，关闭鼠标跟踪可以提供性能
        lineWidth:1,//数据列的线条宽度
      }
    },
    series: null,
  }

  const chartType={
    line:{name:'line',option:lineOptions}
  }
  export default {
    getChartOptions:function(type){
      return Object.assign({},chartType[type].option);
    }
  }
</script>
