<template>
  <div class="itemForm">
    <form ref="formRef" @submit.prevent="submitHandler" @keyup="checkForm" autocomplete="off">
      <div class="inputForm__field">
        <label class="itemForm__required" for="formItem_title">Наименование товара</label>
        <input v-model="itemTitle" ref="itemTitleRef" type="text" placeholder="Введите наименование товара" id="formItem_title" />
        <p ref="itemTitleErrorRef" class="itemForm__errorMsg">{{ titleErrorMsg }}</p>
      </div>
      <div class="inputForm__field">
        <label for="formItem_description">Описание товара</label>
        <textarea ref="itemDescriptionRef" v-model="itemDescription" id="formItem_description" cols="30" rows="10" placeholder="Введите Описание товара"></textarea>
        <p ref="itemDescriptionErrorRef" class="itemForm__errorMsg">{{ descriptionErrorMsg }}</p>
      </div>
      <div class="inputForm__field">
        <label class="itemForm__required" for="formItem_link">Ссылка на изображение товара</label>
        <input v-model="itemLink" ref="itemLinkRef" type="text" placeholder="Введите ссылку" id="formItem_link" />
        <p ref="itemLinkErrorRef" class="itemForm__errorMsg">{{ linkErrorMsg }}</p>
      </div>
      <div class="inputForm__field">
        <label class="itemForm__required" for="formItem_price">Цена товара</label>
        <input v-model="itemPrice" type="number" min="0" placeholder="Введите цену" id="formItem_price" />
      </div>
      <button type="submit" class="btn" :disabled="!isCompleted">Добавить товар</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { collection, addDoc } from "firebase/firestore";
import DB from "../../data/DB";

export default {
  emits: ["dbsuccess"],
  name: "ItemForm",
  setup(props, ctx) {
    // data
    let titleIsValidated = false;
    let linkIsValidated = false;
    let descriptionIsValidated = false;

    const regex = /[<>{};]/gi;

    // refs
    const isCompleted = ref(false);
    const formRef = ref(null);

    const itemTitle = ref(null);
    const itemTitleRef = ref(null);
    const itemTitleErrorRef = ref(null);
    const titleErrorMsg = ref("empty string");

    const itemLink = ref(null);
    const itemLinkRef = ref(null);
    const itemLinkErrorRef = ref(null);
    const linkErrorMsg = ref("empty string");

    const itemDescription = ref(null);
    const itemDescriptionRef = ref(null);
    const itemDescriptionErrorRef = ref(null);
    const descriptionErrorMsg = ref("empty string");

    const itemPrice = ref(null);

    // methods
    const addError = (itemRef, itemErrorRef) => {
      itemRef.classList.add("error");
      itemErrorRef.classList.add("itemForm__errorMsg--active");
    };
    const clearErrorMsgs = () => {
      itemTitleRef.value.classList.remove("error");
      itemLinkRef.value.classList.remove("error");
      itemDescriptionRef.value.classList.remove("error");
      itemTitleErrorRef.value.classList.remove("itemForm__errorMsg--active");
      itemLinkErrorRef.value.classList.remove("itemForm__errorMsg--active");
      itemDescriptionErrorRef.value.classList.remove("itemForm__errorMsg--active");
    };
    const resetForm = () => {
      formRef.value.reset();
      itemTitle.value = null;
      itemLink.value = null;
      itemPrice.value = null;
      itemDescription.value = null;
      titleIsValidated = false;
      linkIsValidated = false;
      descriptionIsValidated = false;
    };
    const checkForm = () => {
      if (itemTitle.value && itemLink.value && itemPrice.value) {
        isCompleted.value = true;
      } else {
        isCompleted.value = false;
      }
    };
    const validateTitle = (itemRef, itemErrorRef) => {
      if (regex.test(itemTitle.value)) {
        titleErrorMsg.value = "Поле содержит недействительные символы";
        addError(itemRef, itemErrorRef);
        return;
      }
      titleIsValidated = true;
    };
    const validateDescription = (itemRef, itemErrorRef) => {
      if (/[<>{};]/gi.test(itemDescription.value)) {
        descriptionErrorMsg.value = "Поле содержит недействительные символы";
        addError(itemRef, itemErrorRef);
        return;
      }
      descriptionIsValidated = true;
    };
    const validateLink = (itemRef, itemErrorRef) => {
      if (regex.test(itemLink.value)) {
        linkErrorMsg.value = "Поле содержит недействительные символы";
        addError(itemRef, itemErrorRef);
        return;
      }
      linkIsValidated = true;
    };
    const addItem = () => {
      const itemColRef = collection(DB, "items");
      addDoc(itemColRef, {
        imgPath: itemLink.value,
        altText: "default alt text for picture",
        title: itemTitle.value,
        description: itemDescription.value,
        price: itemPrice.value,
        created_at: new Date().getTime(),
      });
      isCompleted.value = false;
      ctx.emit("dbsuccess", "Товар добавлен успешно");
    };
    const validateForm = () => {
      validateTitle(itemTitleRef.value, itemTitleErrorRef.value);
      validateDescription(itemDescriptionRef.value, itemDescriptionErrorRef.value);
      validateLink(itemLinkRef.value, itemLinkErrorRef.value);

      if (titleIsValidated && linkIsValidated && descriptionIsValidated) {
        clearErrorMsgs();
        addItem();
      }
    };
    const submitHandler = () => {
      validateForm();
      resetForm();
    };

    return { isCompleted, titleErrorMsg, linkErrorMsg, descriptionErrorMsg, submitHandler, checkForm, formRef, itemTitle, itemLink, itemPrice, itemDescription, itemTitleRef, itemTitleErrorRef, itemDescriptionRef, itemDescriptionErrorRef, itemLinkRef, itemLinkErrorRef };
  },
};
</script>

<style lang="scss" scoped>
.itemForm {
  background-color: $lightPink;
  padding: 32px;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  min-width: 350px;
  width: 25%;
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

@media (max-width: 1024px) {
  .itemForm {
    min-width: 300px;
    width: 30%;
  }
}

@media (max-width: 768px) {
  .itemForm {
    min-width: unset;
    width: 100%;
    margin-bottom: 16px;
  }
}
</style>
