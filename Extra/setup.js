// ==UserScript==
// @name         Official FB SETUP
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
//@run-at        document-start
// @match        https://www.facebook.com/victor.le.5?official
// @grant        none
// ==/UserScript==

//Official Fb Setup
// Settings: Run At : Default
// Position: 8

console.log("Setting Up Functions Now...");

window.bro = function(){
    console.log("bro bro");
}

//Reverse Animation
window.ReverseElementAnimation = function(elem){
    elem.reverse();
};

window.AnimateAllBoxComponentsOut = function(elems, callback){
    console.log("Mde it to the Components");
    console.log(elems);
    var ReverseObj = {
        ChatBox: "null",
        LeftBox: "null",
        RightBox: "null"
    };
    var ReverseChatBox,
        ReverseLeftBox,
        ReverseRightBox;
    var Animate = {
        ChatBox: function(elem){// => .fbChatSidebar
            ReverseChatBox = TweenMax.to(elem, 0.5, {right: "-21%", ease: Circ.easeOut});
            var ReObj = {
                name: "ChatBox",
                elem: ReverseChatBox
            };
            return ReObj;
        },
        LeftBox: function(elem){  //=> ._1vc-
            elem.css("position","absolute");
            ReverseLeftBox = TweenMax.to(elem, 3, {left: "-100%", ease: Circ.easeOut});
            var ReObj = {
                name: "LeftBox",
                elem: ReverseLeftBox
            };
            return ReObj;
        },
        RightBox: function(elem){  //=> ._5nb8
            elem.css("position", "relative");
            ReverseRightBox = TweenMax.to(elem, 3, {left: "126%", ease: Circ.easeOut});
            var ReObj = {
                name: "RightBox",
                elem: ReverseRightBox
            };
            return ReObj;
        }
    };
    for(i = 0; i < elems.length; i++){
        var name = elems[i].name;
        var ReturnSingleReverse = Animate[name](elems[i].elem);
        ReverseObj[ReturnSingleReverse.name] = ReturnSingleReverse.elem;
        if(i === elems.length - 1){
            console.log("Last Iteration : "+ i);
            callback(ReverseObj);
        }
    }
};



