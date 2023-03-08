import App from './App.svelte'
import './app.css'

window.document.title = 'Shishir'

const app = new App({
  target: document.getElementById('app'),
})

export default app
