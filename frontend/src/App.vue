<script>
import { RouterView, RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
    RouterView,
  },
};
</script>

<template>
  <div class="container">
    <h1>Contatos</h1>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/" class="btn danger">Home</RouterLink>
          <RouterLink to="/create" class="btn primary">Novo</RouterLink>
        </nav>
      </div>
    </header>
    <div class="box">
      <br /><br />
      <RouterView />
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";

.container {
  display: flex;
  flex-direction: column;
  width: 40%;
  background-color: var(--color-background-secund1);
  padding: 0.5em;
  margin-top: 20px;
}
nav {
  display: flex;
  justify-content: flex-end;
}
h1 {
  text-align: center;
  padding: 0.5em 0;
  font-weight: 600;
  text-transform: uppercase;
}

@media (max-width: 1000px) {
  .container {
    width: 70%;
  }
}
@media (max-width: 800px) {
  .container {
    width: 80%;
  }
}
@media (max-width: 600px) {
  .container {
    width: 90%;
  }
}
@media (max-width: 400px) {
  .container {
    width: 99%;
  }
}
</style>
