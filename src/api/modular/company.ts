import request from '@/utils/request';

enum Api {
    getCompanyInfo = '/api/eCompany/detail',
    postSendMsg = '/api/eCompany/sendMsg',
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