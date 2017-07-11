

$(function(){
    /*
    //bind绑定了多个事件
    $('.button').bind('click',function(){
        alert('事件不委托!');
    })
    */

    //事件委托
    /*
    $('.button').live('click',function(){//live()已被删除,需要引入插件;绑定的是document,而非button,所以永远只会绑定一次事件
        alert('事件不委托!');
    });
    */

    //live()的代替方法delegate();live()语义不清晰,因为没有指明绑定了谁；delegate()语义清晰,绑定谁谁就在开头
    $('#box').delegate('.button','click',function(){
        alert('事件不委托!');
    });

    //删除委托事件
    $('#box').undelegate('.button','click');

});