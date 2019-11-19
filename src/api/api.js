import * as axios from "axios";

let axiosInstance = axios.create({
    withCredentials:true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    headers : {
        "API-KEY":"d49e5f8f-fae7-410e-b87e-fce6c9614e59"
    }
})

export const usersAPI ={
    getUsers (currentPage,pageSize){
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`).
            then(response => {
                return response.data
            })
        }
}


