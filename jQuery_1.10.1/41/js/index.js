

$(function(){

    $('#search_button').button({
        icons:{
            primary:'ui-icon-search'
        }
    });


    $('#reg').dialog({
        autoOpen:true,
        modal:true,
        width:320,
        height:340,
        resizable:false,
        'buttons':{
            '提交':function(){

            }
        }
    });
    $('#reg').buttonset();
    $('#date').datepicker();
    //$('#reg input[title]').tooltip();


    $('[title]').tooltip({
//tooltip()的属性
      //外观属性
        //dispaly:true,
        //content:'改变title',
        //items:'input',
        //tooltipClass:'a'

      //位置属性
        position:{
            my:'left center',
            at:'right+5 center'
        },

      //视觉属性
        //show:'slide',
        //hide:'slide',

      //行为属性
        //track:true

//tooltip()方法的事件
        //open:function(e,ui){
        //    alert('打开时触发' + ui.tooltip.length);
        //}


    });
//tooltip('action', param)方法
    //$('#pass').tooltip('open');

//．tooltip()中使用on()
    //$('#reg').on('tooltipopen',function(){
    //    alert('打开时触发！');
    //});
});