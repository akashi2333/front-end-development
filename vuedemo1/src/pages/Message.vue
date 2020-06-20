<template>
    <div class="layout" style="display: flex;">
        <div class="message">
            <form class="el-form">
                <div class="item" style="margin-bottom: 22px;">
                    <label for="email" class="item-label">邮箱</label>
                    <div class="content">
                        <div class="content-input">
                            <input type="text" v-model="email" autocomplete="off" placeholder="必填" class="input-content">
                        </div>
                    </div>
                </div>
                <div class="item" style="margin-bottom: 22px;">
                    <label for="phone" class="item-label">手机</label>
                    <div class="content">
                        <div class="content-input">
                            <input type="text" v-model="phone" autocomplete="off" class="input-content">
                        </div>
                    </div>
                </div>
                <div class="item" style="margin-bottom: 22px;">
                    <label for="name" class="item-label">名字</label>
                    <div class="content">
                        <div class="content-input">
                            <input type="text" v-model="name" autocomplete="off" class="input-content">
                        </div>
                    </div>
                </div>
                <div class="item" style="margin-bottom: 22px;">
                    <label for="con" class="item-label">内容</label>
                    <div class="content">
                        <div class="content-text">
                            <textarea class="text-content" v-model="con" placeholder="必填" autocomplete="off"></textarea>
                        </div>
                    </div>
                </div>
                <div class="item" style="margin-bottom: 22px;">
                    <div class="content el-content">
                        <button type="button" class="el-button" @click="submit">
                            <span>提交</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
        email: "",
        phone: "",
        name: "",
        con: ""
        }
    },
    computed: {
        verify:function() {
            if(!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(this.email)){
                return {"flag":false,"msg":'请填写有效的邮箱'};
            }
            if(this.phone.length !== 11){
                return {"flag":false,"msg":'请填写有效的电话'};
            }
            if(!this.name){
                return {"flag":false,"msg":'请填写有效的用户名'};
            }
            if(!this.con) {
                return {"flag":false,"msg":'请填写内容'};
            }
            return {"flag":true,"msg":'ok'};
        }
    },
    methods: {
        submit:function () {
            if(!this.verify.flag){
                alert(this.verify.msg);
            }else{
                alert("谢谢您的留言，我们会尽快联系您。");
            }
        }
    }
}
</script>

<style scoped>
.message {
    padding: 100px 20px 0 20px;
    -webkit-box-flex: 1;
    flex: 1;
    padding-right: 20px!important;
}

.el-form {
    display: block;
    margin-top: 0em;
}

.item-label {
    width: 50px;
    cursor: default;
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
}

.content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    margin-left: 50px;
}

.content-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%;
}

.content-input :hover {
    border-color: #409eff;
}

.input-content {
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}

.content-text {
    position: relative;
    display: inline-block;
    width: 100%;
    vertical-align: bottom;
    font-size: 14px;
}

.text-content {
    min-height: 33px;
    display: block;
    resize: vertical;
    padding: 5px 15px;
    line-height: 1.5;
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
    color: #606266;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
}

input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
  color: #dcdfe6;
}

.el-button {
    color: #fff;
    background-color: #409eff;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid #409eff;
    text-align: center;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}

.el-content :hover {
    background-color: #7fbbf8;
    border-color: #7fbbf8;
}


</style>