<template>
  <div>
    <h1>Trade or view your Portfolio</h1>
    <hr>
    <p>Your funds: <span id="funds">{{ funds | currency }}</span></p>
    <hr>
    <h6>You may save and load your data</h6>
    <h6>Click on "End day" to begin a new day :)</h6>
  </div>
</template>

<script>
export default {
    name: "Home",
    computed: {
      funds() {
        return this.$store.getters.funds
      }
    }
};
</script>

<style lang="scss" scoped>
div {
  color: whitesmoke;
}

h1 {
  margin-bottom: 2rem;
  text-align: center;
}

h6 {
  font-size: .9rem;
}

p {
  font-size: 1.5rem;
}

#funds {
  color: firebrick
}
</style>