// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { auth, db } from './firebase/init'; // Import Firebase services from init.js

// Initialize Vue Application
const vueApp = createApp(App);
vueApp.use(router);
vueApp.mount('#app');

// Export Firebase services to use throughout your app
export { auth, db };
