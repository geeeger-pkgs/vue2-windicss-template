import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./views/view1.vue'),
      meta: {
        title: 'view1'
      }
    },
    {
      path: '/view2',
      name: 'view2',
      component: () => import('./views/view2.vue'),
      meta: {
        title: 'view2'
      }
    }
  ]
})

router.afterEach(to => {
  try {
    document.title = to.meta.title
  } catch (e) {
    // well
  }
})



export default router
