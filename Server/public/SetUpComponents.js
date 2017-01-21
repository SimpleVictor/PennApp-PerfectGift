// <div class="ui vertical steps">
//     <div class="completed step">
//     <i class="truck icon"></i>
//     <div class="content">
//     <div class="title">Shipping</div>
//     <div class="description">Choose your shipping options</div>
// </div>
// </div>
// <div class="completed step">
//     <i class="credit card icon"></i>
//     <div class="content">
//     <div class="title">Billing</div>
//     <div class="description">Enter billing information</div>
// </div>
// </div>
// <div class="active step">
//     <i class="info icon"></i>
//     <div class="content">
//     <div class="title">Confirm Order</div>
// <div class="description">Verify order details</div>
// </div>
// </div>
// </div>

var ExternalScript2 = "SetUpComponent.js has been loaded";

//Place the Home Status/ About Status/ And Animation Starter Button
var SetUpHomeButtons = function(){
    var FullPageContainer = $("._li");
    var strVar="";
    strVar += "<div class=\"home-container\" style=\"";
    strVar += "z-index: 5;";
    strVar += "position: absolute;";
    strVar += "top: 38%;";
    strVar += "left: 75%;";
    strVar += "\">";
    strVar += "  <button class=\"ui button\" color='positive'>Hey There<\/button>";
    strVar += "<\/div>";
    FullPageContainer.prepend(strVar);
};




















