<!--搜索页面-->
<template>
  <div class="search-header">
    <div
      class="back"
      @click="back"
    >
      <img
        src="/static/icon/back.svg"
        class="icon-back"
      />
    </div>
    <div class="search-content">
      <img
        src="/static/images/search-icon@2x.png"
        class="icon-search"
      />
      <input
        type="text"
        class="input"
        placeholder="机构、产品、渠道、指标"
      >
    </div>
    <div
      class="search-voice"
      @click="searchFromVoice"
    >
      <img
        src="/static/icon/voice.svg"
        class="search-voice-icon"
      />
    </div>
  </div>
</template>

<script>
// import voiceIcon from '../assets/icon/voice.svg'
// import backIcon from '../assets/icon/back.svg'
// import searchIcon from '../assets/imgs/search-icon@2x.png'

export default {
  name: 'SearchHeader',
  data() {
    return {
    }
  },
  methods: {
    back() {
      // console.log('点击返回')
      // if (process.env.isMiniprogram) {
      //   wx.navigateBack()
      // }
      mpvue.navigateBack()
    },
    searchFromVoice() {
      console.log('搜索')
    }
  }
}
</script>

<style scoped>

.search-header {
  height: 60rpx;
  line-height: 60rpx;
  display: flex;
  align-items: center;
  margin: 14rpx 0;
}

.search-header  .back {
  width: 60rpx;
  height: 60rpx;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
}

.search-header  .back .icon-back {
  width: 16rpx;
  height: 28rpx;
}

.search-header .search-content {
  flex: 1;
  border-radius: 10rpx;
  background: rgba(255,255, 255, 0.1);
  display: flex;
  align-items: center;
  font-size: 26rpx;
  height: 60rpx;
  line-height: 60rpx;
  padding-left: 30rpx;
  color: #fff;
}

.search-header .search-content .icon-search {
  width: 30rpx;
  height: 30rpx;
  margin-right: 20rpx;
}

.search-voice{
  width: 60rpx;
  height: 60rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-voice-icon {
  width: 24rpx;
  height: 33rpx;
}

/*
.search-header {
  height: 60rpx;
  line-height: 60rpx;
  display: flex;
  align-items: center;
  margin: 14rpx 0;
  .back {
    width: 60rpx;
    height: 60rpx;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    .icon-back {
      width: 16rpx;
      height: 28rpx;
    }
  }
  .search-content {
    flex: 1;
    border-radius: 10rpx;
    background: rgba(255,255, 255, 0.1);
    display: flex;
    align-items: center;
    font-size: 26rpx;
    height: 60rpx;
    line-height: 60rpx;
    padding-left: 30rpx;
    .icon-search {
      width: 30rpx;
      height: 30rpx;
      margin-right: 20rpx;
    }
  }
  .search-voice{
    width: 60rpx;
    height: 60rpx;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .search-voice-icon {
    width: 24rpx;
    height: 33rpx;
  }
} */
</style>
