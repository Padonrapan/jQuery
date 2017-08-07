

$(function(){
//测试操作
    /*
    $.isArray(obj) 判断是否为数组对象，是返回true
    $.isFunction(obj) 判断是否为函数，是返回true
    $.isEmptyObject(obj) 判断是否为空对象，是返回true
    $.isPlainObjet(obj) 判断是否为纯粹对象，是返回true
    $.contains(obj) 判断DOM 节点是否含另一个DOM 节点，是返回true
    $.type(data) 判断数据类型
    $.isNumeric(data) 判断数据是否为数值
    $.isWindow(data) 判断数据是否为window 对象
    */

    /*
    var arr=[1,2,3];
    alert($.isArray(arr));

    var fn=function(){};
    alert($.isFunction(fn));

    var obj={};
    alert($.isEmptyObject(obj));


    //判断是否由{}或new Object()创造出的对象
    var obj = window;
    alert($.isPlainObject(obj));//false

    */

    //alert($.contains($('#box').get(0),$('#pox').get(0)));

//URL 操作
    var obj={
        name:'user',
        age:20
    };
    alert($.param(obj));


//五．浏览器检测
    /*
    webkit 判断webkit 浏览器，如果是则为true
    mozilla 判断mozilla 浏览器，如果是则为true
    safari 判断safari 浏览器，如果是则为true
    opera 判断opera 浏览器，如果是则为true
    msie 判断IE 浏览器，如果是则为true
    version 获取浏览器版本号
    */
});