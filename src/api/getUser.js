import * as API from './index';

export const getUser=(headers)=>{
  return API.GET('/api/v1/admin/users',headers)
}

export const getUserDetail=(params)=>{
  return API.GET('/api/v1/admin/users',params)
}
