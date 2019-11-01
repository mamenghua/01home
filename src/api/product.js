import * as API from './index';
// 获得商品列表
export const getProducts=(token,params)=>{
	return API.HeadGET('/api/v1/admin/products',token,params);
}
// 新增商品
export const addProducts=(token,params)=>{
	return API.HeadPOST('/api/v1/admin/products',token,params);
}