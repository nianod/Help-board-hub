import { useState, useEffect } from "react";
import { supabase } from "../libs/supabaseClient";


const useFetchPosts = () => {

    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchPosts = async() => {
            try {
                const { data, error } = await supabase
                .from('postst')
                .select('*')
                .order('created_at', { ascending: false })

                if(error) throw error;
                setPosts(data)

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
