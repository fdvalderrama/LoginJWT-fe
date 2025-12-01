import { useEffect, useState, type FC } from "react"
import api from "./axiosConfig"

interface UseAuthOptions {
    endpoint: string,
    isGetMethod: boolean,
    body?: unknown
}

export const useAuth = ({endpoint, isGetMethod, body}: UseAuthOptions) => {
    
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchApi = async () => {

            try{
                if(isGetMethod){
                await api.get(endpoint)
                }else{
                    await api.post(endpoint, body)
                }
                setIsLoading(false)
            }catch(error){
                console.log(error)
            }
            
        }

        fetchApi()
    }, [endpoint, isGetMethod, body])

    return{isLoading}
}