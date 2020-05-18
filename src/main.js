import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  created() {
    console.log('app created')
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect
      console.log('redirect', redirect)
      delete sessionStorage.redirect
      this.$router.push(redirect)
    }
  }
}).$mount('#app')
