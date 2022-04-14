
function init() {
  const nodes = document.querySelectorAll('.h100');
  nodes.forEach( e => e.style.height = '100vh' );
  console.log(`init called ${nodes.length} applied`);
}


document.addEventListener("DOMContentLoaded", function(){
  console.log('Loaded');
  init();
});

init();
