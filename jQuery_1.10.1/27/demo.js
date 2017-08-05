

$(function(){

    //全局方法get()

    /*
    $("input").click(function(){
        $.get('test.php?url=baidu',function(response,status,xhr){
            $('#box').html(response);
        });
    });
    //通过直接在url问号紧跟传参

     $("input").click(function(){
     $.get('test.php','url=baidu',function(response,status,xhr){
     $('#box').html(response);
     });
     });
     //通过第二个参数data,字符串形式的键值对传参,然后自动转化为问号紧跟传参


    $("input").click(function(){
        $.get('test.php',{
            url:'baidu'
        },function(response,status,xhr){
            $('#box').html(response);
        });
    });
    //通过第二个参数data,对象形式的键值对传参,然后自动转化为问号紧跟传参
    */

/*
    //全局方法post()
    $("input").click(function(){
        $.post('test.php',{
            url:'baidu'
        },function(response,status,xhr){
            $('#box').html(response);
        });
    });
  //通过第二个参数data,对象形式的键值对传参,

    $("input").click(function(){
        $.post('test.php','url=baidu',function(response,status,xhr){
            $('#box').html(response);
        });
    });
    //通过第二个参数data,字符串形式的键值对传参

     $("input").click(function(){
         $.post('test.php?url=baidu',function(response,status,xhr){
            $('#box').html(response);
         });
     });
     //PS:post()方法不能通过直接在url问号紧跟传参

    //get()和post()方法的第四个参数type
    $("input").click(function(){
        $.post('test.php',{
            url:'baidu'
        },function(response,status,xhr){
            $('#box').html(response);
        },'html');//php返回的数据时纯文本,默认为'html'或者'text'
    });


    $("input").click(function(){
        $.post('test.php',{
            url:'baidu'
        },function(response,status,xhr){
            $('#box').html(response);
        },'xml');//本身是纯文本,如果强行按照'xml'或者'json'格式返回的话,就无法获取到数据
    });


    //$.getScript()和$.getJSON()
    $("input").click(function(){
        $.getJSON('test.json',function(response,status,xhr){
            alert(response[0].url);
        });
    });
    */

    $("input").click(function(){
        $.getScript('test.js');
    });
});