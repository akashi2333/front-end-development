<template>
  <div class="singer-album">
    <div class="album-slide">
      <div class="singer-img">
        <img :src="attachImageUrl(singer.pic)" alt="">
      </div>
      <ul class="info">
        <li v-if="singer.sex !== 2">性别：{{attachSex(singer.sex)}}</li>
        <li>生日：{{attachBirth(singer.birth)}}</li>
        <li>故乡：{{singer.location}}</li>
      </ul>
    </div>
    <div class="album-content">
      <div class="intro">
        <h2>{{singer.name}}</h2>
        <span>{{singer.introduction}}</span>
      </div>
      <div class="content">
        <album-content :songList="listOfSongs">
          <template slot="title"><h1 style="text-align:center;">歌单</h1></template>
        </album-content>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin } from '../mixins'
import { mapGetters } from 'vuex'
import AlbumContent from '../components/AlbumContent'
import { getSongOfSingerId } from '../api/index'

export default {
  name: 'singer-album',
  components: {
    AlbumContent
  },
  mixins: [mixin],
  data () {
    return {
      singerId: '',
      singer: {}
    }
  },
  computed: {
    ...mapGetters([
      'tempList',
      'listOfSongs'
    ])
  },
  mounted () {
    this.singerId = this.$route.params.id // 给歌单ID赋值
    this.singer = this.tempList
    this.getSongList()
  },
  methods: {
    getSongList () {
      getSongOfSingerId(this.singerId)
        .then(res => {
          this.$store.commit('setListOfSongs', res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    attachSex (value) {
      if (value === 0) {
        return '女'
      } else if (value === 1) {
        return '男'
      }
    }
  }
}
</script>

<style scoped>
.singer-album {
  margin-top: 70px;
  padding-top: 150px;
  background-color: #eee;
}

/*左*/
.album-slide {
  float: left;
  width: 400px;
}
.singer-img {
  position: relative;
  display: inline-block;
  height: 300px;
  width: 300px;
  top: -100px;
  left: 50px;
  border-radius: 10%;
  overflow: hidden;
  border: 5px solid #fff;
  background-color: #fff;
}
img {
  width: 100%;
}

.info {
  background-color: #1abc9c;
  list-style: none;
  font-size: 20px;
  font-weight: 500;
  margin-top: -80px;
  padding: 30px 40px 30px 60px;
}
li {
  background-color: #fff;
  width: 100%;
  height: 40px;
}

/*右*/
.album-content {
  margin-left: 300px;
  padding: 30px 100px;
}
.intro {
  font-size: 20px;
}
.intro span {
  color: rgba(0, 0, 0, 0.5);
}
.content {
  margin-top: 50px;
}
.content /deep/ .del {
    width: 0;
    height: 0;
}
</style>

