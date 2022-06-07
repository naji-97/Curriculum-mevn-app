import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import HomeView from '../views/HomeView.vue'
import DisplayCurriculum from '../views/DisplayCurriculum.vue'
import UpsertCurriculum from '../views/UpsertCurriculum.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/curriculum',
    name: 'curriculum',
    component: DisplayCurriculum
  },
  {
    path: '/curriculum/upsert',
    name: 'upsert',
    component: UpsertCurriculum
  }
]

const router = new VueRouter({
  routes
})

export default router
