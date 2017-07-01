

$(function(){

    //$('a[title]').css('color','red');             //属性选择器,IE6兼容;css不支持IE6
    //$('a[title=num1ber]').css('color','red');        //获取具有这个属性=这个属性值的DOM 对象
    //$('a[title^=num]').css('color','red');      //获取具有这个属性且开头属性值匹配的DOM 对象
    //$('a[title$=ber]').css('color','blue');     //获取具有这个属性且结尾属性值匹配的DOM 对象

    //$('a[title|=num]').css('color','blue');     //获取具有这个属性且等于属性值或开头属性值匹配后面跟一个“-”号的DOM 对象
    //$('a[title!=num1ber]').css('color','blue');

    //$('a[title~=aaa]').css('color','blue'); //获取具有这个属性且属性值是以一个空格分割的列表，其中包含属性值的DOM 对象
    //$('a[title*=asdf]').css('color','blue');//获取具有这个属性且属性值含有一个指定字串的DOM 对象

    $('a[ccc][title=test]').css('color','red');//获取具有这个属性且属性值匹配的DOM对象
});