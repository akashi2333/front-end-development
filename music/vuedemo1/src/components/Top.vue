<template>
    <div class="nav">
        <div class="nav-content">
            <div class="top top-left" style="padding-left: 10px; padding-right: 10px; width: 12.5%">
                <a class="link" href="http://localhost:8080/TEAMS">
                    <img class="logo" :src="imgurl" alt="hh">
                </a>
            </div>
            <div class="top top-middle" style="padding-left: 10px; padding-right: 10px; width: 66.66667%">
                <ul class="menue">
                    <li :class="{myclass: isactive === i}" :key="i" v-for="(item,i) in itemlist" @click="$router.push({path: item.path}), isactive = i">{{item.name}}</li>
                </ul>
            </div>
            <div class="top top-right" style="text-align:right; padding-top: 15px; padding-left: 10px; padding-right: 10px; width: 16.66667%">
                <button class="button-link" style="color: #fff; background-color: #409eff; border-color: #409eff;">
                    <span>登录</span>
                </button>
                <button class="button-link" style="margin-left: 10px; color: #fff; background-color: #f56c6c; border-color: #f56c6c;">
                    <span>注册</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgurl: require('@/assets/logo.png'),
            isactive: 0,
            itemlist:[
                {
                    name: '优秀团队',
                    path: '/TEAMS'
                },
                {
                    name: '精品课程',
                    path: '/LESSONS'
                },
                {
                    name: '实战项目',
                    path: '/PROJECTS'
                },
                {
                    name: '发展历程',
                    path: '/TIMELINE'
                },
                {
                    name: '留言',
                    path: '/MESSAGE'
                },
                {
                    name: '关于',
                    path: '/ABOUT'
                }
            ]
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
    height: 61px;
    width: 100%;
    border-bottom: 1px solid #eee;
    background-color: #fff;
}
.nav-content {
    margin: 0 191.5px;
    height: 60px;
}

.top {
    float: left;
    box-sizing: border-box;
    height: 60px;
}

a {
    text-decoration: none;    
}

.logo {
    vertical-align: bottom;
    height: 50px;
    margin: 0;
    border-radius: 50%;
    margin-top: 5px;
}

.menue {
    list-style: none;
    position: relative;
    height: 60px;
    margin: 0;
    padding: 0;
}

.menue li {
    font-size: 14px;
    padding: 0 20px;
    box-sizing: border-box;
    transition: border-color .3s, background-color .3s, color .3s;
    white-space: nowrap;
    position: relative;
    float: left;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
    background-color: #fff;
}

.myclass {
    border-bottom:2px solid rgb(64, 158, 255);
    color: rgb(64, 158, 255);
}

.button-link {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
    display: inline-block;
    line-height: 1;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    text-align: center;
    box-sizing: border-box;
    transition: .1s;
    font-weight: 500;   
}
</style>