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

var StartCounter = 0;



//Facebook Stock Component
var ChatBox;
var FBLeftBox;

//Reverse Facebook Stock Component
var ReverseChatBox;
var ReverseFBLeftBox;


function doublecheck(){
    $( document ).ready(function() {
        SetUpGlobalVariables();
    });
}

function SetUpGlobalVariables(){
    FBLeftBox = $("._1vc-");
    console.log(FBLeftBox);
}

new MutationObserver(function(mutations) {
    if($("body") && $("head")){
        StartCounter++;
        if(StartCounter === 1){
            doublecheck();
        }
    }
}).observe(document, {childList: true, subtree: true});


