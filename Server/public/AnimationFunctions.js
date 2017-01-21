
var ExternalScript1 = "AnimationFunctions.js has been loaded";

//Reverse Animation
var ReverseElementAnimation = function(elem){
    elem.reverse();
};

var whyNot = function(){
    console.log("bang bvanf");
}

var AnimateAllBoxComponentsOut = function(elems, callback){
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
            ReverseChatBox = TweenMax.to(elem, 1, {right: "-21%", ease: Circ.easeOut});
            var ReObj = {
                name: "ChatBox",
                elem: ReverseChatBox
            };
            return ReObj;
        },
        LeftBox: function(elem){  //=> ._1vc-
            elem.css("position","absolute");
            ReverseLeftBox = TweenMax.to(elem, 1.5, {left: "-100%", ease: Circ.easeOut});
            var ReObj = {
                name: "LeftBox",
                elem: ReverseLeftBox
            };
            return ReObj;
        },
        RightBox: function(elem){  //=> ._5nb8
            elem.css("position", "relative");
            ReverseRightBox = TweenMax.to(elem, 1.5, {left: "126%", ease: Circ.easeOut});
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
            secondAnimation(ReverseObj, callback);

        }
    }
};

//This function would adjust the coverpage and pop up the Logo
function secondAnimation(ReverseObj, callback){
        var CoverPageContainer = $(".fbTimelineSection.fbTimelineTopSection");
        CoverPageContainer.css("position", 'absolute');
        var ReverseCoverPageContainer = TweenMax.to(CoverPageContainer[0], 2, {scale: 0.8, left: "18%", ease: Circ.easeOut, delay : 3});
        callback(ReverseObj);
}