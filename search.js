// ==UserScript==
// @name         Official Search Manual
// @namespace    http://tampermonkey.net/
// @version      0.1
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @require      https://www.gstatic.com/firebasejs/3.6.3/firebase.js
// @require      http://localhost:3000/SearchManual.js?ds
// @description  try to take over the world!
// @author       You
//@run-at        document-end
// @match        https://www.facebook.com/phong.lai/about?lst=100003645708064%3A653241346%3A1484650662
// @grant        unsafeWindow
// @grant        GM_log
// ==/UserScript==


// Official Search Manual FB
// Settings: Run At : document-end
// Position: 10




console.log("Search Script has been added");

var $$;
var SearchCounter = 0;

var MainObject;

$( document ).ready(function() {
    $$ = $;
    console.log($("#fb-timeline-cover-name")[0].innerHTML);

    function ScrollDown(){
        $("html, body").animate({ scrollTop: $(document).height() }, 100);
        setTimeout(function(){
            if(!$('#medley_header_app_soundcloud').length){
                // ScrollDown();
            }else {
                console.log("Scrolling Back Up Now...");
                $("html, body").animate({scrollTop: 0}, 1000, function () {
                    ItsDone();
                });
            };
        }, 1000);
    }
    ScrollDown();
});

function ItsDone(){
    SearchCounter++;
    if(SearchCounter === 1){
        StartSearching();
    }
}

