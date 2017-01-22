///This Script will include all of the sessions

//Facebook Stock Elementa
var ReverseInfoBox;
var ReverseProfilePic;
var ReverseCoverContainer;

//Session Containers
var ReverseSession1;
var ReverseSession2;
var ReverseSession3;
var ReverseSession4;






//THE SESSION STARTER
window.StartSessions = function(){ // ==> SET UP BASIC ANIMATIONS TO LAYOUT THE PAGE
    console.log("Starting Session Now.....");
    window.StartTyping("Let's get something dope for him");

    //MAIN LOGOS AND TEXT
    window.ReverseLogo.reverse();
    window.ReverseStartButton.reverse();
    TweenMax.to($("#title-name"), 1, {scale: 0.6, left: "24%", top: "10%"});

    //Profile Picture
    var ProfilePic = $(".profilePicThumb");
    ProfilePic.css("position", "absolute");
    ReverseProfilePic = TweenMax.to(ProfilePic , 0.5 , {left: "-21%",top: "10%", ease: Circ.easeOut});

    //Cover Page
    var CoverContainer = $(".fbTimelineSection.fbTimelineTopSection");
    ReverseCoverContainer = TweenMax.to(CoverContainer , 0.5 , {scale: 1.2 , left: "22%" , top: "-24.3rem", ease: Circ.easeOut});

    setTimeout(function(){ // ==>ONCE THE BASIC LAYOUT IS FINISHED , CALL THE FIRST SESSION

        window.FirstSession();
    }, 3500);
};






//FIRST SESSION     FIRST SESSION       FIRST SESSION       FIRST SESSION       FIRST SESSION       FIRST SESSION       FIRST SESSION
//ABOUT PAGE
window.FirstSession = function(){
    window.StartTyping("Let's grab some basic information");

    //Push all of the Reverse Element Instances Into this arrayl
    var Etc = [];

    //Display The Segment
    var elem = $("#Segment-About");
    elem.css("display", "flex");
    ReverseSession1 = TweenMax.from(elem, 1, {scale: 0, ease: Circ.easeOut});

    //Display The FacebookInfoBox
    var Infobox = $("#intro_container_id");
    Infobox.css("position", "absolute");
    Infobox.css("z-index", "5");
    Infobox.css("border", "5px solid #ccc");
    ReverseInfoBox = TweenMax.fromTo(Infobox, 0.5, {scale: 0, top:"13rem", left:"63rem",ease: Circ.easeOut}, {scale: 0.7 , top:"13rem", left:"63rem", ease: Circ.easeOut});

    Etc.push(ReverseInfoBox);

    //This timeout won't be here
    //It depends when the animation is finished here that we can move on
    setTimeout(function(){
        window.ReverseETC(Etc);
        window.ReverseSession(ReverseSession1, function(){ //==> Callback when reverse is finished
            window.SecondSession();
        });
    }, 3000);

};








//SECOND SESSION     SECOND SESSION        SECOND SESSION        SECONDSESSION       SECOND SESSION       SECOND SESSION       SECOND SESSION
//TIMELINE PAGE
window.SecondSession = function(){

    //Display The Segment
    var elem = $("#Segment-Timeline");
    elem.css("display", "flex");
    ReverseSession2 = TweenMax.from(elem, 1, {scale: 0, ease: Circ.easeOut});

    setTimeout(function(){
        window.ReverseSession(ReverseSession2, function(){ //==> Callback when reverse is finished
            window.ThirdSession();
        });
    }, 3000);
};






//THIRD SESSION         THIRD SESSION           THIRD SESSION       THIRD SESSION       THIRD SESSION       THIRD SESSION       THIRD SESSION
//LIKES PAGE
window.ThirdSession = function(){

    //Display The Segment
    var elem = $("#Segment-Likes");
    elem.css("display", "flex");
    ReverseSession3 = TweenMax.from(elem, 1, {scale: 0, ease: Circ.easeOut});

    setTimeout(function(){
        window.ReverseSession(ReverseSession3, function(){ //==> Callback when reverse is finished
            window.FourthSession();
        });
    }, 3000);
};






//FOURTH SESSION        FOURTH SESSION      FOURTH SESSION      FOURTH SESSION      FOURTH SESSION          FOURTH SESSION      FOURTH SESSION
//PHOTOS PAGE
window.FourthSession = function(){

    //Display The Segment
    var elem = $("#Segment-Pictures");
    elem.css("display", "flex");
    ReverseSession4 = TweenMax.from(elem, 1, {scale: 0, ease: Circ.easeOut});

    setTimeout(function(){
        window.ReverseSession(ReverseSession4, function(){ //==> Callback when reverse is finished
            console.log("Finished");
        });
    }, 3000);
};








// //
// //TIMELINE PAGE
// window. = function(){
//
//
//     setTimeout(function(){
//         window.();
//     }, 3000);
// }





//HELPER FUNCTION       HELPER FUNCTION     HELPER FUNCTION     HELPER FUNCTION     HELPER FUNCTION     HELPER FUNCTION
//HELPER FUNCTION       HELPER FUNCTION     HELPER FUNCTION     HELPER FUNCTION     HELPER FUNCTION     HELPER FUNCTION
//HELPER FUNCTION       HELPER FUNCTION     HELPER FUNCTION     HELPER FUNCTION     HELPER FUNCTION     HELPER FUNCTION
//***
//***


//STARTING TYPING ANIMATION
window.StartTyping = function(newMessage){
    $('#myelement').typed('reset');
    var checkMe = $('#myelement').typed({
        strings: [newMessage+ ""],
        typeSpeed: 5,
        startDelay: 200,
        backDelay: 1000000,
        callback: function() {
            // $('#myelement').typed('reset');
        }
        // loop: true,
        // showCursor: true,
        // cursorChar: `<span style="color: blue">|</span>`
    });
};

//Reverse a Session container.
//**ONLY FOR SESSION ELEMENTS
window.ReverseSession = function(session, callback){
    session.reverse();
    setTimeout(function(){
        callback();
    }, 1000);
};


//Anything that needs to be reverse that isn't a Session Container
window.ReverseETC = function(elems){
    for(i = 0; i < elems.length; i++){ //==> Loop through each ETC elements and reverse them
        elems[i].reverse();
    }
};

//***
//***
//HELPER FUNCTION       HELPER FUNCTION     HELPER FUNCTION     HELPER FUNCTION     HELPER FUNCTION     HELPER FUNCTION
//HELPER FUNCTION       HELPER FUNCTION     HELPER FUNCTION     HELPER FUNCTION     HELPER FUNCTION     HELPER FUNCTION
//HELPER FUNCTION       HELPER FUNCTION     HELPER FUNCTION     HELPER FUNCTION     HELPER FUNCTION     HELPER FUNCTION