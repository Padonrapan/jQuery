

$(function(){
//子元素过滤器
    //$('li:first-child').css('color','red');//获取每个父元素的第一个子元素
    //$('li:last-child').css('color','red');//获取每个父元素的最后一个
    //$('li:only-child').css('color','red');//获取只有一个子元素的元素

    //$('li:nth-child(2)').css('color','red');//获取每个自定义子元素的元素(索引值从1 开始计算)集合元素
    //$('li:nth-child(3n)').css('color','red');
    //$('li:nth-child(odd)').css('color','red');
    //$('li:nth-child(even)').css('color','red');

//其他方法
    //alert($('.test').is('li'));//true，选择器，检测class 为是否为test;
    //alert($('.test').is($('li')));//true，jQuery 对象集合，同上
    //alert($('.test').is($('li').eq(2)));//true，jQuery 对象单个，同上
    //alert($('.test').is($('li').get(2)));//true，DOM 对象，同上
    //alert($('.test').is(function(){
      //  return $(this).attr('title')=='list3';  //可以自定义各种判断
    //}));
    //PS:必须使用$(this)来表示要判断的元素,否则,不管function里边返回true或false都与调用的元素无关

    //alert($('li').eq(2).hasClass('test'));

    //$('li').slice(2,4).css('color','red');

    //alert($('#box').find('li').end().get(0));
    //$('#box').next('ul').css('color','red');

    //alert($('div:first').contents().size());

    //$('li').filter('.test').css('color','red');
    $('li').filter('.test,:first,:last').css('color','red');


});