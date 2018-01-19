$.fn.uiSearch=function(){
    var ui=$(this);
    $(".ui-search-selected",$(this)).on("click",function(){
        $(".ui-search-select-list").show();
        return false;
    });
    $(".ui-search-select-list a",ui).on("click",function(){
        $(".ui-search-selected",ui).text($(this).text());
        $(".ui-search-select-list",ui).hide();
        return false;
    });
    $("body").on("click",function(){
        $(".ui-search-select-list").hide();
    });
    $(".ui-search-select-list").hide();

}
$.fn.uiTab=function(tabs,cons,focus_prefix){
    var ui=$(this);
    var tabs=$(tabs,ui);
    var cons=$(cons,ui);
    var focus_prefix=focus_prefix|| '';
    tabs.on('click',function(){
        var index=$(this).index();
        tabs.removeClass(focus_prefix+'item_focus').eq(index).addClass(focus_prefix+'item_focus');
        cons.hide().eq(index).show();
        return false;


    });


};

//	从远程获得数据（一般在后台处理）
var getData = function(k,v){

    //	初始化获取所有城区
    if( k === undefined){
        return [{id:1,name:'东城区'},{id:2,name:'西城区'}];
    }
    //	根据城区获得下面的等级（不同城区相同等级的 id 不一样）
    if( k === 'area' ){
        var levelData = {
            1:[  {id:11,name:'一级医院'},{ id:12,name:'二级医院'} ],
            2:[  {id:22,name:'二级医院'} ]
        }
        return levelData[v] || [];
    }
    //	根据等级获取医院
    if( k === 'level'){
        var hospital = {
            11 : [  {id:1,name:'A1医院'},{id:2,name:'A2医院'} ],
            12 : [  {id:3,name:'B1医院'} ],
            22 : [  {id:4,name:'C1医院'},{id:5,name:'C2医院'} ]

        }

        return hospital[v] || [];

    }
    //	根据名称获取科室（科室都是依附在医院下面的）
    if( k === 'name'){
        var department = {
            1 : [  {id:1,name:'骨科'},{id:2,name:'内科'} ],
            2 : [  {id:3,name:'儿科'} ],
            3 : [  {id:4,name:'骨科'},{id:5,name:'内科'} ],
            4 : [  {id:6,name:'儿科'} ],
            5 : [  {id:7,name:'骨科'},{id:8,name:'内科'} ]

        }

        return department[v] || [];
    }
    return [];
}

$.fn.cascading=function(){

    var list=$("select");

    list.on("change",function(){
        var k=$(this).attr("name");
        var v=this.value;
        var data=getData(k,v);
        console.log(list.index(this));
        var select=list.eq(list.index(this)+1);

        select.find('option[value!=-1]').remove();
        for(var j=(list.index(this)+2);j<list.length;j++){
            list.eq(j).find('option[value!=-1]').remove();

        }
        for(var i=0;i < data.length;i++){

            select.append( $('<option>').attr('value',data[i].id).text(data[i].name) );
        }
    });
    var data=getData();

    for(var i=0;i < data.length;i++){

        list.eq(0).append( $('<option>').attr('value',data[i].id).text(data[i].name) );
    }

}

$(function(){

    $('.ui-cascading').cascading();

    /*   var select=$("select[name='area']");
       var data=getData();
       for(var i=0;i < data.length;i++){

           select.append( $('<option>').attr('value',data[i].id).text(data[i].name) );
       }
       $("select[name='area']").on("change",function() {
           var data = getData($(this).attr("name"), this.value);
           console.log(data);
           var select = $("select[name='level']");
           select.find('option[value!=-1]').remove();
           for (var i = 0; i < data.length; i++) {

               select.append($('<option>').attr('value', data[i].id).text(data[i].name));
           }
       });
       $("select[name='level']").on("change",function(){
               var data=getData($(this).attr("name"),this.value);
               console.log(data);
               var select=$("select[name='name']");
               select.find('option[value!=-1]').remove();
               for(var i=0;i < data.length;i++){

                   select.append( $('<option>').attr('value',data[i].id).text(data[i].name) );
               }
       });
       $("select[name='name']").on("change",function(){
           var data=getData($(this).attr("name"),this.value);
           console.log(data);
           var select=$("select[name='department']");
           select.find('option[value!=-1]').remove();
           for(var i=0;i < data.length;i++){

               select.append( $('<option>').attr('value',data[i].id).text(data[i].name) );
           }
       });

   */



    $(".ui-slider-arrow .left").click(function(){
        var a=$(".ui-slider-wrap").css("left");
        a=parseInt(a);
        a=Math.ceil(a/544)*544;
        console.log(a);
        if(-(a/544)<=1){
            $(".ui-slider-wrap").css("left",(a-=544)+"px");
            $(".ui-slider-process > .item").removeClass("item_focus").eq(Math.abs(Math.ceil(a/544))).addClass("item_focus");
        }
    });
    $(".ui-slider-arrow .right").click(function(){
        var a=$(".ui-slider-wrap").css("left");
        a=parseInt(a);
        a=Math.ceil(a/544)*544;
        console.log(a);
        if(-(a/544)>0){
            $(".ui-slider-wrap").css("left",(a+=544)+"px");
            $(".ui-slider-process > .item").removeClass("item_focus").eq(Math.abs(Math.ceil(a/544))).addClass("item_focus");

        }
    });
    $(".ui-slider-process").on("click",".item",function(){
        $(this).addClass("item_focus").siblings().removeClass("item_focus");
        $(".ui-slider-wrap").css("left",$(this).index()*(-544)+"px");
    })

    var time1;
    function timer(){
       time1=setInterval(function(){
            $(".ui-slider-process > .item").eq(Math.floor(Math.random()*(2+1)+0)).click();
        },3000);
    }
   timer();
    $(".ui-slider").on("mouseover",function(){clearInterval(time1);
    });
    $(".ui-slider").on("mouseout",function(){timer();
    });


    $(".ui-menu-item").on("mouseover",function(){
       $(this).find(".ui-menu-item-detail").show();
        $(this).css("background","#fff");
        $(this).find("a").css("color","#666");

    });

    $(".ui-menu-item").on("mouseout",function(){
        $(this).find(".ui-menu-item-detail").hide();
        $(this).css("background","#1fa4f1");
        $(this).find("a").css("color","#d7f3ff");
        $(this).find("a:first").css("color","#fff");
    });



    $('.ui-search').uiSearch();
    $(".content-tab").uiTab('.capiton > .item','.block > .item');
    $(".block .item").uiTab('.block-capiton > .block-capiton-item','.block-wrap','block-capiton-');
    $(window).on('scroll',function(){
        console.log($(window).height());
        if($('body').scrollTop()>$(window).height()){
            $('.go-top').show();

        }else{
            $('.go-top').hide();
        }
        $(".go-top").click(function(){
            $('body').scrollTop("0");


        });
    });


})


/*
 $(".content-tab .capiton").on("click",".item",function(){
        $(this).addClass("item_focus");
        $(this).siblings().removeClass("item_focus");
        $(".content-tab .block > .item").hide();
        $(".content-tab .block > .item").eq($(this).index()).show();

    });
    $(".block-capiton").on("click",".block-capiton-item",function(){
        $(this).addClass("block-capiton-item_focus");
        $(this).siblings().removeClass("block-capiton-item_focus");
        $(".item > .block-wrap").hide();
        $(".item > .block-wrap").eq($(this).index()).show();

    });
$(document).ready(function(){
//e=e||window.event;
//target=e.target||e.srcElement;

    $(".ui-search-selected").click(function(){
        if($(".ui-search-select-list").css("display")=="none"){
            $(".ui-search-select-list").css("display","block");
        }else{
            $(".ui-search-select-list").css("display","none");
        }

    });
    $(".ui-search-select-list").on("click","a",function(e){
        //console.log($(e.target).html());
        $(".ui-search-selected").html($(e.target).html());
        $(".ui-search-select-list").hide();

    });
var a=0;
    $(".ui-slider-wrap").click(function(){


        if(a<2){
            ++a;

        }

        $(".ui-slider-wrap").css("left",(-544*a)+"px");

    })

})


*/

