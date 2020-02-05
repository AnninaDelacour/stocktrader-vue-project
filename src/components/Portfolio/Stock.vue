<template>
  <div class="row">
    <div class="col-12 mb-4 justify-content-center d-flex">
      <div class="card border border-success">
        <div class="card-header bg-success">
          {{ stock.name }}
          <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }} )</small>
        </div>
        <div class="card-body">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model.number="quantity"
          />
          <br />
          <button class="btn btn-success button" @click="sellStock" :disabled="isDisabled">Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "PortfolioStock",
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  },
  computed: {
    isDisabled() {
      return this.quantity <= 0 || !Number.isInteger(this.quantity);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 600px;
}
</style>