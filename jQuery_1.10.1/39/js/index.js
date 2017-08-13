

$(function(){

//button()的属性
    $('#search_button').button({
        //disabled:true,
        //label:'搜索',
        icons:{
            primary:'ui-icon-search',
            //secondary:'ui-icon-triangle-1-s'
        },
        //text:false
    });

//PS:注意：对于button 的事件方法，只有一个：create，当创建button 时调用。

//button('action', param)
    //$('#search_button').button('disable');
    //$('#search_button').button('enable');


    $('#reg').dialog({
        'buttons':{
            '提交':function(){

            }
        }
    });

    //$('#reg').parent().find('button').eq(1).button('disable');
    //$('#reg').dialog('widget').find('button').eq(1).button('disable');

    //$('#reg input[type=radio]').button();
    //$('#reg').buttonset();
    $('#reg input[type=checkbox]').button();

});