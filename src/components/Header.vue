<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <router-link to="/">
        <a id="brand">The Stock Trader</a>
      </router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-link">
          <router-link to="/portfolio">
            <a id="link">Portfolio</a>
          </router-link>
        </li>
        <li class="nav-link">
          <router-link to="/stocks" exact active-class="active">
            <a id="link">Stocks</a>
          </router-link>
        </li>
        <li class="nav-link">
          <a id="link"><strong>Funds: {{ funds }}</strong></a>
        </li>
    </ul>
    <span class="navbar-text">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">End day</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >Save & Load</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Save data</a>
            <a class="dropdown-item" href="#">Load data</a>
          </div>
        </li>
      </ul>
    </span>
  </div>
</nav>
 
</template>

<script>
export default {
  name: "Header",
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  #link {
    color: white;
  }

  #brand {
    color: orange;
    text-transform: uppercase;
  }
}

</style>