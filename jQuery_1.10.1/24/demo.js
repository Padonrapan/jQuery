

$(function(){
    /*
    $('.button').click(function(){
       $('#box').animate({
           width:'200px',
           height:'200px',
           opacity:0.5,
           fontSize:'50px'
       }) ;
    });

    //必传的参数只有一个，就是一个键值对CSS 变化样式的对象。还有两个可选参数分别
    //为速度和回调函数。
    $('.button').click(function () {
        $('#box').animate({
            'width' : '300px',
            'height' : '200px'
        }, 1000, function () {
            alert('动画执行完毕执行我！');
        });
    });


    $('.button').click(function(){
        $('#box').animate({
            left:'200px',
            top:'300px'
        },'normal',function(){
            alert('动画执行完毕执行我！');
        })
    });


    //自定义动画中，每次开始运动都必须是初始位置或初始状态，而有时我们想通过当前位
    //置或状态下再进行动画。jQuery 提供了自定义动画的累加、累减功能。
    $('.button').click(function () {
        $('#box').animate({
            'left' : '+=100px',
        });
    });



    //自定义实现列队动画的方式，有两种：1.在回调函数中再执行一个动画；2.通过连缀或
    //顺序来实现列队动画。

    //1.在回调函数中再执行一个动画
    $('.button').click(function(){
        $('#box').animate({
            left:'200px'
        },function(){
            $('#box').animate({
                top:'300px'
            },function(){
                $('#box').animate({
                    opacity:0.5
                })
            })
        })
    });


    //2.通过连缀或顺序来实现列队动画。
    $('.button').click(function () {
        $('#box').animate({'left' : '100px'});
        $('#box').animate({'top' : '100px'});
        $('#box').animate({'width' : '300px'});
    });
    //注意：如果不是同一个元素，就会实现同步动画


    //连缀无法实现按顺序列队
    $('#box').slideUp('slow').slideDown('slow').css('background', 'red');
    //注意：如果动画方法，连缀可以实依次列队，而.css()方法不是动画方法，会在一开始
    //传入列队之前。那么，可以采用动画方法的回调函数来解决。


    //使用.queue()方法模拟动画方法跟随动画方法之后
    $('.button').click(function(){
        $('#box').slideUp('slow').slideDown('slow').queue(function () {
            $(this).css('background', 'red');
        });
    });
     */
    //使用next 参数来实现继续调用列队动画
    $('.button').click(function() {
        $('#box').slideUp('slow').slideDown('slow').queue(function (next) {
            $(this).css('background', 'red');
            next();
        }).hide('slow');
    });
    //，jQuery 的.queue()的回调函数可以
    //传递一个参数，这个参数是next 函数，在结尾处调用这个next()方法即可再连缀执行列队动
    //画。
});