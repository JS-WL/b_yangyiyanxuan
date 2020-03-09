import Home from '../pages/home/Home.vue'
import Cart from '../pages/cart/Cart.vue'
import Catery from '../pages/catery/Catery.vue'
import Profile from '../pages/profile/Profile.vue'
import WorthBuy from '../pages/worthbuy/WorthBuy.vue'
export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/catery',
    component: Catery
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/worthbuy',
    component: WorthBuy
  },
  {
    path: '/',
    redirect: '/home'
  }
]