//Delete user details
import { supabase } from "../libs/supabaseClient"

const DeleteContext = async () => {
    try{
        const { data: { user} , error: useError } = await supabase.auth.getUser()
        if( useError || !user ) {
            console.error('No such user authenticated')
            return
        }

        const userId = user.id


        const { error: PostError} = await supabase
        .from('postst')
        .delete()
        .eq('user_id', userId)

        const { error: ProfileError } = await supabase
        .from('users')
        .delete()
        .eq('id', userId)

        if(PostError || ProfileError) {
            console.log('A serious occured during deleting ', PostError || ProfileError)
        }

        console.log('User and associated data deleted successfully')

    } catch(err) {
        console.log('Error occured, ', err.message)
    }    
}

export default DeleteContext
 