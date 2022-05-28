<template>
  <div class="container">
    <HeaderComp />
    <MainComp />
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
import MainComp from "./components/Main.vue";

export default {
  name: "App",
  components: {
    HeaderComp,
    MainComp,
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 95%;
  margin: 0 auto;
  max-width: 1440px;
  min-width: 350px;
}
</style>
