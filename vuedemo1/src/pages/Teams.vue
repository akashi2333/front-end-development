<template>
    <div class="layout">
        <div class="row">
            <div class="item" :key="i" v-for="(item,i) in itemlist" @click="selectItem(item.name)">
                <a href="">
                    <div class="shadow">
                        <div class="card">
                            <div class="img-content">
                                <img :src="item.imgurl" alt="hh">
                            </div>
                            <div style="padding: 14px">
                                <h4>{{item.name}}</h4>
                                <div style="height: 70px">{{item.content}}</div>
                                <span>{{item.start}}</span>
                                <span>{{item.end}}</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div style="padding: 30px; text-align: center">
            ---------我也是有底线的啦---------
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            itemlist:[
                {
                    imgurl: require('@/assets/logo.png'),
                    name: 2,
                    content: '小程序辅助活动组织',
                    start: '2019-03-22 11:39:34--',
                    end: '2019-03-22 13:49:10'
                },
                {
                    imgurl: require('@/assets/logo.png'),
                    name: 4,
                    content: '小程序辅助活动组织',
                    start: '2019-03-22 11:39:34--',
                    end: '2019-03-22 13:49:10'
                },
                {
                    imgurl: require('@/assets/logo.png'),
                    name: 6,
                    content: '小程序辅助活动组织',
                    start: '2019-03-22 11:39:34--',
                    end: '2019-03-22 13:49:10'
                },
                {
                    imgurl: require('@/assets/logo.png'),
                    name: 8,
                    content: '小程序辅助活动组织',
                    start: '2019-03-22 11:39:34--',
                    end: '2019-03-22 13:49:10'
                },
                {
                    imgurl: require('@/assets/logo.png'),
                    name: 10,
                    content: '小程序辅助活动组织',
                    start: '2019-03-22 11:39:34--',
                    end: '2019-03-22 13:49:10'
                },
                {
                    imgurl: require('@/assets/logo.png'),
                    name: 12,
                    content: '小程序辅助活动组织',
                    start: '2019-03-22 11:39:34--',
                    end: '2019-03-22 13:49:10'
                },
                {
                    imgurl: require('@/assets/logo.png'),
                    name: 14,
                    content: '小程序辅助活动组织',
                    start: '2019-03-22 11:39:34--',
                    end: '2019-03-22 13:49:10'
                },
                {
                    imgurl: require('@/assets/logo.png'),
                    name: 16,
                    content: '小程序辅助活动组织',
                    start: '2019-03-22 11:39:34--',
                    end: '2019-03-22 13:49:10'
                },
                {
                    imgurl: require('@/assets/logo.png'),
                    name: 18,
                    content: '小程序辅助活动组织',
                    start: '2019-03-22 11:39:34--',
                    end: '2019-03-22 13:49:10'
                },
                {
                    imgurl: require('@/assets/logo.png'),
                    name: 20,
                    content: '小程序辅助活动组织',
                    start: '2019-03-22 11:39:34--',
                    end: '2019-03-22 13:49:10'
                }
            ]
        }
    },
    methods: {
        selectItem(name) {
            this.$router.push({path: '/TEAMDETAIL/${name}',query:{name:name}});
        }
    }
}
</script>

<style scoped>
.row {
    overflow: hidden;
    padding: 40px 0;
    padding-right: 20px!important;
}

.item {
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 20px;
    cursor: pointer;
    float: left;
    width: 50%;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

.shadow {
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    transition: .3s;
}

.item :hover {
    box-shadow: 5px 5px 10px #8b8b8b;
}

.item div :hover {
    box-shadow: none;
}

.card {
    padding: 20px;
}

.img-content {
    height: 250px;
    text-align: center;
}
</style>