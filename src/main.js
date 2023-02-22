import { createApp } from "vue";
import { initializeApp } from "firebase/app";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import router from "./router";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const firebaseConfig = {
  apiKey: "AIzaSyDzT6IOP93oxcRFaYadsmLyUudegWRK3fg",
  authDomain: "authentication-login-project.firebaseapp.com",
  projectId: "authentication-login-project", //Config de firebase
  storageBucket: "authentication-login-project.appspot.com",
  messagingSenderId: "963983745261",
  appId: "1:963983745261:web:aeafc658630ec26ad2ece4",
};

initializeApp(firebaseConfig);

library.add(faRightFromBracket);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);

app.use(autoAnimatePlugin);

app.mount("#app");
