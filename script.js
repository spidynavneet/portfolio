$(function(){ 
    var navMain = $(".navbar-collapse");

    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbarCollapse").style.top = "0";
  } else {
    document.getElementById("navbarCollapse").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
