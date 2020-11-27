import React from 'react'

function Favorites() {
    return (
        <div>
            <h1>This is the Favorites Page!</h1>
            <div id="faveContainer"></div>
        </div>
    )
}

export default Favorites

// For all of the series that are fave'd, they would show here.
// If there isn't any, it should post a statement saying "You do not have any anime that are favourited."
// This is bascially gamelist.js but only for favourites.