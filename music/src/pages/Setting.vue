<template>
  <div class="setting">
    <div class="leftCol">
      <div class="settingsMainHeader">设置</div>
      <ul class="setting-aside">
        <li v-for="(item, index) in settingList" :key="index" :class="{activeColor: activeName === item.name}" @click="handleClick(item)">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div class="contentCol">
      <component :is="componentSrc"></component>
    </div>
  </div>
</template>

<script>
import Info from '../components/Info'
import Upload from '../components/Upload'

export default {
  name: 'setting',
  components: {
    Info,
    Upload
  },
  data () {
    return {
      activeName: '个人信息',
      componentSrc: 'Info',
      settingList: [{
        icon: '',
        name: '个人信息',
        path: 'Info'
      }, {
        icon: '',
        name: '修改头像',
        path: 'Upload'
      }]
    }
  },
  mounted () {},
  methods: {
    handleClick (item) {
      this.activeName = item.name
      this.componentSrc = item.path
    }
  }
}
</script>

<style scoped>
.setting {
    margin: 30px 10%;
    margin-top: 90px;
    min-height: 65vh;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: row;
    flex-wrap: nowrap;
    background-color: #fff;
    border-radius: 12px;
}

/* 左侧导航栏 */
.leftCol {
    margin-top: 10px;
    padding: 0 20px;
    box-sizing: border-box;
    width: 200px;
}

.settingsMainHeader {
    height: 60px;
    line-height: 60px;
    font-size: 22px;
    font-weight: 500;
}

.setting-aside {
    width: 100%;
    padding: 0;
}
li {
    display: block;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    padding: 0 10px;
    box-sizing: border-box;
    border-radius: 5px;
    margin-right: 2px;
    cursor: pointer;
}
li :hover {
    background-color: #1abc9c;
    color: #fff;
}
.activeColor {
  background-color: #1abc9c !important;
  color: #fff;
}

/* 右边内容 */
.contentCol {
  flex: 1;
  padding-top: 20px;
}
</style>