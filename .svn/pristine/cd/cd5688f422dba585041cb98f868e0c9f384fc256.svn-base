import request from '@/utils/request';
enum Api {
    registerEmember = '/api/register/registerEmember',
    sendCode = '/api/register/sendSMSVerificationCode'
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