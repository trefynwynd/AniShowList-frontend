const url = `http://localhost:4000/api/v1`


class userShow {
    // accessed as GameModel.all()
    static allFaves = () => {
        // calling the index method in the API controller for favorites
        return fetch(`${url}/favorites`).then(res => res.json())
    }
    static allWatch = () => {
        // calling the index method in the API controller from watch list
        return fetch(`${url}/watchlist`).then(res => res.json())
    }
    // accessed as GameModel.show(someId)
    static show = (apiId) => {
        return fetch(`${url}/show/${apiId}`).then(res => res.json())
    }
    // accessed as GameModel.create(gameData)
    static create = (apiId) => {
        return fetch(`${url}/favorites/`, {
            // options
            method: "POST",
        }
        )
    }
}
export default userShow