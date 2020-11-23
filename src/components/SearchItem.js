import React from 'react'

const SearchItem = ({ search }) => {
    console.log(search)
    return (
        <div className='img-container'>
            <img src={search.image_url} alt=""/>
        </div>
    )}


export default SearchItem
