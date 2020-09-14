<template>
  <div class="check-card">
    <div class="title">
      <div class="title-texi">
        {{ title }}
      </div>
      <div
        v-if="barlist.length"
        class="checkbox"
      >
        <div
          v-for="(it,itx) in barlist"
          :key="itx"
          class="checkbox-item"
          :class="{'active': itx === index }"
          @click="handleChangeTab(itx)"
        >
          {{ it.name }}
        </div>
      </div>
    </div>
    <div class="check-card-content">
      <CardContainer
        :show-bottom="showBottom"
        :card-info="cardData"
      />
    </div>
  </div>
</template>

<script>
import CardContainer from './Index.vue'

export default {
  name: 'CheckCard',
  components: { CardContainer },
  props: {
    cardInfo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      index: 0,
      showBottom: false,
      timer:{
        canclick:true,
        limit:1500,
        tag:null
      },
    }
  },
  computed: {
    cardData() {
      const { dataList } = this.cardInfo
      const { index } = this
      console.log('index-->',index)
      return dataList[index]
    },
    barlist() {
      const { barlist = [] } = this.cardInfo
      return barlist
    },
    title() {
      const { title = '' } = this.cardInfo
      return title
    }
  },
  watch: {
    'index': function(){
       const { dataList } = this.cardInfo
      const { index } = this
      console.log('indexsss-->',dataList[index])
      this.cardData = dataList[index]
    }
  },
  methods: {
    handleChangeTab(itx){
      const _this = this
      console.log('this.timer.canclick',this.timer.canclick)
      if(this.timer.canclick){
        this.index = itx
        this.timer.canclick = false
        this.timer.tag = null
        clearTimeout(this.timer.tag)
      }
      this.timer.tag = setTimeout(()=>{
        _this.timer.canclick = true
      },_this.timer.limit)
    }
  }
}
</script>

<style scoped>
.check-card {
  overflow: hidden;
}
.check-card .title {
    display: flex;
    height: 60rpx;
    line-height: 60rpx;
    align-items: center;
    justify-content: space-between;
    font-size: 32rpx;
    color: #fff;
    margin: 20rpx;
  }
.check-card .checkbox {
  border: 1rpx solid #6C7390;
  border-radius: 30rpx;
  display: flex;
  align-items: center;
  height: 60rpx;
  /* line-height: 60rpx; */
  box-sizing: border-box;
  color: #fff;
}
.check-card  .checkbox .checkbox-item {
  flex: 1;
  font-size: 28rpx;
  display: inline-block;
  padding: 0 28rpx;
  /* transform: translateY(-4rpx); */
}
.check-card  .checkbox .active {
  background-image: linear-gradient(38deg, #006CED 0%, #00C6FB 100%);
  border-radius: 30px;
}

.check-card  .checkbox .checkbox-item:first-of-type .active {
  /* transform: translate(-2rpx,2rpx); */
}

.check-card  .checkbox .checkbox-item:last-of-type.active {
  /* transform: translate(2rpx,2rpx); */
}

/*

.check-card {
  .title {
    display: flex;
    height: 60rpx;
    line-height: 60rpx;
    align-items: center;
    justify-content: space-between;
    font-size: 32rpx;
    color: #fff;
    margin: 20rpx;
  }
  .checkbox {
    border: 2rpx solid #6C7390;
    border-radius: 30rpx;
    height: 60rpx;
    line-height: 60rpx;
    box-sizing: border-box;
    color: #fff;
    .checkbox-item {
      font-size: 28rpx;
      display: inline-block;
      padding: 0 28rpx;
      transform: translateY(-2rpx);
      &.active {
        background-image: linear-gradient(38deg, #006CED 0%, #00C6FB 100%);
        border-radius: 30px;
      }
    }
  }
} */
</style>
