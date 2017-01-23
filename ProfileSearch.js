//REMINDERS     REMINDERS       REMINDERS       REMINDERS       REMINDERS       REMINDERS//

//GrabBasicInfo//
// 1. Get rid of the breaks inside the string
// 2. Split the string up before or after the string "at"

//GrabUsersRecentPost//
// 1.  $$("._1dwg._1w_m._2ph_")[0].children[2]   // ==> Use this instead of the other OriginalString
//

//REMINDERS     REMINDERS       REMINDERS       REMINDERS       REMINDERS       REMINDERS//

var ProfileObject = {
    basic_info: []
};
var SearchingFinished = {
    BasicInfo: false,
    RecentPosts: false,
    UsersPhoto: false,
    newGrabPost: false
};

var StartSearching = function(callback){

    //WHEN EVERYTHING IS DONE
    function CheckIfDone(){
        if(SearchingFinished.BasicInfo === true && SearchingFinished.newGrabPost === true && SearchingFinished.UsersPhoto === true){
            console.log("FINISHED...");
            callback(ProfileObject);
        }
    }
    //Have each function callback the Checker Function when it's done
    GrabBasicInfo(CheckIfDone);
    // GrabUsersRecentPost(CheckIfDone);
    newGrabPost(CheckIfDone);
    GrabUsersPhoto(CheckIfDone);
};


//Grabs your basic Info
var GrabBasicInfo = function(callback){
    //Variables for each Basic Info Icon
    var NewWay = $($("#intro_container_id")[0]).find("._50f3");

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

    //Loop through each one and grab the innerText
    for(i = 0; i < NewWay.length; i++){
        var inText = NewWay[i].innerText;
        ProfileObject.basic_info.push(inText);
    }

    //Change the value to true to tell the whole script that this section is completed.
    //Used to have a callback to the main script
    console.log(ProfileObject.basic_info);
    SearchingFinished.BasicInfo = true;
    callback();
};



//Grab Top 5 Post from users
var GrabUsersRecentPost= function(callback){



    //Variables for each important objects in this function
    var OverallPostStrings  = ".userContentWrapper._5pcr";
    var OverallPostStrings2 = "._1dwg._1w_m._2ph_";
    var VideoString         = " ._5mly._45oh";
    var PictureString       = " ._4-eo._2t9n._50z9";


    //Once we get more than 5 post. Past them into this function
    var SplitUpPictureVideo = function(elems){
        var video = [];
        var picture = [];

        var ReplaceSpaceWithPeriod = function(str){
            var periodStr = ".";
            return periodStr.concat(str.replace(/ /g, '.'));
        }

        //Split the 5 post out depending if it's a picture or a video

        var PhotoElement = $(".uiScaledImageContainer._517g");
        var VideoElement = $("._ox1._1_d1");


        var CheckIfShared = function(str){
            if(str.search("blob") != -1){
                //Found it
                return true;
            }else{
                return false;
            }
        }

        for(i = 0; i < VideoElement.length; i++){
            var currentSrc = VideoElement[i].currentSrc;
            console.log(".......................................");
            console.log(currentSrc);
            if(CheckIfShared(currentSrc)){
                console.log("From Shared : " + currentSrc);
            }else{
                if(currentSrc === ""){
                    console.log($(VideoElement[i]));
                }
                console.log("video");
                console.log("From Personal : " + currentSrc);
            }
            console.log(".......................................");
        }

        for(i = 0; i < PhotoElement.length; i++){
            var currentSrc = PhotoElement[i].children[0].currentSrc;
            console.log(".......................................");
            console.log(currentSrc);
            if(CheckIfShared(currentSrc)){
                console.log("From Shared : " + currentSrc);
            }else{
                if(currentSrc === ""){
                    console.log($(PhotoElement[i]));
                }
                console.log("Photo");
                console.log("From Personal : " + PhotoElement[i].children[0].currentSrc);
            }
            console.log(".......................................");
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

    //Scroll down to atleast 5 Post
    $("html, body").animate({ scrollTop: $(document).height() }, 100); //==> This really just needs to be run once. Fb Loads more than 5 post after page scroll

    //Function to be called if we don't have enough yet
    var StartChecking = function(){
        setTimeout(function(){
            if($(OverallPostStrings).length >= 5){
                console.log("We now have 5 post or more...");
                SplitUpPictureVideo($(OverallPostStrings2)); // ==> Once we get > 5. Split it up. Depends if it's a video or a post
            }else{
                StartChecking(); // ==> If it doesn't have 5 yet. Call the funciton again and scroll some more...
            }
        }, 100);
    };

    StartChecking(); // => Call if the Array doesn't come out to more than 5 Length


}
// $($("._1dwg._1w_m._2ph_")[1].children[2])
var newGrabPost = function(callback){

    var OverallArray = "._1dwg._1w_m._2ph_";

    var SplitUpPost = function(main_arr){
        var FullPostArray = [];

        function ExtractDate(elem){
            var date = $(elem.children[0]).find("._5pcq")[0].innerText;
            return date;
        }

        function ExtractDescription(elem){

            var desc;
            if($(elem)[0].innerText !== ""){
                desc = $(elem)[0].innerText;
            }else{
                desc = false;
            }
            return desc;
        }

        function ExtractPhoto(elem){
            if($(elem).find("._3chq").length){
                var photo = $(elem).find("._3chq")[0].currentSrc;
            }else if (typeof($(elem).find(".uiScaledImageContainer._517g")[0].children[0]) !== "undefined"){
                var photo = $(elem).find(".uiScaledImageContainer._517g")[0].children[0].currentSrc;
            }else{
                var photo = false;
            }
            return photo;
        }

        for(i = 0; i < main_arr.length; i++){
            var StartingPoint = main_arr[i].children[2];
            var StartingDatePoint = StartingPoint.children[0];
            var StartingDescPoint = StartingPoint.children[1];
            var StartingPhotoPoint = StartingPoint.children[2];
            var obj = {
                date: ExtractDate(StartingDatePoint) ? ExtractDate(StartingDatePoint) : "Had a problem with the date element",
                description: ExtractDescription(StartingDescPoint) ? ExtractDescription(StartingDescPoint) : "NO description",
                picture: ExtractPhoto(StartingPhotoPoint) ? ExtractPhoto(StartingPhotoPoint) : "Had a problem finding the photo src"
            };
            FullPostArray.push(obj);
        };

        ProfileObject.newGrabPost = FullPostArray;
        SearchingFinished.newGrabPost = true;
        callback()
    };

    //Scroll down to atleast 5 Post
    $("html, body").animate({ scrollTop: $(document).height() }, 100); //==> This really just needs to be run once. Fb Loads more than 5 post after page scroll

    //Function to be called if we don't have enough yet
    var StartChecking2 = function(){
        setTimeout(function(){
            if($(OverallArray).length >= 5){
                SplitUpPost($(OverallArray)); // ==> Once we get > 5. Split it up. Depends if it's a video or a post
            }else{
                StartChecking2(); // ==> If it doesn't have 5 yet. Call the funciton again and scroll some more...
            }
        }, 100);
    };

    StartChecking2(); // => Call if the Array doesn't come out to more than 5 Length

}

var GrabUsersPhoto = function(callback){

    var PersonalPhotoContainer = $$(".uiGrid._51mz._1m6c"); // ==> Element
    var PhotoRows = $$(".uiGrid._51mz._1m6c")[0].children[0].children;  // ==> Array
    var photoList = [];

    for(i = 0; i < PhotoRows.length; i++){

        for(b = 0; b < PhotoRows[i].children.length; b++){
            var currentSrc = PhotoRows[i].children[b].children[0].children[0].children[0].currentSrc;
            photoList.push(currentSrc);
        }
    }

    ProfileObject.users_photo = photoList;
    SearchingFinished.UsersPhoto = true;
    callback()

}

var GrabInstagramPhoto = function(){

}
