import { BASE_URL } from "./baseURL"
import { commonAPI } from "./commonAPI"

export const addDataAPI =async(userData)=>{
 return await commonAPI('POST',`${BASE_URL}/user/details`,userData,"")
}