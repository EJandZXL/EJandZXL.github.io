import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import rightanswer from '@/components/rightanswer'
// import lucky from '@/components/lucky'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/rightanswer',
      name: 'rightanswer',
      component: rightanswer
    }
  ]
})
