import Vue from 'vue'
import Home from './Home.vue'
import List from './List.vue'
import App from './App.vue'
import Audio from './Audio.vue'
import VueRouter from 'vue-router'
import md5 from 'md5'
import VoiceFilename from './VoiceFilename'
Vue.use(require('vue-resource'))
Vue.use(require('vue-router'))
Vue.component('ship-audio', Audio)
Vue.filter('wiki-file', (fileId, wikiId) => {
	if (wikiId.length == '') return '#'
	var filename = `${wikiId}-${VoiceFilename[fileId]}.mp3`
	var hash = md5(filename)
	return `http://upload.kcwiki.moe/commons/${hash[0]}/${hash.substr(0, 2)}/${filename}`
});
var router = new VueRouter()
router.map({
	'*': { component: Home},
	'/List/:id': { component: List}
})
router.start(App, 'App')
