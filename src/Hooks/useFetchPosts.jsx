import { useState, useEffect } from "react";
import { supabase } from "../libs/supabaseClient";


const useFetchPosts = (userId) => {

    const [posts, setPosts] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async() => {
            try {
                const { data, error } = await supabase
                .from('postst')
                .select('*')
                .eq("user_id", userId)
                .order('created_at', { ascending: false })

                if(error) throw error;
                setPosts(data)
                setLoading(false)

            } catch (err) {
                setError(err.message || 'Failed to Fetch Posts')
            } finally {
                setLoading(false)
            }
        }
        fetchPosts()
    }, [])

  return { posts, loading, error}
}

export default useFetchPosts
