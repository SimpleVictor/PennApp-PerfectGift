
var ExternalScript1 = "AnimationFunctions.js has been loaded";

//Reverse Animation by passing in an element
var ReverseElementAnimation = function(elem){
    elem.reverse();
};

//Function will be called from Main.js file after the App button was clicked
var StartAnimateHomePage = function(elems, callback){
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
        setTimeout(function(){
            var ReverseCoverPageContainer = TweenMax.to(CoverPageContainer[0], 2, {scale: 0.8, left: "22%", top: "-122px", ease: Circ.easeOut});
            thirdAnimation(ReverseObj, callback);
        },1500);
}

//Bring up the Logos
function thirdAnimation(ReverseObj, callback){
    setTimeout(function(){
        window.ReverseTitle = TweenMax.to($("#title-name"), 1, {scale: 1, ease: Circ.easeOut});
        $("#main-logo").css("display", "block");
        window.ReverseLogo = TweenMax.to($("#main-logo"), 1, {scale: 0.4, ease: Circ.easeOut});
        window.ReverseStartButton = TweenMax.to($("#startButton"), 1, {scale: 1, ease: Circ.easeOut});
    }, 1000);
    callback(ReverseObj);
}





