<script setup>
import Form from "../components/Form.vue";
import { ref } from "vue";

const register = ref("register");
</script>

<template>
  <main>
      <div class="container">
          <h1>Create a new account</h1>
          <Form :functionality="register" />
      </div>
  </main>
</template>

<style scoped>
main{
    height: 100vh;
    display: grid;
    place-content: center;
}

h1{
    font-size: 1.5em;
}
.container{
    width: 26em;
    height: 30em;
}
</style>
