import React, { useState, useEffect } from 'react'
import '../components/Home.scss'
import Search from '../components/Search'
import SearchGrid from '../components/SearchGrid'
import axios from 'axios'
//import Search from '../components/Search';
//import App from '../App'

const Home = () => {

  const [ search, setSearch ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
  const [ query, setQuery ] = useState('')

  useEffect(() => {
    const fetchSearch = async () => {
      const result = await axios(
        `https://api.jikan.moe/v3/search/anime?q=${query}`
      )
      //console.log(result.data.results)
      setSearch(result.data.results)
      setIsLoading(false)
    }
    fetchSearch()
  }, [query])

  return (
    <div className='home-container'>
        <video src="https://media.giphy.com/media/aCufXOtnwGcj6bSHou/giphy.mp4" autoPlay loop muted></video>
        <div className='welcome-text'>
          <h1>AnimeShowList</h1>
          <p>"People die if they are killed! - Shirou Emiya, Fate/Stay Night"</p>
          {/* <Search getQuery={(q) => setQuery(q)}/> */}
          <Search getQuery={(q) => setQuery(q)}/>
          <SearchGrid isLoading={ isLoading } search= { search } />
        </div>
    </div>
)
}


export default Home;
