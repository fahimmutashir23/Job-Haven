import axios from "axios";

import useAuth from "./useAuth";
import { useEffect } from "react";



const axiosData = axios.create({
    baseURL: `https://assignment-11-server-two-roan.vercel.app`,
    withCredentials: true
})

const useAxios = () => {
    const {logout} = useAuth();

    useEffect(()=> {
        axiosData.interceptors.response.use(response => {
            return response
        }, error => {
            console.log("logOut", error.response);
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('logout the user')
                logout()
                    .then(() => { 
                
                    })
                    .catch(error => console.log(error))
            }
        })
    }, [logout])

    return axiosData
};

export default useAxios;











