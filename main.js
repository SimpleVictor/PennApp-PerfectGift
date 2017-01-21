// ==UserScript==
// @name         Official Fb Hack
// @namespace    http://tampermonkey.net/
// @version      0.1
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @require      https://www.gstatic.com/firebasejs/3.6.3/firebase.js
// @require      http://localhost:3000/AnimationFunctions.js?sdf
// @description  try to take over the world!
// @author       You
//@run-at        document-start
// @match        https://www.facebook.com/victor.le.5?official
// @grant        unsafeWindow
// @grant        GM_log
// ==/UserScript==

//Official Fb Hack
// Settings: Run At : document-end
// Position: 10

console.log(ExternalScript1);


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

console.log(firebase);

function tryCallme(){
    console.log("bang bang");
}

function doublecheck(){
    $( document ).ready(function() {
        SetUpGlobalVariables();
    });
}

function SetUpGlobalVariables(){

    ChatBox = $(".fbChatSidebar");
    FBLeftBox = $("._1vc-");
    FBRightBox = $("._5nb8");
    setTimeout(function(){
        AnimateAllComponentsOut();
    }, 2000);
}

function SetUpStartingButton(){

}

function AnimateAllComponentsOut(){
    var sendArr =[
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






new MutationObserver(function(mutations) {
    if($("body") && $("head")){
        StartCounter++;
        if(StartCounter === 1){
            doublecheck();
        }
    }
}).observe(document, {childList: true, subtree: true});


