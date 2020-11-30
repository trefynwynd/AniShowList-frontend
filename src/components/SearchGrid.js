import React from 'react'
import SearchItem from './SearchItem'

const SearchGrid = ({ search, isLoading }) => {
    return isLoading ? (<h1>What are we looking for?</h1>)
        :
        <section className='cards'>
            {search.map((search) => (
                <SearchItem key={search.results} search={search}></SearchItem>
            ))}
        </section>

}

export default SearchGrid
