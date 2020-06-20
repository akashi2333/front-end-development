import Vue from 'vue'
import Router from 'vue-router'
import TEAMS from '../pages/Teams.vue'
import LESSONS from '../pages/Lessons.vue'
import PROJECTS from '../pages/Projects.vue'
import TIMELINE from '../pages/Timeline.vue'
import MESSAGE from '../pages/Message.vue'
import ABOUT from '../pages/About.vue'
import TEAMDETAIL from '../pages/TeamDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect:'/TEAMS',
      name: 'App'
    },
    {
      path: '/TEAMS',
      name: 'TEAMS',
      component: TEAMS,
    },
    {
      path: '/LESSONS',
      name: 'LESSONS',
      component: LESSONS,
    },
    {
      path: '/PROJECTS',
      name: 'PROJECTS',
      component: PROJECTS,
    },
    {
      path: '/MESSAGE',
      name: 'MESSAGE',
      component: MESSAGE,
    },
    {
      path: '/TIMELINE',
      name: 'TIMELINE',
      component: TIMELINE,
    },
    {
      path: '/ABOUT',
      name: 'ABOUT',
      component: ABOUT,
    },
    {
      path: '/TEAMDETAIL/:name',
      name: 'TEAMDETAIL',
      component:TEAMDETAIL
    }
  ]
})
