<template>
    <div class="layout" style="display: flex;">
        <div class="article">
            <div class="title">报名助手 - {{this.$route.query.name}}</div>
            <div class="author">
                <div class="info">
                    <div class="name">
                        <span>参与人员：</span>
                        <span>漫樱</span>
                        <span>嘿嘿</span>
                        <span>陌陌</span>
                    </div>
                    <div class="time">
                        <span>开始时间：2019-11-2 15:00</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.article {
    width: 100%;
    clear: both;
}

.title {
    font-size: 28px;
    font-weight: 700;
    margin-left: 8px;
    margin-top: 10px;
}

.author {
    width: 885px;
    height: 65px;
    padding-left: 15px;
    margin: 30px 0px 10px;
}

.info {
    float: left;
    vertical-align: middle;
    margin-right: -20px;
}

.name {
    margin-right: 5px;
    font-size: 16px;
    vertical-align: middle;
}

.time {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 5px;
    margin-left: 2px;
    font-size: 12px;
    color: rgb(150, 150, 150);
    vertical-align: middle;
}
</style>