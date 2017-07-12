

$(function(){
    /*
     //一．显示、隐藏
    $('.show').click(function(){
        $('#box').show();
    });
    $('.hide').click(function(){
        $('#box').hide();
    });


    //show和hide可以传递两个参数,一个是时间(速度),一个是回调函数
    $('.show').click(function(){
        $('#box').show(1000);
    });
    $('.hide').click(function(){
        $('#box').hide(1000);
    });

    //回调函数;实现列队动画
    $('.show').click(function(){
        $('#box').show(1000,function(){
            alert('显示完毕！');
        });
    });
    $('.hide').click(function(){
        $('#box').hide(1000,function(){
            alert('隐藏完毕！');
        });
    });


    //列队动画，递归自调用
    $('.show').click(function(){
        $('.test').first().show('fast',function testShow(){
           $(this).next().show('fast',testShow);
        });
    });
    $('.hide').click(function(){
        $('.test').last().hide('fast',function testHide(){
            $(this).prev().hide('fast',testHide)
        });
    });
     */

    $('.toggle').click(function(){
        $('#box').toggle(1000);
    })
    //二．滑动、卷动
    //jQuery 提供了一组改变元素高度的方法：.slideUp()、.slideDown()和.slideToggle()。顾名
    //思义，向上收缩(卷动)和向下展开(滑动)。


    //三．淡入、淡出
    //jQuery 提供了一组专门用于透明度变化的方法：.fadeIn()和.fadeOut()，分别表示淡入、
//淡出，当然还有一个自动切换的方法：.fadeToggle()。
});