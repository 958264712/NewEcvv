import request from '@/utils/request';
enum Api {
    registerEmember = '/api/register/registerEmember',
    sendCode = '/api/register/sendSMSVerificationCode',
    isExistUserName = '/api/register/isExistUserName',
    isExistPhoneNumber = '/api/register/isExistPhoneNumber',
    isExistEmail = '/api/register/isExistEmail',
}
// 注册用户
export const registerEmember = (params?: any) => request({
    url: Api.registerEmember,
    method: 'post',
    data: params,
});
// 发送验证码
export const sendCode = (params?: any) => request({
    url: Api.sendCode,
    method: 'post',
    data: params,
});
// 判断用户名是否存在
export const isExistUserName = (params?: any) => request({
    url: Api.isExistUserName,
    method: 'post',
    data: params,
});
// 判断手机号是否存在
export const isExistPhoneNumber = (params?: any) => request({
    url: Api.isExistPhoneNumber,
    method: 'post',
    data: params,
});
// 判断邮箱是否存在
export const isExistEmail = (params?: any) => request({
    url: Api.isExistEmail,
    method: 'post',
    data: params,
});
