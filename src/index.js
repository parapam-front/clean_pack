
import './js/common'
import './assets/scss/main.scss'
// import 'vue'
// window.Vue = require('vue')
// import 'bootstrap/dist/css/bootstrap.min.css'
window.Vue = require('vue')
import store from './store/index'

Vue.component('example-component', require('./components/example.vue').default)

const app = new Vue ({
	data() {
		return {
			component: false
		}
	},
	store,
	el: '#app'
})