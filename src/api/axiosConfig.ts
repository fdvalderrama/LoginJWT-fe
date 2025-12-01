import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";

const api = axios.create({
    baseURL: "http://localhost:5282"
})

api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem("token")

        if(token && config.headers){
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    }, (error: AxiosError) => {
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
  (response) => response,

  (error: AxiosError) => {

    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');

      window.location.href = '/';
    }
    
    return Promise.reject(error);
  }
);

export default api