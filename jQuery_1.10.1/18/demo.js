

$(function(){
/*
    $('input').bind('click',function(e){
       alert(e);
    });


    $('input').bind('click',function(e){
        alert(e.type);//获取这个事件的事件类型的字符串，例如：'click'
        alert(typeof e.type);
    });

     $('input').bind('click',function(e){
        alert(e.target);//获取绑定事件的DOM 元素
     });

     $('input').bind('click',function(e){
        alert(e.relatedTarget);//null;获取移入移出目标点离开或进入的那个DOM 元素
     });

     $('input').bind('click',function(e){
        alert(e.currentTarget);//获取冒泡前触发的DOM 元素，等同与this
     });

    $('div').bind('click',function(e){
        alert(e.target);
    });

    $('div').bind('click',function(e){
        alert(e.currentTarget);
    });

    //注意：event.target 得到的是触发元素的DOM，你点了哪个就是哪个
    // event.currentTarget 得到的是监听元素的DOM,你绑定的哪个就是哪个,而this 也是得到监听元素的DOM。

    $('span').bind('mouseover',function(e){
        alert(e.relatedTarget);
    });

    $('span').bind('mouseout',function(e){
        alert(e.relatedTarget);
    });

    $('input').bind('click','123',function(e){
        alert(e.data);//获取事件调用时的额外数据
    });


    $(document).bind('click',function(e){
        alert(e.pageX + ';'+ e.screenX  + ';'+ e.clientX);//获取相对于页面原点的水平/垂直坐标;获取显示器屏幕位置的水平/垂直坐标(非jQuery 封装);获取相对于页面视口的水平/垂直坐标(非jQuery 封装)
    });

    $(document).bind('click',function(e){
        alert(e.pageY + ';'+ e.screenY  + ';'+ e.clientY);//获取相对于页面原点的水平/垂直坐标;获取显示器屏幕位置的水平/垂直坐标(非jQuery 封装);获取相对于页面视口的水平/垂直坐标(非jQuery 封装)
    });

    $('input').bind('click',function(e){
        return 'asdf';
    });
    $('input').bind('click',function(e){
        alert(e.result);//获取上一个相同事件的返回值
    });


    $('input').bind('click',function(e){
        alert(e.timeStamp);//获取事件触发的时间戳
    });

     $(document).bind('mousedown',function(e){
        alert(e.which);//获取鼠标的左中右键(1,2,3)，或获取键盘按键
     });

    $(document).bind('keyup',function(e){
        alert(e.which);//获取鼠标的左中右键(1,2,3)，或获取键盘按键
    });

    */

    $(document).bind('keyup',function(e){
        alert(e.shiftKey);//获取是否按下了alt、shift、ctrl(这三个非jQuery 封装)或meta 键(IE 原生meta 键，jQuery 做了封装)
    });

});