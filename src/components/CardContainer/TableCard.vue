<template>
  <div class="table-container">
    <div class="table-header">
      <div
        v-for="(item,index) in tableHead"
        :key="index"
        class="table-header-item"
      >
        <div class="name">
          {{ item.name }}
        </div>
        <div
          v-if="item.unit"
          class="unit"
        >
          {{ item.unit }}
        </div>
      </div>
    </div>
    <div class="table-content">
      <div
        v-for="(item,index) in showTableContent"
        :key="index"
        class="table-tr"
      >
        <div
          v-for="(itemCell,indexCell) in item"
          :key="indexCell"
          class="table-cell"
        >
          {{ itemCell }}
        </div>
      </div>
    </div>
    <div
      v-if="showMore"
      class="c-blue show-more"
      @click.stop="showMoreContent"
    >
      <span>
        展开更多
      </span>
      <img class="icon" src="/static/icon/showmore.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableCard',
  props: {
    cardData: {
      type: Object,
      required: true
    },
    maxLength: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      showNext: false,
      showTableContent: [],
      showMore: true,
      tableHead:[],
      tableContent:[]
    }
  },
  watch:{
    'cardData':{
      handler:function(){
        console.log('???????')
        this.init()
      },
      deep:true
    }
  },
  computed: {
    // tableHead() {
    //   const { header = [] } = this.cardData
    //   return header
    // },
    // tableContent() {
    //   const { details = [] } = this.cardData
    //   return details
    // },
    // partTableContent() {
    //   const { length } = this.tableContent
    //   const { maxLength } = this
    //   const showLength = length > maxLength ? maxLength : length
    //   console.log('showLength->', showLength)
    //   return this.tableContent.filter((item, index) => index < showLength)
    // },
  },
  created() {
    this.init();
  },
  methods: {
    init(){
      const {header = [],details = []} = this.cardData;
      this.tableHead = header;
      this.tableContent = details
      const { length } = this.tableContent
      const { maxLength } = this
      const showLength = length > maxLength ? maxLength : length
      console.log('showLength->', showLength)
      this.partTableContent = this.tableContent.filter((item, index) => index < showLength)
      this.showTableContent = this.partTableContent
      if (length > this.maxLength) {
        this.showMore = true
      } else {
        this.showMore = false
      }
    },
    showMoreContent() {
      // 展示更多
      console.log('more')
      this.showTableContent = this.tableContent
      this.showMore = false
    }
  }
}
</script>

<style scoped>
.table-container .table-header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.table-container .table-header .table-header-item {
  width: 112rpx;
  height: 64rpx;
  flex: 1;
  font-size: 28rpx;
  color: #7981A0;
  letter-spacing: 0;
  line-height: 24rpx;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.table-container .table-header .table-header-item .unit {
  margin-top: 10rpx;
}

.table-container .table-content .table-tr {
  display: flex;
  height: 74rpx;
  align-items: center;
}

.table-container .table-content .table-tr  .table-cell {
  flex: 1;
  text-align: center;
  font-size: 28rpx;
  color: #fff;
}

.table-container .show-more {
  display: flex;
  text-align: center;
  border-top: 2rpx solid #1C2035;
  height: 90rpx;
  line-height: 90rpx;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
}

.table-container .show-more .icon {
  width: 22rpx;
  height: 12rpx;
  margin-left: 10rpx;
}
/*
// .table-container {
//   .table-header {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     .table-header-item {
//       width: 112rpx;
//       height: 64rpx;
//       flex: 1;
//       font-size: 28rpx;
//       color: #7981A0;
//       letter-spacing: 0;
//       line-height: 24rpx;
//       text-align: center;
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: center;
//       .unit {
//         margin-top: 10rpx;
//       }
//     }
//   }
//   .table-content {
//     .table-tr {
//       display: flex;
//       height: 74rpx;
//       align-items: center;
//       .table-cell {
//         flex: 1;
//         text-align: center;
//         font-size: 28rpx;
//         color: #fff;
//       }
//     }
//   }
//   .show-more {
//     text-align: center;
//     border-top: 2rpx solid #1C2035;
//     height: 90rpx;
//     line-height: 90rpx;
//     box-sizing: border-box;
//   }
// } */
</style>
