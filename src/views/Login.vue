<script setup>
import Form from "../components/Form.vue";
import { ref } from "vue";

const login = ref("login");
</script>

<template>
  <main>
    <div class="container">
      <h1>Sign up!</h1>
      <Form :functionality="login" />
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  display: grid;
  place-content: center;
}

h1 {
  font-size: 1.5em;
}
.container {
  width: 26em;
  height: 30em;
}
</style>
