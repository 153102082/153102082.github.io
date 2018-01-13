var imgNum = 0;
var images = [];
function preLoadImg(){
    $.imgpreload([],function (){});
    images.push('img/001.png','img/002.png','img/003.png','img/004.png','img/005.png','img/006.png','img/007.png','img/008.png','img/009.png','img/a1-1.png','img/a1-2.png','img/a1-3.png','img/a1-4.png','img/a2-1.png','img/a2-2.png','img/a2-3.png','img/a2-4.png','img/a3-1.png','img/a3-2.png','img/a3-3.png','img/a3-4.png','img/a3-5.png','img/a3-6.png','img/a4-1.png','img/a4-2.png','img/a4-3.png','img/a4-4.png','img/a5-1.png','img/a5-2.png','img/a5-3.png','img/a5-4.png','img/a5-5.png','img/a5-6.png','img/a6-1.png','img/a6-2.png','img/a6-4.png','img/a7-1.png','img/a7-2.png','img/a7-4.png','img/an1-1.png','img/an1-2.png','img/an2-1.png','img/an2-2.png','img/an3-1.png','img/an3-2.png','img/B1.png','img/B2.png','img/B3.png','img/B4.png','img/bg-a1.jpg','img/bg-a2.jpg','img/bg-a3.jpg','img/bg-a4.jpg','img/bg-a5.jpg','img/bg-a6.jpg','img/bg-a7.jpg','img/bg1.jpg','img/bg2.jpg','img/bg2.png','img/bg3-1.jpg','img/bg3-1.png','img/bg3-2.jpg','img/bg3-3.jpg','img/bg3.jpg','img/btn.png','img/but1.png','img/but2.png','img/car2.png','img/cj_btn.png','img/cx.png','img/fx.jpg','img/fx_btn.png','img/gz.png','img/gz1.png','img/info.png','img/J1.png','img/J2.png','img/J3.png','img/J4.png','img/J5.png','img/logo.png','img/music.mp3','img/music.png','img/p1-1.png','img/p1-2.png','img/p2-1.png','img/p3-1.png','img/p4-1.png','img/p5-1.png','img/p6-1.png','img/p7-1.png','img/p7-2.png','img/p8-1.png','img/p9-1.png','img/p9-2.png','img/p9-2a.png','img/p9-2b.png','img/p9-2c.png','img/p9-2d.png','img/p9-2e.png','img/p9-2f.png','img/p9-2g.png','img/p9-2h.png','img/p9-3.png','img/p9-4.png','img/p9-5.png','img/p9-5a.png','img/p9-5b.png','img/p9-5c.png','img/p9-5d.png','img/p9-5e.png','img/p9-5f.png','img/p9-5g.png','img/p9-5h.png','img/qd_btn.png','img/tj.png','img/ts.png','img/ts1.png','img/turnplate-bg.png','img/turnplate-pointer.png','img/y1.png','img/y2.png','img/y3.png','img/yao.mp3');
    $.imgpreload(images,{
        each: function () {
            var status = $(this).data('loaded') ? 'success' : 'error';
            if (status == "success") {}
        }

    });
}




$(function(){
    preLoadImg();
    setTimeout(function(){
        $(".loading").hide();
        $(".wrap").show();

    },8000);


    var time1=setInterval(function(){
        $(".animate1").css("left",($(".animate1").offset().left-15));

        if($(".animate1").offset().left<-$(".animate1").width()/2){
            $(".animate1").css("left",0);
        }

    },50);
    var time2=setInterval(function(){
        $(".animate2").css("left",($(".animate2").offset().left-15));

        if($(".animate2").offset().left<-$(".animate2").width()/2){
            $(".animate2").css("left",0);
        }

    },50);



    var is_play = 1;
    $(".audio-button").on("click",function(){
        $(".audio-button").css("-webkit-animation-play-state","paused");
        if (is_play) {
            $(".audio-button").css("-webkit-animation-play-state","paused");
            $(".audio-music").trigger('pause');
            is_play = 0;
        } else {
            $(".audio-button").css("-webkit-animation","jxz 1.5s 0s linear infinite");
            $(".audio-music").trigger('play');
            is_play = 1;
        }
    }) ;
    $(".p1-2").on("click",function(){
        $(".animate1,.section1").css("display","none");
        $(".page1").css("display","block");
        //clearInterval(timer1);

    });

   $(".btn").on("click",function(){
       $(this).parent().css("display","none");
       $(this).parent().next().css("display","block");



   });
    $(".btn:last").on("click",function(){

        $(this).parent().next().next().css("display","block");


    });

   $(".an1-1").click(function () {
       $(this).parent().parent().css("display","none");
       $(".section4").css("display","block");
   });
    $(".an1-2").click(function () {
        $(this).parent().parent().css("display","none");
        $(".section3").css("display","block");
    });
    $(".an3-1").click(function () {
        $(this).parent().parent().css("display","none");
        $(".section5").css("display","block");
    });
    $(".an3-2").click(function () {
        $(this).parent().parent().css("display","none");
        $(".section6").css("display","block");
    });



    $(".an2-1b,.an2-1a").click(function () {
        $(this).parent().parent().css("display","none");
        $(".animate2") .css("display","none");
        $(".section9").css("display","block");

    });
    $(".an2-1c,.an2-2c").click(function () {
        $(this).parent().parent().css("display","none");

        $(".section7").css("display","block");

    });

    $(".an2-2b,.an2-2a").click(function () {
        $(this).parent().parent().css("display","none");
        $(".animate2") .css("display","none");
        $(".section9").css("display","block");

    });
    $(".but1").click(function () {
        $(this).parent().css("display","none");

        $(".gz1").css("display","block");

    });
    $(".gz1 > img").click(function () {
        $(".section9").css("display","block");
        $(this).parent().css("display","none");



    });
    $(".but2").click(function () {
        $(this).parent().css("display","none");

        $(".cx").css("display","block");

    });
    $(".cx > img").click(function () {
        $(".section9").css("display","block");
        $(this).parent().css("display","none");
    });

    $(".qd_btn").click(function () {
        $(this).parent().parent().css("display","none");
        $(".animate2") .css("display","none");
        $(".section8").css("display","block");
    });
    $(".fx_btn").click(function () {

        $(".shade").css("display","block");

    });
    $(".shade").click(function () {
        $(this).css("display","none");
    });
    $(".cj_btn").click(function () {
        $(".section9").css("display","block");
        $(this).parent().css("display","none");
    });


});



var SHAKE_THRESHOLD = 3000;
var last_update = 0;
var x = y = z = last_x = last_y = last_z = 0;

if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', deviceMotionHandler, false);
} else {
    alert('本设备不支持devicemotion事件');
}

function deviceMotionHandler(eventData) {
    var acceleration = eventData.accelerationIncludingGravity;
    var curTime = new Date().getTime();

    if ((curTime - last_update) > 100) {
        var diffTime = curTime - last_update;
        last_update = curTime;
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;
        var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
        var status = $(".loading").get(0);

        if (speed > SHAKE_THRESHOLD) {
            doResult();
        }
        last_x = x;
        last_y = y;
        last_z = z;
    }
}


document.addEventListener('WeixinJSBridgeReady', function() {
    var yaoMusic = $('.yao-music').get(0);
    yaoMusic.play();
    yaoMusic.pause();
}, false);


function doResult() {
    window.removeEventListener('devicemotion', deviceMotionHandler, false);
    $('.yao-music').get(0).play();
    setTimeout(function(){
        $(".section1").fadeOut();

        $(".bg-animate").fadeOut();
        $(".page1").fadeIn();
    },1500);
}



