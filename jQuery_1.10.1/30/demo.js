

$(function(){

    $('form input[type=button]').click(function(){
       /*
        //$.ajax()加载JSON文件 ?
        $.ajax({
            type:'POST',
            url:'test.json',
            success:function(response,status,xhr){
                alert(response[0].url);
            }
        });


       //本地获取jsonp.php文件成功
        $.ajax({
            type:'POST',
            url:'jsonp.php',
            dataType:'json',
            success:function(response,status,xhr){
                alert(response.a);
            }
        });


        //跨域获取jsonp.php文件,失败
        $.ajax({
            type:'POST',
            url:'http://www.li.cc/jsonp.php',
            dataType:'json',
            success:function(response,status,xhr){
                alert(response.a);
            }
        });
        */

       //jqXHR对象就是.ajax()方法返回的对象
       var jqXHR= $.ajax({
                        type:'POST',
                        url:'user.php',
                        data:$('form').serialize()
                    });
        //alert(jqXHR);
        jqXHR.success(function(response){
            alert(response);
        });
    });


});