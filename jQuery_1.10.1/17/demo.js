

$(function(){
    /*
    $('div').mouseover(function(){
        $('div').css('backgroundColor','red')
    }).mouseout(function(){
        $('div').css('backgroundColor','blue')
    });


    $('div').mouseenter(function(){
        $('div').css('backgroundColor','red')
    }).mouseleave(function(){
        $('div').css('backgroundColor','blue')
    });

    $('div').mouseover(function(){
       $('strong').html(function(index,value){  //mouseover会触发子节点
           return value + '1';
       });
    });


    $('div').mouseenter(function(){
        $('strong').html(function(index,value){  //mouseenter不会触发子节点
            return value + '1';
        });
    });


    $('input').keydown(function(){
        alert('键盘！');
    });


    $('input').keyup(function(){
        alert('键盘！');
    });

     $('input').keydown(function(e){
     alert(e.keyCode);
     });

     $('input').keypress(function(e){
     alert(e.charCode);
     });

     $('input').focus(function(){
     alert('光标激活');
     });

     $('input').blur(function(){
     alert('光标丢失');
     });

     $('input').focusin(function(){
     alert('光标激活');
     });

     //复合事件
     $('div').hover(function(){
     $('div').css('backgroundColor','yellow');
     },function(){
     $('div').css('backgroundColor','orange')
     });
    */

    var count=1;
    $('div').click(function(){
        if(count==1){
            $(this).css('backgroundColor','yellow');
            count=2;
        }else if(count==2){
            $(this).css('backgroundColor','orange');
            count=3;
        }else if(count==3){
            $(this).css('backgroundColor','green');
            count=1;
        }
    });


});