import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

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
    }, [id])

    return (
        <div className="show-title">
            <h1>{show.title}</h1>
            <button>Add to Watchlist</button>
                <button>Add to Favorites</button>
            <div className="show-image">
                <img src={show.image_url} alt="" /><br /><br />
                <div className="show-synopsis">
                <p className="synop-p">SYNOPSIS</p>
                <p>{show.synopsis}</p>
                </div>
            </div>
        </div>
    )
}



export default ShowDetail
