import {serverURL} from "./serverURL"
import commonAPI from "./commonAPI"

//function to call API endpoints
//1 register user
export const registerUserAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/register`,reqBody,{})
}

//2 login user
export const loginUserAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/login`,reqBody,{})
}

//3 gooogle Login user
export const GoogleloginUserAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/google-login`,reqBody,{})
}

//4 Add Book
export const AddBookAPI = async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${serverURL}/api/addBook`,reqBody,reqHeader)
}

//5 Get Home Book
export const HomeBookAPI = async()=>{
    return await commonAPI('GET',`${serverURL}/api/homeBooks`,{},{})
}

//6 Get All Book
export const AllBookAPI = async(reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/getBook?search=${searchKey}`,{},reqHeader)
}

//7 view a particular book details
export const getABookAPI = async(id,reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/viewBooks/${id}`,{},reqHeader)
}
//8 Get Home Book
// export const AdminHomeBookAPI = async()=>{
//     return await commonAPI('GET',`${serverURL}/api/adminBooks`,{},reqHeader)
// }
export const AdminHomeBookAPI = async (reqHeader) => {
  return await commonAPI("GET", `${serverURL}/api/adminBooks`, {}, reqHeader);
}

//9 Get user
export const GetUserAPI = async(reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/getUser`,{},reqHeader)
}

//10 Add Job
export const AddJobAPI = async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${serverURL}/api/admin/addJob`,reqBody,reqHeader)
}

// 12 Delete Job
