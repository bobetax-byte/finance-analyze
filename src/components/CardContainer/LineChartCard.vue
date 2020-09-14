<template>
  <div class="line-card-wrapper">
    <ListCard v-if="list && list.length" :list='list'></ListCard>
    <div class="chart-container">
      <Chart :cardData='cardData' :canvasId="canvasId" :showStyle="showStyle" :echartType='echartType'></Chart>
    </div>
  </div>
</template>

<script>
import ListCard from './ListDesc/Index.vue'
import Chart from './Chart/Index.vue'

export default {
  name: 'LineChartCard',
  components: { ListCard, Chart },
  props: {
    cardData: {
      type: 'Object',
      required: true
    },
    echartType : {
      type: 'String',
      default: 'line'
    },
    showStyle: {
      type :Number,
      default: 0
    },
    canvasId: {
      type: 'String',
      default: 'canvas-id'
    }
  },
  watch:{
    'echartType':function(){
      console.log('????')
    },
  },
  computed: {
    list() {
      const { details = [] } = this.cardData
      return details
    }
  },
  beforeUpdate(){
    console.log('updated1',this.echartType)
  }
}
</script>

<style scoped>
.simple-card-wrapper .simple-card-title {
  margin: 30rpx;
  height: 100rpx;
  line-height: 100rpx;
  vertical-align: middle;
  font-weight: bold;
  text-align: center;
}

.simple-card-wrapper .simple-card-title  .value {
  font-size: 84rpx;
}
.simple-card-wrapper .simple-card-title .unit {
  font-size: 30rpx;
  margin-left: 8rpx;
}
/*
.simple-card-wrapper {
  .simple-card-title {
    margin: 30rpx;
    height: 100rpx;
    line-height: 100rpx;
    vertical-align: middle;
    font-weight: bold;
    text-align: center;
    .value {
      font-size: 84rpx;
    }
    .unit {
      font-size: 30rpx;
      margin-left: 8rpx;
    }
  }
} */
</style>
