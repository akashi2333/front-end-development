<template>
    <div class="home">
        <div class="section">
            <album-content :songist="sortList">
                <template slot="title"><h1 class="title">官方歌曲榜</h1></template>
            </album-content>
        </div>
    </div>
</template>

<script>
import AlbumContent from '../components/AlbumContent'
import {getSongOfId, getSortList} from '../api/index'
import { mapGetters } from 'vuex'
import {mixin} from '../mixins'
export default {
    name: 'home',
    components: {
        AlbumContent
    },
    data () {
        return {
            sortList: [], //排行榜歌曲
            sort: [] //存放排行榜歌曲ID
        }
    },
    computed : {
        ...mapGetters([
            'listOfSongs',
            'id'
        ])
    },
    mounted () {
        this.getSort()
    },
    methods: {
        //排行榜歌曲ID
        getSort () {
            getSortList()
            .then(res => {
            for (let item of this.sort) {
                this.getSortOfList(item.songId)
            }
            this.$store.commit('setListOfSongs',this.sortList)
            })
            .catch(err => {
                console.log(err)
            })            
        },
        //获取排行榜歌曲
        getSortOfList(id) {
            getSongOfId(id)
            .then(res => {
                this.sortList.push(res[0])
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
    margin: 30px 150px;
    flex-direction: column;
    margin-top: 70px;
    min-width: 800px;
    background-color: #1abc9c;
}

.section {
    width: 100%;
    margin-top: 20px;
    padding: 0 120px 50px 120px;
    background-color: #fff;
    box-sizing: border-box;
}

.title {
    text-align: center;
}
.content /deep/ .del {
    width: 0;
    height: 0;
}

</style>