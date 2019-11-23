function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("navbar__logo-lg").style.height = "7rem";
    document.getElementById("navbar__logo-lg").style.top = "0rem";
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("navbar__logo-lg").style.height = "14rem";
    document.getElementById("navbar__logo-lg").style.top = "-2rem";
    document.getElementById("myBtn").style.display = "none";
  }
}



// function scrollFixedFooter() {
//   if (document.body.scrollTop > ($("body").height()) - 768 || document.documentElement.scrollTop > ($("body").height()) - 768) {
//     document.getElementById("fixed-footer").style.zIndex = "1000";
//   } else {
//     document.getElementById("fixed-footer").style.zIndex = "-100";
//   }
// }

function scrollFixedFooter() {
  let h_body = $("body").height();
  let h_main = $("main").height();
  if (document.body.scrollTop > (h_body - ((h_body - h_main) - 250)) ||
    document.documentElement.scrollTop > (h_body - ((h_body - h_main) - 250))) {
    document.getElementById("fixed-footer").style.zIndex = "1000";
  } else {
    document.getElementById("fixed-footer").style.zIndex = "-100";
  }
}


function visible() {
  window.location.href = "#section-videoreview";
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var navigation = document.getElementById("navigation");
var navbtn = document.getElementById("nav-btn");
var navbg = document.getElementById("nav-bg");
var sticky = navigation.offsetTop-200;

function scrollNav() {
  if (window.pageYOffset >= sticky) {
    navbtn.classList.remove("navigation__button-fix")
    navbtn.classList.add("navigation__button")
    navbg.classList.remove("navigation__background-fix")
    navbg.classList.add("navigation__background")
    
    // navigation.classList.add("navigation-fix")
    
  } else {
    navbtn.classList.remove("navigation__button")
    navbtn.classList.add("navigation__button-fix")
    navbg.classList.remove("navigation__background")
    navbg.classList.add("navigation__background-fix")
    // navigation.classList.add("navigation")
  }
}


function do_something(){
    
  document.getElementById("navigation").classList.add("something")
  }
