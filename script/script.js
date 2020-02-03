
$('.back-call').toggle();

$(function() {
    $('.menu__burger-button').on('click', function() {
        if ($('.menu__item:nth-child(1)').css('left') == '0px') menuClose();
        else menuOpen();
    });

    $(window).resize(function() {
        if ($(window).width() > 1024) {
            $('.menu__item:nth-child(1)').css({left: '0px'});
            $('.menu__item:nth-child(2)').css({left: '0px'});
            $('.menu__item:nth-child(3)').css({left: '0px'});
        } else {
            $('.menu__item:nth-child(1)').css({left: '-140px'});
            $('.menu__item:nth-child(2)').css({left: '-140px'});
            $('.menu__item:nth-child(3)').css({left: '-140px'});
        }
    });

    $('.number-container__call').on('click', callIn);
    $('.number-container__call-mobile').on('click', callIn);

    $('.back-call').on('click', function(event) {
        if (event.target != this) return;
        callOut();
    });
});

function menuOpen() {
    $('.menu__item:nth-child(1)').animate({left: '0px'}, 300);
    setTimeout(function() {
        $('.menu__item:nth-child(2)').animate({left: '0px'}, 300);
    }, 120);
    setTimeout(function() {
        $('.menu__item:nth-child(3)').animate({left: '0px'}, 300);
    }, 200);
};

function menuClose() {
    $('.menu__item:nth-child(1)').animate({left: '-140px'}, 300);
    setTimeout(function() {
        $('.menu__item:nth-child(2)').animate({left: '-140px'}, 300);
    }, 70);
    setTimeout(function() {
        $('.menu__item:nth-child(3)').animate({left: '-140px'}, 300);
    }, 140);
};

function callIn() {
    $('.back-call').fadeIn(200);
}

function callOut() {
    $('.back-call').fadeOut(200);
}


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






