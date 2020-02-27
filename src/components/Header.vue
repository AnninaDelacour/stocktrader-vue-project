<template>
    <b-navbar toggleable="lg" type="dark" >
      <b-navbar-brand>
        <router-link to="/">
          <a id="brand">The Stock Trader</a>
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/portfolio">
              <a id="link">Portfolio</a>
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/stocks" exact>
              <a id="link">Stocks</a>
            </router-link>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item class="mt-2 funds">
            <strong>Funds: {{ funds | currency }}</strong>
          </b-nav-item>
          <b-nav-item href="#">
            <strong>
              <a class="nav-link" href="#" @click="endDay">End day</a>
            </strong>
          </b-nav-item>

          <b-dropdown
            id="dropdown"
            text="Save & Load"
            variant="warning"
            class="m-md-2"
            :class="{ open: isDropdownOpen }"
            @click="isDropdownOpen = !isDropdownOpen"
          >
            <b-dropdown-item>
              <a href="#" class="dropdown-link" @click="saveData">Save data</a>
            </b-dropdown-item>
            <b-dropdown-item>
              <a href="#" class="dropdown-link" @click="loadData">Load data</a>
            </b-dropdown-item>
          </b-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData"
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put("data.json", data);
    },
    loadData() {
      this.fetchData();
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
    color: #f2ce76;
    text-transform: uppercase;
  }
}

.navbar-text {
  color: #fff;

  a {
    color: #fff;
  }
}

.dropdown-link {
    color: black;
    }


.nav-item {
  color: white;
}

.container-fluid {
  max-width: 100vw !important;
}



</style>