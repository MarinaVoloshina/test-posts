import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "./assets/scss/index.scss";

import "bootstrap/dist/css/bootstrap.min.css";

createApp(App).use(store).mount("#app");
