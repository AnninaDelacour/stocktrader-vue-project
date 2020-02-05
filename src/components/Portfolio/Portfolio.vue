<template>
  <div>
    <stockPortfolio v-for="stock in stocks" :key="stock" :stock="stock"></stockPortfolio>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import stockPortfolio from './Stock';

export default {
    name: "Portfolio",
    computed: {
      ...mapGetters({
        stocks: 'stockPortfolio'
      })
    },
    components: {
      stockPortfolio
    }
};
</script>

<style>

</style>