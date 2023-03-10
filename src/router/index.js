import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Feed from "../views/Feed.vue";

const getCurentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Login },
    { path: "/register", component: Register },
    {
      path: "/home",
      component: Feed,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurentUser()) {
      next();
    } else {
      console.log("Usuario no ingresado... Acceso no autorizado");
      next("/");
    }
  } else {
    next();
  }
});

export default router;
