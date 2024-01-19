import request from '@/utils/request';

enum Api {
    getCompanyInfo = '/api/eCompany/detail',
    postSendMsg = '/api/eCompany/sendMsg',
    requestSample = '/api/eCompany/requestSample',
    customizedRequest = '/api/eCompany/customizedRequest',
}

// 获取公司信息
export const getCompanyInfo = (params?: any) => request({
    url: Api.getCompanyInfo,
    method: 'get',
    params: params,
});

// 发送询盘给供应商
export const postSendMsg = (params?: any) => request({
    url: Api.postSendMsg,
    method: 'post',
    data: params,
});
// 发送寻求样品询盘给供应商
export const requestSample = (params?: any) => request({
    url: Api.requestSample,
    method: 'post',
    data: params,
});
// 发送定制样品询盘给供应商
export const customizedRequest = (params?: any) => request({
    url: Api.customizedRequest,
    method: 'post',
    data: params,
});