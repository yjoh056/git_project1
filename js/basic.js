$(() => {
    //
/* skip navi */ 
// 
const skipNavi = document.querySelector('#skip_navi a');

skipNavi.addEventListener('focus', function() {
    this.style.transform = 'translateY(100%)';
});

skipNavi.addEventListener('blur', function() {
    this.style.transform = 'translateY(-200%)';
});

//
/*  */ 
// 
const starBtnL = document.getElementsByClassName('.star-left');
window.addEventListener('wheel', handleMouseWheel);
function handleMouseWheel(event) {
    const delta = event.deltaY;
    const rotationAngle = delta * 0.1;
    starBtnL.style.transform = `rotateZ(${rotationAngle}deg)`;
}
});
