


//扇形
CanvasRenderingContext2D.prototype.sector = function (x, y, radius, sDeg, eDeg) {
    this.save();
    this.translate(x, y);
    this.beginPath();
    this.arc(0,0,radius,sDeg, eDeg);
    this.save();
    this.rotate(eDeg);
    this.moveTo(radius,0);
    this.lineTo(0,0);
    this.restore();
    this.rotate(sDeg);
    this.lineTo(radius,0);
    this.closePath();
    this.restore();
    return this;
}
var i=0;
function rot() {
    ctx.fillStyle="#88f";
    ctx.sector(w/2,h/2,h/2,0*deg+i,45*deg+i).fill();
    ctx.fillStyle="#7ff";
    ctx.sector(w/2,h/2,h/2,45*deg+i,90*deg+i).fill();
    ctx.fillStyle="#0f0";
    ctx.sector(w/2,h/2,h/2,90*deg+i,135*deg+i).fill();
    ctx.fillStyle="#00f";
    ctx.sector(w/2,h/2,h/2,135*deg+i,180*deg+i).fill();
    ctx.fillStyle="#789";
    ctx.sector(w/2,h/2,h/2,225*deg+i,270*deg+i).fill();
    ctx.fillStyle="#abcdef";
    ctx.sector(w/2,h/2,h/2,270*deg+i,315*deg+i).fill();
    ctx.fillStyle="#f80";
    ctx.sector(w/2,h/2,h/2,315*deg+i,360*deg+i).fill();


}




$(function(){
    var canvas = $("canvas");
    var btn = document.getElementById("btn");
    var ctx = canvas.get(0).getContext("2d");

    w=canvas.get(0).width;
    h=canvas.get(0).height;
    var deg = Math.PI/180;
    ctx.translate(w/2,h/2);
    var colorArr=["#ffff00","#6699ff","#cc9933","#999933","#006633","#333399","#33cc33","#00ffff"];
    var textArr=["苹果6S","电脑","电视","冰箱","空调","洗衣机","宝马","摩托车"];
    var num = Math.PI/180;
    var angle=0;
    var step=20+10*Math.random();

    rota();
    btn.onclick=function(){
        ctx.clearRect(-w/2,-h/2,w,h);
        step=20+10*Math.random();
        rota();
    }
    function rota(){

        var t = setInterval(function(){
            if(step<=0.2){
                clearInterval(t);
                var num1=Math.ceil(angle/45);
                var con=textArr[textArr.length-num1];
                ctx.font="10px 微软雅黑";
                ctx.textAlign="center";
                ctx.fillText("您中的奖品："+con,0,-h/2);
            }else{
                if(angle>=360){
                    angle=0;
                }
                step*=0.95;
                angle+=step;
                ctx.clearRect(0,0,w,h);

                //绘制箭头


                ctx.save();
                ctx.rotate(angle*num);
                for(var i=1;i<=8;i++){
                    ctx.beginPath();
                    ctx.moveTo(0,0);
                    ctx.fillStyle=colorArr[i-1];
                    ctx.arc(0,0,w/2,(i-1)*45*num,i*45*num);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.fill();
                }



                //添加文字
                for(var i=0;i<8;i++){
                    ctx.save();
                    ctx.beginPath();
                    ctx.rotate((i*45+20)*num);
                    ctx.fillStyle="#000";
                    ctx.font="6px 微软雅黑";
                    ctx.fillText(textArr[i],80,0);
                    ctx.restore();
                }
                ctx.restore();
            }
        },60);

    }





    /* setInterval(function(){
         i+=0.2;
         if(i>100){
             i=0;
         }
         ctx.clearRect(0,0,w,h);
         //rot();

     },50);*/

});










