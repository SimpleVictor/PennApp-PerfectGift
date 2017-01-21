//REMINDERS     REMINDERS       REMINDERS       REMINDERS       REMINDERS       REMINDERS//

//GrabBasicInfo//
// 1. Get rid of the breaks inside the string
// 2. Split the string up before or after the string "at"

//GrabUsersRecentPost//
// 1.  $$("._1dwg._1w_m._2ph_")[0].children[2]   // ==> Use this instead of the other OriginalString
//

//REMINDERS     REMINDERS       REMINDERS       REMINDERS       REMINDERS       REMINDERS//



var ProfileObject = {};
var SearchingFinished = {
    BasicInfo: false,
    RecentPosts: false
};


var StartSearching = function(callback){
    //WHEN EVERYTHING IS DONE
    function CheckIfDone(){
        if(SearchingFinished.BasicInfo === true && SearchingFinished.RecentPosts === true){
            console.log("FINISHED...");
            console.log(ProfileObject);
            callback();
        }
    }
    //Have each function callback the Checker Function when it's done
    GrabBasicInfo(CheckIfDone);
    GrabUsersRecentPost(CheckIfDone);

};


//Grabs your basic Info
var GrabBasicInfo = function(callback){


    //Variables for each Basic Info Icon
    var OverallString = "._2m_3._3-91._8o._8s.lfloat._ohe.img.sp_JCe37g3qSzR";
    var WorkIcon = ".sx_e71569";
    var CollegeIcon = ".sx_bf593f";
    var AddressIcon = ".sx_b52f34";
    var RelationshipIcon = ".sx_f53be5";


    //Atm this was used only for the Work Object. Because we want the users to have multiple jobs
    function SplitUpArray(elem){
        var ElemArr = [];
        for(i = 0; i < elem.length; i++){
            var obj = {
                position: elem[i].offsetParent.innerText,
                company: elem[i].offsetParent.innerText
            };
            ElemArr.push(obj);
        }
        return ElemArr;
    }

    //Condition statement is stated to realize there are a list of thingsd to grab
    if($("._2m_3._3-91._8o._8s.lfloat._ohe.img.sp_JCe37g3qSzR").length >= 1){
        var obj = {
            work: $(OverallString + WorkIcon).length >= 1 ? SplitUpArray($(OverallString + WorkIcon)) : "Did not state any jobs",
            college: $(OverallString + CollegeIcon).length >= 1 ?  $(OverallString + CollegeIcon)[0].offsetParent.innerText : "Did not state any college",
            address: $(OverallString + AddressIcon).length >= 1 ?  $(OverallString + AddressIcon)[0].offsetParent.innerText : "Did not state a location",
            relationship: $(OverallString + RelationshipIcon).length >= 1 ?  $(OverallString + RelationshipIcon)[0].offsetParent.innerText : "Is not in a relationship"
        }
        ProfileObject.basic_info = obj;
    }
    //Change the value to true to tell the whole script that this section is completed.
    //Used to have a callback to the main script
    SearchingFinished.BasicInfo = true;
    callback();
};

var GrabUsersRecentPost= function(callback){

    //Variables for each important objects in this function
    var OverallPostStrings = ".userContentWrapper._5pcr";
    var VideoString        = " ._5mly._45oh";
    var PictureString      = " ._4-eo._2t9n._50z9";

    //Scroll down to atleast 5 Post
    $("html, body").animate({ scrollTop: $(document).height() }, 100);

    //Function to be called if we don't have enough yet
    var StartChecking = function(){
        setTimeout(function(){
            if($(OverallPostStrings).length >= 5){
                console.log("We now have 5 post or more...");
                SplitUpPictureVideo($(OverallPostStrings)); // ==> Once we get > 5. Split it up. Depends if it's a video or a post
            }else{
                StartChecking(); // ==> If it doesn't have 5 yet. Call the funciton again and scroll some more...
            }
        }, 100);
    };


    var SplitUpPictureVideo = function(elems){

        var video = [];
        var picture = [];

        var ReplaceSpaceWithPeriod = function(str){
            var periodStr = ".";
            return periodStr.concat(str.replace(/ /g, '.'));
        }

        for(i = 0; i < elems.length; i++){

        }

        var SplitUpVideo = function(videoElems){
            var videoArr = [];
            for(i = 0; i < videoElems.length; i++){
                var obj = {
                    desc: $(ReplaceSpaceWithPeriod(videoElems[i].className) + " ._5x46"),
                    full_elem: videoElems[i]
                };
                videoArr.push(obj);
            }
            return videoArr;
        }
        var SplitUpPicture = function(picElems){
            var picArr = [];
            for(i = 0; i < picElems.length; i++){
                var obj = {
                    desc: $(ReplaceSpaceWithPeriod(picElems[i].className) + " ._5x46"),
                    full_elem: picElems[i]
                }
                picArr.push(picElems[i]);
            }
            return picArr;
        }

        var obj = {
            video_post: SplitUpVideo($(OverallPostStrings)) ? SplitUpVideo($(OverallPostStrings + VideoString)) : "There wasn't any video in any of the post",
            normal_post: SplitUpPicture($(OverallPostStrings + PictureString)) ? SplitUpPicture($(OverallPostStrings + PictureString)) : "There wasn't any video in any of the post"
        };

        ProfileObject.recent_post = obj;
        SearchingFinished.RecentPosts = true;
        callback()
    };

    StartChecking(); // => Call if the Array doesn't come out to more than 5 Length


}

var GrabUsersPhoto = function(){

}

var GrabInstagramPhoto = function(){

}
