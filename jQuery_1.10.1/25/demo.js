

$(function(){
    /*
    $('.button').click(function(){
        $('#box').animate({
           left:'800px'
        },3000);
    });
    $('.stop').click(function () {
        $('#box').stop();
    });

    //很多时候需要停止正在运行中的动画，jQuery 为此提供了一个.stop()方法。它有两个可
    //选参数：.stop(clearQueue, gotoEnd)；clearQueue 传递一个布尔值(默认为false)，代表是否清空未执行完的
    //动画列队，gotoEnd 代表是否直接将正在执行的动画跳转到末状态(默认值为false)。
    $('.button').click(function(){
        $('#box').animate({left:'300px'},1000)
            .animate({bottom:'300px'},1000)
            .animate({width:'200px'},1000)
            .animate({height:'200px'},1000);
    });
    $('.stop').click(function () {
        $('#box').stop(true,true);
    });


    //时，需要在运动之前有延迟执行，jQuery 为此提供了.delay()
    //方法。这个方法可以在动画之前设置延迟，也可以在列队动画中间加上。
    $('.button').click(function(){
        $('#box').delay(2000).animate({left:'300px'})
            .animate({bottom:'300px'})
            .animate({width:'200px'})
            .animate({height:'200px'});
    });


    //过滤器:animated
    $('#box').slideToggle('slow',function(){
        $(this).slideToggle('slow',arguments.callee);
    });
    $('.ani').click(function(){
        $(':animated').css('backgroundColor','red');
    })


    //六．动画全局属性
    //jQuery 提供了两种全局设置的属性，分别为：$.fx.interval，设置每秒运行的帧数；$.fx.off，
    //关闭页面上所有的动画。
    //$.fx.interval 属性可以调整动画每秒的运行帧数，默认为13 毫秒。数字越小越流畅，但
    //可能影响浏览器性能。
    $.fx.interval = 1000; //默认为13
    $.fx.off=true;
    $('.button').click(function () {
        $('#box').toggle(3000);
    });
     */

    //在.animate()方法中，还有一个参数，easing 运动方式，这个参数，大部分参数值
    //需要通过插件来使用，在后面的课程中，会详细讲解。自带的参数有两个：swing(缓动)、
    //linear(匀速)，默认为swing。
    $('.button').click(function () {
        $('#box').animate({
            left : '800px'
        }, 'slow', 'swing');
        $('#pox').animate({
            left : '800px'
        }, 'slow', 'linear');
    });

});