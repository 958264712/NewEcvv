import request from '@/utils/request';
enum Api {
    getAccountInfo = '/api/accountSettings/getAccountInfo',
    sendCode = '/api/accountSettings/sendSMSVerificationCode',
    updateMemberPasswordAction = '/api/accountSettings/updateMemberPasswordAction',
    updatePhoneNumber = '/api/accountSettings/updatePhoneNumber',
    updateEmail = '/api/accountSettings/updateEmail',
    sendVerificationEmail = '/api/accountSettings/sendVerificationEmail',
}
// 获取账号信息
export const getAccountInfo = (params?: any) => request({
    url: Api.getAccountInfo,
    method: 'get',
    params: params,
});
// 发送验证码
export const sendCode = (params?: any) => request({
    url: Api.sendCode,
    method: 'post',
    data: params,
});
// 修改密码
export const updateMemberPasswordAction = (params?: any) => request({
    url: Api.updateMemberPasswordAction,
    method: 'post',
    data: params,
});
// 修改手机号
export const updatePhoneNumber = (params?: any) => request({
    url: Api.updatePhoneNumber,
    method: 'post',
    data: params,
});
// 修改邮箱
export const updateEmail = (params?: any) => request({
    url: Api.updateEmail,
    method: 'post',
    data: params,
});
// 发送邮箱验证码
export const sendVerificationEmail = (params?: any) => request({
    url: Api.sendVerificationEmail,
    method: 'post',
    data: params,
});