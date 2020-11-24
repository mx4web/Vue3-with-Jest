import { createRouter, createWebHistory } from "vue-router";

//dynamic loading, component accepts a function that returns a Promise of a component and Vue Router will only fetch it when entering the page for the first time, then use the cached version
//it's a good idea to always use dynamic imports for all routes
const Home = () => import("@/views/Home.vue");
const Admin = () => import("@/views/Admin.vue");
const Signup = () => import("@/views/Signup.vue");
const AddUser = () => import("@/views/AddUser.vue");
const User = () => import("@/views/User.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },
  {
    path: "/user/new",
    name: "AddUser",
    component: AddUser
  },
  {
    path: "/user/:id",
    name: "User",
    props: true,
    component: User
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("../views/404.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
