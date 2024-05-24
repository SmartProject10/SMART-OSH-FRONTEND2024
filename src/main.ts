import { createApp } from 'vue';

import App from '@/App.vue';
import { registerPlugins } from '@core/utils/plugins';
import { useAuth } from './store/auth';

// Styles
import '@core/scss/template/index.scss';
import '@styles/styles.scss';

// Create vue app
const app = createApp(App)

// Register plugins
registerPlugins(app)

if (localStorage.getItem('accessToken')) {
  (async () => {
    const auth = useAuth();
    try {
      auth.setIsAuth(true);
       await auth.checkToken();
    } catch (error) {
      auth.clear()
    }
  })()
}

// Mount vue app
app.mount('#app')
