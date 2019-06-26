import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//加载图标
import '@/icons'
//全局样式 
//import '@/styles/index.scss' // global css

process.VUE_APP_MOCK && require('./mock')
//远程调用api使用的类库
import axios from 'axios'

Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
