<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();


</script>

<template>
        
<main>
    <h1>Welcome!</h1>
    <p>to get started, sing up with your account or create a new one...</p>
    <div class="btn-container">
        <button class="btn btn-success" @click="router.push('/login')">Login</button>
        <button class="btn btn-primary" @click="router.push('/register')">Register</button>
    </div>
</main>

</template>

<style scoped>
main{
    display: grid;
    place-content: center;
    height: 100vh;
}

.btn-container{
    display: flex;
    gap: 2em;
}
.btn{
    width: 6em;
}
</style>