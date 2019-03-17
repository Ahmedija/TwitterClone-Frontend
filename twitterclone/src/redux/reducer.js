const startingState = ({
    tweets: [],
    user: {
        fullName: 'Ahmed Hodzic',
        userName: 'ahmedhodzic'
    }
})

export default function (state = startingState, action) {
    switch (action.type) {
        case "GET_TWEETS_FULFILLED":
            return {
                ...state,
                tweets: action.payload

            }
            break;

        default:
            return state;
            break;
    }
}