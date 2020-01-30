
$('.back-call').toggle();

$(function() {
    $('.burger-button').on('click', function() {
        if ($('.menu-container li:nth-child(1)').css('left') == '0px') menuClose();
        else menuOpen();
    });

    $(window).resize(function() {
        if ($(window).width() > 1024) {
            $('.menu-container li:nth-child(1)').css({left: '0px'});
            $('.menu-container li:nth-child(2)').css({left: '0px'});
            $('.menu-container li:nth-child(3)').css({left: '0px'});
        } else {
            $('.menu-container li:nth-child(1)').css({left: '-140px'});
            $('.menu-container li:nth-child(2)').css({left: '-140px'});
            $('.menu-container li:nth-child(3)').css({left: '-140px'});
        }
    });

    $('.call').on('click', callIn);
    $('.call-mobile').on('click', callIn);

    $('.back-call').on('click', function(event) {
        if (event.target != this) return;
        callOut();
    });

    //Проверка ширины окна для позиционирования символов
    symbolCoords();

    $(window).resize(function() {
        symbolCoords();
    });
});

function menuOpen() {
    $('.menu-container li:nth-child(1)').animate({left: '0px'}, 300);
    setTimeout(function() {
        $('.menu-container li:nth-child(2)').animate({left: '0px'}, 300);
    }, 120);
    setTimeout(function() {
        $('.menu-container li:nth-child(3)').animate({left: '0px'}, 300);
    }, 200);
};

function menuClose() {
    $('.menu-container li:nth-child(1)').animate({left: '-140px'}, 300);
    setTimeout(function() {
        $('.menu-container li:nth-child(2)').animate({left: '-140px'}, 300);
    }, 70);
    setTimeout(function() {
        $('.menu-container li:nth-child(3)').animate({left: '-140px'}, 300);
    }, 140);
};

function callIn() {
    $('.back-call').fadeIn(200);
}

function callOut() {
    $('.back-call').fadeOut(200);
}

function symbolCoords() {
    if ($(window).width() > 1366) {
        $('.svg-animate-text-1').attr('x', '550');
        $('.svg-animate-text-1').attr('y', '80');

        $('.svg-animate-text-2').attr('x', '600');
        $('.svg-animate-text-2').attr('y', '450');

        $('.svg-animate-text-3').attr('x', '110');
        $('.svg-animate-text-3').attr('y', '260');

        $('.svg-animate-text-4').attr('x', '250');
        $('.svg-animate-text-4').attr('y', '520');

        $('.svg-animate-text-5').attr('x', '70');
        $('.svg-animate-text-5').attr('y', '40');
    }
    if ($(window).width() <= 1366 && $(window).width() > 1024) {
        $('.svg-animate-text-1').attr('x', '550');
        $('.svg-animate-text-1').attr('y', '80');

        $('.svg-animate-text-2').attr('x', '500');
        $('.svg-animate-text-2').attr('y', '450');

        $('.svg-animate-text-3').attr('x', '110');
        $('.svg-animate-text-3').attr('y', '260');

        $('.svg-animate-text-4').attr('x', '250');
        $('.svg-animate-text-4').attr('y', '520');

        $('.svg-animate-text-5').attr('x', '70');
        $('.svg-animate-text-5').attr('y', '40');
    }
    if ($(window).width() <= 1024 && $(window).width() > 850) {
        $('.svg-animate-text-1').attr('x', '550');
        $('.svg-animate-text-1').attr('y', '40');

        $('.svg-animate-text-2').attr('x', '400');
        $('.svg-animate-text-2').attr('y', '430');

        $('.svg-animate-text-3').attr('x', '110');
        $('.svg-animate-text-3').attr('y', '260');

        $('.svg-animate-text-4').attr('x', '250');
        $('.svg-animate-text-4').attr('y', '520');

        $('.svg-animate-text-5').attr('x', '70');
        $('.svg-animate-text-5').attr('y', '40');
    }
    if ($(window).width() <= 850 && $(window).width() > 767) {
        $('.svg-animate-text-1').attr('x', '550');
        $('.svg-animate-text-1').attr('y', '40');

        $('.svg-animate-text-2').attr('x', '320');
        $('.svg-animate-text-2').attr('y', '430');

        $('.svg-animate-text-3').attr('x', '110');
        $('.svg-animate-text-3').attr('y', '260');

        $('.svg-animate-text-4').attr('x', '250');
        $('.svg-animate-text-4').attr('y', '520');
    }
    if ($(window).width() <= 767 && $(window).width() > 549) {
        $('.svg-animate-text-1').attr('x', '450');
        $('.svg-animate-text-1').attr('y', '40');

        $('.svg-animate-text-2').attr('x', '240');
        $('.svg-animate-text-2').attr('y', '460');

        $('.svg-animate-text-3').attr('x', '210');
        $('.svg-animate-text-3').attr('y', '120');

        $('.svg-animate-text-4').attr('x', '50');
        $('.svg-animate-text-4').attr('y', '520');

        $('.svg-animate-text-5').attr('x', '70');
        $('.svg-animate-text-5').attr('y', '40');
    }
    if ($(window).width() <= 549) {
        $('.svg-animate-text-1').attr('x', '450');
        $('.svg-animate-text-1').attr('y', '50');

        $('.svg-animate-text-2').attr('x', '160');
        $('.svg-animate-text-2').attr('y', '320');

        $('.svg-animate-text-3').attr('x', '10');
        $('.svg-animate-text-3').attr('y', '120');

        $('.svg-animate-text-4').attr('x', '50');
        $('.svg-animate-text-4').attr('y', '520');

        $('.svg-animate-text-5').attr('x', '310');
        $('.svg-animate-text-5').attr('y', '-70');
    }
}

console.log('Hello');

// function draw() {
//     let canvas = document.querySelector(".canvas-main");
//         if (canvas.getContext) {
//             let ctx = canvas.getContext("2d");

//             let gradient = ctx.createLinearGradient(700, 0, 300, 600);
//             gradient.addColorStop(0, '#fc557c');
//             gradient.addColorStop(1, '#ff8a5d');
//             ctx.fillStyle = gradient;
            
//             ctx.beginPath();
//             ctx.moveTo(70, 600);
//             ctx.quadraticCurveTo(40, 530, 70, 460);
//             ctx.quadraticCurveTo(180, 180, 450, 50);
//             ctx.quadraticCurveTo(550, 0, 650, 50);
//             ctx.quadraticCurveTo(810, 140, 950, 400);
//             ctx.quadraticCurveTo(1000, 500, 950, 600);
//             ctx.fill();
//         }
// }

// draw();






