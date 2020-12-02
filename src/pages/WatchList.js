import React from 'react'
import { useState, useEffect } from 'react'
import userWatch from "../models/userWatch"


const UserWatch = (props) => {

    const [watchShow, setWatchShow] = useState([]);
    const [userId, setUserId] = useState(localStorage.getItem('id'))

    useEffect(() => {

        const fetchData = async () => {
            const results = await userWatch.allWatch(userId)
            console.log(results)
            // // const response = await axios(
            //     `https://api.jikan.moe/v3/anime/${props.apiId}`
            // );
            // console.log(response)
            setWatchShow(results);
        }
        fetchData()
    }, [props])

    return (
        <div className="faves-div">
            <h1 className="title-h1">Watching List</h1>
            {watchShow.map((show, idx) => {
                return <img src={show.image_url} alt="" className="fav-img" />
            })}
            {/* <button className="btn btn-danger">Edit</button> */}
        </div >
    )
}
export default UserWatch
