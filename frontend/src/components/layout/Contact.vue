<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
  props: {
    data: Object,
  },
};
</script>

<template>
  <div>
    <RouterLink :to="`/profile/${data.id}`" class="contact">
      <div class="icon">
        <i class="fas fa-user"></i>
      </div>
      <div class="informations">
        <p>
          <strong>Nome: </strong><span>{{ data.name }}</span>
        </p>
        <p>
          <strong>E-mail: </strong><span>{{ data.mailto }}</span>
        </p>
        <p>
          <strong>Empresa: </strong><span>{{ data.company }}</span>
        </p>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
.contact {
  display: flex;
  background-color: var(--color-background-secund2);
  margin-bottom: 1em;
  padding: 0.3em;
  border-radius: 5px;
  overflow: hidden;
}
.contact .icon {
  padding: 1.5em;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
}
.contact .informations p {
  padding: 0.2em 0;
}
.contact .informations p strong {
  font-weight: 600;
}
</style>
