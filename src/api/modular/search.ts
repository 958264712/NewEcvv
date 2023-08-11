import request from '@/utils/request';
enum Api {
	getSearchList = '/api/searchView/getSearchList',
	getRelatedKeyWord = '/api/searchView/getRelatedKeyWord',
	getRelatedCategory = '/api/searchView/getRelatedCategory',
	getLatestProduct = '/api/searchView/getLatestProduct',
	getProductAttributes = '/api/searchView/getProductAttributes',
	getProductInfo = '/ProductSourcing/getProductInfo',
	getProductOrder = '/ProductSourcing/getProductOrder',
}

// 获取搜索信息列表
export const getSearchList = (params?: any) =>
	request({
		url: Api.getSearchList,
		method: 'get',
		params: params,
	});
// 获取相关的关键字
export const getRelatedKeyWord = (params?: any) =>
	request({
		url: Api.getRelatedKeyWord,
		method: 'get',
		params: params,
	});

// 获取相关的类别
export const getRelatedCategory = (params?: any) =>
	request({
		url: Api.getRelatedCategory,
		method: 'get',
		params: params,
	});
// 获取最新产品
export const getLatestProduct = (params?: any) =>
	request({
		url: Api.getLatestProduct,
		method: 'get',
		params: params,
	});
// 获取产品属性
export const getProductAttributes = (params?: any) =>
	request({
		url: Api.getProductAttributes,
		method: 'get',
		params: params,
	});
// 获取产品详情信息
export const getProductInfo = (params?: any) =>
	request({
		url: Api.getProductInfo,
		method: 'get',
		params: params,
	});
// 获取产品详情订单信息
export const getProductOrder = (params?: any) =>
	request({
		url: Api.getProductOrder,
		method: 'get',
		params: params,
	});