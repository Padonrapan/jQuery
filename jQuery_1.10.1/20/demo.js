

$(function(){
    /*
    $('input').click(function(){
       alert('将使用模拟用户操作来触发');
    });
    //模拟用户点击操作
    $('input').trigger('click');
    */

    /*
    $('input').click(function(e,data1,data2){
        alert(data1 + ';' +data2);
    }).trigger('click',['1243','asdf']);

    //PS:trigger()额外数据时,只有一条数据的时候可以省略中括号,多条不能省略,从第二条之后就不能识别了

    $('input').click(function(e,data1,data2){
        alert(data1 + ';' +data2);
    }).trigger('click',['1243',['a','s','d','f']]);


    //自定义事件
    $('input').bind('myEvent',function(){
        alert('自定义事件');
    }).trigger('myEvent');

    //1..triggerHandler()方法并不会触发事件的默认行为，而.trigger()会。
    $('form').trigger('submit'); //模拟用户执行提交，并跳转到执行页面
    $('form').triggerHandler('submit'); //模拟用户执行提交，并阻止的默认行为

    //如果我们希望使用.trigger()来模拟用户提交，并且阻止事件的默认行为，则需要这么写：
    $('form').submit(function (e) {
        e.preventDefault(); //阻止默认行为
    }).trigger('submit');
    //2..triggerHandler()方法只会影响第一个匹配到的元素，而.trigger()会影响所有。

    //3..triggerHandler()方法会返回当前事件执行的返回值，如果没有返回值，则返回
    //undefined；而.trigger()则返回当前包含事件触发元素的jQuery 对象(方便链式连缀调用)。
    alert($('input').click(function () {
        return 123;
    }).triggerHandler('click')); //返回123，没有return 返回

    //4..trigger()在创建事件的时候，会冒泡。但这种冒泡是自定义事件才能体现出来，是
    //jQuery 扩展于DOM 的机制，并非DOM 特性。而.triggerHandler()不会冒泡。
    var index = 1;
    $('div').bind('myEvent',function(){
        alert('自定义事件' + index);
        index++;
    });
    $('.div3').trigger("myEvent");
*/

    //命名空间
    $('input').bind('click.abc',function(){
        alert('abc');
    });
    $('input').bind('click.xyz',function(){
        alert('xyz');
    });
    $('input').bind('mouseover.abc',function(){
        alert('abc');
    });
    //$('input').unbind('click.abc');
    $('input').unbind('.abc');
});