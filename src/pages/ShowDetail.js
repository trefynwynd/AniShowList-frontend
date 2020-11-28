import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Details from '../components/Details'
import Search from '../components/Search'

const ShowDetail = () => {

    const { id } = useParams()
    //console.log(id)
    const [show, setShow] = useState('')

    useEffect(() => {
        const selectedShow = async () => {
            const result = await axios(
                `https://api.jikan.moe/v3/anime/${id}`
            )
            setShow(result.data)
            console.log(result.data)
        }

        selectedShow()
    }, [])

    return (
        <div>
            <h1>{show.title}</h1>
            <img src={show.image_url} alt=""/>
            <p>{show.synopsis}</p>
        </div>
    )
}



export default ShowDetail
