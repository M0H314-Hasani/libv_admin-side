import { createPinia } from 'pinia';
import Swal from 'sweetalert2';
import ExternalStyle from '@/components/utils/ExternalStyle.vue';
import ExternalScript from '@/components/utils/ExternalScript.vue';
import i18n from '@/plugins/i18n';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ErrorService from './services/error';
import trans from './utils/trans';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app
  .component('ExternalStyle', ExternalStyle)
  .component('ExternalScript', ExternalScript);

app.provide('Swal', Swal);

app.config.errorHandler = (err) => {
  ErrorService.onError(err);
};

app.mount('#app');

Object.assign(window, { $trans: trans });
Object.assign(window, { $router: router });
