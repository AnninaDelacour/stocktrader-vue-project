<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <Header></Header>
      </div>
      <div class="col-md-12 mt-4">
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  components: {
    Header
  },
  created() {
    this.$store.dispatch('initStocks');
  }
};
</script>

<style lang="scss">
body {
  background-color: #0d2326;
}

.slide-enter-active {
  animation: slide-in 0.7s ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 0.7s ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(50px);
    opacity: 0;
  }
}
</style>
