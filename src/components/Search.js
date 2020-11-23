import React, { useState } from 'react'

const Search = ({ getQuery }) => {
    const [text, setText] = useState('')
    
    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <section className='search'>
            <form>
                <input 
                type='text' 
                className='search-primary' 
                placeholder='Search...'
                value={text}
                onChange={(e) => onChange(e.target.value)}
                />
                <button>Ikuzo!</button>
            </form>

        </section>
    )
}

export default Search
