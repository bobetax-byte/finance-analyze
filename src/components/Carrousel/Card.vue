<template>
  <div class="item">
    <div class="card">
      <!-- banner图片 -->
      <div class="img_wrap">
        <image class="item_image" src="/static/images/banner.png"/>
      </div>
      <!-- 内容区域 -->
      <div class="c-white cont_wrap">
        <!-- 标题 -->
        <div class="title">
          {{data.title}}
        </div>
        <div class="money">{{data.money}}</div>
        <!-- 描述 -->
        <div class="desc">{{data.desc}}</div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    data: {
      type: Object
    }
  }
}
</script>
<style scoped>

.item{
  height: 384rpx;
  position: relative;
  overflow: hidden;
  border-radius: 20rpx;
}

.item .card{
  position: absolute;
  width: 710rpx;
  height: 384rpx;
  background: #fff;
  border-radius: 20rpx;
}


/* 当前 swiper-item*/
.active_item .card{
  opacity: 1;
}

/* banner */
.img_wrap{
  position: relative;
  border-radius: 7rpx;
  overflow: hidden;
  width: 650rpx;
  height: 384rpx;
}

.img_wrap .item_image{
  display: block;
  width: 650rpx;
  height: 384rpx;
  z-index: 5;
  opacity: 0.7;
}

.cont_wrap{
  position:absolute;
  display: block;
  width: 500rpx;
  height: 284rpx;
  z-index: 6;
  top: 56rpx;
  left: 56rpx;
}

.title_wrap{
  width: 560rpx;
  height: 100rpx;
  margin: 0 auto;
  box-sizing: border-box;
  color: #b99c6d;
  border-bottom: 2rpx dotted #e4dcce;
}

.title{
  position: relative;
  font-size: 30rpx;
  line-height: 42rpx;
  height: 42rpx;
  overflow: hidden;
}

.money{
  font-size: 120rpx;
  height: 144rpx;
  line-height: 144rpx;
  letter-spacing: -2rpx;
}

.desc{
  width: 554rpx;
  height: 34rpx;
  margin: 0 auto;
  color:#fff;
  opacity: 0.8;
  font-size: 24rpx;
  line-height: 34rpx;
}


/*
.item{
  height: 890rpx;
  position: relative;
  .card{
    position: absolute;
    width: 625rpx;
    height: 811rpx;
    background: #fff;
    border-radius: 7rpx;
  }
}

.active_item .card{
  opacity: 1;
}
.img_wrap{
  position: relative;
  background: #303030;
  .item_image{
    display: block;
    width: 100%;
    height: 399rpx;
    border-radius: 7rpx 7rpx 0 0;
    z-index: 5;
    opacity: 0.7;
  }
}

.title_wrap{
  width: 560rpx;
  height: 100rpx;
  margin: 0 auto;
  box-sizing: border-box;
  color: #b99c6d;
  border-bottom: 2rpx dotted #e4dcce;
  .title{
    position: relative;
    font-size: 30rpx;
    line-height: 35rpx;
    height: 70rpx;
    padding-top: 30rpx;
    overflow: hidden;
  }
}
.desc{
  width: 554rpx;
  height: 140rpx;
  margin: 0 auto;
  color:#666666;
  font-size: 24rpx;
  line-height: 28rpx;
  overflow: hidden;
  margin-top: 21rpx;
  text-align: justify;
} */
</style>
