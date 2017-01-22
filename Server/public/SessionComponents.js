///This Script will include all of the sessions

//Facebook Stock Elementa
var ReverseProfilePic;          // ==> Main Session
var ReverseCoverContainer;       // ==> Main Session
var ReverseInfoBox;             // ==> First Session
var ReversePhotoBox;            // ==>Second Session


//Session Containers
var ReverseSession1;
var ReverseSession2;
var ReverseSession3;
var ReverseSession4;




//THE SESSION STARTER
window.StartSessions = function(){ // ==> SET UP BASIC ANIMATIONS TO LAYOUT THE PAGE
    $("body").css("overflow", "hidden");
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


    //Main LOGO
    var MainLogo = $("#main-logo");
    ReverseProfilePic = TweenMax.to(MainLogo, 1 , {rotate: 720, scale: 0.2,left: "15%",top: "-27%", ease: Circ.easeOut});

    //Cover Page
    var CoverContainer = $(".fbTimelineSection.fbTimelineTopSection");
    ReverseCoverContainer = TweenMax.to(CoverContainer , 0.5 , {scale: 1.2 , left: "22%" , top: "-24.3rem", ease: Circ.easeOut});

    setTimeout(function(){ // ==>ONCE THE BASIC LAYOUT IS FINISHED , CALL THE FIRST SESSION

        // window.FirstSession();
        window.SecondSession();
        // window.FourthSession();
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






//THIS IS TO PLAY THE VIDEO
// $($($("._5pcb._4b0l")[0]).find("._4-u2")[0]).find("i._1jto").click()

//SECOND SESSION     SECOND SESSION        SECOND SESSION        SECONDSESSION       SECOND SESSION       SECOND SESSION       SECOND SESSION
//TIMELINE PAGE
window.SecondSession = function(){
    window.StartTyping("We'll now grab a couple of his recent posts");

    //SetUP         SetUP       SetUP       SetUP           SetUP       SetUP       SetUP           SetUP       SetUP
    //Grab The Container ELEMENT
    var elem = $("#Segment-Timeline");
    elem.css("display", "flex");

    //Push all of the Reverse Element Instances Into this array
    var Etc = [];
    var IndividualPosts = []; //Each post container would be push into this array

    var FirstLoad = $($("._5pcb._4b0l")[0]).find("._4-u2"); //>Consists of two posts
    var SecondLoad = $($("._5pcb._4b0l")[1]).find("._4-u2"); //>Consists of how many were loaded when scrolled. (Only grabbing 3 from here)

    //Loop through the FIRSt Load and push it to the IndividualPosts Array
    for(i = 0; i< FirstLoad.length; i++){
        IndividualPosts.push(FirstLoad[i]);
    }
    //Loop through the SECOND Load and push it to the IndividualPosts Array
    for(i = 0; i< SecondLoad.length; i++){
        IndividualPosts.push(SecondLoad[i]);
    }

    //After Getting all post and pushing it into the array. Set the Properties for each one
    for(i = 0; i < IndividualPosts.length; i++){
        $(IndividualPosts[i]).css("z-index","0");
        $(IndividualPosts[i]).css("position","absolute");
        $(IndividualPosts[i]).css("box-shadow","0 2px 4px 0 rgba(34,36,38,.12), 0 2px 10px 0 rgba(34,36,38,.15)");
    }


    console.log("From here");
    console.log(IndividualPosts);

    //Helper Function       Helper Function     Helper Function     Helper Function     Helper Function     Helper Function
    //First Param = Post that is already showing on the page to animate up
    //Second Param = New Post that will be displayed
    var DisplayPostGradually = function(oldElem){
        TweenMax.to(oldElem, 1, {right: "10%", ease: Circ.easeOut});
    };


    var AppendPictureIntoSegment = function(num, url){
        TweenMax.to($("#placeit"+num), 0.5, {scale: 0, ease: Circ.easeOut});
        setTimeout(function(){
            $("#placeit"+num).attr("src", url);
            console.log(url);
            TweenMax.to($("#placeit"+num), 0.5, {scale: 1, ease: Circ.easeOut});
        }, 700);
    }

    var CheckForUrl = function(myElem){
        console.log("made it hereee BROOOO");
        console.log($(myElem).find("img"));
        for(i = 0; i < $(myElem).find("img").length; i++){
            console.log("1 : " + $(myElem).find("img")[i].className);
            if($(myElem).find("img")[i].className === "scaledImageFitWidth img"){
                return $(myElem).find("img")[i].currentSrc
            }else if($(myElem).find("img")[i].className === "_3chq"){
                return $(myElem).find("img")[i].currentSrc
            }
            //Last iteration
            if(i === $(myElem).find("img").length - 1){
                return "https://placehold.it/150x150";
            }
        };
    }



    // img.scaledImageFitWidth.img
    // img._3chq


    //TIMER     TIMER       TIMER       TIMER      TIMER     TIMER   TIMER   TIMER   TIMER

    //Display The Segment (As a WHOLE FIRST)
    ReverseSession2 = TweenMax.from(elem, 1, {scale: 0, ease: Circ.easeOut});

    //Turn the segment into a smaller container
    setTimeout(function(){
        var ExtraReverse = TweenMax.to(elem, 1, {width: "58%", ease: Circ.easeOut});

        //Then Bring up the first Post and so for
        setTimeout(function(){
            var IndividualETC;
            //POST 1        POST 1      POST 1      POST 1      POST 1      POST 1
            var IndividualETC = TweenMax.fromTo(IndividualPosts[0], 1, {right: "145%", top: "320%", ease: Circ.easeOut}, {right:"145%", top: "88%", ease: Circ.easeOut});
            Etc.push(IndividualETC);// => Store the Reverse Instance
            setTimeout(function(){ // ==> POST 2        POST 2      POST 2      POST 2
                DisplayPostGradually(IndividualPosts[0]);//Slide it to the right
                var currentElem = IndividualPosts[0];
                AppendPictureIntoSegment("0", CheckForUrl(currentElem));
                IndividualEtc = TweenMax.fromTo(IndividualPosts[1], 1, {right: "145%", top: "320%", ease: Circ.easeOut}, {right:"145%", top: "88%", ease: Circ.easeOut});
                Etc.push(IndividualETC);
                setTimeout(function(){
                    DisplayPostGradually(IndividualPosts[1]);
                    var currentElem = IndividualPosts[1];
                    AppendPictureIntoSegment("1", CheckForUrl(currentElem));
                    IndividualETC = TweenMax.fromTo(IndividualPosts[2], 1, {right: "145%", top: "320%", ease: Circ.easeOut}, {right:"145%", top: "88%", ease: Circ.easeOut});
                    Etc.push(IndividualETC);
                    setTimeout(function(){
                        DisplayPostGradually(IndividualPosts[2]);
                        var currentElem = IndividualPosts[2];
                        AppendPictureIntoSegment("2", CheckForUrl(currentElem));
                        IndividualETC = TweenMax.fromTo(IndividualPosts[3], 1, {right: "145%", top: "320%", ease: Circ.easeOut}, {right:"145%", top: "88%", ease: Circ.easeOut});
                        Etc.push(IndividualETC);
                        setTimeout(function(){
                            DisplayPostGradually(IndividualPosts[3]);
                            var currentElem = IndividualPosts[3];
                            AppendPictureIntoSegment("3", CheckForUrl(currentElem));
                            IndividualETC = TweenMax.fromTo(IndividualPosts[4], 1, {right: "145%", top: "320%", ease: Circ.easeOut}, {right:"145%", top: "88%", ease: Circ.easeOut});
                            Etc.push(IndividualETC);
                            setTimeout(function(){
                                DisplayPostGradually(IndividualPosts[4]);
                                var currentElem = IndividualPosts[4];
                                AppendPictureIntoSegment("4", CheckForUrl(currentElem));
                                IndividualETC = TweenMax.fromTo(IndividualPosts[5], 1, {right: "145%", top: "320%", ease: Circ.easeOut}, {right:"145%", top: "88%", ease: Circ.easeOut});
                                Etc.push(IndividualETC);
                                setTimeout(function(){
                                    DisplayPostGradually(IndividualPosts[5]);
                                    var currentElem = IndividualPosts[5];
                                    AppendPictureIntoSegment("5", CheckForUrl(currentElem));
                                    TweenMax.to($("#Segment-Timeline"), 0.5, {width: "100%", ease: Circ.easeOut});
                                    setTimeout(function(){
                                        //ENDER     ENDER       ENDER       ENDER       ENDER       ENDER
                                        window.ReverseETC(Etc);
                                        window.ReverseSession(ReverseSession2, function(){ //==> Callback when reverse is finished
                                            window.ThirdSession();
                                        });
                                    },3000);
                                },1500);
                            },1500);
                        },1500);
                    },1500);
                }, 1500);
            }, 1500);
        }, 700);



    }, 1300);






};






//THIRD SESSION         THIRD SESSION           THIRD SESSION       THIRD SESSION       THIRD SESSION       THIRD SESSION       THIRD SESSION
//LIKES PAGE
window.ThirdSession = function(){
    window.StartTyping("Take the most recent things he liked!");
    //SetUP         SetUP       SetUP       SetUP           SetUP       SetUP       SetUP           SetUP       SetUP
    //Display The Segment
    var elem = $("#Segment-Likes");
    elem.css("display", "flex");



    //TIMER     TIMER       TIMER       TIMER      TIMER     TIMER   TIMER   TIMER   TIMER
    ReverseSession3 = TweenMax.from(elem, 1, {scale: 0, ease: Circ.easeOut});



    //ENDER     ENDER       ENDER       ENDER       ENDER       ENDER
    setTimeout(function(){
        window.ReverseSession(ReverseSession3, function(){ //==> Callback when reverse is finished
            window.FourthSession();
        });
    }, 3000);
};






//FOURTH SESSION        FOURTH SESSION      FOURTH SESSION      FOURTH SESSION      FOURTH SESSION          FOURTH SESSION      FOURTH SESSION
//PHOTOS PAGE
window.FourthSession = function(){
    window.StartTyping("We can't forget about the pictures!!");

    //SetUP         SetUP       SetUP       SetUP           SetUP       SetUP       SetUP           SetUP       SetUP

    //Display The Segment
    var elem = $("#Segment-Pictures");
    elem.css("display", "flex");


    //Push all of the Reverse Element Instances Into this arrayl
    var Etc = [];

    //To get the Photo Container, we need to loop through this element and find a string literal with Photos
    var PhotoBox;   // ==> This will be our Main ETC container
    var AlmostPhotoBox = $("._3-8t._2pi4");   ///==>We're going to loop through this to grab the one with the "Photo Sttring";
    var AlmostPhotoBox2;  // ==> Small work around to grab the parentElement

    //For loop to look for the string literal
    for(i = 0; i < AlmostPhotoBox.length; i++){
        if(CheckIfShared(AlmostPhotoBox[i].innerText, "Photos")){
            AlmostPhotoBox2 = AlmostPhotoBox[i];
        }
    }

    //grab The Photo Container
    var  PhotoBox = AlmostPhotoBox2.parentElement.parentElement.parentElement;
    //Apply absolute positioning on Photo Container
    $(PhotoBox).css("position", "absolute");




    //TIMER     TIMER       TIMER       TIMER      TIMER     TIMER   TIMER   TIMER   TIMER

    //Display The Segment (As a WHOLE FIRST)
    ReverseSession4 = TweenMax.from(elem, 1, {scale: 0, ease: Circ.easeOut});

    //And then scale the container to the right
    setTimeout(function(){
        TweenMax.to(elem, 1, {"width": "66%", "left": "33%", ease: Circ.easeOut});
        //And Then immediately pop open the photo booth
        setTimeout(function(){
            ReversePhotoBox = TweenMax.fromTo(PhotoBox, 0.5, {scale: 0,top: "-29.61rem", left: "265%", "z-index": "1"}, {top: "-29.61rem", left: "265%", scale: 1.27,ease: Circ.easeOut});
            Etc.push(ReversePhotoBox);

            //ENDER     ENDER       ENDER       ENDER       ENDER       ENDER
            setTimeout(function(){
                window.ReverseETC(Etc);
                window.ReverseSession(ReverseSession4, function(){ //==> Callback when reverse is finished
                    console.log("finished");
                });
            }, 6000);
        }, 750)
    }, 1500);
};





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


//Check for any string literal
var CheckIfShared = function(str, keyword){
    if(str.search(keyword) != -1){
        //Found it
        return true;
    }else{
        return false;
    }
}

//***
//***
//HELPER FUNCTION       HELPER FUNCTION     HELPER FUNCTION     HELPER FUNCTION     HELPER FUNCTION     HELPER FUNCTION
//HELPER FUNCTION       HELPER FUNCTION     HELPER FUNCTION     HELPER FUNCTION     HELPER FUNCTION     HELPER FUNCTION
//HELPER FUNCTION       HELPER FUNCTION     HELPER FUNCTION     HELPER FUNCTION     HELPER FUNCTION     HELPER FUNCTION