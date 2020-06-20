<template>
  <div class="play-bar">
    <div class="kongjian" >
      <!--上一首-->
      <div class="item" @click="prev">
        <img :src="imgurl1" alt="" class="icon">
      </div>
      <!--播放-->
      <div class="item" @click="togglePlay">
        <img :src="playButtonUrl" alt="" class="icon">
      </div>
      <!--下一首-->
      <div class="item" @click="next">
        <img :src="imgurl3" alt="" class="icon">
      </div>
      <!--歌曲图片-->
      <div class="item-img" @click="goPlayerPage">
         <img :src=picUrl alt="" style="width:100%">
      </div>
      <!--播放进度-->
      <div class="playing-speed">
        <!--播放开始时间-->
        <div class="current-time">{{ nowTime }}</div>
        <div class="progress-box">
          <div class="item-song-title">
            <div>{{this.title}}</div>
            <div>{{this.artist}}</div>
          </div>
          <div ref="progress" class="progress" @mousemove="mousemove">
            <!--进度条-->
            <div ref="bg" class="bg" @click="updatemove">
              <div ref="curProgress" class="cur-progress" :style="{width: curLength+'%'}"></div>
            </div>
            <!--进度条 end -->
            <!--拖动的点点-->
            <div ref="idot" class="idot" :style="{left: curLength+'%'}" @mousedown="mousedown" @mouseup="mouseup"></div>
            <!--拖动的点点 end -->
          </div>
        </div>
        <!--播放结束时间-->
        <div class="left-time">{{ songTime }}</div>
      </div>
      <!--音量-->
      <div class="item icon-volume" >
        <img :src="imgurl4" alt="" class="icon" v-if="volume !== 0">
        <img :src="imgurl2" alt="" class="icon" v-else>
        <el-slider class="volume" v-model="volume" :vertical="true"></el-slider>
      </div>
      <!--添加-->
      <div class="item" @click="collection">
        <img :src="imgurl6" alt="" class="icon">
      </div>
      <!--下载-->
      <div class="item" @click="download">
        <img :src="imgurl7" alt="" class="icon">
      </div>
      <!--歌曲列表-->
      <div class="item" @click="changeAside">
        <img :src="imgurl8" alt="" class="icon">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mixin } from '../mixins'
import { setCollection, download } from '../api/index'

export default {
  name: 'play-bar',
  mixins: [mixin],
  data () {
    return {
      imgurl1: require('@/assets/before.png'),
      imgurl2: require('@/assets/jinyin.png'),
      imgurl3: require('@/assets/next.png'),
      imgurl4: require('@/assets/voice.png'),
      imgurl6: require('@/assets/heart.png'),
      imgurl7: require('@/assets/downloaad.png'),
      imgurl8: require('@/assets/more.png'),
      tag: false,
      nowTime: '00:00',
      songTime: '00:00',
      curLength: 0, // 进度条的位置
      progressLength: 0, // 进度条长度
      mouseStartX: 0, // 拖拽开始位置
      toggle: true,
      volume: 50
    }
  },
  computed: {
    ...mapGetters([
      'loginIn', // 用户登录状态
      'userId', // 用户 id
      'isPlay', // 播放状态
      'playButtonUrl', // 播放状态的图标
      'id', // 音乐id
      'url', // 音乐地址
      'title', // 歌名
      'artist', // 歌手名
      'picUrl', // 歌曲图片
      'curTime', // 当前音乐的播放位置
      'duration', // 音乐时长
      'listOfSongs', // 当前歌单列表
      'listIndex', // 当前歌曲在歌曲列表的位置
      'showAside', // 是否显示侧边栏
      'autoNext', // 用于触发自动播放下一首
      'isActive'
    ])
  },
  watch: {
    // 切换播放状态的图标
    isPlay (val) {
      if (val) {
        this.$store.commit('setPlayButtonUrl', 'data:image/png;base64,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')
      } else {
        this.$store.commit('setPlayButtonUrl', 'data:image/png;base64,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')
      }
    },
    volume () {
      this.$store.commit('setVolume', this.volume / 100)
    },
    // 播放时间的开始和结束
    curTime () {
      this.nowTime = this.formatSeconds(this.curTime)
      this.songTime = this.formatSeconds(this.duration)
      // 移动进度条
      this.curLength = (this.curTime / this.duration) * 100
      // 处理歌词位置及颜色
    },
    // 自动播放下一首
    autoNext () {
      this.next()
    }
  },
  mounted () {
    this.progressLength = this.$refs.progress.getBoundingClientRect().width
    document.querySelector('.icon-volume').addEventListener('click', function (e) {
      document.querySelector('.volume').classList.add('show-volume')
      e.stopPropagation()
    }, false)
    document.querySelector('.volume').addEventListener('click', function (e) {
      e.stopPropagation()
    }, false)
    document.addEventListener('click', function () {
      document.querySelector('.volume').classList.remove('show-volume')
    }, false)
  },
  methods: {
    // 下载
    download () {
      download(this.url)
        .then(res => {
          let content = res.data
          let eleLink = document.createElement('a')
          eleLink.download = `${this.artist}-${this.title}.mp3`
          eleLink.style.display = 'none'
          // 字符内容转变成blob地址
          let blob = new Blob([content])
          eleLink.href = URL.createObjectURL(blob)
          // 触发点击
          document.body.appendChild(eleLink)
          eleLink.click()
          // 然后移除
          document.body.removeChild(eleLink)
        })
        .catch(err => {
          console.log(err)
        })
    },
    changeAside () {
      let temp = !this.showAside
      this.$store.commit('setShowAside', temp)
    },
    // 控制音乐播放 / 暂停
    togglePlay () {
      if (this.isPlay) {
        this.$store.commit('setIsPlay', false)
      } else {
        this.$store.commit('setIsPlay', true)
      }
    },
    // 解析播放时间
    formatSeconds (value) {
      let theTime = parseInt(value)
      let theTime1 = 0
      let theTime2 = 0
      if (theTime > 60) {
        theTime1 = parseInt(theTime / 60) // 分
        theTime = parseInt(theTime % 60) // 秒
        // 是否超过一个小时
        if (theTime1 > 60) {
          theTime2 = parseInt(theTime1 / 60) // 小时
          theTime1 = 60 // 分
        }
      }
      // 多少秒
      if (parseInt(theTime) < 10) {
        var result = '0:0' + parseInt(theTime)
      } else {
        result = '0:' + parseInt(theTime)
      }
      // 多少分钟时
      if (theTime1 > 0) {
        if (parseInt(theTime) < 10) {
          result = '0' + parseInt(theTime)
        } else {
          result = parseInt(theTime)
        }
        result = parseInt(theTime1) + ':' + result
      }
      // 多少小时时
      if (theTime2 > 0) {
        if (parseInt(theTime) < 10) {
          result = '0' + parseInt(theTime)
        } else {
          result = parseInt(theTime)
        }
        result = parseInt(theTime2) + ':' + parseInt(theTime1) + ':' + result
      }
      return result
    },
    // 拖拽开始
    mousedown (e) {
      this.mouseStartX = e.clientX
      this.tag = true
    },
    // 拖拽结束
    mouseup () {
      this.tag = false
    },
    // 拖拽中
    mousemove (e) {
      if (!this.duration) {
        return false
      }
      if (this.tag) {
        let movementX = e.clientX - this.mouseStartX
        let curLength = this.$refs.curProgress.getBoundingClientRect().width
        //  计算出百分比
        this.progressLength = this.$refs.progress.getBoundingClientRect().width
        let newPercent = ((curLength + movementX) / this.progressLength) * 100
        if (newPercent > 100) {
          newPercent = 100
        }
        this.curLength = newPercent
        this.mouseStartX = e.clientX
        //  根据百分比推出对应的播放时间
        this.changeTime(newPercent)
      }
    },
    // 更改歌曲进度
    changeTime (percent) {
      let newCurTime = this.duration * (percent * 0.01)
      this.$store.commit('setChangeTime', newCurTime)
    },
    updatemove (e) {
      if (!this.tag) {
        let curLength = this.$refs.bg.offsetLeft
        this.progressLength = this.$refs.progress.getBoundingClientRect().width
        let newPercent = ((e.clientX - curLength) / this.progressLength) * 100
        if (newPercent < 0) {
          newPercent = 0
        } else if (newPercent > 100) {
          newPercent = 100
        }
        this.curLength = newPercent
        this.changeTime(newPercent)
      }
    },
    // 上一首
    prev () {
      if (this.listIndex !== -1 && this.listOfSongs.length > 1) {
        if (this.listIndex > 0) {
          this.$store.commit('setListIndex', this.listIndex - 1)
          this.toPlay(this.listOfSongs[this.listIndex].url)
        } else {
          this.$store.commit('setListIndex', this.listOfSongs.length - 1)
          this.toPlay(this.listOfSongs[this.listIndex].url)
        }
      }
    },
    // 下一首
    next () {
      if (this.listIndex !== -1 && this.listOfSongs.length > 1) {
        if (this.listIndex < this.listOfSongs.length - 1) {
          this.$store.commit('setListIndex', this.listIndex + 1)
          this.toPlay(this.listOfSongs[this.listIndex].url)
        } else {
          this.$store.commit('setListIndex', 0)
          this.toPlay(this.listOfSongs[0].url)
        }
      }
    },
    // 选中播放
    toPlay (url) {
      if (url && url !== this.url) {
        this.$store.commit('setId', this.listOfSongs[this.listIndex].id)
        this.$store.commit('setUrl', this.$store.state.configure.HOST + url)
        this.$store.commit('setpicUrl', this.$store.state.configure.HOST + this.listOfSongs[this.listIndex].pic)
        this.$store.commit('setTitle', this.replaceFName(this.listOfSongs[this.listIndex].name))
        this.$store.commit('setArtist', this.replaceLName(this.listOfSongs[this.listIndex].name))
        this.$store.commit('setLyric', this.parseLyric(this.listOfSongs[this.listIndex].lyric))
      }
    },
    goPlayerPage () {
      this.$router.push({path: `/lyric/${this.id}`})
    },
    collection () {
      if (this.loginIn) {
        var params = new URLSearchParams()
        params.append('userId', this.userId)
        params.append('type', 0) // 0 代表歌曲， 1 代表歌单
        params.append('songId', this.id)
        setCollection(params)
          .then(res => {
            if (res.code === 1) {
              this.$store.commit('setIsActive', true)
              this.notify('收藏成功', 'success')
            } else if (res.code === 2) {
              this.notify('已收藏', 'warning')
            } else {
              this.$notify.error({
                title: '收藏失败',
                showClose: false
              })
            }
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        this.notify('请先登录', 'warning')
      }
    }
  }
}
</script>

<style scoped>
.play-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    transition: all 0.5s;
    border-top: 2px solid #eee;
}
.item-img {
    width: 70px;
    height: 70px;
}
.item-img :hover {
  cursor: pointer;
}
.playing-speed {
    height: 50px;
    width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
}
.current-time,.left-time {
    width: 70px;
    text-align: center;
    font-size: 13px;
    font-weight: 500;
    top: -10px;
}
.progress-box {
    flex: 1;
}
.item-song-title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 20px;
    line-height: 10px;
}
.progress {
    width: 100%;
    background: #8ae0cf;
    height: 6px;
}
.bg {
    height: 100%;
}
.cur-progress {
    height: 100%;
    background: #1abc9c;
}
.idot {
    width: 16px;
    height: 16px;
    position: relative;
    border-radius: 50%;
    background-color: #2e3c50;
    top: -11px;
    vertical-align: middle;
}
.kongjian {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    bottom: 0;
    height: 70px;
    width: 100%;
    min-width: 1000px;
    background-color: #fff;
}
.item {
    position: relative;
    width: 80px;
    height: 50px;
    line-height: 60px;
    text-align: center;
    cursor: pointer;
}
.volume {
    position: absolute;
    display: none;
    height: 100px;
    top: -120px;
    right: 22px;
}
.turn {
  transform: rotate(180deg);
}
.show-volume {
    display: block;
}
.show {
  bottom: -70px;
}

.icon {
  height: 1.5em;
  width: 1.5em;
}

</style>
