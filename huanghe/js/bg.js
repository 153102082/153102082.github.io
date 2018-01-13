

$(function(){
   // console.log($(".bg").height() );
   // console.log($("body").height() );
    //console.log($(".bg").width());
    $(".bg").css("bottom","0px");
   console.log($(".bg").css("bottom"));

});

function move(){
    time1=setInterval(function(){

        $(".bg").css("bottom",parseInt($(".bg").css("bottom"))-10);

        if(parseInt($(".bg").css("bottom"))<=-$(".bg").height()+$("body").height()){
            clearInterval(time1);
        }

    },10);


}

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

        }

        if(timeOutEvent!=0){
            // alert("你这是点击，不是长按");
        }
        return false;
    }
})
function longPress(){
    timeOutEvent = 0;



        move();
    //alert("长按事件触发");
}/**/
