/*
$(function(){
    $('#box').css('color','red');
});
 jQuery(function(){
 jQuery('#box').css('color','red');
 });
 alert($===jQuery);//true;


$(function(){
    //alert($);       //返回jQuery对象的内部
    //alert($());     //返回jQuery对象
    //alert($('#box'));      //还是返回jQuery对象
    //alert($('#box').css('color','red'));   //整体还是返回的jQuery对象
    $('#box').css('color','red').css('font-size','200px').css('font-style','bold');//连缀
});


window.onload=function(){
    alert('1');
};
window.onload=function(){
    alert('2');
};//只弹出2;window.onload只会执行一次,后面的覆盖前面的。



$(document).ready(function(){   //简写方式$(function(){});
    alert('1');
});
$(document).ready(function(){
    alert('2');
});//只弹出1和2;$(document).ready()会执行多次,后面的不会覆盖前面的。


$(function(){
    alert('1');
});
$(function(){
    alert('2');
});

//PS:window.onload等页面完全加载完才会执行里边的代码；$(document).ready()等待页面DOM结构加载好就执行里边的代码,效率更高
    */

$(function(){
    //alert($('#box'));       //返回jQuery对象
    //alert(document.getElementById('box'));//[object HTMLDivElement],返回原生DOM对象
    alert($('#box').get(0));//get()方法接收一个参数索引值;[object HTMLDivElement],返回原生DOM对象
});

jQuery.noConflict();    //自行了断,将自己的$所有权自行剔除