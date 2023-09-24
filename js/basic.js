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

