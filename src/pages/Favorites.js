import React, { Component } from 'react'

class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = { favorites: "" };
    }

    callAPI() {
        fetch("http://localhost:4000/favorites")
            .then(res => res.text())
            .then(res => this.setState({ favorites: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }



    render() {
        return (
          <>
          <div>
            <h2>Favorites</h2>
          </div>
          <p>This is where you can see the shows you have favourited.</p>
            <div className="faves-div"> 
                <h1>{this.state.favorites}</h1><br/>
            </div >
            </>
        )
    }
}

export default Favorites

// For all of the series that are fave'd, they would show here.
// If there isn't any, it should post a statement saying "You do not have any anime that are favourited."
// This is bascially gamelist.js but only for favourites.