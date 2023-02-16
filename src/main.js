import { createApp } from 'vue'
import { initializeApp } from "firebase/app";
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const firebaseConfig = {
  apiKey: "AIzaSyDzT6IOP93oxcRFaYadsmLyUudegWRK3fg",
  authDomain: "authentication-login-project.firebaseapp.com",
  projectId: "authentication-login-project",                                       //Config de firebase
  storageBucket: "authentication-login-project.appspot.com",
  messagingSenderId: "963983745261",
  appId: "1:963983745261:web:aeafc658630ec26ad2ece4"
};



initializeApp(firebaseConfig);

import router from './router'


const app = createApp(App);
app.use(router)


app.mount('#app')
