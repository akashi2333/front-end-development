<template>
    <div class="home">
        <swiper/>
        <div class="section" v-for="(item, i) in songsList" :key="i">
            <div class="section-title">{{item.name}}</div>
            <content-list :contentList="item.list"></content-list>
        </div>
    </div>
</template>

<script>
import Swiper from '../components/Swiper'
import ContentList from '../components/ContentList'
import {getSongList, getAllSinger} from '../api/index'
export default {
    name: 'home',
    components: {
        Swiper,
        ContentList
    },
    data() {
        return {
            songsList: [
                {
                    name: '歌单',
                    list: []
                },
                {
                    name: '歌手',
                    list: []
                }
            ]
        }
    },
    created() {
        this.getSongList('songList')
        this.getSinger('singer')
    },
    methods: {
        getSongList (path) {
            getSongList()
                .then(res => {
                this.songsList[0].list = res.slice(0, 10)
                })
                .catch(err => {
                console.log(err)
                })
        },
        getSinger () {
            getAllSinger().then(res => {
            this.songsList[1].list = res.slice(0, 10)
        })
        .catch(err => {
          console.log(err)
        })
    }
    }
}
</script>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    margin-top: 70px;
}

.section {
    width: 100%;
    margin-top: 20px;
    padding: 0 120px 50px 120px;
    background-color: #fff;
    box-sizing: border-box;
}

.section-title {
    height: 60px;
    line-height: 60px;
    padding-top: 10px;
    font-size: 28px;
    font-weight: 500;
    text-align: center;
    box-sizing: border-box;
}
</style>