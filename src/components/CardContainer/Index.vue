<template>
  <div
    class="card-container-wrapper"
    :class="{'no-bottom': noPaddingBottom ,'overflow':noChart, 'table-spe':showType === 'TableCard'}"
  >
    <div
      @tap="handleClick"
      v-if="name"
      class="title"
    >
      <div class="title-name">
        {{ name }}
      </div>
      <img class="icon-back" src="/static/icon/back.svg" alt="">
    </div>
    <div
      v-if="subTitle"
      class="c-white sub-title"
    >
      {{ subTitle }}
    </div>
    <slot>
      <SimpleCard v-if="showType === 'SimpleCard'" :card-data="cardData"></SimpleCard>
      <TableCard v-if="showType === 'TableCard'" :card-data="cardData"></TableCard>
      <LineChartCard v-if="showType === 'LineChartCard'" :echart-type="echartType" :card-data="cardData"></LineChartCard>
    </slot>
    <div
      v-if="updateTime"
      class="update-time"
    >
      更新时间：{{ updateTime }}
    </div>
    <div
      v-if="showBottom"
      class="card-footer"
    >
      <div class="item question">
        <img
          class="icon icon-sms"
          src="/static/icon/sms.svg"
        />
        提问
      </div>
      <div class="item like">
        <img
          class="icon icon-like"
          src="/static/icon/like.svg"
        />
        关注
      </div>
    </div>
  </div>
</template>

<script>
// import Taro from '@tarojs/taro'

import SimpleCard from './SimpleCard.vue'
import LineChartCard from './LineChartCard.vue'
import TableCard from './TableCard.vue'

// import smsIcon from '../../assets/icon/sms.svg'
// import likeIcon from '../../assets/icon/like.svg'

export default {
  name: 'CardContainer',
  components: {
    SimpleCard,
    LineChartCard,
    TableCard
  },
  props: {
    cardInfo: {
      type: Object,
      required: true
    },
    showBottom: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
    }
  },
  computed: {
    noPaddingBottom(){
      if(this.showBottom || this.showType  === 'TableCard'){
        return true
      }
    },
    noChart(){
      if(this.showType !== 'LineChartCard'){
        return true
      }
    },
    name() {
      const { title = '' } = this.cardInfo
      return title
    },
    subTitle() {
      const { subTitle } = this.cardInfo
      return subTitle
    },
    showType() {
      const { showType = 'SimpleCard' } = this.cardInfo
      return showType
    },
    cardData() {
      const { data = {} } = this.cardInfo
      return data
    },
    updateTime() {
      const { updateTime = '' } = this.cardInfo
      return updateTime
    },
    echartType(){
      const { echartType = 'line' } = this.cardInfo
      console.log('echartType', echartType)
      return echartType
    }
  },
  created() {
    // console.log('this.showType--->', this.showType)
  },
  methods: {
    /**
     * @description 跳转卡片详情
     */
    handleClick() {
      const { id = '001' } = this.cardInfo
      console.log('test1')
      // const url = '/pages/detail/main'
      const url = '/pages/subPackages/detail/main'
      if (mpvuePlatform === 'wx') {
        mpvue.navigateTo({ url })
      }
      // Taro.navigateTo({ url: '/pages/details/index' })
      // window.open(`/test/details/${id}`)
    }
  }
}
</script>

<style scoped>
.card-container-wrapper{
  background: #23283C;
  border-radius: 20rpx;
  padding: 30rpx;
  margin-bottom: 20rpx;
}

.overflow {
  overflow: hidden;
}

.table-spe {
  padding: 30rpx 0;
}

.card-container-wrapper.no-bottom {
  padding-bottom: 0;
}

.card-container-wrapper .title {
  display: flex;
  width: 100%;
  height: 45rpx;
  line-height: 45rpx;
  font-size: 32rpx;
  color: #fff;
  align-items: center;
  justify-content: space-between;
}
.card-container-wrapper .title .title-name {
  position: relative;
  display: flex;
  align-items: center;
}

.card-container-wrapper .title .title-name::before{
  content: "";
  display: block;
  margin-right: 16rpx;
  width: 6rpx;
  height: 32rpx;
  background: #119CFD;
  border-radius: 30rpx;
}

.card-container-wrapper .title .icon-back{
 transform: rotate(180deg);
 display: block;
 width: 14rpx;
 height: 22rpx;
}

.card-container-wrapper .sub-title {
  opacity: 0.8;
  font-size: 28rpx;
  height: 40rpx;
  line-height: 40rpx;
  text-align: center;
  }

/* .card-container-wrapper{
  background: #23283C;
  border-radius: 20rpx;
  padding: 30rpx;
  margin-bottom: 20rpx;
  .title {
    display: flex;
    width: 100%;
    height: 45rpx;
    line-height: 45rpx;
    font-size: 32rpx;
    color: #fff;
    align-items: center;
    &::before{
      content: "";
      display: block;
      margin-right: 16rpx;
      width: 6rpx;
      height: 32rpx;
      background: #119CFD;
      border-radius: 30rpx;
    }
    &::after{
      content: "";
    }
  }
  .sub-title {
    opacity: 0.8;
    font-size: 28rpx;
    height: 40rpx;
    line-height: 40rpx;
    text-align: center;
  }
} */
.card-footer {
  display: flex;
  width: 100%;
  height: 90rpx;
  align-items: center;
  border-top: 2rpx solid #1C2035;
}

.card-footer .item {
  flex: 1;
  opacity: 0.8;
  font-size: 26rpx;
  line-height: 38rpx;
  height: 38rpx;
  color: #fff;
  letter-spacing: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-footer .item  .icon-like {
  width: 28rpx;
  height: 24rpx;
}

.card-footer .item .icon-sms {
  width: 28rpx;
  height: 24rpx;
}
.card-footer .item .icon {
  margin-right: 10rpx;
}
.card-footer .item.text {
  display: inline;
  line-height: 100%;
}

/* .card-footer {

    .item {
      flex: 1;
      opacity: 0.8;
      font-size: 26rpx;
      line-height: 38rpx;
      height: 38rpx;
      color: #fff;
      letter-spacing: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon-like {
        width: 28rpx;
        height: 24rpx;
      }
      .icon-sms {
        width: 28rpx;
        height: 24rpx;
      }
      .icon {
        margin-right: 10rpx;
      }
      .text {
        display: inline;
        line-height: 100%;
      }
    }
  } */
.update-time {
  font-size: 24rpx;
  color: #7981A0;
  text-align: center;
  margin-bottom: 22rpx;
}
</style>
