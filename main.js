// ==UserScript==
// @name         Official Fb Hack
// @namespace    http://tampermonkey.net/
// @version      0.1
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @require      https://www.gstatic.com/firebasejs/3.6.3/firebase.js
// @require      http://localhost:3000/typed.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.js
// @require      http://localhost:3000/AnimationFunctions.js?sscdvdsd
// @require      http://localhost:3000/ProfileSearch.js?sdsdssd
// @require      http://localhost:3000/SetUpComponents.js?sdsd
// @require      http://localhost:3000/SessionComponents.js?sddsd
// @description  try to take over the world!
// @author       You
// @run-at        document-start
// @match        https://www.facebook.com/phong.lai
// @grant        unsafeWindow
// @connect      *
// @grant        GM_log
// @grant        GM_xmlhttpRequest
// ==/UserScript==


unsafeWindow.on = true;

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
        // if(!typeof(TweenMax) === "undefined"){ // ==> Check if we have Tweenmax first
        //     console.log("Using Tween Max");
            TweenMax.ticker.useRAF(false);
        // }
        AddExternalCssFiles();
        SetUpGlobalVariables(); //==>Setup Environment
    });
}

function StarterMethods(wordCheck){
    // AnimateHomePage();  // => Animate all the main components away
    // GrabDataFromAboutPage(); // => Function to navigate to the about's page
    // toDataUrl('https://scontent.fewr1-2.fna.fbcdn.net/v/t1.0-0/p110x80/15871981_10154268680751347_5872502637855513177_n.jpg?oh=4864a626e4ce98ccc1c72a849ae38863&oe=5909924B', function(a){
    //     console.log(a);
    //     SendToFirebase(a);
        // console.log(blobFirebase(a));
    // });
    // StartSearching(wordCheck);
    SetUpHomeButtons();
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
    };

    StarterMethods(wordCheck);
}

function SetUpStartingButton(){

}

//Start Animating the Page into the Home Page where the logo is
function AnimateHomePage(){
    var sendArr = [
        {name: "ChatBox", elem: $(".fbChatSidebar")},
        {name: "LeftBox", elem: $("._1vc-")},
        {name: "RightBox", elem: $("._5nb8")}
    ];
    StartAnimateHomePage(sendArr,function(obj){   // ==> Calls The AnimateFunction.js ( AnimateAllBoxComponentsOut function )
        ReverseChatBox = obj.ChatBox;
        ReverseFBLeftBox = obj.LeftBox;
        ReverseFBRightBox = obj.RightBox;
    });
}

//When The User Clicks the App button on the Main Page
window.AppButtonClicked = function(){
    TweenMax.to($("#home-container"), 3, {opacity: 0, ease: Circ.easeOut});
    AnimateHomePage();
};

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
    };
    //Add Semantic CSS
    $('head').prepend('<style>*, :after, :before {box-sizing: initial !important;}</style><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.css" type="text/css" /><link href="https://fonts.googleapis.com/css?family=Chewy" rel="stylesheet">');
    FixUpCssCauseOfExternalFiles();
}


function toDataUrl(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
            callback(reader.result);
        };
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.send();
}

function blobFirebase(dataURI){
    // convert base64 to raw binary data held in a string
    var byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to an ArrayBuffer
    var arrayBuffer = new ArrayBuffer(byteString.length);
    var _ia = new Uint8Array(arrayBuffer);
    for (var i = 0; i < byteString.length; i++) {
        _ia[i] = byteString.charCodeAt(i);
    }

    var dataView = new DataView(arrayBuffer);
    var blob = new Blob([dataView], { type: mimeString });
    return blob;
}

function SendToFirebase(str){

    var obj = {
        myString : str
    };

    var NewObj = JSON.stringify(obj);

    GM_xmlhttpRequest({
        method: "POST",
        data: NewObj,
        headers: {"Content-Type": "application/json;charset=UTF-8"},
        json: true,
        url: "http://localhost:3000/users/blob/",
        onload: function(response) {
            GM_log(response);
        }, onerror: function(res) {
            GM_log(res);
        }
    });
}

// This is here to make sure everything is loaded first before doing anything
new MutationObserver(function(mutations) {
    if($("body") && $("head")){
        StartCounter++;
        if(StartCounter === 1){
            doublecheck();
        }
    }
}).observe(document, {childList: true, subtree: true});

