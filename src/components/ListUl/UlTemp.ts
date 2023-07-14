// 定义初始设置值
declare type UlTemp = {
    UlId:string,               // 设定id
    className?:string,         // 设定class
    styleUl?:object,           // 设定style
    isDom:boolean,             // 是否添加dom，默认为true
    children?:{                   // dom结构
        liId?:string,             // 设定id
        className?:string,        // 设定class
        isStyle:boolean,          // 是否加style
        content:string,           // 输入内容或者html
        objStyle?:any,            // 设定style
    }[]        
}
