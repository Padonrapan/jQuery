

$(function(){
    var box=$('div').css(['color','width','height']);
    /*
    for(var i in box){
        alert(i+':'+box[i]);
    }
    */

    /*
    $.each(box,function(attr,value){        //遍历原生态对象
        alert(attr + ':' + value);
    });

    $('div').each(function(index,element){  //遍历jQuery对象
        alert(index + ':' + element);
    });
    */

    //设置多个css样式
    //$('div').css('color','red').css('font-size','30px');
    /*
    $('div').css({
       'color':'blue',
        'font-size': '18px'
    });
    */
    /*
    $('div').css('width',function(index,value){
        //局部操作
        return parseInt(value) -200 + 'px';
    });
    */

    //$('div').addClass('red');
    //$('div').addClass('red bg size');
    //$('div').removeClass('bg size');

    /*
    $('div').click(function(){
        $(this).toggleClass('green size',count++%2);   //两个样式之间的切换,默认样式和指定样式的切换;
    });

    var count=0;
    $('div').click(function(){
        $(this).toggleClass('green size',count++%2);   //频率问题;第二个参数为布尔值
    });
    */
   /*
    $('div').click(function(){
        $(this).toggleClass('red');
        if($(this).hasClass('red')){
            $(this).removeClass('green');
        }else{
            $(this).addClass('green');
        }
    });
    */

   /*
   $('div').click(function(){
       $(this).toggleClass(function(){
           return $(this).hasClass('red')?'green':'red';
       });
   });
   */

   var count=0;
   $(document).click(function(){
       $('div').toggleClass(function(index,className,switchBool){
           alert(index + ':' + className + ':'+ switchBool);
           if($(this).hasClass('red')){
               $(this).removeClass('red');
               return 'green';
           }else{
               $(this).removeClass('green');
               return 'red';
           }
       },count++%2);
   });
});