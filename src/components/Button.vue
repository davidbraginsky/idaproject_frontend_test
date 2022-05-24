<template>
  <button type="submit" class="btn">Добавить товар</button>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style lang="scss">
.btn {
  background-color: $grey;
  border-radius: 10px;
  width: 100%;
  border: none;
  outline: none;
  padding: 10px 0px;
  color: $greyText;
  cursor: pointer;
}
</style>
