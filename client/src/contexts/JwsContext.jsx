import {createContext, useReducer, useEffect} from 'react'

export const JwsContext = createContext()

export const JwsReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN': 
            return {user: action.payload}
        case 'LOGOUT': 
            return {user: null}
        default: 
            return state
    }
}

export  const JwsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(JwsReducer, {
        user:null
    })

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'))

        if (user) {
            dispatch({type: 'LOGIN', payload: user})
        }
    },[ ])

    console.log('AuthContext state:', state)

    return (
        <JwsContext.Provider value={{...state, dispatch}}>
            {children}
        </JwsContext.Provider>
    )
}