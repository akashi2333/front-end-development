<template>
    <div class="layout" style="display: flex;">
        <div class="timeline-left">
            <ul class="list">
                <li class="item" :key="i" v-for="(item,i) in itemlist">
                    <div class="tail"></div>
                    <div class="node"></div>
                    <div class="wrapper">
                        <div class="content" style="color: #303133;">
                            <div class="card shadow">
                                <div class="body" style="padding: 20px;">
                                    <h3 style="margin-top: 1em;">{{item.title}}</h3>
                                    <p>{{item.thing}}</p>
                                    <p>
                                        <span>{{item.time}}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            itemlist:[
                {
                    title: '创立',
                    thing: '公司成立',
                    time: '2012-05-01'
                },
                {
                    title: '发展',
                    thing: '和武汉大学国际软件学院展开合作',
                    time: '2012-05-01'
                },
                {
                    title: '发展',
                    thing: '和华中科技大学软件学院展开合作',
                    time: '2012-05-01'
                },
                {
                    title: '发展',
                    thing: '和多所软件学院展开合作',
                    time: '2012-05-01'
                }
            ]
        }
    }
}
</script>

<style scoped>
.timeline-left {
    padding: 40px 0;
    -webkit-box-flex: 1;
    flex: 1;
    padding-right: 20px!important;
}

.list {
    margin: 0;
    font-size: 14px;
    list-style: none;
}

.item {
    position: relative;
    padding-bottom: 20px;
}

.tail {
    position: absolute;
    left: 4px;
    height: 100%;
    border-left: 2px solid #e4e7ed;
}

.node {
    background-color: green;
    left: -1px;
    width: 12px;
    height: 12px;
    position: absolute;
    border-radius: 50%;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    align-items: center;
}

.wrapper {
    position: relative;
    padding-left: 28px;
    top: -3px;
}

.card {
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    transition: .3s;
}

.shadow {
   box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
</style>