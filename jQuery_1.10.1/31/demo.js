

$(function(){
//字符串操作
    var str='                                                       jQuery        ';
    //alert(str);
    //alert($.trim(str));

//数组和对象操作
    /*
    //$.each()操作数组
    var arr=['张三','李四','王五','麻溜'];
    $.each(arr,function(index,value){
        $('#box').html($('#box').html() + (index +1) + value + '</br>');
    });

    //$.each()操作对象
    $.each($.ajax(),function(name,fn){
        $('#box').html($('#box').html() + name + fn + '</br></br>');
    });
    */

    /*
    //$.grep()数组筛选
    var arr=[4,2,6,9,11,25,38,59];
    var arrGrep=$.grep(arr,function(element,index){
        return index<4 && element <6 ;//这里按道理是布尔值,但整体返回一个数组
    });
    alert(arrGrep);
    */

    /*
    //$.map()修改数据
    var arr=[4,2,6,9,11,25,38,59];
    var arrMap=$.map(arr,function(element,index){
        //return index<4 && element <6 ;//这里按布尔值返回的
        if(index<5 && element <6){
            return element;
        }
    });
    alert(arrMap);
    */

    /*
    //$.inArray()获取查找到元素的下标
    var arr = [5,2,9,4,11,57,89,1,23,8];
    var arrInArray = $.inArray(1, arr);
    alert(arrInArray);
    */


    /*
    //$.merge合并数组
    var arr=[4,2,6,9,11,25,38,59];
    var arr2=[200,300];
    alert($.merge(arr,arr2));
    */

    /*
    //$.unique()删除重复的DOM 元素
    var divs=$('div').get();
    //alert(divs);
    divs=divs.concat($('.box').get());
    //alert(divs);
    $.unique(divs);
    alert(divs);
    */

    //.toArray()合并多个DOM 元素组成数组
    //alert($('li').toArray());
});