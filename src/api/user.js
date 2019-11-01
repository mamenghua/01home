import * as API from './index'

export const addUser=(token,params)=>{
	return API.HeadPOST('/api/v1/admin/users',token,params);
}

export const deleteUser=(id,token,params)=>{
	return API.HeadDelete('/api/v1/admin/users/'+id,token,params);
}

export const getUser=(token,headers)=>{
  return API.HeadGET('/api/v1/admin/users',token,headers)
}

export const getUserDetail=(params)=>{
  return API.GET('/api/v1/admin/users',params)
}

export const updataUser=(id,token,params)=>{
  return API.HeadPut('/api/v1/admin/users/'+id,token,params);
}

export const resetUserPassword=(id,token,params)=>{
  return API.HeadPutpsw('/api/v1/admin/users/reset_pwd/'+id,token,params);
}
