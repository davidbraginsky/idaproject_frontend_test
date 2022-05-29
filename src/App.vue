<template>
  <div class="container">
    <HeaderComp @filterChange="filterChangeHandler" />
    <MainComp :filterOption="filterOption" />
  </div>
</template>

<script>
import { ref } from "vue";
import HeaderComp from "./components/HeaderComp.vue";
import MainComp from "./components/Main.vue";

export default {
  name: "App",
  components: {
    HeaderComp,
    MainComp,
  },
  setup() {
    const filterOption = ref("default");

    const filterChangeHandler = (filter) => {
      filterOption.value = filter;
    };

    return { filterChangeHandler, filterOption };
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
