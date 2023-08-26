import { createApp } from 'vue';
import App from './App.vue';

// import 'virtual:svg-icons-register'

// import Antd from 'ant-design-vue';
import { Layout, Menu, Breadcrumb } from 'ant-design-vue';
// import App from './App';
import 'ant-design-vue/dist/reset.css';

// import './permission'

import '@/assets/styles/index.scss' // global css
// import './assets/icons' // icon

import './assets/global.less';
// import components from './components/global';
import Router from './router/index';

import store from "./store";

const app = createApp(App)
app.config.productionTip = false

// components
// for (const i in components) {
//   app.component(i, components[i])
// }

app.use(Layout).use(Menu).use(Breadcrumb).use(store).use(Router).mount('#app')
// app.use(Antd).use(store).use(Router).mount('#app')
