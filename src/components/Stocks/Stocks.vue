<template>
<div>
  <Stock v-for="stock in stocks" :key="stock" :stock="stock"></Stock>
</div>
</template>

<script>
import Stock from './Stock';


export default {
  name: "Stocks",
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  },
  components: {
    Stock
  }
};
</script>

<style lang="scss" scoped>

</style>