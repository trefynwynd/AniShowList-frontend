import React from 'react'

const SearchItem = ({ search }) => {
    console.log(search)
    return (
        <div className='img-container'>
            <img src={search.image_url} alt=""/>
            <p className='img-title'>{search.title}</p>
        </div>
    )}


export default SearchItem
