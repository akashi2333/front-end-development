const song = {
    state: {
      isPlay: false, // 播放状态
      playButtonUrl: 'data:image/png;base64,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', // 播放状态的图标
      id: null, // 音乐ID
      url: '', // 歌曲URL
      duration: 0, //  音乐时长
      curTime: 0, // 当前音乐的播放位置
      changeTime: 0, //  指定播放时刻
      title: '', //  歌名
      artist: '', //  歌手名
      picUrl: '', // 歌曲图片
      autoNext: true, // 用于触发自动播放下一首
      lyric: [], // 未处理的歌词数据
      listOfSongs: [], // 当前歌单列表
      tempList: {}, // 单个歌单信息
      listIndex: null, // 当前歌曲在歌曲列表的位置
      volume: 50
    },
    getters: {
      isPlay: state => state.isPlay,
      playButtonUrl: state => {
        let playButtonUrl = state.playButtonUrl
        if (!playButtonUrl) {
          playButtonUrl = JSON.parse(window.sessionStorage.getItem('playButtonUrl') || null)
        }
        return playButtonUrl
      },
      id: state => {
        let id = state.id
        if (!id) {
          id = JSON.parse(window.sessionStorage.getItem('id') || null)
        }
        return id
      },
      url: state => {
        let url = state.url
        if (!url) {
          url = JSON.parse(window.sessionStorage.getItem('url') || null)
        }
        return url
      },
      duration: state => {
        let duration = state.duration
        if (!duration) {
          duration = JSON.parse(window.sessionStorage.getItem('duration') || 0)
        }
        return duration
      },
      curTime: state => {
        let curTime = state.curTime
        if (!curTime) {
          curTime = JSON.parse(window.sessionStorage.getItem('curTime') || 0)
        }
        return curTime
      },
      changeTime: state => {
        let changeTime = state.changeTime
        if (!changeTime) {
          changeTime = JSON.parse(window.sessionStorage.getItem('changeTime') || 0)
        }
        return changeTime
      },
      title: state => {
        let title = state.title
        if (!title) {
          title = JSON.parse(window.sessionStorage.getItem('title') || null)
        }
        return title
      },
      artist: state => {
        let artist = state.artist
        if (!artist) {
          artist = JSON.parse(window.sessionStorage.getItem('artist') || null)
        }
        return artist
      },
      picUrl: state => {
        let picUrl = state.picUrl
        if (!picUrl) {
          picUrl = JSON.parse(window.sessionStorage.getItem('picUrl')) || 'data:image/png;base64,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'
        }
        return picUrl
      },
      autoNext: state => {
        let autoNext = state.autoNext
        if (!autoNext) {
          autoNext = JSON.parse(window.sessionStorage.getItem('autoNext') || null)
        }
        return autoNext
      },
      lyric: state => {
        let lyric = state.lyric
        if (lyric.length === 0) {
          lyric = JSON.parse(window.sessionStorage.getItem('lyric') || null)
        }
        return lyric
      },
      tempList: state => {
        let tempList = state.tempList
        if (JSON.stringify(tempList) === '{}') {
          tempList = JSON.parse(window.sessionStorage.getItem('tempList') || null)
        }
        return tempList
      },
      listOfSongs: state => {
        let listOfSongs = state.listOfSongs
        if (!listOfSongs.length) {
          listOfSongs = JSON.parse(window.sessionStorage.getItem('listOfSongs') || null)
        }
        return listOfSongs
      },
      listIndex: state => {
        let listIndex = state.listIndex
        if (!listIndex) {
          listIndex = JSON.parse(window.sessionStorage.getItem('listIndex') || null)
        }
        return listIndex
      },
      volume: state => {
        let volume = state.volume
        if (!volume) {
          volume = JSON.parse(window.sessionStorage.getItem('volume') || null)
        }
        return volume
      }
    },
    mutations: {
      setIsPlay: (state, isPlay) => {
        state.isPlay = isPlay
        window.sessionStorage.setItem('isPlay', JSON.stringify(isPlay))
      },
      setPlayButtonUrl: (state, playButtonUrl) => {
        state.playButtonUrl = playButtonUrl
        window.sessionStorage.setItem('playButtonUrl', JSON.stringify(playButtonUrl))
      },     
      setId: (state, id) => {
        state.id = id
        window.sessionStorage.setItem('id', JSON.stringify(id))
      },
      setUrl: (state, url) => {
        state.url = url
        window.sessionStorage.setItem('url', JSON.stringify(url))
      },
      setDuration: (state, duration) => {
        state.duration = duration
        window.sessionStorage.setItem('duration', JSON.stringify(duration))
      },
      setCurTime: (state, curTime) => {
        state.curTime = curTime
        window.sessionStorage.setItem('curTime', JSON.stringify(curTime))
      },
      setChangeTime: (state, changeTime) => {
        state.changeTime = changeTime
        window.sessionStorage.setItem('changeTime', JSON.stringify(changeTime))
      },
      setTitle: (state, title) => {
        state.title = title
        window.sessionStorage.setItem('title', JSON.stringify(title))
      },
      setArtist: (state, artist) => {
        state.artist = artist
        window.sessionStorage.setItem('artist', JSON.stringify(artist))
      },
      setpicUrl: (state, picUrl) => {
        state.picUrl = picUrl
        window.sessionStorage.setItem('picUrl', JSON.stringify(picUrl))
      },
      setAutoNext: (state, autoNext) => {
        state.autoNext = autoNext
        window.sessionStorage.setItem('autoNext', JSON.stringify(autoNext))
      },
      setLyric: (state, lyric) => {
        state.lyric = lyric
        window.sessionStorage.setItem('lyric', JSON.stringify(lyric))
      },
      setTempList: (state, tempList) => {
        state.tempList = tempList
        window.sessionStorage.setItem('tempList', JSON.stringify(tempList))
      },
      setListOfSongs: (state, listOfSongs) => {
        state.listOfSongs = listOfSongs
        window.sessionStorage.setItem('listOfSongs', JSON.stringify(listOfSongs))
      },
      setListIndex: (state, listIndex) => {
        state.listIndex = listIndex
        window.sessionStorage.setItem('listIndex', JSON.stringify(listIndex))
      },
      setVolume: (state, volume) => {
        state.volume = volume
        window.sessionStorage.setItem('volume', JSON.stringify(volume))
      }
    },
    actions: {}
  }
  
  export default song
  