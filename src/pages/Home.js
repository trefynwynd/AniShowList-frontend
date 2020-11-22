import React from 'react';
import '../components/Home.scss'


const Home = () => {
  return (
    <div className='home-container'>
        <video src="https://media.giphy.com/media/aCufXOtnwGcj6bSHou/giphy.mp4" autoPlay loop muted></video>
        <div className='welcome-text'>
          <h1>AnimeShowList</h1>
          <p>"People die if they are killed! - Shirou Emiya, Fate/Stay Night"</p>
          <input type="text" placeholder="Search..." className="search-primary"/>
          <button>Ikuzo!</button>
        </div>
    </div>
)
}


export default Home;
