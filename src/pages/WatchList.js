import React, { Component } from 'react';

class WatchList extends Component {
    constructor(props) {
        super(props);
        this.state = { watchList: "" };
    }

    callAPI() {
        fetch("http://localhost:4000/watchlist")
            .then(res => res.text())
            .then(res => this.setState({ watchList: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
          <>
          <h2>Watch List</h2>
            <div>
                <h1 className='title-h1'>WatchList</h1>
            </div>
          </>
        );
    }
}

export default WatchList;

