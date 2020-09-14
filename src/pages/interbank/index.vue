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
  title: '月报-同业整体KPI得分',
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
  title: '同业资产负债总览',
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
  title: '分行同业部KPI考核',
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
        title:'同业分部KPI得分',
        money: '96.14',
      },{
        title:'资产余额',
        money: '8,664',
        desc: '贷款总额（亿）'
      },{
        title:'分行同业部KPI考核',
        money: '88.22',
      }],
      cardInfo,
      secondaryNavs: [{
        name: '条线',
        icon: 'line',
        id: '001',
        url:"/static/images/line.png"
      }, {
        name: '金融同业',
        icon: 'monthy',
        id: '002',
        url:"/static/images/interbank.png"

      }, {
        name: '考核KPI',
        icon: 'board',
        id: '003',
        url:"/static/images/KPI.png"

      }, {
        name: '队伍画像',
        icon: 'analyse',
        id: '004',
        url:"/static/images/protat.png"
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
