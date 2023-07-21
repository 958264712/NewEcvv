// 声明左边侧边栏当前项类型
declare type leftAsideListType = {
    title: string;                    // 定义product名称
    list: {                           // 产品相关类型列表
        title: string;                // 类型名称
        ifMore: boolean;              // 是否展开列表
        More: boolean;                // 是否展开更多
        list: {                       // 默认列表
            href: string;             // href
            text: string;             // 文本
        }[];
        moreList: {                   // 更多列表
            href: string;             // href
            text: string;             // 文本
        }[];
    }[];
}
declare type RightAsideListType = {
    title: string;                    // 定义like products名称如you may like products
    list: {                           // 产品列表
        title: string;                // 产品title
        href: string;                 // href
        src: string;                  // 图片src
        code: string;                 // 关键字
        text: string;                 // 其他文字
    }[];
}
declare type ContentMainType = {
    num: number;                      // 搜索到相关条数
    code: string;                     // 搜索关键字如搜索qq，即为qq
    list: {                           // 产品列表
        title: string;                // 产品title
        href: string;                 // href
        src: string;                  // 产品图片src
        ifPrice: boolean;             // 是否有price
        price: string;                // price为多少
        pieceOrSet: string;           // 单位是什么
        ifOrder: boolean;             // 是否有order
        order: string;                // order是什么
        ifAbility: boolean;           // 是否有ability
        Ability: string;              // ability
        list: {                       // 配置信息列表
            name:string,              // 配置信息名字
            text:string               // 信息
        }[];
        from: string;                 // 生产地
        ifIcon: boolean;              // 是否存在icon
        iconHref:string;              // iconhref
    }[];
    alsoSearched: {                   // 关键词列表
        href: string;                 // 关键词href
        text: string;                 // 关键词text
    }[][];
}