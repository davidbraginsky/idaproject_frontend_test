<template>
  <div class="container">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
export default {
  name: "App",
  components: {
    Header,
    Main,
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
