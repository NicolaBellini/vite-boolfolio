<script>
import { gsap } from "gsap";
import axios from "axios";
import store from "../store";

export default {
  name: "contact",
  data() {
    return {
      name: "nico",
      mail: "dscsdc@dcsd.com",
      text: "xasxcs dcscsacs cdacas",
      sending: false,
      sent: false,
    };
  },
  methods: {
    sendMail() {
      this.sending = true;

      const data = {
        name: this.name,
        mail: this.mail,
        text: this.text,
      };
      // console.log(data);
      axios
        .post(store.apiUrl + "send-mail", data)
        .then((res) => {
          (this.sending = false),
            (this.sent = res.data.success),
            console.log(res.data.success);
        })
        .catch((error) => {
          (this.sent = true), (this.sending = false);
          console.log(error.message);
        });
    },
  },

  mounted() {
    gsap.from(".contact-title", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".form-group", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.from(".submit-btn", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 1,
      ease: "power3.out",
    });
  },
};
</script>

<template>
  <!-- <h1>contacts</h1> -->
  <section class="contact">
    <div class="container">
      <h1 class="contact-title">Mettiamoci in contatto</h1>
      <h2 v-if="sending">Loading</h2>
      <div v-else>
        <form v-if="!sent" @submit.prevent="sendMail" class="contact-form">
          <div class="form-group">
            <label for="name">Nome</label>
            <input v-model="name" type="text" id="name" name="name" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input v-model="mail" type="email" id="mail" name="email" />
          </div>
          <div class="form-group">
            <label for="message">Messaggio</label>
            <textarea v-model="text" id="message" name="text"></textarea>
          </div>
          <button type="submit" class="submit-btn">Invia</button>
        </form>
        <h3 v-else>Email inviata correttamente</h3>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  color: #333;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.contact {
  padding: 50px 0;
  text-align: center;

  &-title {
    font-size: 2.5em;
    margin-bottom: 20px;
  }

  &-form {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .form-group {
    margin-bottom: 20px;

    label {
      display: block;
      font-weight: bold;
      margin-bottom: 5px;
    }

    input,
    textarea {
      width: calc(100% - 20px);
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 1em;
    }

    textarea {
      height: 100px;
    }
  }

  .submit-btn {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #555;
    }
  }
}
</style>
