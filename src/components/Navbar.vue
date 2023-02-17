<script setup>
import { useRouter } from 'vue-router';
import { signOut, getAuth } from '@firebase/auth';

const router = useRouter();

const signOutHandler = () => {
    let auth = getAuth();
  signOut(auth).then(() => {
    router.push("/");
  });
};


</script>

<template>
    <nav class="navbar navbar-light bg-white justify-content-between fixed-top">
            <div class="img-container">
                <img src="../assets/images/beClever.png" width="180" height="70" class="d-inline-block align-top " alt="">
            </div>
        <form class="form-inline">
          <button class="btn btn-outline-danger my-2 my-sm-0" @click="signOutHandler()"><font-awesome-icon icon="fa-solid fa-right-from-bracket" /></button>
        </form>
      </nav>
</template>

<style scoped>
.img-container{
    margin-left: 1em;
}

.btn{
    margin-right: 2em;
}

</style>