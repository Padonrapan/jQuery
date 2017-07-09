

$(function(){
    //$('div').wrap('<strong></strong>');
    //$('div').wrap('<strong/>');
    //$('div').wrap('<strong>123</strong>');
    //$('div').wrap($('strong').get(0));
    //$('div').wrap(document.createElement('strong'));
    /*
    $('div').wrap(function(index){
       return '<strong>'+ index + '</strong>';
    });
    */
    /*
    $('div').wrap('<strong><em></em></strong>');
    $('div').unwrap();
    $('div').unwrap();
    */

    //$('div').wrap('<strong></strong>');
   // $('div').wrapAll('<strong></strong>');
    //$('div').wrapAll(document.createElement('strong'));

    //$('div').wrapInner('<strong></strong>');

//节点操作
    $('div').click(function(){
        alert('baidu.com');
    });

    //复制节点
    //$('div').clone('ture').appendTo('body');//true--事件也会被复制;false--事件不会被复制

    //删除节点
    //$('div').remove();
    //$('div').remove('#box');
    //alert($('div').remove().get(0));
    //$('div').remove().appendTo('body');

    //删除节点
    //$('div').detach();
    //$('div').detach().appendTo('body');

    //PS:remove()和.detach()都是删除节点，而删除后本身方法可以返回当前被删除的节
    //点对象，但区别在于前者在恢复时不保留事件行为，后者则保留。

    //清空节点
    //$('div').empty();

    //替换节点
    //$('div').replaceWith('<span>DOM</span>')
    $('<span>DOM</span>').replaceAll('div');

});