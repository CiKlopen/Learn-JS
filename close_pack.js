//闭包的学习

var close_pack_f = function(){
    let a;// close_pack_f的私有变量
    return function(){return a+=1;}
}




//for(let i=0;i<100;i++){
    //console.log(close_pack_f())
//}




