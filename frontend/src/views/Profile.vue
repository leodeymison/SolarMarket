<script>
import Information from "../components/layout/Information.vue";
import { client } from "../config/client-graphql";
import { gql } from "@apollo/client";

export default {
  components: {
    Information,
  },
  data() {
    return {
      contact: [],
    };
  },
  methods: {
    getContact() {
      client
        .query({
          query: gql`
          query readAll {
            contact(id: ${this.$route.params.id}) {
              id
              name
              second_name
              mailto
              m_mailto
              company
              phone
              m_phone
            }
          }
        `,
        })
        .then((res) => {
          const contact = res.data.contact;
          this.contact = [
            {
              title: "Nome completo:",
              body: contact.name + " " + contact.second_name,
              increment: "",
            },
            { title: "Empresa:", body: contact.company, increment: "" },
            {
              title: "Telefone:",
              body: contact.phone,
              increment: contact.m_phone,
            },
            {
              title: "E-mail:",
              body: contact.mailto,
              increment: contact.m_mailto,
            },
          ];
        });
    },
  },
  mounted() {
    this.getContact();
  },
};
</script>

<template>
  <div>
    <div class="people">
      <i class="fas fa-user"></i>
    </div>
    <Information
      v-for="infor in contact"
      :key="infor.title"
      :title="infor.title"
      :body="infor.body"
      :increment="infor.increment"
    />
  </div>
</template>

<style scoped>
.people {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0.3em 0;
  font-size: 70px;
}
.people i {
  background-color: var(--color-background-secund2);
  color: var(--color-background-secund3);
  padding: 0.5em 0.6em;
  border-radius: 100%;
}
</style>
