import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './rem'
import './mock/mock-sever'
Vue.config.productionTip = false
import { Swipe, SwipeItem, Tabbar, TabbarItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tabbar);
Vue.use(TabbarItem);
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  // 注册路由器
  router,
  store
})
