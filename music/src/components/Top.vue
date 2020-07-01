<template>
    <div class="nav">
        <div class="nav-content">
            <div class="top top-left" style="padding-left: 10px; padding-right: 10px; width: 12.5%" @click="goHome()">
                <img class="logo" :src="imgurl1" alt="hh">
                <span class="logo-text">Music</span>
            </div>
            <div class="top top-middle" style="padding-left: 10px; padding-right: 10px; width: 66.66667%" ref="change">
                <ul class="menue">
                    <li :class="{myclass: activeName === item.name}" :key="i" v-for="(item,i) in MenuList" @click="goPage(item.path, item.name)">{{item.name}}</li>
                    <li>
                        <div class="header-search">
                            <input type="text" placeholder="搜索音乐" @keyup.enter="goSearch()" v-model="keywords">
                            <div class="search-btn"  @click="goSearch()" >
                               <img :src="imgurl2" alt="ss" style="position: absolute; left: 2px; top 50%; height: 35px; width: 35px;">
                            </div>
                        </div>
                    </li>
                    <li v-if="!loginIn" :class="{active: item.name === activeName}" v-for="item in loginMsg" :key="item.type" @click="goPage(item.path, item.name)">{{item.name}}</li>
                </ul>
            </div>
            <div class="top top-right" v-show="loginIn">
                <div class="user">
                    <img :src="attachImageUrl(avator)" alt="user" style="width: 100%">
                </div>
                <ul class="settings">
                    <li :class="{myclass: activeName === item.name}" :key="i" v-for="(item, i) in SettingsList"  @click="goSettingsList(item.path, item.name)">{{item.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {mixin} from '../mixins'
import { mapGetters } from 'vuex'
export default {
    mixins: [mixin],
    data() {
        return {
            imgurl1: require('@/assets/logo.png'),
            imgurl2: require('@/assets/search.png'),
            keywords: '',
            MenuList:[
                {
                    name: '首页',
                    path: '/home'
                },
                {
                    name: '歌单',
                    path: '/song-list'
                },
                {
                    name: '歌手',
                    path: '/singer'
                },
                {
                    name: '我的音乐',
                    path: '/my-music'
                }
            ],
            SettingsList:[
                {
                    name: '设置',
                    path: '/setting'
                },
                {
                    name: '退出',
                    path: 0
                }
            ],
            loginMsg:[
                {
                    name: '登录',
                    path: '/login-in'
                }, 
                {
                    name: '注册',
                    path: '/sign-up'
                }
            ]
        }
    },
    computed: {
        ...mapGetters([
            'userId',
            'activeName',
            'avator',
            'username',
            'loginIn'
        ])
    },
    mounted() {
        document.querySelector('.user').addEventListener('click', function (e) {
        document.querySelector('.settings').classList.add('show')
        e.stopPropagation()// 关键在于阻止冒泡
        }, false)
        // 点击“菜单”内部时，阻止事件冒泡。(这样点击内部时，菜单不会关闭)
        document.querySelector('.settings').addEventListener('click', function (e) {
        e.stopPropagation()
        }, false)
        document.addEventListener('click', function () {
        document.querySelector('.settings').classList.remove('show')
        }, false)
    },
    methods: {
        goHome(){
            this.$router.push({path: '/home'})
        },
        goPage (path, value) {
            document.querySelector('.settings').classList.remove('show')
            this.changeIndex(value)
            if (!this.loginIn && path === '/my-music') {
                this.notify('请先登录', 'warning')
            } else {
                this.$router.push({path: path})
            }
        },
        changeIndex (value) {
            this.$store.commit('setActiveName', value)
        },
        goSettingsList (path, value) {
            if (path === 0) {
                this.$store.commit('setIsActive', false)
            }
            document.querySelector('.settings').classList.remove('show')
            this.changeIndex(value)
            if (path) {
                this.$router.push({path: path})
            } else {
                this.$store.commit('setLoginIn', false)
                this.$router.go(0)
            }
        },
        goSearch() {
            this.$store.commit('setSearchword',this.keywords)
            this.$router.push({path: '/search', query: {keywords: this.keywords}})
        }
    }
}
</script>

<style scoped>
.nav {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    height: 70px;
    width: 100%;
    border-bottom: 1px solid #eee;
    background-color: #fff;
}
.nav-content {
    margin: 0 191.5px;
    height: 70px;
}

.top {
    float: left;
    box-sizing: border-box;
    height: 70px;
}

.top-left {
    display: flex;
    align-items: center;
    font-size: 26px;
    color: #1ABC9C;
    font-weight: bold;
}

.logo {
    vertical-align: middle;
    height: 45px;
    margin: 0;
    padding-right: 10px;
}

ul {
    display: flex;
    align-items: center;
    flex-direction: row;
    list-style: none;
    position: relative;
    height: 70px;
    margin: 0;
    padding: 0;
}

li {
    font-size: 16px;
    padding: 0 20px;
    box-sizing: border-box;
    transition: border-color .3s, background-color .3s, color .3s;
    white-space: nowrap;
    position: relative;
    float: left;
    height: 70px;
    line-height: 70px;
    cursor: pointer;
    background-color: #fff;
}

.myclass {
    border-bottom:2px solid #1ABC9C;
    color: #1ABC9C;
}

.header-search {
    display: flex;
    height: 70px;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
}

.header-search input {
    height: 35px;
    width: 270px;
    font-size: 14px;
    border: 0;
    text-indent: 10px;
    background-color: #eee;
}

.search-btn{
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    position: relative;
    background-color: #1ABC9C;
    width: 40px;
    height: 37px;
    cursor: pointer;
    
}

.top-right {
    position: relative;
    display: flex;
    align-items: center;
}

.user {
    overflow: hidden;
    width: 46.6666px;
    height: 46.6666px;
    border-radius: 50%;
    margin: 0 25px;
    cursor: pointer;
}

</style>