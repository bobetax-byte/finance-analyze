<template>
  <div class="page-darkblue all-page flex-column-div index-container index">
    <div class="scroll-view">
      <Carrousel :movies='movies'></Carrousel>
      <div class="secondary-navs">
        <li class="secondary-navs-item" v-for="(item,index) in secondaryNavs" :key="index"  @click="binddivTap(item)">
          <img class="secondary-navs-item-icon" :src="item.url" alt="">
          <span class="secondary-navs-item-text">
            {{ item.name }}
          </span>
        </li>
      </div>
      <div class="card-list">
        <CardContainer
          v-for="(item,index) in cardInfo"
          :key="index"
          :cardInfo='item' />
      </div>
    </div>
  </div>
</template>

<script>
import CardContainer from '@/components/CardContainer/Index'
import Carrousel from '@/components/Carrousel/Carrousel'
const cardInfo = [{
  title: '一般存款',
  updateTime: '2020-04-12',
  showType: 'SimpleCard',
  data: {
    title: {
      value: '1050.75',
      unit: '亿'
    },
    details: [{
      desc: '比上日',
      value: '100',
      unit: '亿',
      type: 'up'
    }, {
      desc: '比上月',
      value: '3.48',
      unit: '亿',
      type: 'up'
    }, {
      desc: '比年初',
      value: '100',
      unit: '亿',
      type: 'up'
    }]
  }
}, {
  title: '零售存款',
  updateTime: '2020-04-12',
  showType: 'SimpleCard',
  data: {
    title: {
      value: '150.75',
      unit: '亿'
    },
    details: [{
      desc: '比上日',
      value: '100',
      unit: '亿',
      type: 'up'
    }, {
      desc: '比上月',
      value: '3.48',
      unit: '亿',
      type: 'up'
    }, {
      desc: '比年初',
      value: '100',
      unit: '亿',
      type: 'down'
    }]
  }
},  {
  title: '公司存款',
  updateTime: '2020-04-12',
  showType: 'SimpleCard',
  data: {
    title: {
      value: '150.75',
      unit: '亿'
    },
    details: [{
      desc: '比上日',
      value: '100',
      unit: '亿',
      type: 'up'
    }, {
      desc: '比上月',
      value: '3.48',
      unit: '亿',
      type: 'up'
    }, {
      desc: '比年初',
      value: '100',
      unit: '亿',
      type: 'down'
    }]
  }
}]

export default {
  name: 'Index',
  components: {CardContainer,Carrousel},
  data () {
    return {
      movies:[{
        title:'综拓推银存款',
        money: '4,000',
        desc: '存款余额（亿）'
      },{
        title:'综拓推保险',
        money: '14,000',
        desc: '贷款总额（亿）'
      },{
        title:'综拓推保险',
        money: '22,000',
        desc: '存款余额（亿）'
      }],
      cardInfo,
      secondaryNavs: [{
        name: '标杆竞赛',
        icon: 'daily',
        id: '001',
        url:"/static/images/compition.png"
      }, {
        name: '缺口监控',
        icon: 'monthy',
        id: '002',
        url:"/static/images/monitor.png"

      }, {
        name: '银行业绩',
        icon: 'board',
        id: '003',
        url:"/static/images/achievement.png"

      }, {
        name: '团金业绩',
        icon: 'analyse',
        id: '004',
        url:"/static/images/group-bord.png"
      }],
    }
  },
  created(){
    console.log(this.secondaryNavs)
  },
  methods: {
    binddivTap () {
      // const url = '../logs/main'
      // const url = '/pages/list/main'
      const url = '/pages/subPackages/list/main'
      // href="/src/pages/subPackages/list/main"
      if (mpvuePlatform === 'wx') {
        // mpvue.switchTab({ url })
        mpvue.navigateTo({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
  },
}
</script>

<style scoped>
.voice {
  width: 100rpx;
  height: 100rpx;
}

/* secondary-navs */
.secondary-navs {
  margin: 20rpx;
  height: 197rpx;
  display: flex;
  background: #23283C;
  border-radius: 20rpx;
  justify-content: space-between;
}

.secondary-navs .secondary-navs-item {
  flex: 1;
  display: flex;
  height: 197rpx;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.secondary-navs .secondary-navs-item .secondary-navs-item-text {
  opacity: 0.8;
  font-size: 26rpx;
  color: #FFFFFF;
  text-align: center;
  height: 37rpx;
  line-height: 37rpx;
  margin-top: 10rpx;
}
.secondary-navs .secondary-navs-item .secondary-navs-item-icon {
  width: 64rpx;
  height: 64rpx;
}
.card-list {
  margin: 0 20rpx 20rpx;
}

.banner-item {
  width: 710rpx;
  height: 364rpx;
  position:relative;
}

.banner-item  .slide-image{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}

.banner-item  .info{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
}



</style>
