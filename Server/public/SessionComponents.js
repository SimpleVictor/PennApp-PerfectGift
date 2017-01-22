///This Script will include all of the sessions

var ReverseProfilePic;
var ReverseCoverContainer;

var ReverseSession1;
var ReverseSession2;
var ReverseSession3;

var ReverseInfoBox;

//TYPINGSESSION
window.StartSessions = function(){
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

    setTimeout(function(){
        window.FirstSession();
    }, 3500);
}

//ABOUT PAGE
window.FirstSession = function(){
    window.StartTyping("Let's grab some basic information");

    //Display The Segment
    var elem = $("#Segment-About");
    elem.css("display", "flex");
    ReverseSession1 = TweenMax.from(elem, 0.5, {scale: 0, ease: Circ.easeOut});

    //Display The FacebookInfoBox
    var Infobox = $("#intro_container_id");
    Infobox.css("position", "absolute");
    Infobox.css("z-index", "5");
    Infobox.css("border", "5px solid #ccc");
    ReverseInfoBox = TweenMax.fromTo(Infobox, 0.5, {scale: 0, top:"13rem", left:"63rem",ease: Circ.easeOut}, {scale: 0.7 , top:"13rem", left:"63rem", ease: Circ.easeOut});


}

//STARTING TYPING ANIMATION
window.StartTyping = function(newMessage){
    $('#myelement').typed('reset');
    this.checkMe = $('#myelement').typed({
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
}