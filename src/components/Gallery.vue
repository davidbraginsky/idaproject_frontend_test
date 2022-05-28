<template>
  <div class="gallery">
    <div class="item" v-for="item in items" :key="item.id" @click="logItem(item)">
      <img class="item__picture" :src="getImgPath(item.imgPath)" :alt="item.altText" />
      <div class="item__content">
        <p class="item__title">{{ item.title }}</p>
        <p class="item__description">{{ item.description }}</p>
        <p class="item__price">{{ item.price }} руб.</p>
      </div>
      <div class="item__deleteBtn" @click="deleteItem"></div>
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  name: "Gallery",
  data() {
    return {
      items: [
        {
          id: 1,
          imgPath: "item_photo",
          altText: "picture of a camera",
          title: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 25350,
        },
        {
          id: 2,
          imgPath: "item_photo",
          altText: "picture of a camera",
          title: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 17000,
        },
        {
          id: 3,
          imgPath: "item_photo",
          altText: "picture of a camera",
          title: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 22000,
        },
        {
          id: 4,
          imgPath: "item_photo",
          altText: "picture of a camera",
          title: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 500,
        },
        {
          id: 4,
          imgPath: "item_photo",
          altText: "picture of a camera",
          title: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 500,
        },
        {
          id: 4,
          imgPath: "item_photo",
          altText: "picture of a camera",
          title: "Наименование товара",
          description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 500,
        },
      ],
    };
  },
  beforeMount() {
    console.log("doing stuff");
    this.items.forEach((item) => {
      item.price = new Intl.NumberFormat("fr-FR").format(item.price);
    });
  },
  methods: {
    getImgPath(path) {
      var images = require.context("../assets/", false, /\.png$/);
      return images("./" + path + ".png");
    },
    deleteItem() {
      console.log("deleting item");
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

@media (max-width: 1024px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .gallery {
    grid-template-columns: 1fr;
  }
}
.item {
  background: $lightPink;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  &__deleteBtn {
    display: none;
    width: 32px;
    height: 32px;
    background: $pink url("../assets/delete_icon.png") center no-repeat;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    position: absolute;
    top: -14px;
    right: -10px;
  }

  &:hover &__deleteBtn {
    display: block;
  }

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
