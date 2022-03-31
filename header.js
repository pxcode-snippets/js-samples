

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
