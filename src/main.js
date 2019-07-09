import Vue from 'vue'
import ELEMENT from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
Vue.use(ELEMENT)
Vue.config.productionTip = false
// 职责1 ，导入项目需要依赖的资源（包  ，css等等）
// 职责2 ，
new Vue({
  render: h => h(App)
}).$mount('#app')
