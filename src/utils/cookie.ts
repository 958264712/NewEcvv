/**
 * window.Cookie 浏览器cookie
 * @method setCookie 设置cookie缓存
 * @method getCookie 获取cookie缓存
 */

export const setCookie = (cname: string, cvalue: any, exdays: any) => {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires +";domain=.newsiteapi.ecvv.com"; 
}
export const getCookie = (cname: string) => {
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim().split("=");
        if (c[0] === cname) return  c[1];
    }
    return "";
}