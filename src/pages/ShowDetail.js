import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import userShow from '../models/usershow'
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

    // const favShow = async id => {
    //     console.log(id)
    //     try {
    //         const favShow = await fetch(`http://localhost:4000/api/v1/usersFavorites`, 
    //         {
    //         method: "POST"
    //         })
    //         console.log(favShow)
    //     } catch (error) {
    //         console.error(error.message)
    //     }
    // }

    const handleSubmit = (event) => {
        // to prevent default form functionality
        event.preventDefault()
        console.log(show.mal_id)
        userShow.create(show.mal_id, show.image_url)
            .then(data => {
                // redirecting with react router
                console.log(data)
                // this.props.history.push('/favorites')
            })
    }

    return (
        <div className="show-title" key={show.mal_id}>
            <h1>{show.title}</h1>
            <button>Add to Watchlist</button>
            {/* <button onClick={() => favShow(show.mal_id)}>Add to Favorites</button> */}
            <form onSubmit={handleSubmit} >
                <button>Add to Favs</button>
            </form>
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
