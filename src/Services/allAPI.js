//allAPI.js
import { BASE_URL } from "./baseURL"
import { commonAPI } from "./commonAPI"

export const addDataAPI =async(userData)=>{
 return await commonAPI('POST',`${BASE_URL}/user/datas`,userData,"")
}

export const getDataAPI = async()=>{
    return await commonAPI('GET',`${BASE_URL}/user/getdata`)
}