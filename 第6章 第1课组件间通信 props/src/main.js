import { createApp } from 'vue'
import App from './App.vue'
import MyGoal from './components/MyGoal.vue'

const app = createApp(App)

app.component('my-goal', MyGoal)
app.mount('#app')
