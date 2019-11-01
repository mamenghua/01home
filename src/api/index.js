import axios from 'axios';
let baseURL = process.env.API_URL;
export const GET = (url,params)=>{
    return axios.get(`${baseURL}${url}`,{params:params}).then((data)=>{
        return data;
    })
}
export const POST = (url,params)=>{
    return axios.post(`${baseURL}${url}`,params).then((data)=>data);
}

export const HeadGET = (url,token,params)=>{
    return axios({
        url:`${baseURL}${url}`,
        method:'get',
        headers:{
            "authorization":"Bearer "+token
        },
        params:params
    }).then((data)=>{
        return data;
    })
}

<<<<<<< HEAD
export const HeadPut = (url,token,params)=>{
    return axios({
        url:`${baseURL}${url}`,
        method:'put',
=======
export const HeadPOST = (url,token,params)=>{
    return axios({
        url:`${baseURL}${url}`,
        method:'post',
>>>>>>> yzh
        headers:{
            "authorization":"Bearer "+token
        },
        data:params
    }).then((data)=>{
        return data;
    })
}

<<<<<<< HEAD

export const HeadPOST = (url,token,params)=>{
    return axios({
        url:`${baseURL}${url}`,
        method:'post',
=======
export const HeadDelete = (url,token)=>{
    return axios({
        url:`${baseURL}${url}`,
        method:'delete',
        headers:{
            "authorization":"Bearer "+token
        },
    }).then((data)=>{
        return data;
    })
}

export const HeadPut = (url,token,params)=>{
    return axios({
        url:`${baseURL}${url}`,
        method:'put',
>>>>>>> yzh
        headers:{
            "authorization":"Bearer "+token
        },
        data:params
<<<<<<< HEAD
    }).then((data)=>data);
    
}


export const HeadDelete = (url,token)=>{
    return axios({
        url:`${baseURL}${url}`,
        method:'delete',
        headers:{
            "authorization":"Bearer "+token
        },
=======
    }).then((data)=>{
        return data;
    })
}

export const HeadPutpsw = (url,token,params)=>{
    return axios({
        url:`${baseURL}${url}`,
        method:'put',
        headers:{
            "authorization":"Bearer "+token
        },
        data:params
>>>>>>> yzh
    }).then((data)=>{
        return data;
    })
}

<<<<<<< HEAD

export const HeadPutpsw = (url,token,params)=>{
=======
export const GetOrder = (url,token,params)=>{
    return axios({
        url:`${baseURL}${url}`,
        method:'get',
        headers:{
            "authorization":"Bearer "+token
        },
        data:params
    }).then((data)=>{
        return data;
    })
}

export const ChangeOrder = (url,token,params)=>{
>>>>>>> yzh
    return axios({
        url:`${baseURL}${url}`,
        method:'put',
        headers:{
            "authorization":"Bearer "+token
        },
<<<<<<< HEAD
        params:params
=======
        data:params
>>>>>>> yzh
    }).then((data)=>{
        return data;
    })
}
<<<<<<< HEAD

   
=======
>>>>>>> yzh
