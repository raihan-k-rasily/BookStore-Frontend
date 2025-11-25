import { serverURL } from "./serverURL";

import commonAPI from "./commonAPI";

// Function to call API endpoints
// 1 Register User API
export const registerUserAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/register`,reqBody,{})
}
// 2 Login User API
export const loginUserAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/login`,reqBody,{})
}
// 3 Google Login 
export const GoogleLoginUserAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/google-login`,reqBody,{})
}

// 4 Add Book 
export const AddBookAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/addBook`,reqBody,reqHeader)
}
