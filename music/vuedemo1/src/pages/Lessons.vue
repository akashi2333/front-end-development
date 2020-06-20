<template>
    <div class="layout">
        <div class="left">
            <ul class="list">
                <li class="list-item" :key="i" v-for="(item,i) in itemlist">
                    <div class="item-left" style="width: 890px; padding-right: 140px;">
                        <img class="img" :src="item.imgurl" alt="aa">
                        <div class="content">
                            <h4 class="title">{{item.title}}</h4>
                            <p class="abstract">{{item.abstract}}</p>
                            <div class="meta">
                                <span>查看{{item.number}}</span>
                                <span>时间：</span>
                                <span>{{item.start}}</span>
                                <span>至</span>
                                <span>{{item.end}}</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div style="padding: 30px; text-align: center">
            ---------我也是有底线的啦---------
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            itemlist:[
                {
                    imgurl: require('@/assets/logo.png'),
                    title: '华中科技大学软硕2019级综合实训',
                    abstract: 111,
                    number: 1088,
                    start: '2019-03-22 11:39:34',
                    end: '2019-03-22 13:49:10'
                },
                {
                    imgurl: require('@/assets/logo.png'),
                    title: '华中科技大学软硕2019级综合实训',
                    abstract: 111,
                    number: 1088,
                    start: '2019-03-22 11:39:34',
                    end: '2019-03-22 13:49:10'
                },
                {
                    imgurl: require('@/assets/logo.png'),
                    title: '华中科技大学软硕2019级综合实训',
                    abstract: 111,
                    number: 1088,
                    start: '2019-03-22 11:39:34',
                    end: '2019-03-22 13:49:10'
                },
                {
                    imgurl: require('@/assets/logo.png'),
                    title: '华中科技大学软硕2019级综合实训',
                    abstract: 111,
                    number: 1088,
                    start: '2019-03-22 11:39:34',
                    end: '2019-03-22 13:49:10'
                },
                {
                    imgurl: require('@/assets/logo.png'),
                    title: '华中科技大学软硕2019级综合实训',
                    abstract: 111,
                    number: 1088,
                    start: '2019-03-22 11:39:34',
                    end: '2019-03-22 13:49:10'
                },
                {
                    imgurl: require('@/assets/logo.png'),
                    title: '华中科技大学软硕2019级综合实训',
                    abstract: 111,
                    number: 1088,
                    start: '2019-03-22 11:39:34',
                    end: '2019-03-22 13:49:10'
                },
                {
                    imgurl: require('@/assets/logo.png'),
                    title: '华中科技大学软硕2019级综合实训',
                    abstract: 111,
                    number: 1088,
                    start: '2019-03-22 11:39:34',
                    end: '2019-03-22 13:49:10'
                },
                {
                    imgurl: require('@/assets/logo.png'),
                    title: '华中科技大学软硕2019级综合实训',
                    abstract: 111,
                    number: 1088,
                    start: '2019-03-22 11:39:34',
                    end: '2019-03-22 13:49:10'
                },
                {
                    imgurl: require('@/assets/logo.png'),
                    title: '华中科技大学软硕2019级综合实训',
                    abstract: 111,
                    number: 1088,
                    start: '2019-03-22 11:39:34',
                    end: '2019-03-22 13:49:10'
                },
                {
                    imgurl: require('@/assets/logo.png'),
                    title: '华中科技大学软硕2019级综合实训',
                    abstract: 111,
                    number: 1088,
                    start: '2019-03-22 11:39:34',
                    end: '2019-03-22 13:49:10'
                }
            ]
        }
    }
}
</script>

<style scoped>
.layout {
    display: flex;
}

.left {
    flex: 1;
    padding-right: 20px !important;
}

.list {
    list-style: none;
    margin: 0;
    padding: 0;
}

.list-item {
    line-height: 20px;
    padding: 15px 0;
    position: relative;
    padding-right: 150px;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
    cursor: pointer;
}

.img {
    position: absolute;
    top: 50%;
    margin-top: -50px;
    right: 0;
    width: 125px;
    height: 100px;
}

.title {
    color:#333;
    margin: 7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
}

.abstract {
    min-height: 30px;
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color:#555;
}

.meta {
    padding-right: 0 !important;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
}
.meta span {
    margin-right: 10px;
    color:#666;
}
</style>