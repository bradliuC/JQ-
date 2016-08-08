/**
 * Created by liu on 16/6/27.
 */
jQuery.fn.extend({
    creat_djs:function(num,type){

        var _this = this;
        //var allsecond = num;
        function timeDjs(){

            var D =parseInt(num/(60*60*24));
            var maxH = parseInt(num/(60*60));
            var H = maxH%24;
            var maxM = parseInt(num/60);
            var M = maxM%60;
            var maxS = num;
            var S = maxS%60;

            switch(type)
            {
                case 'D-H-M-S':
                    $(_this).find('.bindD').text(pad(D,2));
                    $(_this).find('.bindH').text(pad(H,2));
                    $(_this).find('.bindM').text(pad(M,2));
                    $(_this).find('.bindS').text(pad(S,2));
                    break;
                case 'H-M-S':
                    $(_this).find('.bindH').text(pad(maxH,2));
                    $(_this).find('.bindM').text(pad(M,2));
                    $(_this).find('.bindS').text(pad(S,2));
                    break;
                case 'M-S':
                    $(_this).find('.bindM').text(pad(maxM,2));
                    $(_this).find('.bindS').text(pad(S,2));
                    break;
                case 'S':
                    $(_this).find('.bindS').text(pad(maxS,2));
                    break;
                default:

            }
            num--
            window.setTimeout(timeDjs,1000);
        }
        function pad(num, n) {
            var i = (num + "").length;
            while(i++ < n) num = "0" + num;
            return num;
        }
        timeDjs();
    }
})