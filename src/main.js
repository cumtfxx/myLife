// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import vueEventCalendar from 'vue-event-calendar'
import 'vue-event-calendar/dist/style.css'
import './assets/css/bootstrap.css'
import './assets/css/reset.css'
// import router from './router'

Vue.use(vueEventCalendar, {locale: 'zh'})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: { App },
  template: '<App/>'
})
