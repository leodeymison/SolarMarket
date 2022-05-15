<template>
  <div>
    <select>
      <option value="">Hello</option>
      <option value="">Hello</option>
    </select>
  </div>
</template>

<style scoped>
select {
  padding: 10px 30px;
  background-color: rgba(0, 0, 0, 0);
  color: var(--color-text);
  border-radius: 5px;
  border: solid 2px var(--color-background-secund2);
  margin-bottom: 10px;
  width: 100%;
}
select:focus {
  outline: solid 2px --color-background-secund2;
}
</style>
