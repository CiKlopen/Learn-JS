//       /api/exams/550255/submissions/   id = 96024734 answer_option_ids
//  /api/exams/550255/submissions
//  /api/exams/608038/submissions/storage

// ==UserScript==
// @name         国开答题，刷课，每日在线课时
// @namespace    http://your-namespace.com
// @version      2023-12-25
// @description  具体设置
// @author       秋时
// @match        *://lms.ouchn.cn/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
// 刷题部分的逻辑还需做，等全部做完再上传

function getexamsid(){
    var a;
    $.ajax({
           method : "GET",
           url:"/api/my-semesters",
           success:function(response){
               a =  response;
               console.log(response);
           },
           error:function(response){
               a = response;
               console.log(response);}
       });
   return a;

}

function button_status(){
    if(document.getElementById("monkey_button").innerText.indexOf("开始")>-1){
        document.getElementById("monkey_button").innerHTML = "结束学习";
        console.log("开始学习")；
        getexamsid();
    }else{
        document.getElementById("monkey_button").innerText = "开始学习";
        console.log("结束学习")
    }
}



(function() {
   'use strict';
   if(location.href.indexOf('/user/courses')>-1){
        var button = document.createElement("button");  //添加按钮
        button.innerHTML = "开始学习"; // 文本  也可用 innerText
        button.id = "monkey_button";  // id
        button.style.width = "180px";  // 宽度
        button.style.height = "30px"; // 长度
        button.style.color = "red";  // 颜色
        //button.onclick = function(){var a = "learn"; return a;}
        button.addEventListener("click",function(){     //监听按钮事件，比onclick好用
            //getexamsid();
            button_status();
        })
        
        document.querySelector("body > div.wrapper > div.main-content.gtm-category > div > div > div.column.collapse.menu-side").perpend(button); // 将按钮加载到元素前面 
                                                                                                                          //append，是添加到后面，perpend，函数是添加到前面
                                                                                                                  //appendChild()
        console.log("start learn");

   }
   
   
   
   
   // Your code here...
})();