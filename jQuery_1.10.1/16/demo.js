

$(function(){
    /*
     $('input').bind('click',function(){
         alert('匿名函数！');
     })
     */

    /*
    $('input').bind('click',fn);
    function fn(){
        alert('普通函数！');
    }
    */

    /*
    //同时绑定多个事件处理函数
    $('input').bind('click mouseover',function(){
        alert('匿名函数！');
    })
    */
    /*
    $('input').bind('mouseover mouseout',function(){
        $('div').html(function(index,value){
            return value + '1';
        });
    })
    */

    /*
    //通过键值对同时绑定多个事件处理函数
    $('input').bind({
        'mouseover':function(){
          alert('移入');
        },
        'mouseout':function(){
            alert('移出');
        }
     });
     */

    //使用unbind删除绑定的事件
    /*
    $('input').bind('click mouseover',function(){
        alert('匿名函数！');
    });
    //$('input').unbind();//删除全部事件
    $('input').unbind('mouseover');//只删除选定的事件
    */

    /*
    $('input').bind('click',fn1);
    $('input').bind('click',fn2);
    function fn1(){
        alert('普通函数1！');
    }
    function fn2(){
        alert('普通函数2！');
    }
    $('input').unbind('click',fn2);//只删除选定的函数
*/


    /*
    $('input').click(function(){
        alert('单击！');
    });


    $('input').dbclick(function(){
        alert('双击！');
    });


    $('input').mousedown(function(){
        alert('鼠标左键按下！');
    });


    $(window).unload(function(){//新版本chrome和firefox浏览器不支持了;ie支持
        alert('1');
    });


    $(window).resize(function(){
        alert('文档大小改变了');
    });

    $(window).scroll(function(){
        alert('滚动条改变了');
    });


    $('input').select(function(){
        alert('文本被选定了！');
    });

    $('input').change(function(){
        alert('文本改变了！');
    });

    $('input').submit(function(){   //必须是以‘form’提交
        alert('提交不了！');
    });
    */

    $('form').submit(function(){   //必须是以‘form’提交
        alert('提交了！');
    });
});