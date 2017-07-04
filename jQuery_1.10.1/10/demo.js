

$(function(){
 //方法操作
    //alert($('#box').html());//获取元素中HTML 内容
    //alert($('#box').text());//获取元素中文本内容
    //$('#box').html('<em>www.163.com</em>');//设置元素中HTML 内容
    //$('#box').text('<em>www.163.com</em>');//设置原生中文本内容

    //alert($('input').val());//获取表单中的文本内容
    //$('input').val('163');//设置表单中的文本内容
    //alert($('input').val());
    //$('input').val('male');
    //$('input').val(['男','女']);//value 值是这些的将被选定

//属性操作
    //alert($('#box').attr('id'));//获取某个元素id属性的属性值
    //$('div').attr('title','我是域名');
    /*
    $('div').attr({
        'title':'我是域名',
        'classs':'red',     //class不建议用attr来设置,有更强大和更丰富的方法代替
        'data':'123'
    });
    */

    /*
    $('div').attr('title',function(index,value){
        return '原来的域名是:'+ value +'现在的域名是:'+ index +'域名';
    });
    */

    $('div').html(function(index,value){
        return value + '<em>www.1688.com</em>';
    });

});