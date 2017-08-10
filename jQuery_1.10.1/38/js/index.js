

$(function(){

    $('#search_button').button();

//dialog()的方法

    //focus
    /*
    $('#reg').dialog({
        focus:function(e,ui){
            alert('注册');
        }
    });
    $('#login').dialog({
        focus:function(e,ui){
            alert('登录');
        }
    })
    */

    //create;只要创建出来就会执行
    /*
    $('#reg').dialog({
        create:function(e,ui){
            alert('创建');
        },
        autoOpen:false
    });
    */

    //open
    /*
    $('#reg').dialog({
        open:function(e,ui){
            alert('打开');
        },
        autoOpen:true//false时是不执行的
    });
    */

    //close
    /*
    $('#reg').dialog({
        close:function(e,ui){
            alert('关闭');
        }
    });
    */

    //beforeClose
    /*
    $('#reg').dialog({
        beforeClose:function(e,ui){
            alert('将要关闭时');
            return false;
        }
    });
    */

    //drag,每次移动时执行
    /*
    $('#reg').dialog({
        drag:function(e,ui){
            alert('top:'+ ui.position.top);
        }
    });
    //PS:有两个参数(event, ui)。此事件中的ui 有两个属性对象：
     //1.position，得到当前移动的坐标，有两个子属性：top 和left。
     //2.offset，得到当前移动的坐标，有两个子属性：top 和left。
    */

    //dragStart
    /*
    $('#reg').dialog({
        dragStart:function(e,ui){
            alert('top:'+ ui.position.top);
        }
    });
    */

    /*
    //dragStop
    $('#reg').dialog({
        dragStop:function(e,ui){
            alert('top:'+ ui.position.top);
        }
    });
    */

    //调整对话框大小时
    /*
    $('#reg').dialog({
        resize : function (e, ui) {
            alert('size:' + ui.size.width + '\n'
                + 'originalSize:' + ui.originalSize.width);
        }
    });
    */


    /*
     dialog('action', param)方法
     方法返回值说明
     dialog('open') jQuery 对象打开对话框
     dialog('close') jQuery 对象关闭对话框
     dialog('destroy') jQuery 对象删除对话框，直接阻断了dialog。
     dialog('isOpen') 布尔值判断对话框是否打开状态
     dialog('widget') jQuery 对象获取对话框的jQuery 对象
     dialog('option', param) 一般值获取options 属性的值
     dialog('option', param, value) jQuery 对象设置options 属性的值
     */

    //初始隐藏对话框
    $('#reg').dialog({
        autoOpen : false
    });


    //打开对话框
    $('#reg_a').click(function () {
        $('#reg').dialog('open');
    });

    /*
    //关闭对话框
    $('#reg_a').click(function () {
        //$('#reg').dialog('close');
        //$('#reg').dialog('destroy');
    });

     //判断对话框打开或关闭状态
    $(document).click(function () {
        alert($('#reg').dialog('isOpen'));
    });
    */

    //$('#reg').dialog('open').css('color','red');
    //$('#reg').dialog('widget').css('font-size','50px');//widget返回是整个对话框的div对象。

    //PS:．dialog()方法的事件
    //dialog()方法也提供了大量的事件。这些事件可以给各种不同状态时
    //提供回调函数。这些回调函数中的this 值等于对话框内容的div 对象，不是整个对话框的div。

    //alert($('#reg').dialog('option','title'));
    //$('#reg').dialog('option','title','知问注册');

//dialog 中使用on()
    $('#reg').on('dialogclose',function(){
        alert('关闭');
    });

});