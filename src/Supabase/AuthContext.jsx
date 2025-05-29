import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "../libs/supabaseClient";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [session, setSession] = useState(undefined)

    return(
       <AuthContext.Provider value={{ session }}> { children} </AuthContext.Provider>
    )
}
export const UserAuth = () => {
    return useContext(AuthContext)
}