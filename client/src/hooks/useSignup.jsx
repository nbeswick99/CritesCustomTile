import { useState } from 'react';
import { useJwsContext } from './useJwsContext';
import axios from 'axios'


export const useSignup = async (user) => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch } = useJwsContext()


    const signup = async () => {
        setIsLoading(true)
        setError(null)

        axios.post("http://localhost:8000/api/register", user)
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
        return {signup, isLoading, error}
    }
}