<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { onMounted, watch } from "vue";
import UsersAPI from "../services/UsersAPI";

const router = useRouter();
const search = ref("");
let lista = ref([]);
const items = ref([]);

const get = () => {
  // let direccion = "https://randomuser.me/api/?results=50";
  // axios.get(direccion).then((e) => {
  //   lista.value = e.data.results;
  //   items.value = e.data.results;
  // });
  UsersAPI.getUsers()
  .then((e) => {
     lista.value = e.data.results;
     items.value = e.data.results;
   });
};

onMounted(() => {
  return get();
});

watch(search, () => {
  items.value = lista.value.filter((user) =>
    user.name.first
      .toLocaleLowerCase()
      .includes(search.value.toLocaleLowerCase())
  );
});
</script>

<template>
  <div class="search">
    <p>Ingresa el nombre que quieras encontrar</p>
    <input
      type="text"
      placeholder="Buscar..."
      v-model.trim="search"
      class="form-control"
    />
  </div>
  <table class="table table-hover table-bordered">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">Ciudad</th>
        <th scope="col">País</th>
        <th scope="col">Zona horaria</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in items" v-auto-animate>
        <td class="container-img">
          <img :src="user.picture.thumbnail" class="thumnail" />
        </td>
        <th>{{ user.name.first }}</th>
        <td>{{ user.name.last }}</td>
        <td>{{ user.location.city }}</td>
        <td>{{ user.location.country }}</td>
        <td>{{ user.location.timezone.offset }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.thumnail {
  border-radius: 50%;
  width: 2em;
}

.container-img {
  text-align: center;
}

.form-control {
  width: 15em;
}

.search {
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 2em 0;
}
</style>
