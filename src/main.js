import { createApp } from 'vue'
import App from './App.vue'
import events from "../data/events"
import globals from "../data/global-data.js"
import './assets/tailwind.css'

const app = createApp(App)

app.provide('events', events)
app.provide('globals', globals)

app.mount('#app')