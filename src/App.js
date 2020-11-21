import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './config/Routes'
import './App.css'
import UserModel from './models/user'

function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('id'))

  const [ search, setSearch ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
  const [ anime, setAnime ] = useState()

  const fetchSearch = () => {
    return axios.get(`https://api.jikan.moe/v3/search/anime?q=naruto`)
    .then(result => {
      setAnime(result.data.results)
      console.log(result.data.results)
    })
  }

  useEffect(() => {
    fetchSearch()
  }, [])

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
      <Footer />
    </div>
  );
}

export default App 
