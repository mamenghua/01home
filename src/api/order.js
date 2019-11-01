import * as API from './index'

export const getOrder=(token,params)=>{
	return API.HeadGET('/api/v1/admin/orders',token,params);
}

export const changeOrder=(id,token,params)=>{
	return API.ChangeOrder('/api/v1/admin/orders/'+id,token,params);
}
