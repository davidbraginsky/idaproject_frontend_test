<template>
  <div class="itemForm">
    <form @submit="submitHandler">
      <label class="itemForm__required" for="formItem_title">Наименование товара</label>
      <input type="text" placeholder="Введите наименование товара" id="formItem_title" required />
      <label for="formItem_description">Описание товара</label>
      <textarea id="formItem_description" cols="30" rows="10" placeholder="Введите Описание товара"></textarea>
      <label class="itemForm__required" for="formItem_link">Ссылка на изображение товара</label>
      <input type="text" placeholder="Введите ссылку" id="formItem_link" required />
      <label class="itemForm__required" for="formItem_price">Цена товара</label>
      <input type="number" placeholder="Введите цену" id="formItem_price" required />
      <Button />
    </form>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "ItemForm",
  components: { Button },
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
    margin-bottom: 16px;
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
</style>
