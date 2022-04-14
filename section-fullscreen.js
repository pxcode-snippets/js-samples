
function init() {
  document.querySelectorAll('.h100').forEach( e => e.style.height = '100vh' );
  console.log('init called');
}


document.addEventListener("DOMContentLoaded", function(){
  console.log('Loaded');
  init();
});
