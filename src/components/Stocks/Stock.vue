<template>
  <div class="row">
    <div class="col-12 mb-4 justify-content-center d-flex">
      <div class="card border border-success">
        <div class="card-header bg-success">
          {{ stock.name }}
          <small>(Price: {{ stock.price }} )</small>
        </div>
        <div class="card-body">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model.number="quantity"
            :class="{danger: insufficientFunds}"
          />
          <br />
          <button
            class="btn btn-success button"
            @click="buyStock"
            :disabled="insufficientFunds || quantity <= 0 || isDisabled"
          >{{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stock",
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  },
  computed: {
    isDisabled() {
      return this.quantity <= 0 || !Number.isInteger(this.quantity);
    },
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 600px;
}

.danger {
  border: 2px solid rgb(219, 28, 28);
}
</style>