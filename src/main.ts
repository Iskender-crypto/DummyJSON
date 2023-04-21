import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com/";

createApp(App).use(router).mount("#app");
