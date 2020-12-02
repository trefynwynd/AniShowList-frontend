const url = `http://localhost:4000/api/v1`


class userShow {
  // accessed as GameModel.all()
  static allFaves = (userId) => {
    // calling the index method in the API controller for favorites
    return fetch(`${url}/usersFavorites/${userId}`).then(res => res.json())
  }
  // Add a Favorite
  static create = (apiId, image_url) => {
    const data = {
      apiId: apiId,
      userId: localStorage.getItem('id'),
      image_url,
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
    console.log(userId)
    return fetch(`${url}/usersFavorites/${userId}/${apiId}`, {
      method: "DELETE",
    }
    ).then(res => {
      console.log(res)
      return res.json()
    })
    .catch(console.error)
  }
}
export default userShow