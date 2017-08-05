

$(function(){

    //局部load()
    /*
    //一个参数
    $("input").click(function(){
        $("#box").load("test.html");
    });

    $("input").click(function(){
        $("#box").load("test.html .url");
    });
     */

    /*
    //以get方式提交服务器端文件
    $("input").click(function(){
        $("#box").load("test.php?url=baidu");
    });


    //以post方式提交服务器端文件;两个参数
    $("input").click(function(){
        $("#box").load("test.php",{
            url:'baidu'
        });
    });
     */

    //第三个参数,回调函数
    /*
    $("input").click(function(){
        $("#box").load("test.php",{
            url:'baidu'
        },function(){
            alert("baidu");
        });
    });
    */
    //回调函数可以传三个参数:：response（服务器端返回的内容）、textStatus（请求状态)、XMLHttpRequest（XMLHttpRequest 对象）。
    $("input").click(function(){
        $("#box").load("test.php",{
            url:'baidu'
        },function(response,status,xhr){
            //alert(response);
            //$('#box').html(response + "123");
            //alert(status);
            //alert(xhr);
            //alert(xhr.responseText);
            //alert(xhr.responseXML);
            //alert(xhr.status);
            alert(xhr.statusText);
        });
    });

    //status 得到的值，如果成功返回数据则为：success，否则为：error
});