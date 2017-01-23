// ==UserScript==
// @name         IFRAmes Iframe Likes
// @namespace    http://tampermonkey.net/
// @version      0.1
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @require      http://localhost:3000/typed.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.js
// @description  try to take over the world!
// @author       You
// @run-at        document-start
// @match        https://www.facebook.com/search/653241346/pages-liked
// @grant        unsafeWindow
// @connect      *
// @grant        GM_log
// @grant        GM_xmlhttpRequest
// ==/UserScript==

unsafeWindow.on = true;

//Official Iframe Likes
// Settings: Run At : document-end
// Position: 10

var StartCounter = 0;

window.UsersID = "";


function doublecheck(){
    $( document ).ready(function() {
        $$ = $; // ==>Debug purposes for the console on Chrome
        // if(!typeof(TweenMax) === "undefined"){ // ==> Check if we have Tweenmax first
        //     console.log("Using Tween Max");
        TweenMax.ticker.useRAF(false);
        // }
        console.log("Removing extra components now...");


        RemoveComponents();

    });
}


var RemoveComponents = function(){

    $("#leftCol").remove();
    $("#rightCol").remove();
    $("#pagelet_sidebar").remove();
    $("._55fl").remove()


    $("#globalContainer").css("margin", "0");
    $("#globalContainer").css("padding-right", "0");
    $("#globalContainer").css("text-align", "center");
    $("#globalContainer").css("width", "100%");

    $("#contentCol").css("margin", "0");
    $("#contentArea").css("width", "100%");


    console.log("Sucessful");
};

// This is here to make sure everything is loaded first before doing anything
new MutationObserver(function(mutations) {
    if($("body") && $("head")){
        StartCounter++;
        if(StartCounter === 1){
            doublecheck();
        }
    }
}).observe(document, {childList: true, subtree: true});

