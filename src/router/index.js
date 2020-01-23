import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Dasboard.vue'
import Data_Kantin from '../views/Data_Kantin.vue'
import Data_Makanan from '../views/Data_Makanan.vue'
import Pembelian from '../views/Pembelian.vue'
import Navbar from '../views/layouts/Navbar.vue'
import Footer from '../views/layouts/Footer.vue'
import Sidebar from '../views/layouts/Sisebar.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {default: Home, Header: Navbar, side:Sidebar, footer: Footer}
  },

  {
    path: '/data_kantin',
    name: 'data_kantin',
    components: {default: Data_Kantin, header: Navbar,side:Sidebar, footer: Footer}
  },

  {
    path: '/data_makanan',
    name: 'data_makanan',
    components: {default: Data_Makanan, header: Navbar,side:Sidebar, footer: Footer}
  },
  {
    path: '/pembelian',
    name: 'pembelian',
    components: {default: Pembelian, header: Navbar,side:Sidebar, footer: Footer}
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
