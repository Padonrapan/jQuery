

$(function(){

    $('#search_button').button();

    //$('#reg').dialog();
    //$('#login').dialog();

//dialog()的属性
    $('#reg').dialog({
        //dialog外观选项
        title:'知问注册',
        buttons:{
            '提交':function(){
                alert('正在ajax提交中...');
            },
            '取消':function(){
                alert('确认要取消吗?');
            }
        },

     //dialog页面位置的选项,默认为center
        //position:'left top',

     //dialog页面大小的选项
        /*
        width:500,
        height:400,
        minWidth:300,
        minHeight:200,
        */

     //dialog的视觉效果
        //show:'slide',
        //hide:'slide',

     //dialog 行为选项
        //autoOpen:false,
        //draggable:false
        /*
                autoOpen true/布尔值
                默认为true，调用dialog()方法时就会打开对话框；
        如果为false，对话框不可见，但对话框已创建，可
            以通过dialog('open')才能可见。
        draggable true/布尔值默认为true，可以移动对话框，false 无法移动。
        resizable True/布尔值默认为true，可以调整对话框大小，false 无法调整
            modal false/布尔值
            默认为false，对话框外可操作，true 对话框会遮罩
            一层灰纱，无法操作。
        closeText 无/字符串设置关闭按钮的title 文字
        */

    });


    //$('#reg_a').click(function(){
    //    $('#reg').dialog('open');
    //})
});