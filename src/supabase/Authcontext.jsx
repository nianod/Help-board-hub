import { createContext, useState, useEffect, useContext } from "react";
import { supabase } from "../libs/supabsaClient";

const authContext = createContext()

export const authContextProvider = ({ children }) => {
    const [session, setSession ] = useState(undefined)

    useEffect(() => {
        const{ data: listener} = supabase.auth.onAuthStateChange((_event, session) =>{
            setSession(session)
        })
        return() => {
        listener?.subscription.unsubscribe();
    }
    }, []);



    //Register new user
    const signupNewUser = async () => {
        const {data, error} = await supabase.auth.signUp({
            email: email,
            username: username,
            password: password
        })

        if(error) {
            console.error("There was an error signing up: ", error)
            return {success: false, error}
        }
        return{success: true, data}
    }

    return (
        <authContext.Provider value={{session, signupNewUser}}>
            {children}
        </authContext.Provider>
    )
}