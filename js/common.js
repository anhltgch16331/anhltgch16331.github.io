// Position relative to mouse pointer
var tooltips = document.querySelectorAll('.product-detail');
window.onmousemove = function (e) {
    var x = (e.clientX + 20) + 'px',
    y = (e.clientY + 20) + 'px';
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
    }
};