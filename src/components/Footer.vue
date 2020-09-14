<template>
  <div class="footer-container">
    <div class="footer-item"
      v-for="(item,index) in footItemList"
      :key="index"
      @click='changeRouter'
      :class="{'isActive':true}"
    >
      <image src="@assets/images/finance-d@2x.png" alt="logo" />
      <!-- <div class="image" :class="getIcon(item)"/> -->
      <p>{{item.name}}</p>
    </div>
</div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      footItemList: [{
        name: '总览',
        isActive: false,
        type: 'overview',
        icon: '../src/assets/images/overview-d@2x.png',
        activeIcon: '../src/assets/images/overview-press@2x.png'
      }, {
        name: '财务',
        isActive: true,
        type: 'finance',
        icon: '../src/assets/images/finance-d@2x.png',
        activeIcon: '../src/assets/images/finance-press@2x.png'
      }, {
        name: '同业',
        isActive: false,
        type: 'interbank',
        icon: '../src/assets/images/interbank-d@2x.png',
        activeIcon: '../src/assets/images/interbank-press@2x.png'
      }, {
        name: '团金',
        type: 'groupMoney',
        isActive: false,
        icon: '../src/assets/images/groupMoney-d@2x.png',
        activeIcon: '../src/assets/images/groupMoney-press@2x.png'
      }]
    }
  },
  methods: {
    changeRouter(item) {
      console.log(item)
    },
    getIcon(item) {
      const { type } = item
      return type
    }
  }
}
</script>

<style lang="less">
.footer-container {
  width: 100vw;
  height: 100rpx;
  display: flex;
  background: #23283C;
  box-shadow: 0 2rpx 24rpx 0 rgba(11,16,38,0.60);
}

.footer-container .footer-item {
  flex: 1;
  font-size: 20rpx;
  color: #6C7390;
  letter-spacing: 0;
  text-align: center;
  // .finance {
  //   background: url('./src/assets/images/finance-d@2x.png') no-repeat center;
  //   background-size: contain;
  //}
  &.isActive{
    .image{
      width: 44rpx;
      height: 44rpx;
    }
  }
}

</style>
