import { createApp } from 'vue';

import App from '@/App.vue';
import i18n from "@/plugins/i18n";
import { registerPlugins } from '@core/utils/plugins';

// Styles
import '@core/scss/template/index.scss';
import '@styles/styles.scss';

// Create vue app
const app = createApp(App)

// Register plugins
registerPlugins(app)

app.use(i18n)

// Mount vue app
app.mount('#app')
