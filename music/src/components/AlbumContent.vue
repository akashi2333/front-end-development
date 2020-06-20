<template>
  <div class="content">
    <img :src="imgurl2" alt="del" @click="deletelist(index)" class="del">
    <slot name="title"></slot>
    <hr>
    <ul>
      <li class="list-title">
        <div class="song-item">
          <span class="item-index"></span>
          <span class="item-title">歌曲名</span>
          <span class="item-name">歌手</span>
          <span class="item-intro">专辑</span>
        </div>
      </li>
      <li class="list-content" v-for="(item, index) in songList" :key="index">
        <div class="song-item" :class="{'is-play': id === item.id}"  @click="toplay(item.id, item.url, item.pic, index, item.name, item.lyric)">
          <span class="item-index">
            <span v-if="id !== item.id">{{index + 1}}</span>
            <img v-if="id === item.id" :src="imgurl" alt="yl" class="icon">
          </span>
          <span class="item-title">{{replaceFName(item.name)}}</span>
          <span class="item-name">{{replaceLName(item.name)}}</span>
          <span class="item-intro">{{item.introduction}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mixin} from '../mixins'
import { mapGetters } from 'vuex'

export default {
  name: 'album-content',
  mixins: [mixin],
  data() {
    return{
      imgurl: require('@/assets/yinliang.png'),
      imgurl2: require('@/assets/cha.png'),
    }
  },
  props: [
    'songList',
    'index'
  ],
  computed: {
    ...mapGetters([
      'id' // 音乐ID
    ])
  },
  methods: {
    deletelist(n) {
      this.$emit('remove',n)
    }
  }
}
</script>

<style scoped>
.content {
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 12px;
    padding: 20px 40px;
    min-width: 700px;
}
ul {
  padding: 0;
}
.content > ul > li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: block;
    height: 50px;
    line-height: 50px;
    text-indent: 20px;
    cursor: pointer;
}
.song-item {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: row;
    flex-wrap: nowrap;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.item-index {
    width: 5%;
}
.item-title {
    width: 30%;
}
.item-name {
    width: 25%;
}
.item-intro {
    width: 40%;
}

.is-play {
  color: #1abc9c;
  font-weight: bold;
}

.icon {
  width: 1.3em;
  height: 1.3em;
  font-size: 1.3em;
  position: relative;
  overflow: hidden;
  vertical-align: -0.3em;
  right: 5px;
}
.del{
    float: right;
    overflow: hidden;
    width: 30px;
    height: 30px;
}
.del:hover{
    transform: translateY(-1000px);
    filter: drop-shadow(#1abc9c 0 1000px);
}
</style>