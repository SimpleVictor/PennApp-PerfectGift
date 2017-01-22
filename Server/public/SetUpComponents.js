//Let the console know everything went well...
var ExternalScript2 = "SetUpComponent.js has been loaded";

//This is where we will be appending the data into
var FullPageContainer = $("._li");

//Place the Home Status/ About Status/ And Animation Starter Button
var SetUpHomeButtons = function(){
    var strVar="";
    strVar += "";
    strVar += "<style>";
    strVar += "    #home-container{";
    strVar += "        z-index: 5;";
    strVar += "        position: absolute;";
    strVar += "        top: 7%;";
    strVar += "        left: 69.4%;";
    strVar += "        width: 16%;";
    strVar += "    }";
    strVar += "<\/style>";
    strVar += "";
    strVar += "<div class=\"ui link cards\" id=\"home-container\">";
    strVar += "    <div class=\"card\">";
    strVar += "        <div class=\"content\">";
    strVar += "            <div class=\"header\" style=\"text-align: center\">PerfectGift<\/div>";
    strVar += "            <div class=\"meta\">";
    strVar += "                <a>Friends<\/a>";
    strVar += "            <\/div>";
    strVar += "            <div class=\"description\">";
    strVar += "                Matthew is an interior designer living in New York.";
    strVar += "            <\/div>";
    strVar += "        <\/div>";
    strVar += "        <div class=\"extra content\">";
    strVar += "            <div class=\"ui two buttons\" style=\"width: 56%;\">";
    strVar += "                <div id=\"AppButtonClicked\" class=\"ui basic green button\">App<\/div>";
    strVar += "                <div class=\"ui basic red button\">Demo<\/div>";
    strVar += "            <\/div>";
    strVar += "        <\/div>";
    strVar += "    <\/div>";
    strVar += "<\/div>";

    FullPageContainer.prepend(strVar);
    SetUpLogo();
};

//Set Up Word Logo And Main logo
var SetUpLogo = function(){
    var strVar="";
    strVar += "<style>";
    strVar += "    #title-name{";
    strVar += "        font-family: 'Chewy', cursive !important;";
    strVar += "        font-weight: bolder;";
    strVar += "        font-size: 14em;";
    strVar += "        text-shadow: -5px 9px #100, 6px 8px #000, -4px -4px #000, 5px -7px #000;";
    strVar += "        color: #3B5998;";
    strVar += "        margin: 0;";
    strVar += "        position: absolute;";
    strVar += "        top: 36%;";
    strVar += "        left: 17%;";
    strVar += "        z-index: 2;";
    strVar += "        transform: scale(0);";
    strVar += "    }";
    strVar += "";
    strVar += "    .two-letter-logo{";
    strVar += "        background:transparent;";
    strVar += "        color: #FFF;";
    strVar += "    }";
    strVar += "";
    strVar += "    #main-logo{";
    strVar += "        position: absolute;";
    strVar += "        top: -3%;";
    strVar += "        z-index: 1;";
    strVar += "        \/*transform: scale(0.25);*\/";
    strVar += "        left: 45%;";
    strVar += "        transform: scale(0);";
    strVar += "    }";
    strVar += "";
    strVar += "    #startButton{";
    strVar += "        top: 69%;";
    strVar += "        position: absolute;";
    strVar += "        z-index: 3;";
    strVar += "        font-size: 3rem;";
    strVar += "        left: 41%;";
    strVar += "        background: #3b5998;";
    strVar += "        color: #FFF;";
    strVar += "        transform: scale(0);";
    strVar += "    }";
    strVar += "    .alexa-speech{";
    strVar += "        text-align: center;";
    strVar += "        \/*font-size: 46px;*\/";
    strVar += "        font-weight: bolder;";
    strVar += "        position:absolute;";
    strVar += "        width: 100%;";
    strVar += "        z-index: 1;";
    strVar += "        bottom: -3%;";
    strVar += "        color: #2bb673;";
    strVar += "        margin: 0;";
    strVar += "        font-size: 2.6rem !important;";
    strVar += "        padding-bottom: 2%;";
    strVar += "    }";
    strVar += "    .typed-cursor{";
    strVar += "       opacity: 1;";
    strVar += "       -webkit-animation: blink 0.7s infinite;";
    strVar += "       -moz-animation: blink 0.7s infinite;";
    strVar += "       animation: blink 0.7s infinite;";
    strVar += "       color: #2BB673;";
    strVar += "       font-size: 4.2rem;";
    strVar += "   }";
    strVar += "    @keyframes blink{";
    strVar += "        0% { opacity:1; }";
    strVar += "        50% { opacity:0; }";
    strVar += "        100% { opacity:1; }";
    strVar += "    }";
    strVar += "    @-webkit-keyframes blink{";
    strVar += "        0% { opacity:1; }";
    strVar += "        50% { opacity:0; }";
    strVar += "        100% { opacity:1; }";
    strVar += "    }";
    strVar += "    @-moz-keyframes blink{";
    strVar += "        0% { opacity:1; }";
    strVar += "        50% { opacity:0; }";
    strVar += "        100% { opacity:1; }";
    strVar += "    }";
    strVar += "<\/style>";
    strVar += "";
    strVar += "<!--Title-->";
    strVar += "<h1 id=\"title-name\">Perfect<span class=\"two-letter-logo\">Gift<\/span><\/h1>";
    strVar += "<!--Main Logo-->";
    strVar += "<img id=\"main-logo\" src=\"http:\/\/localhost:3000\/images\/fblogo.png\">";
    strVar += "";
    strVar += "<!--Start Button-->";
    strVar += "<button id=\"startButton\" class=\"ui button\" color=\"positive\">Start<\/button>";
    strVar += "";
    strVar += "<!--TYPED MESSAGE-->";
    strVar += "<div class=\"ui horizontal divider alexa-speech\"><span id=\"myelement\"><\/span><\/div>";



    FullPageContainer.prepend(strVar);
    SessionAbout();
}



function SessionAbout(){
    var strVar="";
    strVar += "<style>";
    strVar += "    \/*SESSION 1 ABOUT*\/";
    strVar += "    #Segment-About{";
    strVar += "        position: absolute;";
    strVar += "        z-index: 1;";
    strVar += "        top: 34%;";
    strVar += "        display: none;";
    strVar += "    }";
    strVar += "<\/style>";
    strVar += "";
    strVar += "<!--Session 1 ABOUT-->";
    strVar += "<div class=\"ui centered grid\" id=\"Segment-About\">";
    strVar += "    <div class=\"fourteen wide column\">";
    strVar += "        <div class=\"ui raised segment\" style=\"height: 30rem;\">";
    strVar += "            <div class=\"ui horizontal divider\">";
    strVar += "                <i class=\"chevron down icon\"><\/i>";
    strVar += "                About The User";
    strVar += "            <\/div>";
    strVar += "            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.<\/p>";
    strVar += "        <\/div>";
    strVar += "    <\/div>";
    strVar += "<\/div>";

    FullPageContainer.prepend(strVar);
    SessionTimeline();
}





function SessionTimeline(){
    var strVar="";
    strVar += "<style>";
    strVar += "    \/*SESSION 2 Timeline*\/";
    strVar += "    #Segment-Timeline{";
    strVar += "        top: 34%;";
    strVar += "        display: none;";
    strVar += "    }";
    strVar += "<\/style>";
    strVar += "";
    strVar += "<!--Session 2 TIMELINE-->";
    strVar += "<div class=\"ui centered grid\" id=\"Segment-Timeline\">";
    strVar += "    <div class=\"fourteen wide column\">";
    strVar += "        <div class=\"ui raised segment\">";
    strVar += "            <div class=\"ui horizontal divider\">";
    strVar += "                <i class=\"chevron down icon\"><\/i>";
    strVar += "                Recent Posts";
    strVar += "            <\/div>";
    strVar += "            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.<\/p>";
    strVar += "        <\/div>";
    strVar += "    <\/div>";
    strVar += "<\/div>";


    FullPageContainer.prepend(strVar);
    SessionLikes();
}





function SessionLikes(){
    var strVar="";
    strVar += "";
    strVar += "<style>";
    strVar += "    \/*SESSION 3 Likes*\/";
    strVar += "    #Segment-Likes{";
    strVar += "        top: 34%;";
    strVar += "        display: none;";
    strVar += "    }";
    strVar += "<\/style>";
    strVar += "";
    strVar += "<!--Session 3 LIKES-->";
    strVar += "<div class=\"ui centered grid\" id=\"Segment-Likes\">";
    strVar += "    <div class=\"fourteen wide column\">";
    strVar += "        <div class=\"ui raised segment\">";
    strVar += "            <div class=\"ui horizontal divider\">";
    strVar += "                <i class=\"chevron down icon\"><\/i>";
    strVar += "                Recent Posts";
    strVar += "            <\/div>";
    strVar += "            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.<\/p>";
    strVar += "        <\/div>";
    strVar += "    <\/div>";
    strVar += "<\/div>";


    FullPageContainer.prepend(strVar);
    SessionPictures();
}






function SessionPictures(){
    var strVar="";
    strVar += "<style>";
    strVar += "    \/*SESSION 4 Pictures*\/";
    strVar += "    #Segment-Pictures{";
    strVar += "        top: 34%;";
    strVar += "        display: none";
    strVar += "    }";
    strVar += "<\/style>";
    strVar += "";
    strVar += "<!--Session 4 Pictures-->";
    strVar += "<div class=\"ui centered grid\" id=\"Segment-Pictures\">";
    strVar += "    <div class=\"fourteen wide column\">";
    strVar += "        <div class=\"ui raised segment\">";
    strVar += "            <div class=\"ui horizontal divider\">";
    strVar += "                <i class=\"chevron down icon\"><\/i>";
    strVar += "                Recent Posts";
    strVar += "            <\/div>";
    strVar += "            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.<\/p>";
    strVar += "        <\/div>";
    strVar += "    <\/div>";
    strVar += "<\/div>";

    FullPageContainer.prepend(strVar);
    SetUpButtonFunctions();
}


var SetUpButtonFunctions = function(){
    setTimeout(function(){
        $( "#AppButtonClicked" ).on("click", function(){
            window.AppButtonClicked();
        });

        $("#startButton").on("click", function(){
           window.StartSessions();
        });

    }, 1000);
};





















