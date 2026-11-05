import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { API } from "../Context Api/AuthContext"

const useFetch = (url) => {

    const [music, setMusic] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    

    useEffect(() => {

        const fetchMusic = async () => {
            try {
                setLoading(true)
                const res = await API.get(url, { withCredentials: true })
                setMusic(res.data.musics)
            }
            catch (err) {
                setError(true)
                console.log(err)
            }
            finally {
                setLoading(false)
            }
        }

        fetchMusic()

    }, [url])

    return [music, loading, error]

}

export default useFetch