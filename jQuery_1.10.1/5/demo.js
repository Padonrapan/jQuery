

$(function(){
    //$('div, p, strong').css('font-size','45px');//群组选择器
    //$('#box, .pox').css('backgroundColor','blue');
    //$('ul li a').css('font-size','45px');//后代选择器
    //alert($('*').size());
    //alert($('*').length);
    //alert($('*')[0]);
//在全局使用*通配选择符,会极大地消耗资源,不建议这么使用;

    //$('ul li a, ul li em, ul li strong').css('font-size','30px');
    //$('ul li a,ul li').css('font-size','60px');
    //$('ul li *').css('color','yellow');//*通配选择符一般用于局部环境内

    //$('div.box').css('color','red');

    $('.box.pox').css('color','blue');//多class选择器; 注意与$('.box,pox')的区别

    //PS:选择器越复杂,字符串解析越慢;
});