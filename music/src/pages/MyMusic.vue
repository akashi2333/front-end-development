<template>
  <div class="my-music">
    <div class="album-slide">
      <div class="album-img">
        <img :src=attachImageUrl(avator) alt="">
      </div>
      <ul class="album-info">
        <li>昵称： {{username}}</li>
        <li>性别： {{userSex}}</li>
        <li>生日： {{birth}}</li>
        <li>故乡： {{location}}</li>
      </ul>
    </div>
    <div class="album-content">
      <div class="album-title">个性签名: {{introduction}}</div>
      <img :src="imgurl" alt="add" @click="createlist()" class="add">
      <div class="songs-body">
        <album-content :songList="collectList">
          <template slot="title"><h1 class="title">我喜欢</h1></template>
        </album-content>
        <component v-for="(item,index) in comName" :is="item.name" :key="index" @remove="remove">
          <template slot="title" style="text-align:center; vertical-align:middel;display:block">
            <div style="text-align:center; vertical-align:middel">
              <input type="text" class="text">
            </div>
          </template>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import {mixin} from '../mixins'
import { mapGetters } from 'vuex'
import AlbumContent from '../components/AlbumContent'
import { getCollectionOfUser, getUserOfId, getSongOfId } from '../api/index'

export default {
  name: 'my-music',
  components: {
    AlbumContent
  },
  mixins: [mixin],
  data () {
    return {
      avator: '',
      username: '',
      userSex: '',
      birth: '',
      location: '',
      introduction: '',
      collection: [], // 存放收藏的歌曲ID
      collectList: [], // 收藏的歌曲
      imgurl: require('@/assets/add.png'),
      comName: []
    }
  },
  computed: {
    ...mapGetters([
      'userId',
      'id',
      'listOfSongs' // 存放的音乐
    ])
  },
  mounted () {
    this.getMsg(this.userId)
    this.getCollection(this.userId)
  },
  methods: {
    getMsg (id) {
      getUserOfId(id)
        .then(res => {
          this.username = res[0].username
          this.getuserSex(res[0].sex)
          this.birth = this.attachBirth(res[0].birth)
          this.introduction = res[0].introduction
          this.location = res[0].location
          this.avator = res[0].avator
        })
        .catch(err => {
          console.log(err)
        })
    },
    getuserSex (sex) {
      if (sex === 0) {
        this.userSex = '女'
      } else if (sex === 1) {
        this.userSex = '男'
      }
    },
    // 收藏的歌曲ID
    getCollection (userId) {
      getCollectionOfUser(userId)
        .then(res => {
          this.collection = res
          // 通过歌曲ID获取歌曲信息
          for (let item of this.collection) {
            this.getCollectSongs(item.songId)
          }
          this.$store.commit('setListOfSongs', this.collectList)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 获取收藏的歌曲
    getCollectSongs (id) {
      getSongOfId(id)
        .then(res => {
          this.collectList.push(res[0])
        })
        .catch(err => {
          console.log(err)
        })
    },
    createlist() {
      this.comName.push(
        {
          name: "album-content"
        }
      )
    },
    remove(n){
      this.comName.splice(n,1)
    }
  }
}
</script>

<style scoped>
.title {
    text-align: center;
}
.text {
  text-align:center; 
  font-size: 2em;
  font-weight: bold;
  border: 0;
  color: #2c3e50;
}
.my-music {
    width: 100%;
    margin-top: 70px;
    padding-top: 150px;
    background-color: #eee;
}

/*左侧*/
.album-slide {
    float: left;
    width: 400px;
}
.album-img {
    height: 200px;
    width: 200px;
    display: inline-block;
    position: relative;
    top: -100px;
    left: 50px;
    border-radius: 50%;
    overflow: hidden;
    border: 5px solid #fff;
}
img {
    width: 100%;
}
/*信息*/
.album-info {
    list-style: none;
    width: 500px;
    font-size: 20px;
    font-weight: 500;
    margin-top: -100px;
    margin-left: 100px;
    padding: 30px 30px;
}
li {
    width: 100%;
    line-height: 40px;
}
/*歌单内容*/
.album-content {
    margin-left: 300px;
    padding: 40px 100px;
}
.album-title {
    font-size: 30px;
    font-weight: 600;
}
.songs-body {
    margin-top: 50px;
}
.add {
    display: block;
    float: right;
    overflow: hidden;
    width: 30px;
    height: 30px;
}
.add:hover {
    transform: translateY(-1000px);
    filter: drop-shadow(#1abc9c 0 1000px);
}

</style>