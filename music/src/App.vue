<template>
  <div id="app" class="container">
    <song-audio/>
    <TOP></TOP>
    <the-aside/>
    <router-view></router-view>
    <play-bar/>
    <BOTTOM></BOTTOM>
  </div>
</template>

<script>
import TOP from '../src/components/Top'
import BOTTOM from '../src/components/Bottom'
import PlayBar from '../src/components/PlayBar'
import SongAudio from '../src/components/SongAudio'
import TheAside from '../src/components/TheAside'
export default {
  name: 'App',
  components: {
    SongAudio,
    TOP,
    PlayBar,
    BOTTOM,
    TheAside
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: left;
  color: #2c3e50;
  width: 100%;
  margin: 0;
  background-color: #eee;
}
</style>