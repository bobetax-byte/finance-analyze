<template>
  <div class="list-container">
    <div class="ul">
      <div
        v-for="(item,index) in list"
        :key="index"
        class="li"
      >
        <div class="small-desc">
          {{ item.desc }}
        </div>
        <div
          class="item-contents c-blue"
          :class="{'c-red': item.type === 'up', 'c-green': item.type === 'down' }"
        >
          <div class="value">
            <img v-if="item.type === 'up'" class="icon" src="/static/icon/up.svg" alt="">
            <img  v-if="item.type === 'down'"  class="icon" src="/static/icon/down.svg" alt="">
            {{ item.value }}
          </div>
          <div class="unit">
            {{ item.unit }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListCard',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    checkType(item){
      const {type} = item;
      if(type === 'up') {
        return '/static/icon/up.svg'
      };
      if(type === 'down') {
        return '/static/icon/down.svg'
      }
    }
  }
}
</script>

<style scoped>
.list-container {
  /* margin: 40rpx 0; */
  margin-top: 40rpx;
}

.list-container  .ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.list-container  .ul .li {
  font-size: 26rpx;
  color: #7981A0;
  margin-bottom: 40rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.list-container  .ul .li .item-contents {
  font-size: 32rpx;
  margin-top: 6rpx;
  font-weight: bold;
}

.list-container  .ul .li .value, .list-container  .ul .li .unit {
  display: inline;
}

.icon {
  width: 20rpx;
  height: 24rpx;
}
/*
.list-container {
  margin: 40rpx 0;
  .ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .li {
      font-size: 26rpx;
      color: #7981A0;
      margin-bottom: 40rpx;
      display: flex;
      flex-direction: column;
      align-items: center;
      .item-contents {
        font-size: 32rpx;
        margin-top: 6rpx;
        font-weight: bold;
      }
      .value, .unit {
        display: inline;
        .icon {
          width: 20rpx;
          height: 24rpx;
        }
      }
    }
  }
} */
</style>
