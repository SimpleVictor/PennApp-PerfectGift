// ==UserScript==
// @name         Official Fb Hack
// @namespace    http://tampermonkey.net/
// @version      0.1
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @require      https://www.gstatic.com/firebasejs/3.6.3/firebase.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.js
// @require      http://localhost:3000/AnimationFunctions.js?sdfsd
// @require      http://localhost:3000/ProfileSearch.js?sddsd
// @require      http://localhost:3000/SetUpComponents.js?sdds
// @description  try to take over the world!
// @author       You
// @run-at        document-start
// @match        https://www.facebook.com/phong.lai
// @grant        unsafeWindow
// @connect      *
// @grant        GM_log
// @grant        GM_xmlhttpRequest
// ==/UserScript==



//Official Fb Hack
// Settings: Run At : document-end
// Position: 10



//Maker sure all external scripts were loaded
console.log(ExternalScript1);
console.log(ExternalScript2);

//Debugging jquery.
var $$;

//Used for MutationObserver To check at the start of every script
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

function doublecheck(){
    $( document ).ready(function() {
        $$ = $; // ==>Debug purposes for the console on Chrome
        if(!typeof(TweenMax) === "undefined"){ // ==> Check if we have Tweenmax first
            TweenMax.ticker.useRAF(false);
        }
        AddExternalCssFiles();
        SetUpGlobalVariables(); //==>Setup Environment
    });
}

function SetUpGlobalVariables(){

    ChatBox = $(".fbChatSidebar");
    FBLeftBox = $("._1vc-");
    FBRightBox = $("._5nb8");

    //This is our callback when we start searching
    var wordCheck = function(obj){
        console.log("This is the callback function from the main script");
        console.log(obj);
        var newObj = JSON.stringify(obj);
        //Send All The Object to the backend!
        GM_xmlhttpRequest({
            method: "POST",
            data: newObj,
            headers: {"Content-Type": "application/json;charset=UTF-8"},
            json: true,
            url: "http://localhost:3000/users/object",
            onload: function(response) {
                GM_log(response);
            }, onerror: function(res) {
                GM_log(res);
            }
        });
    }

    // AnimateAllComponentsOut();  // => Animate all the main components away
    // GrabDataFromAboutPage(); // => Function to navigate to the about's page
    // StartSearching(wordCheck);
    SetUpHomeButtons();

}

function SetUpStartingButton(){

}
//
function AnimateAllComponentsOut(){
    var sendArr = [
        {name: "ChatBox", elem: $(".fbChatSidebar")},
        {name: "LeftBox", elem: $("._1vc-")},
        {name: "RightBox", elem: $("._5nb8")}
    ];
    AnimateAllBoxComponentsOut(sendArr,function(obj){   // ==> Calls The AnimateFunction.js ( AnimateAllBoxComponentsOut function )
        ReverseChatBox = obj.ChatBox;
        ReverseFBLeftBox = obj.LeftBox;
        ReverseFBRightBox = obj.RightBox;
    });
}

//GoToAboutPage
function GrabDataFromAboutPage(){
    setTimeout(function(){
        console.log("Starting now...");
        console.log(window.location);
        window.location.href = "https://www.facebook.com/victor.le.5/about?lst=100003645708064%3A100003645708064%3A1484644588&official";
    }, 2000);
}

//Add External CSS to the page
function AddExternalCssFiles(){
    //Fix up any css orignally that got messed from adding an external css file
    var FixUpCssCauseOfExternalFiles = function(){
        $("._19eb").css("padding", "9px");
    }
    //Add Semantic CSS
    $('head').prepend('<style>*, :after, :before {box-sizing: initial !important;}</style><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.css" type="text/css" />');
    FixUpCssCauseOfExternalFiles();
}

//This is here to make sure everything is loaded first before doing anything
new MutationObserver(function(mutations) {
    if($("body") && $("head")){
        StartCounter++;
        if(StartCounter === 1){
            doublecheck();
        }
    }
}).observe(document, {childList: true, subtree: true});


