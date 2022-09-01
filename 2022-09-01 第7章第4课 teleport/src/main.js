import { createApp } from 'vue'
import App from './App.vue'
import MyGoal from './components/MyGoal.vue'
import MyCard from './components/MyCard.vue'
import ErrorAlert from './components/ErrorAlert.vue'

const app = createApp(App)

app.component('my-goal', MyGoal)
app.component('my-card', MyCard)
app.component('error-alert', ErrorAlert)

app.mount('#app')
