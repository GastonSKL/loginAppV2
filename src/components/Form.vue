<script setup>
import { ref, onMounted } from "vue";
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const email = ref("");
const psw = ref("");
const errMsg = ref("");
const isLoggedIn = ref(false);
let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, psw.value)
    .then((data) => {
      console.log("Registrado correctamete!");
      router.push("/home");
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Email invalido";
          break;
        case "auth/user-not-found":
          errMsg.value = "No se encontro un perfil con ese email";
          break;
        case "auth/wrong-password":
          errMsg.value = "Password incorrecto";
          break;
        default:
          errMsg.value = "Email o password incorrecto";
          break;
      }
    });
};

const login = () => {
  signInWithEmailAndPassword(getAuth(), email.value, psw.value)
    .then((data) => {
      console.log("Logueado correctamente!");
      router.push("/home");
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Email invalido";
          break;
        case "auth/user-not-found":
          errMsg.value = "No se encontro un perfil con ese email";
          break;
        case "auth/wrong-password":
          errMsg.value = "Password incorrecto";
          break;
        default:
          errMsg.value = "Email o password incorrecto";
          break;
      }
    });
};

const signOutHandler = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};

const router = useRouter();
const { functionality } = defineProps(["number", "functionality"]);

const redirect = () => {
  if (functionality === "Login") {
    login();
  } else if (functionality === "Register") {
    register();
  } else {
    router.push("/");
  }
};
</script>

<template>
  <div class="form-container">
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        class="form-control"
        id="email"
        aria-describedby="emailHelp"
        placeholder="Enter your email here"
        v-model="email"
      />
    </div>
    <div class="form-group">
      <label for="psw">Contraseña</label>
      <input
        type="password"
        class="form-control"
        id="psw"
        placeholder="Enter your pasword here"
        v-model="psw"
      />
      <span v-if="errMsg">{{ errMsg }}</span>
    </div>

    <div class="btn-container">
      <button
        type="submit"
        class="btn btn-secondary"
        @click="redirect()"
        v-if="!isLoggedIn"
      >
        {{ functionality }}
      </button>
      <button
        type="submit"
        class="btn btn-light"
        @click="router.push('/register')"
        v-if="functionality != 'Register' && !isLoggedIn"
      >
        Registrarse
      </button>
      <button
        type="submit"
        class="btn btn-danger"
        @click="signOutHandler()"
        v-if="isLoggedIn"
      >
        Desloguear
      </button>
    </div>
  </div>
</template>

<style scoped>
label {
  font-size: 0.9em;
}

input {
  margin-bottom: 1.5em;
}

.form-container {
  width: 20em;
  max-height: 21.5em;
  box-shadow: 1px 1px 7px rgba(48, 47, 47, 0.521);
  padding: 1.3em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.btn-light{
    background-color: rgba(156,156,156,255);
    color: white;
}

.btn-light:hover{
    background-color: rgba(130,130,130,255);
}

.btn-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 1em;
  gap: 1em;
}

.btn {
  width: 100%;
}
</style>
