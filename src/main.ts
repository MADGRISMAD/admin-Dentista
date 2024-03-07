import { createApp, DefineComponent } from 'vue';
import './style.css';
import App from './App.vue';

// Anotación de tipo para el componente App
const app = createApp(App as DefineComponent<{ /* tipo de props aquí */ }>);
app.mount('#app');
