<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import 'element-plus/theme-chalk/display.css'
// 懒加载 引入组件
const contentMain = defineAsyncComponent(() => import('./components/contentMain.vue'));
const leftAside = defineAsyncComponent(() => import('./components/leftAside.vue'));
const rightAside = defineAsyncComponent(() => import('./components/rightAside.vue'));

// 创建mock数据
const mock1 = ref<leftAsideListType>({
    title: 'Product Attributes',
    list: [
        {
            title: 'Certification',
            ifMore: false,    //默认为false
            More: true,    //默认前三为true
            list: [
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020578.html',
                    text: 'CCC'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020579.html',
                    text: 'CE'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-352101.html',
                    text: 'ISO'
                },
            ],
            moreList: [
                {
                    href: 'https://www.ecvv.com/product-list/110/348-5670.html',
                    text: 'CB'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020582.html',
                    text: 'EMC'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-5670.html',
                    text: 'CB'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020582.html',
                    text: 'EMC'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-5670.html',
                    text: 'CB'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020582.html',
                    text: 'EMC'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-5670.html',
                    text: 'CB'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020582.html',
                    text: 'EMC'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-5670.html',
                    text: 'CB'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020582.html',
                    text: 'EMC'
                },
            ]
        },
        {
            title: 'Certification2',
            ifMore: false,    //默认为false
            More: true,    //默认前三为true
            list: [
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020578.html',
                    text: 'CCC'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020579.html',
                    text: 'CE'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-352101.html',
                    text: 'ISO'
                },
            ],
            moreList: [
                {
                    href: 'https://www.ecvv.com/product-list/110/348-5670.html',
                    text: 'CB'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020582.html',
                    text: 'EMC'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-5670.html',
                    text: 'CB'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020582.html',
                    text: 'EMC'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-5670.html',
                    text: 'CB'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020582.html',
                    text: 'EMC'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-5670.html',
                    text: 'CB'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020582.html',
                    text: 'EMC'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-5670.html',
                    text: 'CB'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020582.html',
                    text: 'EMC'
                },
            ]
        },
        {
            title: 'Certification3',
            ifMore: false,    //默认为false
            More: true,    //默认前三为true
            list: [
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020578.html',
                    text: 'CCC'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020579.html',
                    text: 'CE'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-352101.html',
                    text: 'ISO'
                },
            ],
            moreList: [
                {
                    href: 'https://www.ecvv.com/product-list/110/348-5670.html',
                    text: 'CB'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020582.html',
                    text: 'EMC'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-5670.html',
                    text: 'CB'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020582.html',
                    text: 'EMC'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-5670.html',
                    text: 'CB'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020582.html',
                    text: 'EMC'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-5670.html',
                    text: 'CB'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020582.html',
                    text: 'EMC'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-5670.html',
                    text: 'CB'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020582.html',
                    text: 'EMC'
                },
            ]
        },
        {
            title: 'Certification4',
            ifMore: false,    //默认为false
            More: false,    //默认前三为true
            list: [
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020578.html',
                    text: 'CCC'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020579.html',
                    text: 'CE'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-352101.html',
                    text: 'ISO'
                },
            ],
            moreList: [
                {
                    href: 'https://www.ecvv.com/product-list/110/348-5670.html',
                    text: 'CB'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020582.html',
                    text: 'EMC'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-5670.html',
                    text: 'CB'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020582.html',
                    text: 'EMC'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-5670.html',
                    text: 'CB'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020582.html',
                    text: 'EMC'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-5670.html',
                    text: 'CB'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020582.html',
                    text: 'EMC'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-5670.html',
                    text: 'CB'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020582.html',
                    text: 'EMC'
                },
            ]
        },
        {
            title: 'Certification5',
            ifMore: false,    //默认为false
            More: false,    //默认前三为true
            list: [
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020578.html',
                    text: 'CCC'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020579.html',
                    text: 'CE'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-352101.html',
                    text: 'ISO'
                },
            ],
            moreList: [
                {
                    href: 'https://www.ecvv.com/product-list/110/348-5670.html',
                    text: 'CB'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020582.html',
                    text: 'EMC'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-5670.html',
                    text: 'CB'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020582.html',
                    text: 'EMC'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-5670.html',
                    text: 'CB'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020582.html',
                    text: 'EMC'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-5670.html',
                    text: 'CB'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020582.html',
                    text: 'EMC'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-5670.html',
                    text: 'CB'
                },
                {
                    href: 'https://www.ecvv.com/product-list/110/348-100020582.html',
                    text: 'EMC'
                },
            ]
        },
    ]
})

const mock2 = ref<RightAsideListType>({
    title: 'You may like Products',
    list: [
        {
            title: 'QQ Egg Shape Red Green RedBlue Galaxy Laser Shower Laser Light Projector Holiday Twinkling Star Lights Garden Decoration T2',
            href: 'https://www.ecvv.com/product-sourcing/qq-egg-shape-red-amp-amp-green-red-amp-amp-blue-galaxy-laser-shower-laser-light-projector-holiday-twinkling-star-lights-garden-decoration-t2-4944821-10.html',
            src: 'https://ic10.ecvv.com/upload/SMT/0000113/200x200/32826458425-kfhtb1kw9sfxxxxc1xpxxq6xxfxxx5qq-egg-shape-red-green-red-blue-galaxy-laser-shower-laser-light-projector-holiday-twinkling-star.jpg',
            code: 'QQ',
            text: 'Egg Shape Red  Green Red  Blue Galaxy Laser Shower Laser Light Projector Holiday Twinkling Star Lights Garden Decoration T2'
        },
        {
            title: 'QQ Lover 2017 Beautiful Sheer Sleeve Wedding Dress Vestido De Noiva New Long Sleeve Bridal Gown Rhinestones Pearls Crystals',
            href: 'https://www.ecvv.com/product-sourcing/qq-lover-2017-beautiful-sheer-sleeve-wedding-dress-vestido-de-noiva-new-long-sleeve-bridal-gown-rhinestones-pearls-crystals-4885082-10.html',
            src: 'https://ic10.ecvv.com/upload/SMT/0000572/200x200/32345963789-kfhtb1ex2tsxxxxxxbafxxq6xxfxxxzqq-lover-2017-beautiful-sheer-sleeve-wedding-dress-vestido-de-noiva-new-long-sleeve-bridal-gown.jpg',
            code: 'QQ',
            text: 'Lover 2017 Beautiful Sheer Sleeve Wedding Dress Vestido De Noiva New Long Sleeve Bridal Gown Rhinestones Pearls Crystals'
        },
        {
            title: 'QQ Smart Folding E- Scooter',
            href: 'https://www.ecvv.com/product/4818043.html',
            src: 'https://ic10.ecvv.com/upload/UserImage/20170306/200x200/QQSmartFoldingEscooter_f4450c9c-dd8d-4ce2-bdb7-357084a976f5.png',
            code: 'QQ',
            text: 'Smart Folding E- Scooter'
        },
        {
            title: 'QQ Egg Shape Red  Green Red  Blue Galaxy Laser Shower Laser Light Projector Holiday Twinkling Star Lights Garden Decoration T2',
            href: 'https://www.ecvv.com/product-sourcing/qq-egg-shape-red-amp-amp-green-red-amp-amp-blue-galaxy-laser-shower-laser-light-projector-holiday-twinkling-star-lights-garden-decoration-t2-4944821-10.html',
            src: 'https://ic10.ecvv.com/upload/SMT/0000113/200x200/32826458425-kfhtb1kw9sfxxxxc1xpxxq6xxfxxx5qq-egg-shape-red-green-red-blue-galaxy-laser-shower-laser-light-projector-holiday-twinkling-star.jpg',
            code: 'QQ',
            text: 'Egg Shape Red  Green Red  Blue Galaxy Laser Shower Laser Light Projector Holiday Twinkling Star Lights Garden Decoration T2'
        },
        {
            title: 'QQ Lover 2017 Beautiful Sheer Sleeve Wedding Dress Vestido De Noiva New Long Sleeve Bridal Gown Rhinestones Pearls Crystals',
            href: 'https://www.ecvv.com/product-sourcing/qq-lover-2017-beautiful-sheer-sleeve-wedding-dress-vestido-de-noiva-new-long-sleeve-bridal-gown-rhinestones-pearls-crystals-4885082-10.html',
            src: 'https://ic10.ecvv.com/upload/SMT/0000572/200x200/32345963789-kfhtb1ex2tsxxxxxxbafxxq6xxfxxxzqq-lover-2017-beautiful-sheer-sleeve-wedding-dress-vestido-de-noiva-new-long-sleeve-bridal-gown.jpg',
            code: 'QQ',
            text: 'Lover 2017 Beautiful Sheer Sleeve Wedding Dress Vestido De Noiva New Long Sleeve Bridal Gown Rhinestones Pearls Crystals'
        },
        {
            title: 'QQ Smart Folding E- Scooter',
            href: 'https://www.ecvv.com/product/4818043.html',
            src: 'https://ic10.ecvv.com/upload/UserImage/20170306/200x200/QQSmartFoldingEscooter_f4450c9c-dd8d-4ce2-bdb7-357084a976f5.png',
            code: 'QQ',
            text: 'Smart Folding E- Scooter'
        },
        {
            title: 'QQ Egg Shape Red amp; Green Red amp; Blue Galaxy Laser Shower Laser Light Projector Holiday Twinkling Star Lights Garden Decoration T2',
            href: 'https://www.ecvv.com/product-sourcing/qq-egg-shape-red-amp-amp-green-red-amp-amp-blue-galaxy-laser-shower-laser-light-projector-holiday-twinkling-star-lights-garden-decoration-t2-4944821-10.html',
            src: 'https://ic10.ecvv.com/upload/SMT/0000113/200x200/32826458425-kfhtb1kw9sfxxxxc1xpxxq6xxfxxx5qq-egg-shape-red-green-red-blue-galaxy-laser-shower-laser-light-projector-holiday-twinkling-star.jpg',
            code: 'QQ',
            text: 'Egg Shape Red amp; Green Red amp; Blue Galaxy Laser Shower Laser Light Projector Holiday Twinkling Star Lights Garden Decoration T2'
        },
        {
            title: 'QQ Lover 2017 Beautiful Sheer Sleeve Wedding Dress Vestido De Noiva New Long Sleeve Bridal Gown Rhinestones Pearls Crystals',
            href: 'https://www.ecvv.com/product-sourcing/qq-lover-2017-beautiful-sheer-sleeve-wedding-dress-vestido-de-noiva-new-long-sleeve-bridal-gown-rhinestones-pearls-crystals-4885082-10.html',
            src: 'https://ic10.ecvv.com/upload/SMT/0000572/200x200/32345963789-kfhtb1ex2tsxxxxxxbafxxq6xxfxxxzqq-lover-2017-beautiful-sheer-sleeve-wedding-dress-vestido-de-noiva-new-long-sleeve-bridal-gown.jpg',
            code: 'QQ',
            text: 'Lover 2017 Beautiful Sheer Sleeve Wedding Dress Vestido De Noiva New Long Sleeve Bridal Gown Rhinestones Pearls Crystals'
        },
        {
            title: 'QQ Smart Folding E- Scooter',
            href: 'https://www.ecvv.com/product/4818043.html',
            src: 'https://ic10.ecvv.com/upload/UserImage/20170306/200x200/QQSmartFoldingEscooter_f4450c9c-dd8d-4ce2-bdb7-357084a976f5.png',
            code: 'QQ',
            text: 'Smart Folding E- Scooter'
        },
        {
            title: 'QQ Smart Folding E- Scooter',
            href: 'https://www.ecvv.com/product/4818043.html',
            src: 'https://ic10.ecvv.com/upload/UserImage/20170306/200x200/QQSmartFoldingEscooter_f4450c9c-dd8d-4ce2-bdb7-357084a976f5.png',
            code: 'QQ',
            text: 'Smart Folding E- Scooter'
        },
    ]
})
const mock3 = ref<ContentMainType>({
    num: 134,
    code: 'QQ',
    list: [
        {
            title: 'QQ,CHERY ,STEEL WHEEL,CAR WHEEL',
            href: 'https://www.ecvv.com/product/4344445.html',
            src: 'https://ic10.ecvv.com/upload/Product/20145/200x200/ChinaQQ_CHERY_STEEL_WHEEL_CAR_WHEEL201456943233.jpg',
            ifPrice: true,
            price: 'USD 8.50 - 9.50',
            pieceOrSet: 'Piece',
            ifOrder: true,
            order: '200 Pieces',
            ifAbility: true,
            Ability: '2,800  Piece/Pieces per Day',
            list: [{
                name: 'Product Brief',
                text: 'S11(13X5J) Rim size:13X5J, Spoke Dia.:290+0.6, PCD: 4-114.3-13.5, CB:69+0.8,ET:451 Color: Black or Silver Material: B510CL,Q235B:5MM Package: Carton box / Pallet',
            },
            {
                name: 'color',
                text: 'red,blue'
            }
            ],
            from: 'Wuhu Feichi Automotive Components Technology Co., Ltd.',
            ifIcon: true,
            iconHref: '//cn.ecvv.com/cnsupplier/items.html '
        },
        {
            title: 'QQ,CHERY ,STEEL WHEEL,CAR WHEEL',
            href: 'https://www.ecvv.com/product/4344445.html',
            src: 'https://ic10.ecvv.com/upload/Product/20145/200x200/ChinaQQ_CHERY_STEEL_WHEEL_CAR_WHEEL201456943233.jpg',
            ifPrice: true,
            price: 'USD 8.50 - 9.50',
            pieceOrSet: 'Piece',
            ifOrder: true,
            order: '200 Pieces',
            ifAbility: true,
            Ability: '2,800  Piece/Pieces per Day',
            list: [{
                name: 'Product Brief',
                text: 'S11(13X5J) Rim size:13X5J, Spoke Dia.:290+0.6, PCD: 4-114.3-13.5, CB:69+0.8,ET:451 Color: Black or Silver Material: B510CL,Q235B:5MM Package: Carton box / Pallet',
            },
            {
                name: 'color',
                text: 'red,blue'
            }
            ],
            from: 'Wuhu Feichi Automotive Components Technology Co., Ltd.',
            ifIcon: true,
            iconHref: '//cn.ecvv.com/cnsupplier/items.html '
        },
        {
            title: 'QQ,CHERY ,STEEL WHEEL,CAR WHEEL',
            href: 'https://www.ecvv.com/product/4344445.html',
            src: 'https://ic10.ecvv.com/upload/Product/20145/200x200/ChinaQQ_CHERY_STEEL_WHEEL_CAR_WHEEL201456943233.jpg',
            ifPrice: false,
            price: 'USD 8.50 - 9.50',
            pieceOrSet: 'Piece',
            ifOrder: false,
            order: '200 Pieces',
            ifAbility: false,
            Ability: '2,800  Piece/Pieces per Day',
            list: [{
                name: 'Product Brief',
                text: 'S11(13X5J) Rim size:13X5J, Spoke Dia.:290+0.6, PCD: 4-114.3-13.5, CB:69+0.8,ET:451 Color: Black or Silver Material: B510CL,Q235B:5MM Package: Carton box / Pallet',
            },
            {
                name: 'color',
                text: 'red,blue'
            }
            ],
            from: 'Wuhu Feichi Automotive Components Technology Co., Ltd.',
            ifIcon: true,
            iconHref: '//cn.ecvv.com/cnsupplier/items.html '
        },
        {
            title: 'QQ,CHERY ,STEEL WHEEL,CAR WHEEL',
            href: 'https://www.ecvv.com/product/4344445.html',
            src: 'https://ic10.ecvv.com/upload/Product/20145/200x200/ChinaQQ_CHERY_STEEL_WHEEL_CAR_WHEEL201456943233.jpg',
            ifPrice: true,
            price: 'USD 8.50 - 9.50',
            pieceOrSet: 'Piece',
            ifOrder: false,
            order: '200 Pieces',
            ifAbility: false,
            Ability: '2,800  Piece/Pieces per Day',
            list: [{
                name: 'Product Brief',
                text: 'S11(13X5J) Rim size:13X5J, Spoke Dia.:290+0.6, PCD: 4-114.3-13.5, CB:69+0.8,ET:451 Color: Black or Silver Material: B510CL,Q235B:5MM Package: Carton box / Pallet',
            },
            {
                name: 'color',
                text: 'red,blue'
            }
            ],
            from: 'Wuhu Feichi Automotive Components Technology Co., Ltd.',
            ifIcon: true,
            iconHref: '//cn.ecvv.com/cnsupplier/items.html '
        },
        {
            title: 'QQ,CHERY ,STEEL WHEEL,CAR WHEEL',
            href: 'https://www.ecvv.com/product/4344445.html',
            src: 'https://ic10.ecvv.com/upload/Product/20145/200x200/ChinaQQ_CHERY_STEEL_WHEEL_CAR_WHEEL201456943233.jpg',
            ifPrice: false,
            price: 'USD 8.50 - 9.50',
            pieceOrSet: 'Piece',
            ifOrder: true,
            order: '200 Pieces',
            ifAbility: false,
            Ability: '2,800  Piece/Pieces per Day',
            list: [{
                name: 'Product Brief',
                text: 'S11(13X5J) Rim size:13X5J, Spoke Dia.:290+0.6, PCD: 4-114.3-13.5, CB:69+0.8,ET:451 Color: Black or Silver Material: B510CL,Q235B:5MM Package: Carton box / Pallet',
            },
            {
                name: 'color',
                text: 'red,blue'
            }
            ],
            from: 'Wuhu Feichi Automotive Components Technology Co., Ltd.',
            ifIcon: false,
            iconHref: '//cn.ecvv.com/cnsupplier/items.html '
        },
        {
            title: 'QQ,CHERY ,STEEL WHEEL,CAR WHEEL',
            href: 'https://www.ecvv.com/product/4344445.html',
            src: 'https://ic10.ecvv.com/upload/Product/20145/200x200/ChinaQQ_CHERY_STEEL_WHEEL_CAR_WHEEL201456943233.jpg',
            ifPrice: true,
            price: 'USD 8.50 - 9.50',
            pieceOrSet: 'Piece',
            ifOrder: false,
            order: '200 Pieces',
            ifAbility: true,
            Ability: '2,800  Piece/Pieces per Day',
            list: [{
                name: 'Product Brief',
                text: 'S11(13X5J) Rim size:13X5J, Spoke Dia.:290+0.6, PCD: 4-114.3-13.5, CB:69+0.8,ET:451 Color: Black or Silver Material: B510CL,Q235B:5MM Package: Carton box / Pallet',
            },
            {
                name: 'color',
                text: 'red,blue'
            }
            ],
            from: 'Wuhu Feichi Automotive Components Technology Co., Ltd.',
            ifIcon: false,
            iconHref: '//cn.ecvv.com/cnsupplier/items.html '
        },
        {
            title: 'QQ,CHERY ,STEEL WHEEL,CAR WHEEL',
            href: 'https://www.ecvv.com/product/4344445.html',
            src: 'https://ic10.ecvv.com/upload/Product/20145/200x200/ChinaQQ_CHERY_STEEL_WHEEL_CAR_WHEEL201456943233.jpg',
            ifPrice: true,
            price: 'USD 8.50 - 9.50',
            pieceOrSet: 'Piece',
            ifOrder: true,
            order: '200 Pieces',
            ifAbility: false,
            Ability: '2,800  Piece/Pieces per Day',
            list: [{
                name: 'Product Brief',
                text: 'S11(13X5J) Rim size:13X5J, Spoke Dia.:290+0.6, PCD: 4-114.3-13.5, CB:69+0.8,ET:451 Color: Black or Silver Material: B510CL,Q235B:5MM Package: Carton box / Pallet',
            },
            {
                name: 'color',
                text: 'red,blue'
            }
            ],
            from: 'Wuhu Feichi Automotive Components Technology Co., Ltd.',
            ifIcon: false,
            iconHref: '//cn.ecvv.com/cnsupplier/items.html '
        },
        {
            title: 'QQ,CHERY ,STEEL WHEEL,CAR WHEEL',
            href: 'https://www.ecvv.com/product/4344445.html',
            src: 'https://ic10.ecvv.com/upload/Product/20145/200x200/ChinaQQ_CHERY_STEEL_WHEEL_CAR_WHEEL201456943233.jpg',
            ifPrice: false,
            price: 'USD 8.50 - 9.50',
            pieceOrSet: 'Piece',
            ifOrder: true,
            order: '200 Pieces',
            ifAbility: true,
            Ability: '2,800  Piece/Pieces per Day',
            list: [{
                name: 'Product Brief',
                text: 'S11(13X5J) Rim size:13X5J, Spoke Dia.:290+0.6, PCD: 4-114.3-13.5, CB:69+0.8,ET:451 Color: Black or Silver Material: B510CL,Q235B:5MM Package: Carton box / Pallet',
            },
            {
                name: 'color',
                text: 'red,blue'
            }
            ],
            from: 'Wuhu Feichi Automotive Components Technology Co., Ltd.',
            ifIcon: false,
            iconHref: '//cn.ecvv.com/cnsupplier/items.html '
        },
    ],
    alsoSearched: [
        [
            {
                href: "https://www.ecvv.com/product_directory/c-amino-acid.html",
                text: 'c amino acid'
            },
            {
                href: "https://www.ecvv.com/product_directory/amino-acids.html",
                text: 'amino acids'
            },
            {
                href: "https://www.ecvv.com/product_directory/c-amino-acid.html",
                text: 'c amino acid'
            },
            {
                href: "https://www.ecvv.com/product_directory/amino-acids.html",
                text: 'Sodium Acid'
            },
            {
                href: "https://www.ecvv.com/product_directory/l-leucine.html",
                text: 'l leucine'
            },

        ],
        [
            {
                href: "https://www.ecvv.com/product_directory/c-amino-acid.html",
                text: 'c amino acid'
            },
            {
                href: "https://www.ecvv.com/product_directory/amino-acids.html",
                text: 'amino acids'
            },
            {
                href: "https://www.ecvv.com/product_directory/c-amino-acid.html",
                text: 'c amino acid'
            },
            {
                href: "https://www.ecvv.com/product_directory/amino-acids.html",
                text: 'Sodium Acid'
            },
            {
                href: "https://www.ecvv.com/product_directory/l-leucine.html",
                text: 'l leucine'
            },

        ],
        [
            {
                href: "https://www.ecvv.com/product_directory/c-amino-acid.html",
                text: 'c amino acid'
            },
            {
                href: "https://www.ecvv.com/product_directory/amino-acids.html",
                text: 'amino acids'
            },
            {
                href: "https://www.ecvv.com/product_directory/c-amino-acid.html",
                text: 'c amino acid'
            },
            {
                href: "https://www.ecvv.com/product_directory/amino-acids.html",
                text: 'Sodium Acid'
            },
            {
                href: "https://www.ecvv.com/product_directory/l-leucine.html",
                text: 'l leucine'
            },

        ],
        [
            {
                href: "https://www.ecvv.com/product_directory/c-amino-acid.html",
                text: 'c amino acid'
            },
            {
                href: "https://www.ecvv.com/product_directory/amino-acids.html",
                text: 'amino acids'
            },
            {
                href: "https://www.ecvv.com/product_directory/c-amino-acid.html",
                text: 'c amino acid'
            },
            {
                href: "https://www.ecvv.com/product_directory/amino-acids.html",
                text: 'Sodium Acid'
            },
            {
                href: "https://www.ecvv.com/product_directory/l-leucine.html",
                text: 'l leucine'
            },

        ],
        [
            {
                href: "https://www.ecvv.com/product_directory/c-amino-acid.html",
                text: 'c amino acid'
            },
            {
                href: "https://www.ecvv.com/product_directory/amino-acids.html",
                text: 'amino acids'
            },
            {
                href: "https://www.ecvv.com/product_directory/c-amino-acid.html",
                text: 'c amino acid'
            },
            {
                href: "https://www.ecvv.com/product_directory/amino-acids.html",
                text: 'Sodium Acid'
            },
            {
                href: "https://www.ecvv.com/product_directory/l-leucine.html",
                text: 'l leucine'
            },

        ],
    ]
})
// 获取当前点击more状态
const onMore = (item: boolean, index: number) => {
    mock1.value.list.map((i: any, ind: number) => {
        if (ind === index) {
            i.More = item
        }
    })
};
// 获取当前点击more状态
const onifMore = (item: boolean, index: number) => {
    mock1.value.list.map((i: any, ind: number) => {
        if (ind === index) {
            i.ifMore = item
        }
    })
};
</script>
<template>
    <main>
        <el-row>
            <el-col :span="2" class="hidden-md-and-down">
                <leftAside :leftAside='mock1' @onMore="onMore" @onifMore="onifMore" />
            </el-col>
            <el-col :span="6">
                <contentMain :contentMain='mock3' />
            </el-col>
            <el-col :span="2" class="hidden-lg-and-down">
                <rightAside :rightAside='mock2' />
            </el-col>
        </el-row>
    </main>
</template>
<style scoped lang="scss">
main {
    width: 1440px;
    height: 100%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
}
.el-row{
    flex-wrap: nowrap;
}
a,
a:link {
    color: #004B91;
    text-decoration: none;
}
</style>