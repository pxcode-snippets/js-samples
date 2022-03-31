

/* IMCase */
/* https://www.pxcode.io/624270436b416a0014796fb0/project/624275acc446f40015042533/6242a83488b824001505f622 */
/*
  The screen will keep scale ratio from 320px to 406px based on the 406px size
*/

let targetClassName = 'transform';
let target = document.getElementsByClassName(targetClassName)[0];
window.addEventListener("resize", resize);
const widthThreshold = 406;
resize();

function resize(){
    let scale,
    currentWindowWidth = window.innerWidth;

    let isApply = currentWindowWidth <= widthThreshold;
    target.style['transform-origin'] = `0 0`;
    target.style.width = isApply ? `406px` : 'auto';

    scale = currentWindowWidth * 1.0/widthThreshold;
    console.log(`isApply ${isApply} -- ${currentWindowWidth} scale ${scale}`)
    
    target.style.transform = isApply ? 'scale(' + scale + ')' : '';
}
