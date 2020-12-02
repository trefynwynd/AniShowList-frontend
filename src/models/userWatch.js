const url = `http://localhost:4000/api/v1`

class userWatch {
    static create = (apiId, image_url) => {
        const data = {
            apiId: apiId,
            userId: localStorage.getItem('id'),
            image_url,
        }
        return fetch(`${url}/shows/`, {
            // options
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
        )
    }
    static allWatch = (userId) => {
        // calling the index method in the API controller from watch list
        return fetch(`${url}/shows/${userId}`).then(res => res.json())
    }
    // accessed as GameModel.show(someId)
    static show = (apiId) => {
        return fetch(`${url}/show/${apiId}`).then(res => res.json())
    }
}

export default userWatch;
