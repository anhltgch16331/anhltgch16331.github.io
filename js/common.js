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

// Add active register, login, forgot pw

// register
var registerBtn = $('#register');
var registerForm = $('#formRegister');
$(document).mouseup(e => {
    if (!registerForm.is(e.target) && registerForm.has(e.target).length == 0) {
        registerForm.removeClass("active"); //remove class active when click to other place
    }
});
$(registerBtn).click(function () {
    if ($(registerForm).hasClass("active")) {
        $(registerForm).removeClass("active");
    } else {
        $(registerForm).addClass("active");
    }
});

// login
var loginBtn = $('#login');
var loginForm = $('#formLogin');
$(document).mouseup(e => {
    if (!loginForm.is(e.target) && loginForm.has(e.target).length == 0) {
        loginForm.removeClass("active"); //remove class active when click to other place
    }
});
$(loginBtn).click(function () {
    if ($(loginForm).hasClass("active")) {
        $(loginForm).removeClass("active");
    } else {
        $(loginForm).addClass("active");
    }
});

// forgot password
var forgotPwBtn = $('#forgotPw');
var forgotPwForm = $('#formFPw');
$(document).mouseup(e => {
    if (!forgotPwForm.is(e.target) && forgotPwForm.has(e.target).length == 0) {
        forgotPwForm.removeClass("active"); //remove class active when click to other place
    }
});
$(forgotPwBtn).click(function () {
    if ($(forgotPwForm).hasClass("active")) {
        $(forgotPwForm).removeClass("active");
    } else {
        if ($(loginForm).hasClass("active")) {
            $(loginForm).removeClass("active");
            $(forgotPwForm).addClass("active");
        }
    }
});

// Quantity input
var inputQuantity = $("#input-quantity");
var btnPlus = $("#plus-quantity");
var btnMinus = $("#minus-quantity");

$(btnPlus).click(function () {
    var a = $(inputQuantity).val();
    0 == isNaN(a) ? $(inputQuantity).val(parseInt(a) + 1) : $(inputQuantity).val(1)
});
$(btnMinus).click(function () {
    var a = $(inputQuantity).val();
    0 == isNaN(a) && parseInt(a) > 1 ? $(inputQuantity).val(parseInt(a) - 1) : $(inputQuantity).val(1)
});

// Product preview
let thumbnails = document.getElementsByClassName('thumbnail');
let activeImages = document.getElementsByClassName('active');
for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', function () {
        if (activeImages.length > 0) {
            activeImages[0].classList.remove('active');
        }
        this.classList.add('active');
        document.getElementById('featured').src = this.src;
    });
}

// register option
$('#role').on("change", function () {
    var val = $(this).val();
    console.log(val);
    $(".types").hide().find('input:text').val('');
    if (val) $("." + val).show();
});

// remove compare product
$('.card-delete').click(function () {
    $(this).closest('.compare-element').remove();
});

// count compared products
var total = 0;
$(".container-checkbox > input").on("change", function (event) {
    this.checked ? total++ : total--;
    if ($('input:checked').length > 3) {
        event.preventDefault();
        alert('Vui lòng chọn tối đa 3 sản phẩm');
        $(this).prop('checked', !$(this).prop('checked'));
        total--;
    }
});