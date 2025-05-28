import { createContext, useEffect, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [session, setSession] = useState(undefined)

    return(
       <AuthContext.Provider value={{ session }}> { children} </AuthContext.Provider>
    )
}