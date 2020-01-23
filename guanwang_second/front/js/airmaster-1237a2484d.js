function client() {
    if(window.innerWidth != null)  // ie9 +  最新浏览器
    {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
    else if(document.compatMode === "CSS1Compat")  // 标准浏览器
    {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
    return {   // 怪异浏览器
        width: document.body.clientWidth,
        height: document.body.clientHeight
    }
}
!function(s){var i=client().height;s(".air_sec10").css({height:3*i+"px"}),s(".as10_sliderbox .as10s_item").css({height:i+"px"}),s(window).scroll(function(){var o=s(document).scrollTop(),e=s(".air_sec10").offset().top,t=(2*i+20)/3;o>50?(s(".air_header").addClass("air_header_scroll"),o>e-60&&o<e+3*t?(s(".as10_itembox").fadeIn(),s(".air_sec10 .as10_sliderbox .as10s_item").addClass("as10s_fixed"),s(".air_sec10 .as10_sliderbox .as10s_item").css({position:"fixed","z-index":10}),o>e-10&&o<e+t-10?(s(".as10s_item2").css({opacity:0}),s(".as10s_item3").css({opacity:0}),s(".as10s_item1").css({opacity:1,top:0}),s(".as10_itembox ul li").css({"background-position":"0 0"}),s(".as10_itembox ul li:eq(0)").css({"background-position":"-10px 0"})):o>e+t-10&&o<e+2*t-10?(s(".as10s_item").css({opacity:0}),s(".as10s_item2").css({opacity:1,top:0}),s(".as10_itembox ul li").css({"background-position":"0 0"}),s(".as10_itembox ul li:eq(1)").css({"background-position":"-10px 0"})):o>e+2*t-10&&o<e+3*t-10&&(s(".as10s_item").css({opacity:0}),s(".as10s_item3").css({opacity:1,bottom:0}),s(".as10_itembox ul li").css({"background-position":"0 0"}),s(".as10_itembox ul li:eq(2)").css({"background-position":"-10px 0"}))):(s(".air_sec10 .as10_sliderbox .as10s_item").css({position:"absolute"}),s(".as10_itembox").fadeOut())):s(".air_header").removeClass("air_header_scroll")})}(jQuery),$(document).ready(function(){var s=document.documentElement.clientWidth/19.2+"px";$(".body_content").css({"font-size":s}),$(window).resize(function(){var s=document.documentElement.clientWidth/19.2+"px";$(".body_content").css({"font-size":s})})});