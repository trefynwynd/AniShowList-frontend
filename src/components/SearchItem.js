import React from 'react'
import { Link } from 'react-router-dom'


const SearchItem = ({ search }) => {
    console.log(search)



    return (
        <div className='img-container' >
            <img src={search.image_url} alt=""/>
        </div>
    )
}


export default SearchItem
