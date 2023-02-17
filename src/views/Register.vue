<script setup>
import Form from "../components/Form.vue";
import { ref } from "vue";

const register = ref("Register");
</script>

<template>
  <main>
    <div class="container">
      <div class="container-img">
        <img src="../assets/images/beClever.png" alt="" />
      </div>
      <div class="container-content">
        <Form :functionality="register" />
      </div>
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
  margin-top: -5em;
  width: 26em;
  height: 40em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
</style>
