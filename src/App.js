import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './config/Routes'
import Search from './components/Search'
import SearchGrid from './components/SearchGrid'
import './App.css'
import UserModel from './models/user'
// import Home from './pages/Home'

function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('id'))

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

  const storeUser = (userId) => {
    localStorage.setItem('id', userId)
    setCurrentUser( userId )
  }

  const logout = (event) => {
    event.preventDefault()

    localStorage.removeItem('id')

    UserModel.logout()
      .then(res => {
        setCurrentUser(null)
      })
  }

  return (
    <div className="App">
      <Header 
        currentUser={ currentUser } 
        logout={ logout }
      />
      <Routes 
        currentUser={ currentUser }
        storeUser={ storeUser }
      />
      <Search getQuery={(q) => setQuery(q)}/>
      <SearchGrid isLoading={ isLoading } search= { search } />
      <Footer />
    </div>
  );
}

export default App 
