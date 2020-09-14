<template>
  <div class="simple-card-wrapper">
    <div class="c-blue simple-card-title">
      <div class="value">
        {{ title.value }}
      </div>
      <div class="unit">
        {{ title.unit }}
      </div>
    </div>
    <ListCard :list="list" />
  </div>
</template>

<script>
import ListCard from './ListDesc/Index.vue'

export default {
  name: 'SimpleCard',
  components: { ListCard },
  props: {
    cardData: {
      type: Object,
      required: true
    }
  },
  computed: {
    title() {
      const { title = {} } = this.cardData
      return title
    },
    list() {
      const { details = [] } = this.cardData
      return details
    }
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
  display: inline-block;
  height: 100rpx;
  line-height: 100rpx;
  font-size: 84rpx;
}

.simple-card-wrapper .simple-card-title  .unit {
  display: inline-block;
  font-size: 30rpx;
  height: 100rpx;
  line-height: 100rpx;
  margin-left: 8rpx;
}
/*
// .simple-card-wrapper {
//   .simple-card-title {
//     margin: 30rpx;
//     height: 100rpx;
//     line-height: 100rpx;
//     vertical-align: middle;
//     font-weight: bold;
//     text-align: center;
//     .value {
//       display: inline-block;
//       height: 100rpx;
//       line-height: 100rpx;
//       font-size: 84rpx;
//     }
//     .unit {
//       display: inline-block;
//       font-size: 30rpx;
//       height: 100rpx;
//       line-height: 100rpx;
//       margin-left: 8rpx;
//     }
//   }
// } */
</style>
