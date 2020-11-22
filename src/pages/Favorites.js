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
                <h1>{this.state.favorites}</h1>
                <img src="https://media2.giphy.com/media/IO2ICudgtBjby/giphy.gif?cid=ecf05e47o1vtxt4n6dsq64934utr7mi8asxwue66obqs0xbw&rid=giphy.gif" alt=""/>
            </div >
        )
    }
}

export default Favorites
