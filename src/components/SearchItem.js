import React, { useState } from 'react'
import styled from 'styled-components'
import { GlobalStyle } from './globalStyles'
import { Link } from 'react-router-dom'
import Details from './Details'


const SearchItem = ({ search }) => {

    return (
        <div className='img-container'>
        <Link to={`/show/${ search.mal_id }`}>
            <img src={search.image_url} alt="" />
        </Link>
        
        </div>
    )
}


export default SearchItem
