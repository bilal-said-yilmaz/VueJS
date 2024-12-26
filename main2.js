import { createApp } from 'vue'
import App from './App.vue'
import Footer from './footer.vue'

const app = createApp(App)

app.component("app-footer",Footer)

app.mount('#app')
