

$(function(){
    /*
    $("#box").css('color','pink');          //添加一个行为,这个行为是添加一个样式
    $('.pox').css('backgroundColor','red');
    $('div').css('font-size','60px');
    //alert($('.pox').size());
    alert($('.pox').length);
    */
    $('#box > p').css('font-size','30px');

    //jQuery具有容错功能
    //var pox=document.getElementById("pox");
    //pox.style.color='yellow';   //typeerror

    $('#pox').css('font-size','30px');  // jQuery具有容错功能; 不会报错

    //if($('#pox').size()>0){
        // $('#pox').css('font-size','30px');
    //}
    //if($('#pox').length>0){
    // $('#pox').css('font-size','30px');
    //}
    //if($('#box').get(0)){
    //    $('#box').css('color','red');
    //}
    if($('#box')[0]){
        $('#box').css('color','red');
    }
});