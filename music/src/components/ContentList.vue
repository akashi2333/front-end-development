<template>
  <div class="content-list">
    <ul class="section-content">
      <li class="content-item" v-for="(item, index) in contentList" :key="index">
        <div class="kuo" @click="goAblum(item, item.name)">
          <img class="item-img" :src="attachImageUrl(item.pic)" alt="">
          <div class="mask"  @click="goAblum(item, item.name)">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bofang"></use>
            </svg>
          </div>
        </div>
        <p class="item-name">{{item.name || item.title}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import {mixin} from '../mixins'
export default {
    name: 'content-list',
  mixins: [mixin],
  props: [
    'contentList'
  ],
  methods: {
    goAblum (item, type) {
      this.$store.commit('setTempList', item)
      if (type) {
        this.$router.push({path: `/singer-album/${item.id}`})
      } else {
        this.$router.push({path: `/song-list-album/${item.id}`})
      }
    }
  }  
}
</script>
<style scoped>
.content-list {
    background-color: #fff;
    min-height: 500px;
    padding: 0 20px;
}
.section-content {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: row;
    flex-wrap: wrap;
}
.content-item {
    width: 18%;
    margin: 20px 1%;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1); 
    position: relative;
}
.content-item :hover {
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
}
.content-item :hover .item-img {
    transform: scale(1.1);
}
.item-name {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin: 10px 8px;
}
</style>