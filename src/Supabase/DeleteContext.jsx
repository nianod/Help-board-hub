//Delete user details
import { supabase } from "../libs/supabaseClient"

const DeleteContext = async () => {
    const { data: { user} , error: { useError } } = await supabase.auth.getUser()
    
}

export default DeleteContext
