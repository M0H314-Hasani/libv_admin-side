import { createApp } from 'vue';
import { createPinia } from 'pinia';

import ExternalStyle from '@/components/utils/ExternalStyle.vue';
import ExternalScript from '@/components/utils/ExternalScript.vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app
  .component('ExternalStyle', ExternalStyle)
  .component('ExternalScript', ExternalScript);

app.mount('#app');
