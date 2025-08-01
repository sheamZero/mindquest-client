import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



// axios instance created
const secureAxios = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true
});



const useSecureAxios = () => {

    const { logoutUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const interceptor = secureAxios.interceptors.response.use(
            response => {
                return response
            },
            error => {
                const status = error?.response?.status;
                if (status === 401 || status === 403) {
                    logoutUser()
                        .then(() => navigate("/signin"))
                        .catch(err => console.log(err))

                }
                return Promise.reject(error);
            }
        )

        return () => {
            secureAxios.interceptors.response.eject(interceptor);
        }
    }, [])



    return secureAxios;
};

export default useSecureAxios;
