<template>
  <header class="header row">
    <h2 class="heading">Добавление товара</h2>
    <div class="custom-select">
      <select class="filter" v-model="filterOption">
        <option value="default">По умолчанию</option>
        <option value="mintomax">По цене min</option>
        <option value="maxtomin">По цене max</option>
        <option value="alphabetically">По наименованию</option>
      </select>
      <div class="custom-arrow"></div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      filterOption: "default",
    };
  },
};
</script>

<style lang="scss">
.header {
  margin-top: 32px;
  margin-bottom: 16px;

  & .heading {
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
  }
}

.filter {
  background: $lightPink;
  border: none;
  padding: 10px 28px 10px 16px;
  box-shadow: 0px 2px 5px rgb(0 0 0 / 10%);
  border-radius: 4px;
  color: $greyText;
  appearance: none;
  cursor: pointer;

  &:focus-visible {
    outline: 1px solid $darkText;
  }
}

.custom-select {
  position: relative;
}

.custom-arrow {
  content: "";
  height: 7px;
  width: 7px;
  position: absolute;
  top: 13px;
  right: 11px;
  border-bottom: 2px solid #b4b4b4;
  border-right: 2px solid #b4b4b4;
  transform: rotate(45deg);
  pointer-events: none;
}
</style>
