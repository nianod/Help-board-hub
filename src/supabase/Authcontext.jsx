import { createContext, useState, useEffect, useContext } from "react";
import { supabase } from "../libs/supabsaClient";  

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {  
    const [session, setSession] = useState(null);  
    const [loading, setLoading] = useState(true);  

    useEffect(() => {
         supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setLoading(false);
        });

         const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, []);

     const signupNewUser = async (email, password, username) => { // Added parameters
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {  
                    data: {
                        username
                    }
                }
            });

            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error("Signup error:", error);
            return { success: false, error: error.message };
        }
    };
 
    const login = async (email, password) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            });

            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error("Login error:", error);
            return { success: false, error: error.message };
        }
    };

     
    const logout = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
            return { success: true };
        } catch (error) {
            console.error("Logout error:", error);
            return { success: false, error: error.message };
        }
    };

    const value = {
        session,
        signupNewUser,
        login,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}  
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthContextProvider');
    }
    return context;
};