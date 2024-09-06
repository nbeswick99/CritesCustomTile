import { JwsContext } from "../contexts/JwsContext";
import {useContext} from "react";

export const useJwsContext = () => {
    const context = useContext(JwsContext)

    if (!context) {
        throw Error('useJwsContext must be used inside a JwsContextProvider')
    }

    return context
}
