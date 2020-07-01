import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import SongList from '../pages/SongList.vue'
import Singer from '../pages/Singer.vue'
import MyMusic from '../pages/MyMusic.vue'
import SongListAlbum from '../pages/SongListAlbum.vue'
import SingerAlbum from '../pages/SingerAlbum.vue'
import Search from '../pages/Search.vue'
import LoginIn from '../pages/LoginIn.vue'
import SignUp from '../pages/SignUp.vue'
import Setting from '../pages/Setting.vue'
import Lyric from '../pages/Lyric.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/404',
      component: resolve => require(['../pages/404.vue'],resolve)
    },
    {
      path: '/login-in',
      name: 'login-in',
      component: LoginIn
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting,
    },
    {
      path: '/song-list',
      name: 'song-list',
      component: SongList,
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer,
    },
    {
      path: '/my-music',
      name: 'my-music',
      component: MyMusic,
    },
    {
      path: '/song-list-album/:id',
      name: 'song-list-album',
      component:SongListAlbum
    },
    {
      path: '/singer-album/:id',
      name: 'singer-album',
      component: SingerAlbum
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/lyric/:id',
      name: 'lyric',
      component: Lyric
    }
  ]
})
