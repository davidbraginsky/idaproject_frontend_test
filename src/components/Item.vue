<template>
  <div class="item" v-for="item in items" :key="item.id" @click="logItem(item)">
    <img class="item__picture" :src="getImgPath(item.imgPath)" :alt="item.altText" />
    <div class="item__content">
      <p class="item__title">{{ item.title }}</p>
      <p class="item__description">{{ item.description }}</p>
      <p class="item__price">{{ item.price }} руб.</p>
    </div>
    <div class="item__deleteBtn"></div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>
