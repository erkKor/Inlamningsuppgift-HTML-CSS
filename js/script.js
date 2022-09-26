// function expandBar() {
//     var x = document.getElementById("mobileMenu");
//     var mobLinks = document.getElementById("mobileLinks");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

// $(document).ready(function () {

//     $(".slide-toggle").hide();
//     $(".show-hide").show();

//     $('.show-hide').click(function () {
//     $(".slide-toggle").toggle("slide");
//     });

// });

    $(document).ready(function(){
    $(".slide-toggle").click(function(){
        $(".box").animate({
            width: "toggle"
        });
    });
});


// Log in / Register show hide
function registerShow() {
    var x = document.getElementById("loginCard");
    var y = document.getElementById("registerCard");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";

    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
}

// Hide mobile menubar on scroll down
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("mobileMenuBar").style.top = "0";
    } else {
        document.getElementById("mobileMenuBar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}