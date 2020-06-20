<template>
  <div class="search">
    <nav class="searchList-nav" ref="change">
      <span :class="{isActive: toggle === 'Songs'}" @click="handleChangeView('Songs', 0)">歌曲</span>
      <span :class="{isActive: toggle === 'SongLists'}" @click="handleChangeView('SongLists', 1)">歌单</span>
    </nav>
    <component :is="currentView"></component>
  </div>
</template>

<script>
import searchSongs from '../components/search/SearchSongs'
import searchSongLists from '../components/search/SearchSongLists'
import { mapGetters } from 'vuex'
import { mixin } from '../mixins'

export default {
  name: 'search',
  components: {
    searchSongs,
    searchSongLists
  },
  mixins: [mixin],
  data () {
    return {
      toggle: 'Songs',
      currentView: 'searchSongs'
    }
  },
  computed: {
    ...mapGetters([
      'searchword'
    ])
  },
  watch: {
    searchword: function () {
      this.getSong()
    }
  },
  methods: {
    // 切换组件
    handleChangeView: function (component) {
      this.currentView = 'search' + component
      this.toggle = component
    }
  }
}
</script>

<style scoped>
.search{
    margin: auto;
    margin-top: 90px;
    background-color: #1abc9c;
    border-radius: 12px;
    width: 900px;
    position: relative;
}

.searchList-nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-top: 20px;
    font-size: 1.5rem;
}
.searchList-nav span {
    line-height: 50px;
    cursor: pointer;
}

.isActive {
  font-weight: 600;
  border-bottom:5px solid #2c3e50;
}
</style>
