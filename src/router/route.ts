import { RouteRecordRaw } from 'vue-router';

/**
 * 建议：路由 path 路径与文件夹名称相同，找文件可浏览器地址找，方便定位文件位置
 *
 * 路由meta对象参数说明
 * meta: {
 *      title:          菜单栏及 tagsView 栏、菜单搜索名称（国际化）
 *      isLink：        是否超链接菜单，开启外链条件，`1、isLink: 链接地址不为空 2、isIframe:false`
 *      isHide：        是否隐藏此路由
 *      isKeepAlive：   是否缓存组件状态
 *      isAffix：       是否固定在 tagsView 栏上
 *      isIframe：      是否内嵌窗口，开启条件，`1、isIframe:true 2、isLink：链接地址不为空`
 *      roles：         当前路由权限标识，取角色管理。控制路由显示、隐藏。超级管理员：admin 普通角色：common
 *      icon：          菜单、tagsView 图标，阿里：加 `iconfont xxx`，fontawesome：加 `fa xxx`
 * }
 */

// 扩展 RouteMeta 接口
declare module 'vue-router' {
	interface RouteMeta {
		title?: string;
		isLink?: string;
		isHide?: boolean;
		isKeepAlive?: boolean;
		isAffix?: boolean;
		isIframe?: boolean;
		roles?: string[];
		icon?: string;
	}
}


/**
 * 创建一个可以被 Vue 应用程序使用的路由实例
 * @method createRouter(options: RouterOptions): Router
 * @link 参考：https://next.router.vuejs.org/zh/api/#createrouter
 */
export const staticRoutes: Array<RouteRecordRaw> = [
	/**
	 * 说明：
	 * 1、notFoundAndNoPower 默认添加 404、401 界面，防止一直提示 No match found for location with path 'xxx'
	 * 2、backEnd.ts(后端控制路由)、frontEnd.ts(前端控制路由) 中也需要加 notFoundAndNoPower 404、401 界面。
	 *    防止 404、401 不在 layout 布局中，不设置的话，404、401 界面将全屏显示
	 */
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/HomeView.vue'),
		meta: {
			isKeepAlive: true,
		},
		children: [
			{
				path: '/',
				name: 'home',
				component: () => import('@/views/Content/index.vue')
			},
			{
				path: '/search',
				name: 'Product',
				component: () => import('@/views/Product/Search/index.vue'),
			},
			{
				path: '/product-sourcing',
				name: 'ProductSourcing',
				component: () => import('@/views/Product/Sourcing/index.vue'),
			},
			{
				path: '/RFQInquiry',
				name: 'RFQInquiry',
				component: () => import('@/views/RFQ/index.vue'),
			},
		],
	},

]




/**
 * 定义404、401界面
 * @link 参考：https://next.router.vuejs.org/zh/guide/essentials/history-mode.html#netlify
 */
export const notFoundAndNoPower = [
	// {
	// 	path: '/:path(.*)*',
	// 	name: 'notFound',
	// 	component: () => import('@/views/error/404.vue'),
	// 	meta: {
	// 		title: 'message.staticRoutes.notFound',
	// 		isHide: true,
	// 	},
	// },
	// {
	// 	path: '/401',
	// 	name: 'noPower',
	// 	component: () => import('@/views/error/401.vue'),
	// 	meta: {
	// 		title: 'message.staticRoutes.noPower',
	// 		isHide: true,
	// 	},
	// },
];