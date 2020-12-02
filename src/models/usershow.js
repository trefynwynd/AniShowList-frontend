const url = `http://localhost:4000/api/v1`


class userShow {
  // accessed as GameModel.all()
  static allFaves = (userId) => {
    // calling the index method in the API controller for favorites
    return fetch(`${url}/usersFavorites/${userId}`).then(res => res.json())
  }
  static allWatch = () => {
    // calling the index method in the API controller from watch list
    return fetch(`${url}/watchlist`).then(res => res.json())
  }
  // accessed as GameModel.show(someId)
  static show = (apiId) => {
    return fetch(`${url}/show/${apiId}`).then(res => res.json())
  }
  // Add a Favorite
  static create = (apiId) => {
    const data = {
      apiId: apiId,
      userId: localStorage.getItem('id')
    }
        return fetch(`${url}/usersFavorites/`, {
            // options
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
              body: JSON.stringify(data),
        }
        )
    }
// Delete a Favourite
  static delete = (apiId) => {
    const userId = localStorage.getItem('id')
    return fetch(`${url}/usersFavorites/${userId}/${apiId}`, {
      method: "DELETE",
    }
    ).then(res => res.json())
  }
}
export default userShow