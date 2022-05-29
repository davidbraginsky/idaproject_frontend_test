<template>
  <div class="container">
    <HeaderComp @filterChange="testHandler" />
    <MainComp :filterOption="filterOption" />
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
  data() {
    return {
      filterOption: null,
    };
  },
  methods: {
    testHandler(filterOption) {
      this.filterOption = filterOption;
    },
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
