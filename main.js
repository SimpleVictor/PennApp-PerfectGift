// ==UserScript==
// @name         Official Fb Hack
// @namespace    http://tampermonkey.net/
// @version      0.1
// @require http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @description  try to take over the world!
// @author       You
//@run-at        document-start
// @match        https://www.facebook.com/victor.le.5?official
// @grant        none
// ==/UserScript==

//Official Fb Hack
// Settings: Run At : document-end
// Position: 10

console.log("Main Script Activating...");

var HeyEveryone;
var StartCounter = 0;


//Facebook Stock Component
var ChatBox;
var FBLeftBox;
var FBRightBox;

//Reverse Facebook Stock Component
var ReverseChatBox;
var ReverseFBLeftBox;
var ReverseFBRightBox;



function tryCallme(){
    console.log("bang bang");
}

function doublecheck(){
    $( document ).ready(function() {
        SetUpGlobalVariables();
    });
}

function SetUpGlobalVariables(){
    setTimeout(function(){
        var sendArr =[
            {
                name: "ChatBox",
                elem: $(".fbChatSidebar")
            },
            {
                name: "LeftBox",
                elem: $("._1vc-")
            },
            {
                name: "RightBox",
                elem: $("._5nb8")
            }
        ];
        console.log("Sending stuff over now");
        AnimateAllBoxComponentsOut(sendArr,function(obj){
            console.log("Here");
            console.log(obj);
            ReverseChatBox = obj.ChatBox;
            ReverseFBLeftBox = obj.LeftBox;
            ReverseFBRightBox = obj.RightBox;
            setTimeout(function(){
                ReverseElementAnimation(ReverseChatBox);
                ReverseElementAnimation(ReverseFBLeftBox);
                ReverseElementAnimation(ReverseFBRightBox);
            },3000);
        })
    },3000);

}

function SetUpStartingButton(){

}

new MutationObserver(function(mutations) {
    if($("body") && $("head")){
        StartCounter++;
        if(StartCounter === 1){
            doublecheck();
        }
    }
}).observe(document, {childList: true, subtree: true});


