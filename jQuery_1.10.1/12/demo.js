

$(function(){
//宽度设置
    //alert($('div').css('width'));//500px;
    //alert($('div').width());//500;
    //alert(typeof($('div').css('width')));//string;
    //alert(typeof($('div').width()));//number

    //$('div').width(600);
    //$('div').width('600px');
    //$('div').width('600pt');
/*
    $('div').width(function(index,width){
       return width + 100;
    });
    */

//高度设置
    $('div').height(60);

    /*
    alert($('div').width()); //不包含
    alert($('div').innerWidth()); //包含内边距padding
    alert($('div').outerWidth()); //包含内边距padding+边框border
    alert($('div').outerWidth(true)); //包含内边距padding+边框border+外边距margin
*/

    alert($('div').offset().left); //相对于视口的偏移
    alert($('div').position().left); //相对于父元素的偏移
    alert($(window).scrollTop()); //获取当前滚动条的位置
    alert($(window).scrollTop(300)); //设置当前滚动条的位置
});