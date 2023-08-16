import request from '@/utils/request';
enum Api {
    getValidateCode = '/api/sourcingRequest/getValidateCode',
    getCategoryList = '/api/sourcingRequest/getCategoryList',
    fileUpload = '/api/sourcingRequest/fileUpload',
    fileDelete = '/api/sourcingRequest/fileDelete',
    saveCommInquiry = '/api/sourcingRequest/saveCommInquiry',
}
// getValidateCode 获取验证码
export const getValidateCode = (params?: any) =>
    request({
        url: Api.getValidateCode,
        method: 'get',
        params: params,
    });
// getCategoryList 获取类别列表
export const getCategoryList = (params?: any) =>
    request({
        url: Api.getCategoryList,
        method: 'get',
        params: params,
    });
// saveCommInquiry 上传表单
export const saveCommInquiry = (params?: any) =>
    request({
        url: Api.saveCommInquiry,
        method: 'post',
        data: params,
    });
// fileUpload 文件上传
export const fileUpload = (params?: any) =>
    request({
        url: Api.fileUpload,
        method: 'post',
        data: params,
    });
// fileDelete 文件删除
export const fileDelete = (params?: any) =>
    request({
        url: Api.fileDelete,
        method: 'post',
        data: params,
    });