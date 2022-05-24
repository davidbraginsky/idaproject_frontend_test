<template>
  <div class="gallery">
    <!-- <div class="item" v-for="item in items" @click="logItem(item)">
      <img class="item__picture" :src="item.imgPath" :alt="item.altText" />
      <div class="item__content">
        <p class="item__title">{{ item.title }}</p>
        <p class="item__description">{{ item.description }}</p>
        <p class="item__price">{{ item.price }} руб.</p>
      </div>
    </div> -->

    <div class="item">
      <img class="item__picture" src="../assets/item_photo.png" alt="test text" />
      <div class="item__content">
        <p class="item__title">test</p>
        <p class="item__description">test2</p>
        <p class="item__price">1000</p>
      </div>
    </div>

    <div class="item">
      <img class="item__picture" src="../assets/item_photo.png" alt="test text" />
      <div class="item__content">
        <p class="item__title">test</p>
        <p class="item__description">test2</p>
        <p class="item__price">1000</p>
      </div>
    </div>

    <div class="item">
      <img class="item__picture" src="../assets/item_photo.png" alt="test text" />
      <div class="item__content">
        <p class="item__title">test</p>
        <p class="item__description">test2</p>
        <p class="item__price">1000</p>
      </div>
    </div>

    <div class="item">
      <img class="item__picture" src="../assets/item_photo.png" alt="test text" />
      <div class="item__content">
        <p class="item__title">test</p>
        <p class="item__description">test2</p>
        <p class="item__price">1000</p>
      </div>
    </div>

    <div class="item">
      <img class="item__picture" src="../assets/item_photo.png" alt="test text" />
      <div class="item__content">
        <p class="item__title">test</p>
        <p class="item__description">test2</p>
        <p class="item__price">1000</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      items: [
        {
          id: 1,
          imgPath: "../assets/item_photo.png",
          altText: "picture of a camera",
          title: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 4000,
        },
        {
          id: 2,
          imgPath: "../assets/item_photo.png",
          altText: "picture of a camera",
          title: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 17000,
        },
        {
          id: 3,
          imgPath: "../assets/item_photo.png",
          altText: "picture of a camera",
          title: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 22000,
        },
        {
          id: 4,
          imgPath: "../assets/item_photo.png",
          altText: "picture of a camera",
          title: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 500,
        },
        {
          id: 4,
          imgPath: "../assets/item_photo.png",
          altText: "picture of a camera",
          title: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 500,
        },
        {
          id: 4,
          imgPath: "../assets/item_photo.png",
          altText: "picture of a camera",
          title: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 500,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.item {
  background: $lightPink;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;

  &__content {
    padding: 16px;
    color: $darkText;
  }

  &__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 16px;
  }

  &__description {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 32px;
  }

  &__price {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
  }
}
</style>
