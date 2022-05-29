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
import ItemForm from "./ItemForm.vue";
import GalleryComp from "./Gallery.vue";

export default {
  name: "MainComp",
  props: ["filterOption"],
  components: {
    ItemForm,
    GalleryComp,
  },
  data() {
    return {
      isVisible: false,
      boxText: null,
    };
  },
  methods: {
    showBox() {
      this.isVisible = true;
      setTimeout(() => {
        this.isVisible = false;
      }, 1500);
    },
    successHandler(text) {
      this.boxText = text;
      this.showBox();
    },
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
