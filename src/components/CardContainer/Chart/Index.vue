<template>
  <view class="echarts-wrap" :class="{
      'pie-card':echartType === 'pie'
    }">
    <img v-if="picInfo && showImg" :src="picInfo" alt="">
    <div class="mpvue" :class="{'remove': showImg}">
      <mpvueEcharts :echarts="echarts" :onInit="onInit" canvasId="demo" ref="echarts" />
    </div>
  </view>
</template>

<script>
import echarts from 'echarts'
import mpvueEcharts from 'mpvue-echarts'

import { mapState } from 'vuex'

import {lineOption} from './line'
import pieOption from './pie'

let option = null

let picInfo = null

let randomCanvasId = function(){
  const random = parseInt(Math.random() * 10000)
  return `canvas-${random}`
}()

function initChart (canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  })
  canvas.setChart(chart)

  chart.setOption(option)
  setTimeout(()=>{
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 500,
      height: 500,
      destWidth: 100,
      destHeight: 100,
      canvasId: "demo",
      success(res) {
        console.log('tup->', res.tempFilePath)
        picInfo = res.tempFilePath
      }
    })
  },1500)
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
    },
    showStyle: {
      type: Number,
      default: 0
    },
    canvasId: {
      type: "String",
      default: randomCanvasId
    }
  },
  data () {
    return {
      echarts,
      onInit: null,
      picImg: null,
      showImg: false,
    }
  },
  watch:{
    'echartType': {
      handler:function(value){
        console.log('wwa')
        this.initChart();
      },
      deep: true
    },
    "EchartState":function(value){
      console.log('EchartState-change->',value)
      if(value){
        this.hideChart()
      }else {
        this.showChart()
      }
    }
  },
  created(){
    this.init();
  },
  computed: {
    ...mapState([
      // 映射 this.count 为 store.state.count
      'EchartState'
    ]),
  },
  mounted(){
    console.log('mounted', this.$refs.echarts)
    // var picInfo = this.$refs.echarts.chart.getDataURL()
    // this.picImg = picInfo
    console.log('picInfo',picInfo)
  },
  methods: {
    initChart (value) {
      let _this = this       // wxLoading('加载中')
      let newOp
      const { echartType,showStyle,canvasId} = this
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
      const { echartType,showStyle} = this
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
    },
    hideChart(){
      this.showImg = true
    },
    showChart(){
      this.$nextTick(function () {
        this.showImg = false
        this.initChart();
      })
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
.pie-card {
  height: 150px;
}
.remove {
  position: absolute;
  left: -1000px;
}
.mpvue {
  width: 100%;
  height: 100%;
}
</style>
