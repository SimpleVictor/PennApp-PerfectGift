var ProfileObject = {};
var SearchingFinished = {
    BasicInfo: false
};
var StopCounter = 0;





var StartSearching = function(){
    console.log("Works");
    while(SearchingFinished.BasicInfo === true){
        StopCounter++;
        if(StopCounter >= 1){

        }
    }
    GrabBasicInfo();
};

//Grabs your basic Info
var GrabBasicInfo = function(){

    //REMINDERS//
    // 1. Get rid of the breaks inside the string
    // 2. Split the string up before or after the string "at"
    console.log($(OverallString));

    //Variables for each Basic Info Icon
    var OverallString = "._2m_3._3-91._8o._8s.lfloat._ohe.img.sp_JCe37g3qSzR";
    var WorkIcon = ".sx_e71569";
    var CollegeIcon = ".sx_bf593f";
    var AddressIcon = ".sx_b52f34";
    var RelationshipIcon = ".sx_f53be5";


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

    if($("._2m_3._3-91._8o._8s.lfloat._ohe.img.sp_JCe37g3qSzR").length >= 1){
        var obj = {
            work: $(OverallString + WorkIcon).length >= 1 ? SplitUpArray($(OverallString + WorkIcon)) : "Did not state any jobs",
            college: $(OverallString + CollegeIcon).length >= 1 ?  $(OverallString + CollegeIcon)[0].offsetParent.innerText : "Did not state any college",
            address: $(OverallString + AddressIcon).length >= 1 ?  $(OverallString + AddressIcon)[0].offsetParent.innerText : "Did not state a location",
            relationship: $(OverallString + RelationshipIcon).length >= 1 ?  $(OverallString + RelationshipIcon)[0].offsetParent.innerText : "Is not in a relationship"
        }
        ProfileObject.basic_info = obj;
    }
    console.log(ProfileObject);
};

var GrabUsersRecentPost= function(){

}

var GrabUsersPhoto = function(){

}

var GrabInstagramPhoto = function(){

}
