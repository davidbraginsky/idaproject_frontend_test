<template>
  <div class="itemForm">
    <form ref="formRef" @submit.prevent="submitHandler" @keyup="checkForm" autocomplete="off">
      <div class="inputForm__field">
        <label class="itemForm__required" for="formItem_title">Наименование товара</label>
        <input v-model="itemTitle" ref="formItem_titleRef" type="text" placeholder="Введите наименование товара" id="formItem_title" />
        <p ref="item_title_error" class="itemForm__errorMsg">{{ titleErrorMsg }}</p>
      </div>
      <div class="inputForm__field">
        <label for="formItem_description">Описание товара</label>
        <textarea ref="formItem_descriptionRef" v-model="itemDescription" id="formItem_description" cols="30" rows="10" placeholder="Введите Описание товара"></textarea>
        <p ref="item_description_error" class="itemForm__errorMsg">{{ descriptionErrorMsg }}</p>
      </div>
      <div class="inputForm__field">
        <label class="itemForm__required" for="formItem_link">Ссылка на изображение товара</label>
        <input v-model="itemLink" ref="formItem_linkRef" type="text" placeholder="Введите ссылку" id="formItem_link" />
        <p ref="item_link_error" class="itemForm__errorMsg">{{ linkErrorMsg }}</p>
      </div>
      <div class="inputForm__field">
        <label class="itemForm__required" for="formItem_price">Цена товара</label>
        <input v-model="itemPrice" ref="formItem_priceRef" type="number" min="0" placeholder="Введите цену" id="formItem_price" />
        <p ref="item_price_error" class="itemForm__errorMsg">{{ priceErrorMsg }}</p>
      </div>
      <button type="submit" class="btn" :disabled="!isCompleted">Добавить товар</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ItemForm",
  data() {
    return {
      isCompleted: false,
      titleErrorMsg: "empty string",
      priceErrorMsg: "empty string",
      linkErrorMsg: "emtpry string",
      descriptionErrorMsg: "emtpry string",
      titleIsValidated: false,
      priceIsValidated: false,
      linkIsValidated: false,
      descriptionIsValidated: false,
      regex: /[<>/{};]/gi,
      itemTitle: "",
      itemLink: "",
      itemPrice: "",
      itemDescription: "",
    };
  },
  methods: {
    submitHandler() {
      this.validateForm();
      this.resetForm();
    },
    validateForm() {
      const itemTitleRef = this.$refs.formItem_titleRef;
      const itemPriceRef = this.$refs.formItem_priceRef;
      const itemLinkRef = this.$refs.formItem_linkRef;
      const itemDescriptionRef = this.$refs.formItem_descriptionRef;

      const itemTitleError = this.$refs.item_title_error;
      const itemPriceError = this.$refs.item_price_error;
      const itemLinkError = this.$refs.item_link_error;
      const itemDescriptionError = this.$refs.item_description_error;

      this.validateTitle(itemTitleRef, itemTitleError);
      this.validatePrice(itemPriceRef, itemPriceError);
      this.validateLink(itemLinkRef, itemLinkError);
      this.validateDescription(itemDescriptionRef, itemDescriptionError);

      if (this.titleIsValidated && this.priceIsValidated && this.linkIsValidated && this.descriptionIsValidated) {
        console.log("all data is validated");
        itemTitleRef.classList.remove("error");
        itemPriceRef.classList.remove("error");
        itemLinkRef.classList.remove("error");
        itemDescriptionRef.classList.remove("error");

        itemTitleError.classList.remove("itemForm__errorMsg--active");
        itemPriceError.classList.remove("itemForm__errorMsg--active");
        itemLinkError.classList.remove("itemForm__errorMsg--active");
        itemDescriptionError.classList.remove("itemForm__errorMsg--active");
      }
    },
    validateTitle(titleRef, titleError) {
      if (this.itemTitle.length <= 0) {
        this.titleErrorMsg = "Поле является обязательным";
        titleRef.classList.add("error");
        titleError.classList.add("itemForm__errorMsg--active");
        return;
      }
      if (this.regex.test(this.itemTitle)) {
        this.titleErrorMsg = "Поле содержит недействительные символы";
        titleRef.classList.add("error");
        titleError.classList.add("itemForm__errorMsg--active");
        return;
      }
      this.titleIsValidated = true;
    },
    validatePrice(priceRef, priceError) {
      if (!this.itemPrice) {
        this.priceErrorMsg = "Поле является обязательным";
        priceRef.classList.add("error");
        priceError.classList.add("itemForm__errorMsg--active");
        return;
      }
      this.priceIsValidated = true;
    },
    validateLink(linkRef, linkError) {
      if (this.itemLink.length <= 0) {
        this.linkErrorMsg = "Поле является обязательным";
        linkRef.classList.add("error");
        linkError.classList.add("itemForm__errorMsg--active");
        return;
      }
      if (this.regex.test(this.itemLink)) {
        this.linkErrorMsg = "Поле содержит недействительные символы";
        linkRef.classList.add("error");
        linkError.classList.add("itemForm__errorMsg--active");
        return;
      }
      this.linkIsValidated = true;
    },
    validateDescription(descriptionRef, descriptionError) {
      if (/[<>/{};]/gi.test(this.itemDescription)) {
        this.descriptionErrorMsg = "Поле содержит недействительные символы";
        descriptionRef.classList.add("error");
        descriptionError.classList.add("itemForm__errorMsg--active");
        return;
      } else {
        console.log("inside description else block");
      }
      this.descriptionIsValidated = true;
    },
    resetForm() {
      const formRef = this.$refs.formRef;
      formRef.reset();
    },
    checkForm() {
      if (this.itemTitle && this.itemLink && this.itemPrice) {
        this.isCompleted = true;
      } else {
        this.isCompleted = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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
    font-size: 12px;
    line-height: 10px;
    color: $pink;
    opacity: 0;
    margin-bottom: 4px;

    &--active {
      opacity: 1;
    }
  }

  & label {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 13px;
    color: $darkBlueText;
    display: block;
    margin-bottom: 8px;
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
    margin-bottom: 8px;
    font-family: "Source Sans Pro";
    font-style: normal;
    resize: none;

    &::placeholder {
      color: $greyText;
      font-weight: 400;
      font-size: 14px;
      line-height: 15px;
    }
  }

  & textarea::placeholder {
    color: $greyText;
    font-weight: 400;
    font-size: 14px;
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
