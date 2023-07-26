import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';

const app = createApp(App);

const components = [
  BaseBadge,
];

components.forEach(component => {
  app.component(component.name, component);
})

app.mount('#app');
