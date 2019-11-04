import * as API from './index';
// 获得商品分类列表
export const getProductsClassify=(token,params)=>{
	return API.HeadGET('/api/v1/admin/product_categories',token,params);
}
// 新增商品分类
export const addProductsClassify=(token,params)=>{
	return API.HeadPOST('/api/v1/admin/product_categories',token,params);
}