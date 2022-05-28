<template>
  <main class="content">
    <ItemForm />
    <GalleryComp />
  </main>
</template>

<script>
import ItemForm from "./ItemForm.vue";
import GalleryComp from "./Gallery.vue";

export default {
  name: "MainComp",
  components: {
    ItemForm,
    GalleryComp,
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
