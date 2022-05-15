<script>
import { client } from "../config/client-graphql";
import { gql } from "@apollo/client";
export default {
  data() {
    return {
      name: "",
      second_name: "",
      company: "",
      mailto: "",
      m_mailto: "Pessoal",
      phone: "",
      m_phone: "Celular",

      errors: [],
    };
  },
  computed: {
    valorPrecoImovel: {
      // setter
      set: function (newNumber) {
        this.phone = this.formatPhone(newNumber);
      },
      get: function () {
        return this.phone;
      },
    },
  },
  methods: {
    formatPhone(number) {
      const newNumber = number.replace(
        /(\d{2})(\d{5})(\d{4})/,
        (regex, arg1, arg2, arg3) => {
          return `(${arg1}) ${arg2}-${arg3}`;
        }
      );
      return newNumber;
    },
    createContact() {
      const response = client.mutate({
        mutation: gql`
            mutation Create {
              createContact(
                data: {
                  name: ${JSON.stringify(this.name)}
                  second_name: ${JSON.stringify(this.second_name)}
                  company: ${JSON.stringify(this.company)}
                  mailto: ${JSON.stringify(this.mailto)}
                  m_mailto: ${JSON.stringify(this.m_mailto)}
                  phone: ${JSON.stringify(this.phone)}
                  m_phone: ${JSON.stringify(this.m_phone)}
                }
              ) {
                id
                name
                mailto
                company
              }
            }
          `,
      });
      response
        .then(() => {
          window.location.href = "http://localhost:3000/";
        })
        .catch((err) => {
          this.errors.push(err);
        });
    },
    checkForm(e) {
      e.preventDefault();
      this.errors = [];
      var val = true;

      if (this.name == "") {
        this.errors.push("O Campo nome é obrigatório.");
        val = false;
      }
      if (this.second_name == "") {
        this.errors.push("O Campo Sobre nome é obrigatória.");
        val = false;
      }
      if (this.company == "") {
        this.errors.push("O Campo Empresa é obrigatória.");
        val = false;
      }
      if (this.mailto == "") {
        this.errors.push("O Campo Email é obrigatória.");
        val = false;
      }
      if (this.phone == "") {
        this.errors.push("O Campo Telefone é obrigatória.");
        val = false;
      }
      if (this.phone.length !== 15) {
        const vNunber = this.phone.length - 4;
        this.errors.push(
          "O Campo Telefone deve ter 11 caractéries, está com " + vNunber
        );
        val = false;
      }
      if (val) {
        this.createContact();
      }
    },
  },
};
</script>

<template>
  <div>
    <div class="errors" v-if="errors.length > 0">
      <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
      <ul>
        <br />
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </div>
    <form @submit="checkForm">
      <div class="boxed">
        <span>
          <i class="fas fa-user"></i>
        </span>
        <div class="inputs">
          <input v-model="name" placeholder="Nome *" />
          <input v-model="second_name" placeholder="Sobre nome *" />
        </div>
      </div>
      <div class="boxed">
        <span>
          <i class="fas fa-building"></i>
        </span>
        <div class="inputs">
          <input v-model="company" placeholder="Empresa *" />
        </div>
      </div>
      <div class="boxed">
        <span class="icon">☎</span>
        <div class="inputs">
          <input
            type="text"
            v-model="valorPrecoImovel"
            ref="precoImovel"
            id="precoImovel"
            placeholder="Telefone *"
          />
          <select v-model="m_phone">
            <option class="option" value="Celular">Celular</option>
            <option class="option" value="WhatsApp">WhatsApp</option>
          </select>
        </div>
      </div>
      <div class="boxed">
        <span>
          <i class="fas fa-envelope"></i>
        </span>
        <div class="inputs">
          <input type="email" v-model="mailto" placeholder="E-mail *" />
          <select v-model="m_mailto">
            <option class="option" value="Pessoal">Pessoal</option>
            <option class="option" value="Empresa">Empresa</option>
          </select>
        </div>
      </div>
      <div class="boxed-btn">
        <button type="submit" class="btn primary">Salvar</button>
      </div>
    </form>
  </div>
</template>

<style>
.errors {
  padding: 1em;
  background-color: rgb(226, 7, 7);
  color: white;
  margin-bottom: 2em;
}
.boxed {
  display: flex;
}
.boxed .inputs {
  width: 100%;
}
.boxed .inputs span {
  color: red;
  font-size: 12px;
}
.boxed span {
  padding: 0.5em 1em;
}
.boxed span.icon {
  padding: 0.5em 0.9em;
}
.boxed-btn {
  display: flex;
  justify-content: flex-end;
  padding: 1em 0;
}
.boxed-btn button {
  padding: 0.7em 2.5em;
  cursor: pointer;
}

select {
  padding: 10px 30px;
  background-color: rgba(0, 0, 0, 0);
  color: var(--color-text);
  border-radius: 5px;
  border: solid 2px var(--color-background-secund2);
  width: 100%;
  margin-bottom: 10px;
}
.option {
  background: black;
  color: white;
  padding: 10px 0;
}
select:focus {
  outline: solid 2px --color-background-secund2;
}

input {
  padding: 10px 30px;
  background-color: rgba(0, 0, 0, 0);
  color: var(--color-text);
  border-radius: 5px;
  border: solid 2px var(--color-background-secund2);
  width: 100%;
  margin-bottom: 10px;
}
input:focus {
  outline: solid 2px --color-background-secund2;
}
</style>
