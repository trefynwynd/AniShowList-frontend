import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

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
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://media.giphy.com/media/2y98KScHKeaQM/giphy.gif" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://media.giphy.com/media/3o7btXJQm5DD8ApubC/giphy.gif" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://media.giphy.com/media/a3wq0KrRi6e76/giphy.gif" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div >
        )
    }
}

export default Favorites

// For all of the series that are fave'd, they would show here.
// If there isn't any, it should post a statement saying "You do not have any anime that are favourited."
// This is bascially gamelist.js but only for favourites.