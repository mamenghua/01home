import * as API from './index';

export const addUser=(token,params)=>{
	return API.HeadPOST('/api/v1/admin/users',token,params);
}
