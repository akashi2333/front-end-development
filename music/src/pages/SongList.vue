<template>
  <div class="song-list">
    <ul class="song-list-header">
      <li
        v-for="(item, index) in songlistStyle"
        :key="index"
        :class="{active: item.name === activeName}"
        @click="handleChangeView(item.name)">
        {{item.name}}
      </li>
    </ul>
    <div class="song-content">
      <content-list :contentList="data"></content-list>
      <div class="pagination">
        <el-pagination
          @current-change="handleCurrentChange"
          background
          layout="total, prev, pager, next"
          :current-page="currentPage"
          :page-size="pageSize"
          :total="albumDatas.length">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import ContentList from '../components/ContentList'
import { mapGetters } from 'vuex'
import { getSongList, getSongListOfStyle } from '../api/index'

export default {
  name: 'song-list',
  components: {
    ContentList
  },
  data () {
    return {
      songlistStyle: [
        {
            name: '全部歌单',
            type: 'One'
        },
        {
            name: '华语',
            type: 'Two'
        },
        {
            name: '粤语',
            type: 'Three'
        },
        {
            name: '欧美',
            type: 'Four'
        },
        {
            name: '日韩',
            type: 'Five'
        },
        {
            name: '轻音乐',
            type: 'Six'
        },
        {
            name: 'BGM',
            type: 'Seven'
        },
        {
            name: '乐器',
            type: 'Eight'
        }
    ],
      activeName: '全部歌单',
      pageSize: 15, // 页数
      currentPage: 1, // 当前页
      albumDatas: [] // 歌单
    }
  },
  computed: {
    ...mapGetters([
      'songsList'
    ]),
    // 计算当前表格中的数据
    data () {
      return this.albumDatas.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
    }
  },
  mounted () {
    this.handleChangeView('全部歌单')
  },
  methods: {
    // 获取当前页
    handleCurrentChange (val) {
      this.currentPage = val
    },
    // 获取歌单
    handleChangeView: function (name) {
      this.activeName = name
      this.albumDatas = []
      if (name === '全部歌单') {
        this.getSongList(this.cur_page)
      } else {
        this.getSongListOfStyle(name)
      }
    },
    // 获取全部歌单
    getSongList (page) {
      getSongList()
        .then(res => {
          this.currentPage = 1
          this.albumDatas = res
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 通过类别获取歌单
    getSongListOfStyle (style) {
      getSongListOfStyle(style)
        .then(res => {
          this.currentPage = 1
          this.albumDatas = res
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.song-list {
    margin: 30px 150px;
    margin-top: 70px;
    padding-bottom: 50px;
    min-width: 800px;
    background-color: #fff;
}

.song-list-header {
    width: 100%;
    padding: 0 40px;
}

li {
    display: inline-block;
    line-height: 40px;
    margin: 40px 20px 15px 20px;
    font-size: 20px;
    font-weight: 400;
    border-bottom: none;
    cursor: pointer;
}
li.active {
    color: #1abc9c;
    font-weight: 600;
    border-bottom: 4px solid #1ABC9C;
}

.pagination {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: row;
    flex-wrap: nowrap;
}
</style>
