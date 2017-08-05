

$(function(){
/*
    $('form input[type=button]').click(function(){
        $.ajax({
            type:'POST',
            url:'user1.php',
            data:$('form').serialize(),
            success:function(response,status,xhr){
                $('#box').html(response);
            },
            //timeout:3000,
            error:function(xhr,errorText,errorType){
                //alert('错误');
                alert(errorText +':'+ errorType);
            }
        });
    });
    //$.post()使用全局.ajaxError()事件提示错误
    $(document).ajaxError(function(event,xhr,settings,errorType){
        //alert('错误');
        //alert(event.type);
        //for(var i in event){
        //    document.write(i +'</br>');
        //}
        //alert(settings);//object
        //for(var i in settings){
        //    document.write(i +'</br>');
        //}
        //alert(settings.url);
    });

    $(document).ajaxStart(function(){
        $('.loading').show();
    }).ajaxStop(function(){
        $('.loading').hide();
    });
*/

    $('form input[type=button]').click(function(){
        $.post('user.php',$('form').serialize());
    });
    $(document).ajaxSend(function(){
        alert('发送请求之前执行');
    }).ajaxComplete(function(){
        alert('请求完成后执行,不管失败与否');
    }).ajaxSuccess(function(){
        alert('发送成功后执行');
    }).ajaxError(function(){
        alert('发送失败后执行');
    })
});