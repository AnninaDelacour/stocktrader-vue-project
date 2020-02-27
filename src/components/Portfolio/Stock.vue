<template>
  
    <div class="col-12 mb-4 justify-content-center d-flex">
      <div class="card border border-gold">
        <div class="card-header bg-gold">
          {{ stock.name }}
          <small
            >(Price: {{ stock.price }} | Quantity: {{ stock.quantity }} )</small
          >
        </div>
        <div class="card-body">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model.number="quantity"
            :class="{ danger: insufficientQuantity }"
          />
          <br />
          <button
            class="btn btn-gold button"
            @click="sellStock"
            :disabled="insufficientQuantity || quantity <= 0 || isDisabled"
          >
            {{ insufficientQuantity ? "Not enough stocks" : "Sell" }}
          </button>
        </div>
      </div>
    </div>
  
</template>

<script>
import { mapActions } from "vuex";

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
      placeSellOrder: "sellStock"
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
    },
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
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

.bg-gold {
  background-color:	#bca872;
}

.border {
  border: 1px solid#bca872;
}

.btn-gold {
  background-color: #bca872;
}
</style>
