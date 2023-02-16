<script setup>
import axios from "axios";
import { ref } from 'vue';
import { useRouter } from "vue-router";
import { onMounted, watch } from "vue";

const router = useRouter();
const lista = ref([]);
const search = ref("");

 watch(search,  () => {
    lista.value =  lista.value.filter((user) =>
     user.name.first.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())
  );
  
});

const get = () => {
  let direccion = "https://randomuser.me/api/?results=50";
  axios.get(direccion).then((e) => (lista.value = e.data.results));
};

onMounted(()=>{
   get();
   return console.log(lista)
})

</script>

<template>
    <div class="search">
        <p>Input the name that you want to find here</p>
        <input type="text" placeholder="Search..." v-model.trim="search" class="form-control"/>
    </div>
    <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Lastname</th>
            <th scope="col">City</th>
            <th scope="col">Country</th>
            <th scope="col">Timezone</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in lista">
            <td class="container-img"><img :src="user.picture.thumbnail" class="thumnail"></td>
            <th>{{user.name.first}}</th>
            <td>{{user.name.last}}</td>
            <td>{{user.location.city}}</td>
            <td>{{user.location.country}}</td>
            <td>{{user.location.timezone.offset}}</td>
          </tr>
        </tbody>
      </table>
</template>

<style scoped>
.thumnail{
    border-radius: 50%;
    width: 2em;
}

.container-img{
    text-align: center;
}

.form-control{
    width: 15em;
}

.search{
    display: flex;
    align-content: center;
    
    gap: 2em;
}
</style>
