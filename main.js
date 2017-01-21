// ==UserScript==
// @name         Official Fb Hack
// @namespace    http://tampermonkey.net/
// @version      0.1
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @require      https://www.gstatic.com/firebasejs/3.6.3/firebase.js
// @require      https://sdk.clarifai.com/js/clarifai-latest.js
// @require      http://localhost:3000/AnimationFunctions.js?sdf
// @require      http://localhost:3000/ProfileSearch.js?sddsf
// @description  try to take over the world!
// @author       You
//@run-at        document-start
// @match        https://www.facebook.com/phong.lai
// @grant        unsafeWindow
// @include       https://clarifai.com/*
// @connect      *
// @grant        GM_log
// @grant        GM_xmlhttpRequest
// ==/UserScript==

//Official Fb Hack
// Settings: Run At : document-end
// Position: 10

console.log(ExternalScript1);

var $$;
var MyClarifai;

// GM_xmlhttpRequest({
//     method: "GET",
//     url: "https://www.clarifai.com",
//     onload: function(res) {
//         GM_log(res.responseText);
//     }
// });
//
//
// GM_xmlhttpRequest({
//     method: "GET",
//     url: "http://localhost:3000/users",
//     onload: function(response) {
//         GM_log(response);
//     }
// });

// whyNot();
var StartCounter = 0;

//Facebook Stock Component
var ChatBox;
var FBLeftBox;
var FBRightBox;

//Reverse Facebook Stock Component
var ReverseChatBox;
var ReverseFBLeftBox;
var ReverseFBRightBox;

var maybe = "just checking";

console.log(firebase);

function tryCallme(){
    console.log("bang bang");
}

function doublecheck(){
    $( document ).ready(function() {
        $$ = $;

        SetUpGlobalVariables();
    });
}

function SetUpGlobalVariables(){

    ChatBox = $(".fbChatSidebar");
    FBLeftBox = $("._1vc-");
    FBRightBox = $("._5nb8");

    var wordCheck = function(obj){
        console.log("This is the callback function from the main script");
        console.log(obj);

        var newObj = JSON.stringify(obj);

        var hello ={
            watup: "yoooo"
        };



        GM_xmlhttpRequest({
            method: "POST",
            data: newObj,
            headers: {"Content-Type": "application/json;charset=UTF-8"},
            json: true,
            url: "http://localhost:3000/users/object",
            onload: function(response) {
                GM_log(response);
            }, onerror: function(res) {
                GM_log(msg);
            }
        });


        // GM_xmlhttpRequest({
        //     method: "POST",
        //     headers: {"Content-Type": "application/json;charset=UTF-8"},
        //     data: "hey there",
        //     json: true,
        //     url: "http://localhost:3000/users/object",
        //     onload: function(response) {
        //         GM_log(response);
        //     }, onerror: function(res) {
        //         GM_log(msg);
        //     }
        // });

    }

    // AnimateAllComponentsOut();  // => Animate all the main components away
    // GetEntireData(); // => Function to navigate to the about's page
    StartSearching(wordCheck);

}

function SetUpStartingButton(){

}

function AnimateAllComponentsOut(){
    var sendArr = [
        {name: "ChatBox", elem: $(".fbChatSidebar")},
        {name: "LeftBox", elem: $("._1vc-")},
        {name: "RightBox", elem: $("._5nb8")}
    ];
    AnimateAllBoxComponentsOut(sendArr,function(obj){
        console.log("Here");
        console.log(obj);
        ReverseChatBox = obj.ChatBox;
        ReverseFBLeftBox = obj.LeftBox;
        ReverseFBRightBox = obj.RightBox;
    });
}

function GetEntireData(){
    setTimeout(function(){
        console.log("Starting now...");
        console.log(window.location);
        window.location.href = "https://www.facebook.com/victor.le.5/about?lst=100003645708064%3A100003645708064%3A1484644588&official";
    }, 2000);
}






new MutationObserver(function(mutations) {
    if($("body") && $("head")){
        StartCounter++;
        if(StartCounter === 1){
            doublecheck();
        }
    }
}).observe(document, {childList: true, subtree: true});


