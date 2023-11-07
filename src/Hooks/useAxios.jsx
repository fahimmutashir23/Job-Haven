import axios from "axios";


const axiosData = axios.create({
    baseURL: `https://assignment-11-server-two-roan.vercel.app`,
    withCredentials: true
})

const useAxios = () => {
  
    return axiosData
};

export default useAxios;