<script>
import Contact from "../components/layout/Contact.vue";
import { client } from "../config/client-graphql";
import { gql } from "@apollo/client";
export default {
  components: {
    Contact,
  },
  data() {
    return {
      contacts: [],
    };
  },
  methods: {
    getContacts() {
      client
        .query({
          query: gql`
            query readAll {
              contacts {
                id
                name
                mailto
                company
              }
            }
          `,
        })
        .then((res) => {
          this.contacts = res.data.contacts;
        });
    },
  },
  mounted() {
    this.getContacts();
  },
};
</script>

<template>
  <div class="contacts">
    <p class="msg" v-if="contacts.length == 0">Nenhum contato cadastrado</p>
    {{ newContact }}
    <Contact v-for="contact in contacts" :data="contact" :key="contact.id" />
  </div>
</template>

<style scoped>
.msg {
  text-align: center;
}
.contacts {
  height: 70vh;
  overflow-y: auto;
  padding-right: 0.3em;
}
.contacts::-webkit-scrollbar {
  width: 6px;
}
.contacts::-webkit-scrollbar-thumb {
  width: 6px;
  background-color: var(--color-background-secund2);
}
</style>
