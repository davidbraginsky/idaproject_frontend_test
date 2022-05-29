<template>
  <main class="content">
    <ItemForm @dbsuccess="successHandler" />
    <GalleryComp @dbsuccess="successHandler" :filterOption="filterOption" />
    <transition name="fade">
      <div v-if="isVisible" class="boxContainer">
        <p class="box">{{ boxText }}</p>
      </div>
    </transition>
  </main>
</template>

<script>
import { ref } from "vue";
import ItemForm from "./ItemForm.vue";
import GalleryComp from "./Gallery.vue";

export default {
  name: "MainComp",
  props: ["filterOption"],
  components: {
    ItemForm,
    GalleryComp,
  },

  setup() {
    const isVisible = ref(false);
    const boxText = ref(null);

    const showBox = () => {
      isVisible.value = true;
      setTimeout(() => {
        isVisible.value = false;
      }, 1500);
    };

    const successHandler = (text) => {
      boxText.value = text;
      showBox();
    };

    return { isVisible, boxText, showBox, successHandler };
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

.boxContainer {
  position: fixed;
  top: 15px;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: center;
}

.box {
  background: $green;
  font-size: 18px;
  padding: 20px 50px;
  border-radius: 10px;
  color: white;
  text-align: center;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
</style>
