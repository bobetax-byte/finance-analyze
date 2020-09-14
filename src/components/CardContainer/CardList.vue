<template>
  <div class="card-list">
    <div
      v-for="(item,index) in cardList"
      :key="index"
      class="card-list-item"
    >
      <CheckCard :card-info="item" />
    </div>
  </div>
</template>

<script>
import CheckCard from './CheckCard.vue'

export default {
  name: 'CardList',
  components: { CheckCard },
  props: {
    cardList: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped>
.card-list {
  margin: 0 20rpx;
}
</style>
