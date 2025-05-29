import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "../libs/supabaseClient";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [session, setSession] = useState(undefined)

    //Sign up 
    const registerNewUser = async (email, username, password) => {
        const { data, error } = await supabase.auth.signUp ({
            email,
            username,
            password
        })
        if(error) {
            console.error("There was an error signing up", error)
            return { success: false, error }
        } 
        return{success: true, data}
    }


    //Sign in
    const SignIn = async ({ username, password }) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                username,
                password
            })
            if(error) {
                console.error("An error occurred", error);
                return{ success: false, error: error.message }
            }
            console.log("success", data)
            return{ success: true, data }

        } catch(error) {
            console.error("An error occurred")
        }
    }


    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
    })

    supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
    })

    }, [])



    // Sign out

    const signOut = async () => {
        const { error } = await supabase.auth.signOut()
        if(error) {
            console.error("There was an error signing out", error)
        }
    }

    return(
       <AuthContext.Provider value={{ session,SignIn,  registerNewUser, signOut }}> { children} </AuthContext.Provider>
    )
}
export const UserAuth = () => {
    return useContext(AuthContext)
}