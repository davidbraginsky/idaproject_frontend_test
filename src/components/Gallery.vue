<template>
  <div class="gallery-wrapper" :class="{ loaded: hasLoaded }">
    <transition name="switch" mode="out-in">
      <transition-group tag="div" name="item" v-if="items.length" class="gallery" appear="">
        <div class="item" v-for="item in items" :key="item.id">
          <div class="item__pictureContainer">
            <img class="item__picture" :src="item.imgPath" :alt="item.altText" />
          </div>
          <div class="item__content">
            <p class="item__title">{{ item.title }}</p>
            <p class="item__description">{{ item.description }}</p>
            <p class="item__price">{{ item.price }} руб.</p>
          </div>
          <div class="item__deleteBtn" @click="deleteItem(item)"></div>
        </div>
      </transition-group>
      <div v-else>
        <Spinner v-if="!hasLoaded" />
        <p v-else>Добавьте товар...</p>
      </div>
    </transition>
  </div>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import DB from "../../data/DB";
import Spinner from "./Spinner.vue";

export default {
  emits: ["dbsuccess"],
  name: "GalleryComp",
  props: ["filterOption"],
  components: {
    Spinner,
  },

  setup(props, ctx) {
    const items = ref([]);
    const hasLoaded = ref(false);

    const turnItemPricesToStringsAndFormat = () => {
      items.value.forEach((item) => {
        // eslint-disable-next-line no-param-reassign
        item.price = new Intl.NumberFormat("fr-FR").format(item.price);
      });
    };
    const turnItemPricesToNumbers = () => {
      items.value.forEach((item) => {
        // eslint-disable-next-line no-param-reassign
        item.price = Number(item.price.replace(/\s/g, ""));
      });
    };
    const sortItems = (filterOption) => {
      if (filterOption === "mintomax") {
        turnItemPricesToNumbers();
        items.value.sort((a, b) => a.price - b.price);
        turnItemPricesToStringsAndFormat();
      } else if (filterOption === "maxtomin") {
        turnItemPricesToNumbers();
        items.value.sort((a, b) => b.price - a.price);
        turnItemPricesToStringsAndFormat();
      } else if (filterOption === "alphabetically") {
        items.value.sort((a, b) => a.title.localeCompare(b.title));
      } else {
        items.value.sort((a, b) => b.created_at - a.created_at);
      }
    };
    const deleteItem = ({ id }) => {
      const docRef = doc(DB, "items", id);
      deleteDoc(docRef).then(() => {
        ctx.emit("dbsuccess", "Товар успешно удалён");
      });
    };
    const getData = () => {
      const colRef = collection(DB, "items");

      onSnapshot(colRef, (snapshot) => {
        items.value = [];
        snapshot.docs.forEach((item) => {
          const itemObj = { ...item.data(), id: item.id };
          items.value.push(itemObj);
        });
        hasLoaded.value = true;
        sortItems(props.filterOption);
        turnItemPricesToStringsAndFormat();
      });
    };

    watch(props, () => {
      sortItems(props.filterOption);
    });

    onMounted(() => {
      getData();
    });

    return { items, deleteItem, hasLoaded };
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

  &__pictureContainer {
    display: flex;
    justify-content: center;
  }

  &__picture {
    max-height: 250px;
    max-width: 100%;
  }
}

.gallery-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
}

.loaded {
  display: inline-block;
  justify-content: unset;
  align-items: unset;
  width: unset;
}

.item-enter-from,
.item-leave-to {
  opacity: 0;
  transform: scale(0.6);
}

.item-enter-active,
.item-leave-active {
  transition: all 0.5s;
}

.item-leave-active {
  position: absolute;
}

.item-move {
  transition: all 0.5s;
}

.switch-enter-from,
.switch-leave-to {
  opacity: 0;
}

.switch-enter-active,
.switch-leave-active {
  transition: all 0.5s;
}
</style>
