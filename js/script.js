// Slide left s
function slideLeft() {
    var x = document.getElementById("mobileMenu");
    // var y = document.getElementById("mobileLinks")
    var z = document.getElementById("opacityBar")
    var b = document.getElementById("body")
    
    if (x.style.left === "-800px") {
        x.style.left = "0";
        // y.style.display = "none";
        z.style.display = "block";
        b.style.overflow = "hidden";
    } else {
        x.style.left = "-800px";
        // y.style.display = "block";
        z.style.display = "none";
        b.style.overflow = "auto";
    }
}

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







// Slide left using width
//     $(document).ready(function(){
//     $(".slide-toggle").click(function(){
//         $(".box").animate({
//             width: "toggle"
//         });
//     });
// });



// Original hide/show for mobile menu
// function expandBar() {
//     var x = document.getElementById("mobileMenu");
//     var mobLinks = document.getElementById("mobileLinks");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

