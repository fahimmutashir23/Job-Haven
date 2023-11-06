import axios from "axios";


const axiosData = axios.create({
    baseURL: `http://localhost:5000`,
    withCredentials: true
})

const useAxios = () => {
    return axiosData
};

export default useAxios;