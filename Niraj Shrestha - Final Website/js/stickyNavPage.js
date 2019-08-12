window.onscroll = function() {stickIt()};

var nav = document.getElementById("navigation");

function stickIt() {
    if (window.pageYOffset > 0) {
        nav.classList.add("stickNav");
        nav.classList.remove("navigation");
  } else {
      nav.classList.remove("stickNav");
      nav.classList.add("navigation");
  }
}
