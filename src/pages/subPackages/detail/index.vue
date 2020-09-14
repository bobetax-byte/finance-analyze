<template>
  <div class="page-darkblue card-details">
    <div class="header">
      <div class="c-white left-picker" @click="handlePicker">
        <span>
          {{leftPicker.showText}}
        </span>
        <img class="picker-icon" src="/static/icon/arrow.svg" alt="">
      </div>
      <div  class="c-white right-picker" @click="handlePickerRight">
        <span>
          {{rightPicker.showText}}
        </span>
        <img class="picker-icon" src="/static/icon/arrow.svg" alt="">
      </div>
    </div>
    <div class="blcok">
      <div class="top-card">
        <CardContainer
          :showBottom='showBottom'
          :cardInfo="topCardData"
        />
      </div>
      <CardList :cardList='cardList'></CardList>
    </div>
    <van-popup :show="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :default-index='defaultIndex'
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
import CardContainer from '@/components/CardContainer/Index.vue'
import CardList from '@/components/CardContainer/CardList.vue'
import {response1,response2,res} from './data'

export default {
  name: 'Details',
  components: {
    CardContainer,
    CardList
  },
  data() {
    return {
      response:{},
      showBottom: false,
      columns:[],
      showPicker:false,
      showPickerType: 'left',
      defaultIndex: 1,
      leftPicker: {
        showPicker: false,
        showText: '请选择',
        defaultIndex: 0,
        columns: [
          {
            values: ['公司存款', '零售存款', '对公存款'],
            defaultIndex: 0,
          },
        ],
      },
      rightPicker: {
        showPicker: false,
        showText: '请选择',
        defaultIndex: 0,
        columns: [
          {
            values: ['北京', '深圳'],
            defaultIndex: 0,
          },
        ],
      }

    }
  },
  computed: {
    topCardData() {
      const { topCard } = this.response
      return topCard
    },
    cardList() {
      const { list = [] } = this.response
      return list
    }
  },
  created() {
    this.response =response1
    let EchartState =this.$store.state.EchartState
    console.log('EchartState', EchartState)
  },
  watch:{
    'showPicker':function(value){
      this.handleEchart(value)
    }
  },
  methods: {
    onClickBack() {
      // if (process.env.isMiniprogram) {
      //   wx.navigateBack()
      // }
    },
    handleEchart(value){
      this.$store.commit('SET_EchartState', value)
    },
    handlePicker() {
      // this.hideEchart(true);
      this.showPicker = !this.showPicker
      // this.$set(this.columns,this.leftPicker.columns)
      this.columns = this.leftPicker.columns
      this.showPickerType = 'left'
      this.defaultIndex = this.leftPicker.defaultIndex
    },
    onConfirm(event) {
      const {target} = event
      const {value,index} = target
      console.log(target)
      const { showPickerType } = this;
      if(showPickerType === 'left') {
        this.leftPicker.showText = value[0]
        this.response = res[`00${index[0] + 1}`]
        // this.response  = response1
      }
      if(showPickerType === 'right') {
        this.rightPicker.showText = value[0]
        this.response = res[`00${index[0] + 4}`]
        // this.response  = response2
      }
      this.handlePicker()
    },
    handlePickerRight(){
      // this.hideEchart(true);
      this.showPicker = !this.showPicker;
      this.columns = this.rightPicker.columns
      this.showPickerType = 'right'
      this.defaultIndex = this.rightPicker.defaultIndex
    }
  },
}
</script>

<style scoped>
.card-details .header {
  height: 80rpx;
  padding: 20rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
.left-picker,.right-picker {
  height: 40rpx;
  display: flex;
  align-items: center;
}
.card-details .header .picker-icon {
  width: 16rpx;
  height: 10rpx;
  margin-left: 10rpx;
}
.top-card {
  margin: 20rpx;
}
</style>
