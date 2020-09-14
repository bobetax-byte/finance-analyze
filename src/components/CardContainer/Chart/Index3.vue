<template>
  <div class="echarts-wrap">
    <mpvue-echarts :echarts="echarts" :onInit="onInit" canvasId="demo-canvas"  ref="echarts" />
  </div>
</template>

<script>
import echarts from 'echarts'
import mpvueEcharts from 'mpvue-echarts'

import {lineOption} from './line'
import pieOption from './pie'

let option = null

function initChart (canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  })
  canvas.setChart(chart)

  chart.setOption(option)
  return chart
}


export default {
  components: {
    mpvueEcharts
  },
  props: {
    echartType: {
      type: "String",
      default: 'line'
    }
  },
  data () {
    return {
      echarts,
      onInit: null
    }
  },
  watch:{
    'echartType': {
      handler:function(value){
        console.log('wwa')
        this.initChart();
      },
      deep: true
    }

  },
  created(){
    this.init();
  },
  methods: {
    initChart (value) {
      let _this = this       // wxLoading('加载中')
      let newOp
      const { echartType} = this
      switch (echartType) {
        case 'pie':
          newOp = pieOption
          break;
        case 'line':
        default:
          newOp = lineOption
          break;
      }
      // this.clickFlag = false
      setTimeout(() => {
      // 渲染需要延时执行，不要问为什么
      // _this.$refs.echarts.clear()
        option = newOp
        _this.$refs.echarts.init()
      }, 200)
    },
    init(){
      console.log('ss', this.echartType)
      const { echartType} = this
      switch (echartType) {
        case 'pie':
          option = pieOption
          break;
        case 'line':
        default:
          option = lineOption
          break;
      }
      this.onInit = initChart
    }
  },
  beforeUpdate(){
    console.log('beforeUpdate', this.echartType)
  }
}
</script>

<style scoped>
.echarts-wrap {
  width: 100%;
  height: 300px;
}
</style>
