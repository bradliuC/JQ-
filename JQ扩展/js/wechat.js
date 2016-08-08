/**
 * Created by liu on 16/7/17.
 */
$(function(){
    var myDate = new Date();
    var mth = myDate.getMonth()+1;
    var day = myDate.getDate();
    var week = myDate.getDay();          //0代表星期天
    var hour = myDate.getHours();       //获取当前小时数(0-23)
    var min =myDate.getMinutes();     //获取当前分钟数(0-59)
    if(mth > 12){
        mth =1;
    }
    if(hour <10){
        hour ='0'+hour;
    }
    if(min <10){
        min ='0'+min;
    }
    switch(week)
    {
        case 1:
            week ='一';
            break;
        case 2:
            week ='二';
            break;
        case 3:
            week ='三';
            break;
        case 4:
            week ='四';
            break;
        case 5:
            week ='五';
            break;
        case 6:
            week ='六';
            break;
        case 0:
            week ='日';
            break;


    }
    $('#now_time').text(hour+":"+min);
    $('#now_date').text(mth+"月"+day+'日'+' 星期'+week);
})

var message_nub =0;
function add_message(){
    var data = messages[message_nub]
    var li = document.createElement('li');
    var html = '<div>'+
                    '<div class="title">'+
                        '<span class="line_type">'+data.type+'</span>'+
                        '<span class="line_time">现在</span>'+
                    '</div>'+
                    '<div class="txt">'+data.txt+'</div>'+
                    '<div class="go_look">滑动来查看</div>'+
                '</div>'
    switch(data.type) {
        case '微信':
            line_type = '微信';
            last_className ='wechat_line';
            break;
        case 'QQ':
            line_type = 'QQ';
            last_className ='QQ_line';
            break;
        case '短信':
            line_type = '短信';
            last_className ='i_message_line';
            break;
        case '支付宝':
            line_type = '支付宝';
            last_className ='zfb_message_line';
            break;

    }
    $(li).addClass('message_lier '+last_className);
    $(li).html(html);
    $('#message_list').prepend(li)
    //document.getElementById('message_list').appendChild(li);
    message_nub++;
    if(message_nub>13){
        return;
    }
    window.setTimeout(add_message,1500)
}