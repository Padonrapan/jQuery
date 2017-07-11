

$(function(){

    //普通绑定bind()
    //普通解绑unbind()

    //事件委托live(),delegate()
    //事件解绑die(),ubdelegate()

    //新方法绑定on()
    //新方法解绑off()
/*
    $('.button').on('click',function(e){
        alert('替代bind!');
    });

    //额外数据
    $('.button').on('click',{user:'lee'},function(e){
        alert('替代bind!' + e.data.user);
    });

    //绑定多个事件
    $('.button').on('mouseover mouseout',{user:'lee'},function(e){
        alert('移入移出' + e.data.user);
    });


    //绑定多个事件
    $('.button').on({
        mouseover:function(){
            alert('移入');
        },
        mouseout:function(){
            alert('移出');
        }
    });

    //阻止默认行为并取消冒泡
    $('.button').on('click',function(){
        return false;
    });

    $('.button').on('click',false);//简写

    //移出委托
    $('.button').on('click',function(e){
        alert('替代bind!');
    });
    $('.button').off('click');


    //替代live(),delegate()事件委托
    $('#box').on('click','.button',function(){
        $(this).clone().appendTo('#box');
    });

    //移除委托
    $('#box').off('click','.button');


    //仅仅一次事件触发
    $('.button').one('click',function(){
        alert('仅仅一次事件触发');
    })

    //事件委托
    $('#box').one('click','.button',function(){
        alert('仅仅一次事件触发');
    });
 */
    $('#box').one('click','.button',function(){
        $(this).clone().appendTo('#box');
    });
});