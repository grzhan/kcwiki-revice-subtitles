import Vue from 'vue'
import Home from './Home.vue'
import List from './List.vue'
import App from './App.vue'
import Audio from './Audio.vue'
import VueRouter from 'vue-router'
Vue.use(require('vue-resource'))
Vue.use(require('vue-router'))
Vue.component('ship-audio', Audio)
var router = new VueRouter()
router.map({
	'*': { component: Home},
	'/List/:id': { component: List}
})
router.start(App, 'App')