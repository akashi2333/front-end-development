<template>
    <div class="layout" style="display: flex;">
        <div class="project left">
            <div class="el-row">
                <div class="el-col" :key="i" v-for="(item,i) in itemlist">
                    <div class="card shadow">
                        <div class="body" style="padding: 20px;">
                            <div style="padding: 14px;">
                                <h4 style="margin-top: 1em;">名称：{{item.title}}</h4>
                                <div class="short-content">简介：{{item.content}}</div>
                                <div class="short-content">学习内容：{{item.study}}</div>
                                <div class="meta">
                                    <span class="start">创建时间：</span>
                                    <span class="end">{{item.time}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                    title: '自定义项目',
                    content: '自我设计的项目',
                    study: 'springboot,django,xgboost,pytorch,tensorflow,vue,react,taro,mpvue,layerui,antd',
                    time: '2019-06-5 17:20:10'
                },
                {
                    title: '自定义项目',
                    content: '自我设计的项目',
                    study: 'springboot,django,xgboost,pytorch,tensorflow,vue,react,taro,mpvue,layerui,antd',
                    time: '2019-06-5 17:20:10'
                },
                {
                    title: '自定义项目',
                    content: '自我设计的项目',
                    study: 'springboot,django,xgboost,pytorch,tensorflow,vue,react,taro,mpvue,layerui,antd',
                    time: '2019-06-5 17:20:10'
                },
                {
                    title: '自定义项目',
                    content: '自我设计的项目',
                    study: 'springboot,django,xgboost,pytorch,tensorflow,vue,react,taro,mpvue,layerui,antd',
                    time: '2019-06-5 17:20:10'
                },
                {
                    title: '自定义项目',
                    content: '自我设计的项目',
                    study: 'springboot,django,xgboost,pytorch,tensorflow,vue,react,taro,mpvue,layerui,antd',
                    time: '2019-06-5 17:20:10'
                },
                {
                    title: '自定义项目',
                    content: '自我设计的项目',
                    study: 'springboot,django,xgboost,pytorch,tensorflow,vue,react,taro,mpvue,layerui,antd',
                    time: '2019-06-5 17:20:10'
                },
                {
                    title: '自定义项目',
                    content: '自我设计的项目',
                    study: 'springboot,django,xgboost,pytorch,tensorflow,vue,react,taro,mpvue,layerui,antd',
                    time: '2019-06-5 17:20:10'
                },
                {
                    title: '自定义项目',
                    content: '自我设计的项目',
                    study: 'springboot,django,xgboost,pytorch,tensorflow,vue,react,taro,mpvue,layerui,antd',
                    time: '2019-06-5 17:20:10'
                },
                {
                    title: '自定义项目',
                    content: '自我设计的项目',
                    study: 'springboot,django,xgboost,pytorch,tensorflow,vue,react,taro,mpvue,layerui,antd',
                    time: '2019-06-5 17:20:10'
                }
            ]
        }
    }
}
</script>

<style scoped>
.project {
    overflow: hidden;
    padding: 40px 0px;
}

.left {
    -webkit-box-flex: 1;
    flex: 1;
    padding-right: 20px!important;
}

.el-row {
    margin-left: -10px;
    margin-right: -10px;
    position: relative;
    box-sizing: border-box;
}

.el-col {
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 20px;
    cursor: pointer;
    width: 100%;
    float: left;
    box-sizing: border-box;
}

.card {
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    transition: .3s;
}

.short-content {
    height: 30px;
    text-overflow: ellipsis;
}

.shadow {
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    transition: .3s;
}

.el-col :hover {
    box-shadow: 5px 5px 10px #8b8b8b;
}

.el-col div :hover {
    box-shadow: none;
}
</style>