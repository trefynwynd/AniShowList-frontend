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
            <div className="faves-div"> 
                <h1>{this.state.favorites}</h1><br/>
            </div >
        )
    }
}

export default Favorites
