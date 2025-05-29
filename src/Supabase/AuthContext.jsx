import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "../libs/supabaseClient";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [session, setSession] = useState(undefined)

    //Sign in 
    const registerNewUser = async() => {
        const { data, error } = await supabase.auth.signUp ({
            email,
            password
        })
        if(error) {
            console.error("There was an error signing up", error)
            return { success: false, error }
        } 
        return{success: true, data}
    }

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
    })

    supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
    })

    }, [])

    return(
       <AuthContext.Provider value={{ session, registerNewUser }}> { children} </AuthContext.Provider>
    )
}
export const UserAuth = () => {
    return useContext(AuthContext)
}