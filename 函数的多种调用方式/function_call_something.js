function log(a){
    console.log(a);
}


var JS_zero = function(){
    let a;
}

function JS_a(a){
    let a;

}
















(function (){
    let a;
    log(a);
})()




(0,JS_a)();   //这里我想测试一下 函数的传参和调用方式有几种   搞js逆向的时候，遇到了很多奇怪的调用方法
(JS_a()("a"));

(0,tq(ti).encrypt)(tg()(td))












//回调的实验
function JS_b(callback){
    for(i=0;i<100000;i++){
        log(i);
    } //假设这里是计算  也可假设这里是下载程序
    return callback(i) // 计算完毕后回调
}

function callback_a(i){
    if(i){
        log("下载完毕")
    }
}
//main

setTimeout(JS_b(callback_a),1000)//异步