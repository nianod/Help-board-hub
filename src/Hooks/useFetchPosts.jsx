import { useState, useEffect } from "react";
import { supabase } from "../libs/supabaseClient";


const useFetchPosts = (userId) => {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async() => {
            try {
                let query = supabase
                    .from('postst')
                    .select('*')
                    .order('created_at', { ascending: false })

                if (userId) {
                    query = query.eq("user_id", userId)
                }

                const { data, error } = await query

                if(error) throw error;
                setPosts(data || [])
            } catch (err) {
                setError(err.message || 'Failed to Fetch Posts')
            } finally {
                setLoading(false)
            }
        }
        fetchPosts()
    }, [userId])

    return { posts, loading, error }
}

export default useFetchPosts





        // const fetchPosts = async() => {
        //     try {
        //         let query = supabase
        //             .from('postst')
        //             .select('*')
        //             .order('created_at', { ascending: false })

        //         if (userId) {
        //             query = query.eq("user_id", userId)
        //         }

        //         const { data, error } = await query

        //         if(error) throw error;
        //         setPosts(data || [])
        //     } catch (err) {
        //         setError(err.message || 'Failed to Fetch Posts')
        //     } finally {
        //         setLoading(false)
        //     }
        // }


        // useEffect(() => {
        //     fetchPosts()
        // }, [userId])