

$(function(){
   //$("#box p").css('color','red');                //后代选择器
    //find() 方法
    //$('#box').find('p').css('color','red');

    //$('#box > p').css('color','blue');          //子选择器;IE6兼容,而在css中不支持
    //children() 方法
    //$('#box').children('p').css('color','yellow');

    //$('#box + p').css('color','red');         //next选择器;IE6兼容,而在css中不支持
    //next() 方法
    //$('#box').next('p').css('color','blue');

    //$('#box ~ p').css('color','blue');
    //nextAll() 方法
    //$('#box').nextAll('p').css('color','green');//nextAll选择器;IE6兼容,而在css中不支持

    /*PS:在find()、next()、nextAll()和children()这四个方法中，如果不传递参数，就相当于传递
    了“*”，即任何节点，不建议这么做，不但影响性能，而且由于精准度不佳可能在复杂
    的HTML 结构时产生怪异的结果。*/

    //prev() 方法
    //$('#box').prev('p').css('color','blue');

    //prevAll() 方法
    //$('#box').prevAll('p').css('color','blue');


    //siblings()方法上下同级所有
    //$('#box').siblings('p').css('color','blue');

    //$('#box').prevAll('p').css('color', 'red'); //同级上所有元素选定
    //('#box').nextAll('p').css('color', 'red'); //同级下所有元素选定
    //$('#box').prevAll('p').nextAll('p').css('color', 'red');    //不可写成这种形式

    //nextUntil() 方法
    $('#box').nextUntil('p').css('color','blue');       //同级下非指定元素选定，遇到则停止
    //prevUbtil() 方法
    $('#box').prevUntil('p').css('color','blue');       //同级上非指定元素选定，遇到则停止

});