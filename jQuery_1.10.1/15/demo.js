

$(function(){
//常规选择器
   //alert($('input').size());
    //alert($('input').val());
    //alert($('input').eq(1).val());  //这种写法语义不清晰
    //alert($('input[type=password]').val());
    //alert($('input[name=pass]').val());

    //alert($('input').size());
    //alert($(':input').size());//选取所有input、textarea、select 和button 元素
    //alert($(':input[name=city]').size());

    //alert($(':text').size());//选择所有单行文本框，即type=text
    //alert($(':password').size());//选择所有密码框，即type=password

    //alert($(':radio').size());
    //alert($(':radio[name=sex]').eq(1).val());

    //alert($('form :hidden').size());

//表单过滤器
    //alert($('form :enabled').size());
    //alert($('form :disabled').size());
    //alert($('form :checked').size());
    alert($('form :selected').get(0));
});