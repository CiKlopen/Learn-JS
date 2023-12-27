// js有很多神奇的地方


// function one(f){
//     console.log(f(four));
//     console.log('this is my one')
//     return two;

// }

// function two(f){
//     console.log("this is two");
//     console.log(f(four));
//     return three;
// }



// function three(f){
//     console.log(f());
//     console.log("this is three");
//     return "this is three return";
// }


// function four(){
//     console.log("this is four");
//     return "this is four return";
// }


// one(three)(three)(four)

//这里是理解js的调用
//需要理解注意的是  调用的转换
// 首先是 调用one函数 传入three  three是作为函数传入的，而不是three的返回值，所以three函数在这里不需要形参，
// 但是到one函数里的log的时候 log的是three函数的返回值，所以需要传形参 形参传的是four函数，因为four函数定义的时候，
// 没有定义需要形参传入，故there函数可以直接log，然后再下个 log this is my one  ，return two函数 ，再到two函数的调用
// 然后举一反三，这个主要是js的特性的一个小实验。

//  (0,tq(ti).encrypt)(tg()(td)) 理解这段代码是做这个实验的目的
//  两部分        (0,tq(ti).encrypt)             (tg()(td))
//  先说 (tg()(td))   tg()(td)    tg函数先调用 然后return一个函数方法，td作为return的这个函数的形参，
//  td可以一个函数指针传入 猜测td是回调函数
//  (0,tq(ti).encrypt)


//////////////////////////////////////////////////////////

//下面代码 解释 (0,tq(ti).encrypt)
// (0,tq(ti).encrypt)(tg()(td)) 看完可以解释这个  上面代码解释 (tg()(td))

function one(){

    console.log('this is my one');
    //return two;

}

function two(){

    console.log('this is my two');
    //return two;
}

function log(a){
    //console.log(a);
    (console.log)(a);
    return a+=1;
}



log((log(11111),log)(8848));
log(0);



(1,one(),two(),one(),2);
/////////////////////////////////////////////////////////////
// this is object A
A = {
    ab : function(){
        console.log(0)
    },
    ac : 0,
}

A.ab()  //对象的调用方法  .与数组的[]都是可以的  object.function   object['name']()  object.parameter

console.log(A.ac)

A['ab']()

//////////////////////////////////////////////////////////////

bb = [
    "a","b","v",
    function(){
        console.log('3')
    },one
]

bb[3]();
bb[4]();