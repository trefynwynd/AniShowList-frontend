import React from 'react'
import { useState, useEffect } from 'react'
import userShow from '../models/usershow';


const Favorites = (props) => {

    const [favShow, setFavShow] = useState([]);
    const [userId, setUserId] = useState(localStorage.getItem('id'))

    const fetchData = async () => {
        const results = await userShow.allFaves(userId)
        console.log(results)
        // // const response = await axios(
        //     `https://api.jikan.moe/v3/anime/${props.apiId}`
        // );
        // console.log(response)
        setFavShow(results);
    }

    useEffect(() => {
        fetchData()
    }, [props])

    const handleDestroy = (apiId) => {
        userShow.delete(apiId)
            .then(data => {
                fetchData()
            })
    }


    return (
        <div className="faves-div">
            <h1 className="title-h1">Favorites</h1>
            {favShow.map((show, idx) => {
                return (
                    <div>
                        <img src={show.image_url} alt="" className="fav-img" /> <br />
                        <button className="btn-danger" onClick={()=> handleDestroy(show.apiId)}>Delete</button>
                    </div>
                )
            })}
        </div >
    )
}

export default Favorites

// For all of the series that are fave'd, they would show here.
// If there isn't any, it should post a statement saying "You do not have any anime that are favourited."
// This is bascially gamelist.js but only for favourites.
// class Favorites extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { favorites: "" };
//     }

//     callAPI() {
//         axios('https://api.jikan.moe/v3/anime/${apiId.mal_id')
//             .then(res => res.text())
//             .then(res => this.setState({ favorites: res }))
//             .catch(err => err);
//     }

//     componentDidMount() {
//         this.callAPI();
//     }