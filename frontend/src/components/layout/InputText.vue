<script>
export default {
  props: {
    placeholder: String,
  },
};
</script>

<template>
  <input type="text" :placeholder="placeholder" />
</template>

<style scoped>
input {
  padding: 10px 30px;
  background-color: rgba(0, 0, 0, 0);
  color: var(--color-text);
  border-radius: 5px;
  border: solid 2px var(--color-background-secund2);
  margin-bottom: 10px;
  width: 100%;
}
input:focus {
  outline: solid 2px --color-background-secund2;
}
</style>
