
/* JCB Case */
/* https://www.pxcode.io/61e613c1c7489900134ed5d5/project/623ac340b6bca500141723ad/623bd776233d150013764404 */


document.getElementById('header').classList.add('x'); // don't know why need this line to update DOM to get onscroll events

window.onscroll = function onScroll () {
  const top = window.pageYOffset || document.documentElement.scrollTop;
  const header = document.getElementById('header');
  const activeClassname = 'header-active';

  if (top > 0) {
    header.classList.add(activeClassname);
  } else {
    header.classList.remove(activeClassname);
  }
};
