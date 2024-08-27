import { useState } from "react"
import { useJwsContext } from "../contexts/JwsContext"
import axios from "axios"

export const useLogin = (user) => {
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState();
    const {dispatch} = useJwsContext();

    const login = async (user) => {
        setIsLoading(true)
        setError(null)
        
        axios.post("http://localhost:8000/api/login", user)
            .then((res) => {
                console.log(res.data)

                //save the user to local storage
                localStorage.setItem('user', JSON.stringify(res.data))
                
                //update the authContext
                dispatch({type: 'LOGIN', payload: res.data})
                
                setIsLoading(false)
            })
            .catch((err) => {
                {
                    setIsLoading(false)
                    setError(err.response.data.errors)
                    console.log(err.responso.data.errors)
                }
            })
        return {login, isLoading, error}
    }
}
