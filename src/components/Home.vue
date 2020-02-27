<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="homepage">
          <h1>trade & view your portfolio</h1>
          <div class="overlay">
            <p class="fund-text">
              Your funds:
              <span id="funds">{{ funds | currency }}</span>
            </p>
            <p
              class="fund-text-small"
            >You may save and load your data. Click on "End day" to begin a new day</p>
          </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>

<style lang="scss">
body {
  //background-color: #363434;
  background-image: url("~@/assets/images/stock-trader.svg");
  overflow: hidden;
}

.homepage {
  color: whitesmoke;

  h1 {
    margin-bottom: 10rem;
    text-align: center;
    font-size: 6rem;
    font-family: "Roboto";
    font-variant: small-caps;
    font-weight: bold;
  }
}

.overlay {
    width: 600px;
    background: rgba(26, 26, 26, 0.877);
    margin: 0 auto;
    padding: 2rem 3rem;
  }

.fund-text {
  
  font-size: 2rem;
  font-family: "Fauna One";

  &-small {
    font-size: 0.8rem;
  }
}

#funds {
  color: #51b148;
  font-size: 2rem;
}
</style>
