var imgNum = 0;
var images = [];
function preLoadImg(){
    $.imgpreload([],function (){});
    images.push('img/bg.jpg','img/bg1.jpg','img/chuan.png','img/d1.gif','img/d2.gif','img/d3.gif','img/d4.gif','img/img-1.png','img/img-2.gif','img/img-3.gif','img/img-4.gif','img/img-5.gif','img/img-6.gif','img/img-7.gif','img/img-8.gif','img/img-9.gif','img/img-10.gif','img/img-11.gif','img/img-12.png','img/img-13.gif','img/img-14.png','img/img-15.gif','img/ship.gif','img/ship1.png','img/yanhuua.gif','img/updown/1.jpg','img/updown/2.jpg','img/updown/3.jpg','img/updown/4.jpg','img/updown/5.jpg','img/updown/6.jpg','img/updown/7.jpg','img/updown/8.jpg','img/updown/9.jpg','img/updown/10.jpg','img/updown/11.jpg','img/updown/12.jpg','img/updown/13.jpg'  );
    $.imgpreload(images,{
        each: function () {
            var status = $(this).data('loaded') ? 'success' : 'error';
            if (status == "success") {}
        },
        all:function(){

            jump();

        }

    });
}

//$(".audio-button").css("-webkit-animation","jxz 1.5s 0s linear infinite");

var time1=0;
var a=0;
var b=0;
function move(){

        time1=setInterval(function () {
            $(".wrap").css("bottom",a-=10);
            $(".wrap-ship").css("bottom",b+=10);
            console.log($(".wrap").offset().top);
            console.log($(".wrap").css("bottom"));
            console.log($(".wrap-ship").css("left"));
            console.log(-$(".wrap").offset().top/$(".wrap").height());

           if( $(".wrap").offset().top>$(".wrap").height()*0.837){
               //$(".ship").css("left","");
            }else if(- $(".wrap").offset().top> $(".wrap").height()*0.71){

            }else if(- $(".wrap").offset().top> $(".wrap").height()*0.667){




                $(".wrap-ship").css("left","-60");

            }else if(- $(".wrap").offset().top> $(".wrap").height()*0.6){

                $(".ship").css("-webkit-transform","rotate(0deg)");
                $(".wrap-ship").css("left","-50px");

            }
            else if(- $(".wrap").offset().top> $(".wrap").height()*0.55){

                $(".ship").css("-webkit-transform","rotate(0deg)");
                $(".wrap-ship").css("left","-34px");

            }
            else if(- $(".wrap").offset().top> $(".wrap").height()*0.517){

                $(".ship").css("-webkit-transform","rotate(0deg)");
                $(".wrap-ship").css("left","-28px");

            }
            else if(- $(".wrap").offset().top> $(".wrap").height()*0.4){

                $(".ship").css("-webkit-transform","rotate(-6deg)");
                $(".wrap-ship").css("left","-28px");

            }
            else if(- $(".wrap").offset().top> $(".wrap").height()*0.36){

                $(".ship").css("-webkit-transform","rotate(12deg)");
                $(".wrap-ship").css("left","-60px");

            }
            else if(- $(".wrap").offset().top> $(".wrap").height()*0.3){

                $(".ship").css("-webkit-transform","rotate(-7deg)");
                $(".wrap-ship").css("left","-70px");

            } else if(- $(".wrap").offset().top> $(".wrap").height()*0.28){

                $(".ship").css("-webkit-transform","rotate(0deg)");
                $(".wrap-ship").css("left","-75px");

            }else if(- $(".wrap").offset().top> $(".wrap").height()*0.19){

                $(".ship").css("-webkit-transform","rotate(0deg)");
                $(".wrap-ship").css("left","-60px");

            }
            else if(- $(".wrap").offset().top> $(".wrap").height()*0.14){

                $(".ship").css("-webkit-transform","rotate(7deg)");
                $(".wrap-ship").css("left","-20px");

            }
            else if(- $(".wrap").offset().top> $(".wrap").height()*0.12){

                $(".ship").css("-webkit-transform","rotate(-14deg)");
                $(".wrap-ship").css("left","-10px");
               //$(".wrap-ship").css("left","-800px");
            }
            else if(- $(".wrap").offset().top> $(".wrap").height()*0.08){

            //   $(".ship").css("-webkit-transform","rotate(-14deg)");
              // $(".wrap-ship").css("left","0px");
               //$(".wrap-ship").css("left","-800px");
           }
            else{
               $(".wrap-ship").css("left","0px");
               $(".wrap-ship").css("top","100vh");
           }
            if( $(".wrap").offset().top>=-80){
                clearInterval(time1);
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


        }
    },100);


  }


var timeOutEvent=0;
    $(function(){
        preLoadImg();










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
        })
    });

    function longPress(){
        timeOutEvent = 0;

        if( $(".wrap").offset().top<=-80){
            $(".ship1").css("display","none");
            $(".ship2").css("display","block");
            move();
        }
        //alert("长按事件触发");


    }





