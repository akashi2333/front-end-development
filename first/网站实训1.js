var tabs = document.getElementById("tabs").getElementsByTagName("li");
var lists = document.getElementById("lists").getElementsByTagName("ul");
for(var i = 0; i < tabs.length; i++){
    tabs[i].onclick = showlist;
}
function showlist(){
    for(var i = 0; i < tabs.length; i++){
        if(tabs[i] === this){
            tabs[i].className = "active";
            lists[i].className = "active";
        }else{
            tabs[i].className = "";
            lists[i].className = "";
        }
    }
}

var seckillnav = document.getElementById("seckillnav");
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop;
    if(scrollTop >= 260){
        seckillnav.className = "seckill-nav seckill-navfixed";
    }else{
        seckillnav.className = "seckill-nav";
    }
}
function lefttime(){
    //设置开始时间
    var str1 = "2019/10/5 20:00:00";
    var StartTime = new Date(str1);
    var start = StartTime.getTime();

    //设置截止时间  
    var str2 = "2019/10/5 22:00:00";
    var EndTime = new Date(str2);
    var end = EndTime.getTime();

    //获取当前时间
    var NowTime = new Date();
    var now = NowTime.getTime();

    //时间差 
    var LeftTime1 = now - start;
    var LeftTime2 = end - now;

    //定义变量h,m,s保存倒计时的时间  
    if(LeftTime2 >= 0 && LeftTime1 > 0){
        var left = LeftTime2/1000;
        var h = Math.floor(left/(60*60)%24);
        var m = Math.floor(left/60%60);
        var s = Math.floor(left%60);
    }
    m = m<10? '0'+m : m;
    h = h<10? '0'+h : h;
    s = s<10? '0'+s : s;

    document.getElementById("h").innerHTML = h + ":";
    document.getElementById("m").innerHTML = m + ":";
    document.getElementById("s").innerHTML = s;

    //递归每秒调用countTime方法，显示动态时间效果  
    setTimeout(lefttime,1000);  
}
lefttime();