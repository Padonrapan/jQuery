

$(function(){
//基本过滤器
    //$('li:first').css('color','red');
    //$('li:last').css('color','red');//最后一个ul的最后一个

    //$('#box li:last').css('color','red');
    //$('ul:first li:last').css('color','red');//第一个ul的最后一个

    //$('li:not(.test)').css('color','blue');

    //$('li:even').css('color','red');//偶数，从0开始
    //$('li:odd').css('color','blue');//奇数

    //$('li:eq(3)').css('color','blue');//指定索引,从0开始,可以是负数,从后面开始算
    //$('li:eq(-3)').css('color','blue');

    //$('li:gt(3)').css('color','blue');//选定大于索引值的所有元素;可以是负数,从后面开始算
    //$('li:gt(-3)').css('color','blue');

    //$('li:lt(3)').css('color','blue');//选定小于索引值的所有元素;可以是负数,从后面开始算
    //$('li:lt(-3)').css('color','blue');

    //$(':header').css('color','blue');
    //$('div:header').css('color','blue');
    //$('div :header').css('color','blue');
    //$('h3:header').css('color','blue');

    //$('input').get(0).focus();
    //$('input:focus').css('backgroundColor','blue');

    //PS:focus 过滤器，必须是网页初始状态的已经被激活焦点的元素才能实现元素获取。而不是鼠标点击或者Tab 键盘敲击激活的。


    //对应的方法
    //$('li').first().css('color','red');
    //$('li').last().css('color','red');
    //$('li').not('.test').css('color','red');
    //$('li').eq(3).css('color','red');

//内容过滤器
    //$("div:contains('1')").css('color','red');
    //$("div:empty").css('backgroundColor','red').css('width','20px').css('height','20px');//选取不包含子元素或空文本的元素
    //$('ul:has(".test")').css('color','red');//选取含有class 是red 的元素;//选择子元素含有class 是test 的元素
    //$('div:parent').css('color','blue');//选取含有子元素或文本的元素

    //对应方法
    //$('ul').has('.test').css('color','red');
    //$('li').parent().css('color','red');//选择当前元素的父元素
    //$('li').parents().css('color','red');//选择当前元素的父元素及祖先元素
    //$('li').parentsUntil('body').css('color','red');////选择当前元素遇到div 父元素停止

//可见性过滤器
    //$('div:hidden').css('color','red').show(1000);
    $('div:visible').css('color','red');
});