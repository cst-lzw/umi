import {axiosPro} from "./axios/axios";
import router from 'umi/router'
import { notification } from 'antd';


const method = 'post'
const url = 'https://alpha.yunhutech.cn/comm_route'  // 预发布

export async function request (params) {
    const data = JSON.stringify(params)
    //加密
    let opt={
    method: method,
    url: url,
    data: data,
    transformResponse:[function(data){
      return JSON.parse(data)
      // return data
        }]
    }
    const response = await axiosPro(opt)
    let resp=response.data
    let dataResp={data:resp}
    checkTokenExpire(dataResp)
    return dataResp
}



// async function advert (params) {
//     const data = JSON.stringify(params)
//     let opt={
//         method: method,
//         url: url,
//         data: data,
//         transformResponse:[function(data){
//             return JSONbig.parse(data)
//             // return data
//         }]
//     }
//     const dataResp = await axiosPro(opt)
//     checkTokenExpire(dataResp)
//     return dataResp
// }



 async function checkTokenExpire(response) {
    try{
        const resp=response.data
        if(resp.hasOwnProperty("resp_code")&&resp.resp_code===0){
            const respBody=resp.resp_body
            //检查token是否过期
            if(respBody.eRetCode===401){
                // notification.error({
                //     message: '未登录或登录已过期，请重新登录。',
                // });
                // window.g_app._store.dispatch({
                //     type: 'login/logout',
                // });
                router.push("/user/login")
                return;
            }
        }

    }catch (e) {
        console.log("e",e)
    }



}







