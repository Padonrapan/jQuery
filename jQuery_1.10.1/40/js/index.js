

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
    $('#reg input[title]').tooltip();

});