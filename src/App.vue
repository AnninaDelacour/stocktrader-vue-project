<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
    <Header></Header>
    </div>
      <div class="col-md-12 mt-5">
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
  }
};
</script>

<style lang="scss">
.slide-enter-active {
  animation: slide-in 0.7s ease-out;
}

.slide-leave-active {
  animation: slide-out 0.7s ease-out;
}

@keyframes slide-in {
  from {
    transform: translateY(50px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(50px);
  }
}
</style>
