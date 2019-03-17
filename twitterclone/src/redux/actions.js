export const setTweet = (tweetContent) => ({
    type: 'SET_TWEET',
    payload: fetch('http://localhost:3456/api', {
        method: 'POST',
        body: JSON.stringify({ tweet: tweetContent }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
})

export const getTweets = () => ({
    type: 'GET_TWEETS',
    payload: fetch('http://localhost:3456/api').then(response => response.json())


})