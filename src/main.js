import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';
import BaseCard from './components/BaseCard.vue';

const app = createApp(App);

const components = [
  BaseBadge,
  BaseCard,
];

components.forEach(component => {
  app.component(component.name, component);
})

app.mount('#app');
