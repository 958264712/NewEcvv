
/**
 * window.Cookie 浏览器cookie
 * @method colorToRGB 将16进制color转位rgba格式
 */

export const colorToRGB = (color:string, opt:number) => {
    let color1, color2, color3;
    color = '' + color;
    if (typeof color !== 'string') return;
    if (color.charAt(0) == '#') {
        color = color.substring(1);
    }
    if (color.length == 3) {
        color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
    }
    if (/^[0-9a-fA-F]{6}$/.test(color)) {
        color1 = parseInt(color.substr(0, 2), 16);
        color2 = parseInt(color.substr(2, 2), 16);
        color3 = parseInt(color.substr(4, 2), 16);
        return 'rgb(' + color1 + ',' + color2 + ',' + color3 + ',' + opt + ')';
    }
};