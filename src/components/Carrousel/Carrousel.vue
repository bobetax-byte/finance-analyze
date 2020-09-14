<template>
  <div class="home_wrap">
    <swiper class="home_swiper"
      :previous-margin="previousMargin"
      :next-margin="nextMargin"
      :circular="circular"
      @change="handleChange($event)">
        <block v-for="(item, index) in movies" :key="index">
            <swiper-item>
              <div :class="curIndex===index ? 'active_item' : 'item'" :animation="index == curIndex ? animationData : animationData2">
                <!-- 卡片项，写在子组件中，详见下文的第四项 -->
                <Card :data="item" />
              </div>
            </swiper-item>
        </block>
    </swiper>
    <!-- 指示点 -->
    <div class="swiper_dot_wrap">
      <ul>
        <li v-for="(item, index) in movies" :key="index" :class="{'active':curIndex === index}"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Card from './Card'
export default {
  name: 'Carrousel',
  props: {
    movies: {
      type:Array,
      required: true
    }
  },
  data () {
    return {
      curIndex: 0,
      datalist: [{
        title:'核心指标',
        money: '24,000',
        desc: '存款余额（亿）'
      }, {
        title:'零售指标',
        money: '124,000',
        desc: '贷款总额（亿）'
      }, {
        title:'存款指标',
        money: '22,000',
        desc: '存款余额（亿）'
      }],
      circular: true, // 设置衔接滑动
      previousMargin: '63rpx',
      nextMargin: '63rpx',
      animationData: {}, // 卡片放大动画
      animationData2: {} // 卡片缩小动画
    }
  },
  components: {
    Card
  },
  methods: {
    handleChange (e) {
      this.curIndex = e.mp.detail.current
      this.changeActive()
      this.changeNormal()
    },
    // 收缩
    changeNormal () {
      var animation2 = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease'
      })
      this.animation2 = animation2
      animation2.scale(0.9).opacity(0.3).step()
      this.animationData2 = animation2.export()
    },
    // 展开
    changeActive () {
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease'
      })
      this.animation = animation
      animation.scale(1).opacity(1).step()
      this.animationData = animation.export()
    }
  }
}
</script>

<style scoped>

.home_wrap {
  position: relative;
}

.home_swiper {
  position: relative;
  width: 100%;
  height: 384rpx !important;
  margin-top: 20rpx;
  position: relative;
}
.item{
  transform: scale(0.9);
  transform-origin: 50% 50% 0px;
  opacity: 0.3;
}
.active_item{
  transform: scale(1);
  opacity: 1;
}

.swiper_dot_wrap{
  position: absolute;
  bottom: 30rpx;
  left: 50%;
  width: 80rpx;
  height: 22rpx;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
}

.swiper_dot_wrap ul{
  float: right;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.swiper_dot_wrap ul  li{
  float: left;
  width: 12rpx;
  height: 12rpx;
  border-radius: 50%;
  margin-right: 15rpx;
  background: rgba(255, 255, 255, 0.3);
  box-sizing: content-box;
}

.swiper_dot_wrap ul li:last-child{
  margin-right: 0rpx;
}

.swiper_dot_wrap ul li.active{
  background: #fff;
  border:4rpx solid #ffffff4d;
}

/*
.swiper_dot_wrap{
  position: absolute;
  top: 106rpx;
  right: 65rpx;
  width: 200rpx;
  height: 15rpx;
  ul{
    float: right;
    overflow: hidden;
    li{
      float: left;
      width: 15rpx;
      height: 15rpx;
      box-sizing: border-box;
      border-radius: 50%;
      border: 2rpx solid #b99c6d;
      margin-right: 15rpx;
      &:last-child{
        margin-right: 0rpx;
      }
      &.active{
        background: #b99c6d;
      }
    }
  }
} */
</style>
