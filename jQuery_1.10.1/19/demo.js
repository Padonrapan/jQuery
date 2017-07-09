

$(function(){
    /*
    //冒泡和阻止冒泡
    $('input').click(function(e){
        alert('input');
        e.stopPropagation();//阻止冒泡
    });

    $('div').click(function(){
        alert('div');
        e.stopPropagation();//阻止冒泡
    });
    $(document).click(function(){
        alert('document');
    });


    $('a').click(function(e){
        e.preventDefault();//阻止默认性能行为
        alert('百度');
    });


    //禁止表单提交
    $('input').click(function(e){
        e.preventDefault();//阻止默认性能行为
        alert('提交');
    });
    $('form').submit(function(e){
        e.preventDefault();//阻止默认性能行为
        alert('提交');
    });

//同时阻止冒泡和默认行为
    $('a').click(function(e){
        alert('a');
        e.stopPropagation();//阻止冒泡
        e.preventDefault();//阻止默认性能行为
    });
    $('div').click(function(){
        alert('div');
        e.stopPropagation();//阻止冒泡
    });
    $(document).click(function(){
        alert('document');
    });

    //同时阻止冒泡和默认行为
    $('a').click(function(e){
        alert('a');
        return false;
    });
    $('div').click(function(){
        alert('div');
    });
    $(document).click(function(){
        alert('document');
    });


    $('a').click(function(e){
        alert('a1');
        e.stopImmediatePropagation();//取消事件冒泡，并取消该事件的后续事件处理函数
    });
    $('a').click(function(e){
        alert('a2');
        return false;
    });
    $('div').click(function(){
        alert('div');
    });
    $(document).click(function(){
        alert('document');
    });

    */
    /*
     isDefaultPrevented() 判断是否调用了preventDefault()方法
     stopPropagation() 取消事件冒泡
     isPropagationStopped() 判断是否调用了stopPropagation()方法
     stopImmediatePropagation() 取消事件冒泡，并取消该事件的后续事件处理函数
     isImmediatePropagationStopped() 判断是否调用了stopImmediatePropagation()方法

     */
});