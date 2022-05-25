<template>
  <div class="itemForm">
    <form @submit="submitHandler" autocomplete="off">
      <div class="inputForm__field">
        <label class="itemForm__required" for="formItem_title">Наименование товара</label>
        <input v-model="itemTitle" ref="formItem_titleRef" type="text" placeholder="Введите наименование товара" id="formItem_title" required />
        <p ref="item_title_error" class="itemForm__errorMsg">{{ titleErrorMsg }}</p>
      </div>
      <div class="inputForm__field">
        <label for="formItem_description">Описание товара</label>
        <textarea id="formItem_description" cols="30" rows="10" placeholder="Введите Описание товара"></textarea>
      </div>
      <div class="inputForm__field">
        <label class="itemForm__required" for="formItem_link">Ссылка на изображение товара</label>
        <input ref="formItem_linkRef" type="text" placeholder="Введите ссылку" id="formItem_link" required />
        <p ref="item_link_error" class="itemForm__errorMsg">{{ linkErrorMsg }}</p>
      </div>
      <div class="inputForm__field">
        <label class="itemForm__required" for="formItem_price">Цена товара</label>
        <input ref="formItem_priceRef" type="number" min="0" placeholder="Введите цену" id="formItem_price" required />
        <p ref="item_price_error" class="itemForm__errorMsg">{{ priceErrorMsg }}</p>
      </div>
      <button type="submit" class="btn" :disabled="!isCompleted" @click="addItem">Добавить товар</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ItemForm",
  data() {
    return {
      isCompleted: true,
      titleErrorMsg: "empty string",
      priceErrorMsg: "empty string",
      linkErrorMsg: "emtpry string",
      titleIsValidated: false,
      priceIsValidated: false,
      linkIsValidated: false,
      regex: /[<>/{};]/g,
      itemTitle: "",
    };
  },
  methods: {
    addItem(e) {
      e.preventDefault();
      console.log(this.itemTitle);
      // this.validateForm();
    },
    validateForm() {
      const item_title = this.$refs.formItem_titleRef;
      const item_price = this.$refs.formItem_priceRef;
      const item_link = this.$refs.formItem_linkRef;

      const item_title_error = this.$refs.item_title_error;
      const item_price_error = this.$refs.item_price_error;
      const item_link_error = this.$refs.item_link_error;

      this.validateTitle(item_title, item_title_error);
      this.validatePrice(item_price, item_price_error);
      this.validateLink(item_link, item_link_error);
    },
    validateTitle(title, error) {
      if (title.value.length <= 0) {
        this.titleErrorMsg = "Поле является обязательным";
        title.classList.add("error");
        error.classList.add("itemForm__errorMsg--active");
        return;
      }
      if (this.regex.test(title.value)) {
        this.titleErrorMsg = "Поле содержит недействительные символы";
        title.classList.add("error");
        error.classList.add("itemForm__errorMsg--active");
        return;
      }
      this.titleIsValidated = true;
    },
    validatePrice(price, error) {
      if (!price.value) {
        this.priceErrorMsg = "Поле является обязательным";
        price.classList.add("error");
        error.classList.add("itemForm__errorMsg--active");
        return;
      }
      if (this.regex.test(price.value)) {
        this.priceErrorMsg = "Поле содержит недействительные символы";
        price.classList.add("error");
        error.classList.add("itemForm__errorMsg--active");
        return;
      }
      this.priceIsValidated = true;
    },
    validateLink(link, error) {
      if (link.value.length <= 0) {
        this.linkErrorMsg = "Поле является обязательным";
        link.classList.add("error");
        error.classList.add("itemForm__errorMsg--active");
        return;
      }
      if (this.regex.test(link.value)) {
        this.linkErrorMsg = "Поле содержит недействительные символы";
        link.classList.add("error");
        error.classList.add("itemForm__errorMsg--active");
        return;
      }
      this.linkIsValidated = true;
    },
  },
};
</script>

<style lang="scss">
.itemForm {
  background-color: $lightPink;
  padding: 32px;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  min-width: 25%;
  margin-right: 16px;
  height: fit-content;

  &__errorMsg {
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    color: $pink;
    opacity: 0;

    &--active {
      opacity: 1;
    }
  }

  & label {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    color: $darkBlueText;
    display: block;
    margin-bottom: 4px;
    position: relative;
  }

  & input,
  & textarea {
    background-color: transparent;
    border: none;
    outline: none;
    padding: 16px 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    width: 100%;
    margin-bottom: 4px;
    font-family: "Source Sans Pro";
    font-style: normal;
    resize: none;

    &::placeholder {
      color: $greyText;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
    }
  }

  & textarea::placeholder {
    color: $greyText;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
  }

  &__required::after {
    content: "";
    width: 4px;
    height: 4px;
    background: $pink;
    border-radius: 50%;
    position: absolute;
  }
}

.btn {
  background-color: $green;
  color: white;
  border-radius: 10px;
  width: 100%;
  border: none;
  outline: none;
  padding: 10px 0px;
  cursor: pointer;

  &:disabled {
    background-color: $grey;
    color: $greyText;
  }
}

input.error,
textarea.error {
  outline: 1px solid $pink;
}
</style>
