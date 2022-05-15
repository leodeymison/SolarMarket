<script>
export default {
  props: {
    title: String,
    body: String,
    increment: String,
  },
};
</script>

<template>
  <div>
    <label>{{ title }}</label>
    <div class="box">
      {{ body }} <span v-if="increment">{{ " - " + increment }}</span>
    </div>
  </div>
</template>

<style scoped>
.box {
  background-color: var(--color-background-secund2);
  padding: 0.5em;
  margin-top: 0.3em;
  border-radius: 5px;
  margin-bottom: 1em;
}
</style>
