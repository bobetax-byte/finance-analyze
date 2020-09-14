<template>
  <div class="navbar">
    <div class="ul">
      <div class="li" v-for="(item,index) in navs" :key="index" :class="{'active c-blue':item.index === activeIndex}"  @click="handleClick(item)">
        <div class="text">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NavBar',
  props: {
    navs: {
      type: Array,
      required: true
    },
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleClick(item, index) {
      console.log(item)
      this.$emit('change', item, index)
    }
  }
}
</script>

<style scoped>
.navbar {
  margin-top: 32rpx;
  margin-bottom: 32rpx;
}

.navbar  .ul {
  display: flex;
  align-items: center;
  justify-content: center;
}


.navbar  .ul .li {
  flex: 1;
  text-align: center;
  color: #fff;
  font-size: 30rpx;
  position: relative;
}


.navbar  .ul  .li.active  {
  color: #119CFD;
}

.navbar .ul .li.active .text{
  display: inline-block;
  position: relative;
}


.navbar .ul .li .text::after{
  content:"";
  display: block;
  margin:7rpx 10rpx 0;
  height: 6rpx;
  background: transparent;
  border-radius: 3rpx;
}

.navbar .ul .li.active .text::after{
  content:"";
  display: block;
  margin:7rpx 10rpx 0;
  height: 6rpx;
  background: #119CFD;
  border-radius: 3rpx;
}

/*
.navbar {
  margin-top: 32rpx;
  margin-bottom: 32rpx;
  .ul {
    display: flex;
    align-items: center;
    justify-content: center;
    .li {
      flex: 1;
      text-align: center;
      color: #fff;
      font-size: 30rpx;
      position: relative;
      &.active {
        color: #119CFD;
        .text{
          display: inline-block;
          position: relative;
          &::after{
            content:"";
            display: block;
            margin:7rpx 10rpx 0;
            height: 6rpx;
            background: #119CFD;
            border-radius: 3rpx;
          }
        }
      }
    }
  }
} */
</style>
