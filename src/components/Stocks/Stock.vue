<template>
  <div class="col-sm-6 col-lg-5 mb-4">
    <div class="card border border-success">
      <div class="card-header bg-success">
        {{ stock.name }}
        <small>(Price: {{ stock.price }} )</small>
      </div>
      <div class="card-body">
        <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" />
        <br />
        <button class="btn btn-success button">Buy</button>
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
    }
  }
};
</script>

<style lang="scss" scoped>
</style>