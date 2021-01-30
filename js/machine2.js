(function($){
    $.fn.snow = function(options){
    var $flake = $('<div id="snowbox" />').css({'position': 'absolute','z-index':'9999', 'top': '-50px','cursor':'default','-webkit-user-select':'none','-moz-user-select':'none','-ms-user-select':'none','user-select':'none'}).html('❄'),
    documentHeight 	= $(document).height(),
    documentWidth	= $(document).width(),
    defaults = {
        minSize		: 10,
        maxSize		: 20,
        newOn		: 50,
        flakeColor	: "#AFDAEF" /* 此处可以定义雪花颜色，若要白色可以改为#FFFFFF */
    },
    options	= $.extend({}, defaults, options);
    var interval= setInterval( function(){
    var startPositionLeft = Math.random() * documentWidth - 100,
    startOpacity = 0.5 + Math.random(),
    sizeFlake = options.minSize + Math.random() * options.maxSize,
    endPositionTop = documentHeight - 100,
    endPositionLeft = startPositionLeft - 500 + Math.random() * 500,
    durationFall = documentHeight * 10 + Math.random() * 1000;
    $flake.clone().appendTo('body').css({
        left: startPositionLeft,
        opacity: startOpacity,
        'font-size': sizeFlake,
        color: options.flakeColor
    }).animate({
        top: endPositionTop,
        left: endPositionLeft,
        opacity: 0.5
    },durationFall,'linear',function(){
        $(this).remove()
    });
    }, options.newOn);
    };
})(jQuery);
$(function(){
    $.fn.snow({ 
        minSize: 20, /* 定义雪花最小尺寸 */
        maxSize: 50,/* 定义雪花最大尺寸 */
        newOn: 400  /* 定义密集程度，数字越小越密集 */
    });
});
window.onscroll=function(){
    
    var oHead=document.getElementById('topdhh');
    var box=document.getElementById('onebox');
    var h=document.body.scrollTop;
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var tt=document.getElementsByTagName("a")[0];
    var a=document.getElementsByTagName("a")[1];
    var b=document.getElementsByTagName("a")[2];
    var c=document.getElementsByTagName("a")[3];
    var img=document.getElementById("dhlogoo");
    if(t>=500){

        document.onscroll=function(){
            var top=document.body.scrollTop || document.documentElement.scrollTop;
            oHead.style.position="fixed";
            box.style.position="fixed";
            oHead.style.top =0 + 'px';
            box.style.top=12+"%";
            oHead.style.backgroundColor="white";
            oHead.style.boxShadow="1px 1px 15px #646464";
            img.src="images/lgo2.png";
            tt.style.color="#7299CC";
            a.style.color="#7299CC";
            b.style.color="#7299CC";
            c.style.color="#7299CC";
        }
    }else{
        oHead.style.position="absolute"
        box.style.position="absolute";
        oHead.style.top =0 + 'px';
        box.style.top =70 + '%';
        oHead.style.backgroundColor="";
        tt.style.color="white";
        oHead.style.boxShadow="";
        img.src="images/logo.png";//45 60 80
            a.style.color="white";
            b.style.color="white";
            c.style.color="white";

    }
}