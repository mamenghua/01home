import * as API from './index';

export const delectUser=(token,params)=>{
	return API.delete('/api/v1/admin/users',token,params);
}
