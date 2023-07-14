// 定义初始设置值
declare type TypeTemp = {
    type?: number,                // 判断是为哪种类型1|2|3|4
    name?: string,                // 判断是否添加标题头
    target1?: string,             // a标签默认target
    rel1?: string,                // a标签默认rel
    href1?: string,               // a标签href
    title1?: string,              // a标签title
    src1?: string,                // img标签src地址
    autoplay?: boolean,           // 判断是否自动轮播
    ifHref?: boolean,             // 判断是否需要跳转链接
    isHref?: string,              // 跳转href地址
    titleHref?: string,           // 跳转地址title
    ifPropPrice?: boolean,        // 判断是否添加price等类
    ifName?: boolean,             // 判断是否添加类名
    style?:object,                // 判断添加标签单独样式
    styleAll?:object,             // 判断添加自适应样式
    styleImg?:object,             // 判断添加img自适应样式
    contentObj?: {            
        target: string,           // a标签默认target
        rel: string,              // a标签默认rel
        href: string,             // a标签href
        title: string,            // a标签title
        src: string,              // img标签src地址
    }[]
}

