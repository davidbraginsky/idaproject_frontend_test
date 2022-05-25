<template>
  <main class="content">
    <ItemForm />
    <Gallery />
  </main>
</template>

<script>
import ItemForm from "./ItemForm.vue";
import Gallery from "./Gallery.vue";
export default {
  name: "Main",
  components: {
    ItemForm,
    Gallery,
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
}

@media (max-width: 768px) {
  .content {
    display: block;
  }
}
</style>
