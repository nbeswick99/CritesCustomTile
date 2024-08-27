import { useJwsContext } from "./useJwsContext"

export const useLogout = () => {
    const {dispatch} = useJwsContext();
    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user')

        //clear from context
        dispatch({type: 'LOGOUT'})
    }
    return {logout}
}