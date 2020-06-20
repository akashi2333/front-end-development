<template>
  <div id="app" class="container">
    <TOP></TOP>
    <router-view></router-view>
    <BOTTOM></BOTTOM>
  </div>
</template>

<script>
import TOP from '../src/components/Top'
import BOTTOM from '../src/components/Bottom'
export default {
  name: 'App',
  components: {
    TOP,
    BOTTOM
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: left;
  color: #2c3e50;
  width: 1200px;
  margin: 0 auto;
  padding-top: 61px;
}
</style>
