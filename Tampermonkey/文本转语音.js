// ==UserScript==
// @name         文本转语音
// @namespace    http://your-namespace.com
// @version      0.1
// @description  将页面上的文本转换为语音
// @author       Your Name
// @match        http://*/*
// @match        https://*/*
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

    // 添加一个按钮
    var button = document.createElement("button");
    button.innerHTML = "转换为语音";
    button.style.position = "fixed";
    button.style.top = "10px";
    button.style.left = "10px";
    button.addEventListener("click", function() {
        // 获取页面上的文本
        var textToConvert = document.body.innerText;

        // 调用文本转语音的API（这里使用Google Text-to-Speech API）
        var apiUrl = "https://texttospeech.googleapis.com/v1/text:synthesize?key=YOUR_API_KEY";
        var requestData = {
            input: {
                text: textToConvert
            },
            voice: {
                languageCode: "en-US",
                name: "en-US-Wavenet-D",
                ssmlGender: "NEUTRAL"
            },
            audioConfig: {
                audioEncoding: "LINEAR16"
            }
        };
        GM_xmlhttpRequest({
            method: "POST",
            url: apiUrl,
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(requestData),
            onload: function(response) {
                // 处理语音数据
                console.log("语音数据：", response.responseText);
                // 在这里你可以添加将语音数据播放的代码
            }
        });
    });

    document.body.appendChild(button);

})();


