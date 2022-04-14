
function init(mq) {  
  const className = 'h-100vh';
  const nodes = document.querySelectorAll('.h100');
  nodes.forEach( e => {    
    mq.matches ? e.classList.remove(className) : e.classList.add(className);
    // e.style.height = '100vh';
  });
  console.log(`init called ${nodes.length} applied at mq ${mq.matches}`);
}

const mq = window.matchMedia("(max-width: 768px)")
document.addEventListener("DOMContentLoaded", function(){
  console.log('Loaded');
  init(mq);
});

mq.addListener(init);
init(mq);
