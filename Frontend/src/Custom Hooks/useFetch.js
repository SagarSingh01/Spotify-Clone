import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { API } from "../Context Api/AuthContext"

const useFetch = (url) => {

    const [music, setMusic] = useState()

    useEffect(() => {

        const fetchMusic = async () => {
            try {
                const res = await API.get(url, { withCredentials: true })
                setMusic(res.data.musics)
            }
            catch (err) {
                console.log(err)
            }
        }

        fetchMusic()

    }, [url])

    return [music]

}

export default useFetch