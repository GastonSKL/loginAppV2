<script setup>
import { ref, onMounted } from 'vue';
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth";


const email = ref("");
const psw = ref("");
const errMsg = ref("")
const isLoggedIn = ref(false);
let auth;
onMounted(()=>{
    auth = getAuth();
    onAuthStateChanged(auth,(user)=>{
        if(user){
            isLoggedIn.value = true;
        }else{
            isLoggedIn.value = false;
        }
    })
})

const register = () =>{
    createUserWithEmailAndPassword(getAuth(), email.value, psw.value)
    .then((data)=>{
        console.log("Succesfully registered!");
        router.push('/feed')
    })
    .catch((error)=>{
        console.log(error.code);
        switch (error.code) {
            case "auth/invalid-email":
                errMsg.value = "Invalid email"
                break;
            case "auth/user-not-found":
                errMsg.value= "No account with that email was found"
                break;
            case "auth/wrong-password":
                errMsg.value= "Incorrect password"
                break;
            default:
                errMsg.value= "Email or password was incorrect"
                break;
        }
    })
}

const login = () =>{
    signInWithEmailAndPassword(getAuth(), email.value, psw.value)
    .then((data)=>{
        console.log("Succesfully signed in!");
        router.push('/feed')
    })
    .catch((error)=>{
        console.log(error.code);
        switch (error.code) {
            case "auth/invalid-email":
                errMsg.value = "Invalid email"
                break;
            case "auth/user-not-found":
                errMsg.value= "No account with that email was found"
                break;
            case "auth/wrong-password":
                errMsg.value= "Incorrect password"
                break;
            default:
                errMsg.value= "Email or password was incorrect"
                break;
        }
    })
}

const signInWithGoogle = () =>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
    .then((result)=>{
        console.log(result.user);
        router.push('/feed');
    })
    .catch((error)=>{
        console.log(error.message)
    })
}

const signOutHandler = () =>{
    signOut(auth)
    .then(()=>{
        router.push('/');
    })
}

const router = useRouter();
const{functionality} = defineProps(['number', 'functionality']);

const redirect = () =>{
    if(functionality === "login"){ 
        login();
    }else if(functionality === "register"){
        register();
    }else{
        router.push('/')
    }
}

</script>

<template>
        

        <div class="form-container">
          
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email here" v-model="email">
            </div>
            <div class="form-group">
              <label for="psw">Password</label>
              <input type="password" class="form-control" id="psw" placeholder="Enter your pasword here" v-model="psw">
              <span v-if="errMsg">{{errMsg}}</span>
            </div>
  
            <div class="btn-container">
              <button type="submit" class="btn btn-success" @click="redirect()" v-if="!isLoggedIn">{{functionality}}</button>
              <button type="submit" class="btn btn-primary" @click="signInWithGoogle()">Google</button>
              <button type="submit" class="btn btn-danger" @click="signOutHandler()" v-if="isLoggedIn">Log out</button>
            </div>
          
        </div>
      

</template>

<style scoped>

  
  label{
    font-size: .9em;
  }
  
  input{
    margin-bottom: 1.5em;
  }
  
  .form-container{
    width: 20em;
    height: 20em;
    box-shadow: 1px 1px 7px rgba(48, 47, 47, 0.521);
    padding: 1.3em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly; 
  }
  
  .btn-container{
    display: flex;
    justify-content: space-evenly;
    margin-top: 1em;
    gap: 1em;
  }
  
  .btn{
    width: 6em;
  }
</style>