/**
 * Created by Administrator on 2016/12/11.
 */
export default {
    formatTime:function(time,millionSecond){
        var fDate = '';
        if(millionSecond){
            fDate = new Date(millionSecond);
        }
        else{
            fDate = new Date();
        }
        var o = {
            "M+": fDate.getMonth() + 1,
            "d+": fDate.getDate(),
            "h+": fDate.getHours(),
            "m+": fDate.getMinutes(),
            "s+": fDate.getSeconds(),
            "q+": Math.floor((fDate.getMonth() + 3) / 3),
            "S": fDate.getMilliseconds()
        };
        if (/(y+)/.test(time)){
            time = time.replace(RegExp.$1, (fDate.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o){
            if (new RegExp("(" + k + ")").test(time)){
                time = time.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return time;
    }
}