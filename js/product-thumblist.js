//button left right
let buttonRight = document.getElementById('slideRight');
let buttonLeft = document.getElementById('slideLeft');

buttonLeft.addEventListener('click', function () {
    document.getElementById('slider').scrollLeft -= 202;
});

buttonRight.addEventListener('click', function () {
    document.getElementById('slider').scrollLeft += 202;
});