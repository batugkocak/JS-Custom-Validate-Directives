import { createApp } from 'vue'
import App from './App.vue'

import MyTextLength from './components/MyTextLength';


const app = createApp(App);

app.directive('max-length', MyTextLength);

  

app.mount('#app');

