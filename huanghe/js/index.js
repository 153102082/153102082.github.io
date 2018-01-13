var imgNum = 0;
var images = [];
function preLoadImg(){
    $.imgpreload([],function (){});
    images.push('img/bg.jpg','img/bg1.jpg','img/chuan.png','img/d1.gif','img/d2.gif','img/d3.gif','img/d4.gif','img/img-1.png','img/img-2.gif','img/img-3.gif','img/img-4.gif','img/img-5.gif','img/img-6.gif','img/img-7.gif','img/img-8.gif','img/img-9.gif','img/img-10.gif','img/img-11.gif','img/img-12.png','img/img-13.gif','img/img-14.png','img/img-15.gif','img/ship.gif','img/ship1.png','img/yanhuua.gif','img/updown/1.jpg','img/updown/2.jpg','img/updown/3.jpg','img/updown/4.jpg','img/updown/5.jpg','img/updown/6.jpg','img/updown/7.jpg','img/updown/8.jpg','img/updown/9.jpg','img/updown/10.jpg','img/updown/11.jpg','img/updown/12.jpg','img/updown/13.jpg' ,'js/index.js','js/jquery.imgpreload.min.js','js/jquery-1.7.1.min.js','style/style.css' );
    $.imgpreload(images,{
        each: function () {
            var status = $(this).data('loaded') ? 'success' : 'error';
            if (status == "success") {
			imgNum++;
			$(".jd").html(parseInt(imgNum/images.length*100)+"%");
			console.log(imgNum/images.length);
			}
        },
        all:function(){

            jump();

        }

    });
}

//$(".audio-button").css("-webkit-animation","jxz 1.5s 0s linear infinite");

var time1=0;
var time2=0;
var a=0;
var b=0;
function move(){
        time2=setInterval(function () {
            $(".wrap").css("bottom",a-=4);
            $(".wrap-ship").css("bottom",b+=4);
            console.log($(".wrap").offset().top);
            console.log($(".wrap").css("bottom"));
            console.log($(".wrap-ship").css("left"));
            console.log(-$(".wrap").offset().top/$(".wrap").height());

            if( $(".wrap").offset().top>=0){

                clearInterval(time2);
                setTimeout(function(){
                    $(".last").eq(0).css("display","block");
                    $(".wrap").css("display","none");
                    $(".wrap-ship").css("display","none");

                },5000);

            }
        },100);

    }
   function jump(){
    var i=0;
    var time2=setInterval(function () {

        $(".gril").eq(i).css("display","none");
        $(".gril").eq(i+1).css("display","block");
        i++;
        if(i>13){
            clearInterval(time2);
            $(".wrap").css("display","block");
            $(".wrap-ship").css("display","block");
            $(".loading").css("display","none");
            move();
        }
    },200);
  }


var timeOutEvent=0;
    $(function(){
        preLoadImg();
        $(".tz").on("touchstart",function(){
            window.location.href="http://huanghe.sxtour.com/";
        });
        $("body").on({
            touchstart: function(e){
                e.preventDefault();
            }
        });


        /**/
        $("body").on({
            touchstart: function(e){
                timeOutEvent = setTimeout("longPress()",500);
                e.preventDefault();
            },
            touchmove: function(){
                clearTimeout(timeOutEvent);
                timeOutEvent = 0;
            },
            touchend: function(){
                clearTimeout(timeOutEvent);
                if(time1){
                    clearInterval(time1);
                    $(".ship1").css("display","block");
                    $(".ship2").css("display","none");
                }

                if(timeOutEvent!=0){
                  // alert("你这是点击，不是长按");
                }
                return false;
            }
        })/**/


        var is_play = 1;
       /* $(".wrap-ship").on("click",function(e){
            if(is_play){
                is_play = 0;
                timeOutEvent = setTimeout("longPress()",500);
                e.preventDefault();
            }else{
                is_play = 1;
                clearTimeout(timeOutEvent);
                if(time1){
                    clearInterval(time1);
                    $(".ship1").css("display","block");
                    $(".ship2").css("display","none");
                }
                if(timeOutEvent!=0){
                    // alert("你这是点击，不是长按");
                }
                return false;
            }
        }); */


});

  function longPress(){
      timeOutEvent = 0;

      if( $(".wrap").offset().top<=-80){
          $(".ship1").css("display","none");
          $(".ship2").css("display","block");
          move();

      }
      //alert("长按事件触发");
  }/**/

/*

                var stage='';
               var pressmove = false;
               var ismove = false;
               var user_stop = true;
       stage = new createjs.Stage("anime_canvas");//舞台
       createjs.Touch.enable(stage);//touch设备支持
       console.log(stage);

               stage.addEventListener('mousedown', function(e) {
                   console.log("a");
                   timeOutEvent = setTimeout("longPress()",500);
                   e.preventDefault();
               }, false);
               stage.addEventListener('pressup', function(e) {
                   console.log("b");
                   clearTimeout(timeOutEvent);
                   if(time1){
                       clearInterval(time1);
                       $(".ship1").css("display","block");
                       $(".ship2").css("display","none");
                   }

                   if(timeOutEvent!=0){
                       // alert("你这是点击，不是长按");
                   }
                   return false;

               }, false);*/
