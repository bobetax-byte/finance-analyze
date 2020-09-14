<template>
  <div class="page-darkblue special-card-list">
    <div
      class="special-card card-container-wrapper card-blue "
      :class="{'no-bottom': showBottom}"
    >
      <div class="c-white title-name">
        财务总览
      </div>
      <div class="wrap">
        <mpvue-echarts :echarts="echarts" :onInit="ecBarInit" canvasId="bar" />
      </div>
    </div>
    <div
      class="special-card card-container-wrapper card-red"
      :class="{'no-bottom': showBottom}"
    >
      <div class="c-white title-name">
        同业总览
      </div>
      <div class="wrap">
        <mpvue-echarts :echarts="echarts" :onInit="ecScatterInit" canvasId="scatter" />
      </div>
    </div>
    <div
      class="special-card card-container-wrapper card-purple"
      :class="{'no-bottom': showBottom}"
    >
      <div class="c-white title-name">
        团金总览
      </div>
      <div class="wrap">
        <mpvue-echarts :echarts="echarts" :onInit="ecMoneyInit" canvasId="money" />
      </div>
    </div>
</div>
</template>

<script>
import echarts from 'echarts'
import mpvueEcharts from 'mpvue-echarts'

let barChart, scatterChart
function getLineOption () {
  return {
    backgroundColor: 'transparent',
    color: ['#FFF'],
    tooltip: {
      show: true,
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: 'rgba(255,255,255,0.6)',
          type: 'dashed'
        }
      }
    },
    legend: {
      show:false
    },
    grid: {
      containLabel: true,
      left:0,
      right:10,
      bottom:10,
      top:20
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['01', '03', '05', '07', '09', '11', '12'],
      axisLine: {
        lineStyle: {
          color: "rgba(252, 249, 249, 0)"
        },
        show: false
      }
      // show: false
    },
    yAxis: {
      x: 'center',
      type: 'value',
      color: '#fff',
      axisLine: {
        lineStyle: {
          color: "rgba(252, 249, 249, 0)"
        },
        show: false
      },
      splitLine: {
        lineStyle: {
          type: 'line',
          color: 'rgba(255,255,255,0.08)'
        }
      }
    },
    axisLabel: {
      showMaxLabel: true,
      showMinLabel: true,
      verticalAlign: 'middle',
      color: '#fff'
    },
    series: [{
      name: '余额',
      type: 'line',
      smooth: true,
      data: [128, 36, 65, 130, 178, 140, 233],
      lineStyle: {
        color: '#fff',
        width:3,
      },
      itemStyle : {
        opacity:0,
        borderColor:'#fff'
      },
      emphasis:{
        itemStyle:{
          color : 'rgba(0,161,246,1)',
          borderColor: 'rgba(255,255,255,1)',
          borderWidth:4,
          opacity: 1
        }
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: 'rgba(193,255,252,1)' // 0% 处的颜色
          }, {
            offset: 1, color: 'rgba(193,255,249,0)' // 100% 处的颜色
          }],
          opacity:0.4,
          global: false // 缺省为 false
        }
      }
    }]
  }
}

function getScatterOption () {
  return {
    backgroundColor: 'transparent',
    color: ['#FFF'],
    tooltip: {
      show: true,
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: 'rgba(255,255,255,0.6)',
          type: 'dashed'
        }
      }
    },
    legend: {
      show: false,
      data: ['余额'],
      bottom: 10,
      left: 'center',
      color: '#fff',
      z: 100,
      icon: 'rect',
      textStyle: {
        color: '#fff'
      }
    },
    grid: {
      containLabel: true,
      left:0,
      right:10,
      bottom:10,
      top:20
    },

    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['01', '05', '09', '13', '17', '21', '25'],
      axisLine: {
        lineStyle: {
          color: "rgba(252, 249, 249, 0)",
        },
        show: false
      }
      // show: false
    },
    yAxis: {
      x: 'center',
      type: 'value',
      color: '#fff',
      axisLine: {
        lineStyle: {
          color: "rgba(252, 249, 249, 0)"
        },
        show: false
      },
      splitLine: {
        lineStyle: {
          type: 'line',
          color: 'rgba(255,255,255,0.08)'
        }
      }
    },
    axisLabel: {
      showMaxLabel: true,
      showMinLabel: true,
      verticalAlign: 'middle',
      color: '#fff'
    },
    series: [{
      name: '余额',
      type: 'line',
      smooth: true,
      data: [18, 36, 65, 30, 78, 40, 33],
      lineStyle: {
        color: '#fff',
        width:3,
      },
      itemStyle : {
        opacity:0,
        borderColor:'#fff'
      },
      emphasis:{
        itemStyle:{
          color : 'rgba(241,88,108,1)',
          borderColor: 'rgba(255,255,255,1)',
          borderWidth:4,
          opacity: 1
        }
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
              offset: 0, color: 'rgba(255,198,233,1)' // 0% 处的颜色
          }, {
              offset: 1, color: 'rgba(238,220,255,0)' // 100% 处的颜色
          }],
          opacity:0.4,
          global: false // 缺省为 false
        }
      }
    }]
  }
}


function getmoneyOption () {
  return {
    backgroundColor: 'transparent',
    color: ['#FFF'],
    tooltip: {
      show: true,
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: 'rgba(255,255,255,0.6)',
          type: 'dashed'
        }
      }
    },
    legend: {
      show: false,
      data: ['余额'],
      bottom: 10,
      left: 'center',
      color: '#fff',
      z: 100,
      icon: 'rect',
      textStyle: {
        color: '#fff'
      }
    },
    grid: {
      containLabel: true,
      left:0,
      right:10,
      bottom:10,
      top:20
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['01', '05', '09', '13', '17', '21', '25'],
      axisLine: {
        lineStyle: {
          color: "rgba(252, 249, 249, 0)"
        },
        show: false
      }
      // show: false
    },
    yAxis: {
      x: 'center',
      type: 'value',
      color: '#fff',
      axisLine: {
        lineStyle: {
          color: "rgba(252, 249, 249, 0)"
        },
        show: false
      },
      splitLine: {
        lineStyle: {
          type: 'line',
          color: 'rgba(255,255,255,0.08)'
        }
      }
    },
    axisLabel: {
      showMaxLabel: true,
      showMinLabel: true,
      verticalAlign: 'middle',
      color: '#fff'
    },
    series: [{
      name: '余额',
      type: 'line',
      smooth: true,
      data: [108, 136, 165, 30, 278, 140, 33],
      lineStyle: {
        color: '#fff',
        width:3,
      },
      itemStyle : {
        opacity:0,
        borderColor:'#fff'
      },
      emphasis:{
        itemStyle:{
          color : 'rgba(150,68,250,1)',
          borderColor: 'rgba(255,255,255,1)',
          borderWidth:4,
          opacity: 1
        }
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
              offset: 0, color: 'rgba(255,198,233,1)' // 0% 处的颜色
          }, {
              offset: 1, color: 'rgba(238,220,255,0)' // 100% 处的颜色
          }],
          opacity:0.4,
          global: false // 缺省为 false
        }
      }
    }]
  }
}

export default {
  data () {
    return {
      echarts,
      ecBarInit: function (canvas, width, height) {
        barChart = echarts.init(canvas, null, {
          width: width,
          height: height
        })
        canvas.setChart(barChart)
        barChart.setOption(getLineOption())
        return barChart
      },
      ecScatterInit: function (canvas, width, height) {
        scatterChart = echarts.init(canvas, null, {
          width: width,
          height: height
        })
        canvas.setChart(scatterChart)
        scatterChart.setOption(getScatterOption())
        return scatterChart
      },
      ecMoneyInit: function (canvas, width, height) {
        scatterChart = echarts.init(canvas, null, {
          width: width,
          height: height
        })
        canvas.setChart(scatterChart)
        scatterChart.setOption(getmoneyOption())
        return scatterChart
      }
    }
  },
  components: {
    mpvueEcharts
  },
  onShareAppMessage () {}
}
</script>

<style scoped>
.special-card-list {
  padding: 20rpx;
}
.special-card-list .special-card {
  padding: 40rpx;
  margin-bottom: 20rpx;
}

.special-card .title-name {
  font-size: 30rpx;
}

.special-card-list .card-blue {
  background-image: linear-gradient(43deg, #478AFF 0%, #04BEFE 100%);
  border-radius: 30rpx;
}

.special-card-list .card-red {
  background-image: linear-gradient(38deg, #F1586C 0%, #FEA386 100%);
  border-radius: 30rpx;
}

.special-card-list .card-purple {
  background-image: linear-gradient(43deg, #7A2CF7 0%, #CB71FF 100%);
  border-radius: 30rpx;
}
.wrap {
  width: 610rpx;
  height: 220px;
  margin: 0 auto;
}
</style>
