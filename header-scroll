/* scroll up to show header and scroll down to hide header */
const headerId = 'header';
const headerHeight = 50;

/* reference: https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp */
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById(headerId).style.top = "0";
  } else {
    document.getElementById(headerId).style.top = `-${headerHeight}px`;
  }
  prevScrollpos = currentScrollPos;
}
