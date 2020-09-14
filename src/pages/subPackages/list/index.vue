<template>
  <div class="all-page page-darkblue flex-column-view theme-container">
    <!-- <SearchHeader></SearchHeader> -->
    <NavBar :navs='list' :activeIndex='activeIndex' @change="handleChange"></NavBar>
    <div class="card-list-page scroll-view">
      <div class="card">
        <CardContainer
          v-for="(item,index) in cardListData"
          :key="index"
          :cardInfo="item" />
      </div>
    </div>
  </div>
</template>

<script>
// import SearchHeader from '@/components/SearchHeader.vue'
import NavBar from '@/components/NavBar.vue'
import CardContainer from '@/components/CardContainer/Index.vue'
import cardList from './listData'

export default {
  name: 'List',
  components: {
    // SearchHeader,
    NavBar,
    CardContainer
  },
  data() {
    return {
      cardListData:cardList[0],
      activeIndex: 0,
      list: [{
        index: 0,
        name: '存款',
      }, {
        index: 1,
        name: '贷款'
      }, {
        index: 2,
        name: '收入'
      }, {
        index: 3,
        name: '风险'
      }, {
        index: 4,
        name: '效率'
      }]
    }
  },
  created() {
  },
  methods: {
    onClickJump() {
      window.location.href = '/home'
    },
    handleChange(item){
      const {index} = item
      this.activeIndex = index
      this.cardListData = cardList[index]
    }
  },
}
</script>

<style scoped>
.card-list-page {
  margin: 0 20rpx;
}
</style>
