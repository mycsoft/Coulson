/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// alert('hello World!');

function getDomainFromUrl(url) {
    var host = "null";
    if (typeof url == "undefined" || null == url)
        url = window.location.href;
    var regex = /.*\:\/\/([^\/]*).*/;
    var match = url.match(regex);
    if (typeof match != "undefined" && null != match)
        host = match[1];
    return host;
}

function checkForValidUrl(tabId, changeInfo, tab) {
    if (getDomainFromUrl(tab.url).toLowerCase() == "b.easyxue.cn") {
        chrome.pageAction.show(tabId);
        chrome.notifications.create("123456",
                {
                    type: "basic",
                    title: "您有新的消息",
                    message: "Hello World!",
                    iconUrl: "../icon.png"
                },
        function (nid) {
//                    alert("消息已读:" + nid);
        });
    }
}
;

chrome.tabs.onUpdated.addListener(checkForValidUrl);

//chrome.webRequest.onBeforeRequest.addListener(
//        function (details) {
////            return {cancel: details.url.indexOf("://www.evil.com/") != -1};
//            return {cancel: details.url.indexOf("://b.easyxue.cn/") == -1};
//        },
//        {urls: ["<all_urls>"]},
//        ["blocking"]
//        );
