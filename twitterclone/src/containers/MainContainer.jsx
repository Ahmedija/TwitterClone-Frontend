import React, { Component } from 'react';
import UserComponent from '../components/user';
import Tweet from '../components/tweet';
import InputArea from '../components/input-area';
import { connect } from 'react-redux';
import {
    setTweet,
    getTweets
} from '../redux/actions';
import { setTimeout } from 'timers';


class MainContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tweetContent: '',
        }
    }

    componentDidMount() {
        this.props.getTweets();
    }

    changeHandler = (e) => {
        this.setState({ tweetContent: e.target.value })
    }

    submitTweet = (e) => {
        if (e.key === 'Enter' && this.state.tweetContent !== '') {
            this.props.setTweet(this.state.tweetContent)
            this.setState({ tweetContent: '' })
        }
        //refresh page
        setTimeout(() => {
            this.props.getTweets()
        }, 500)
    }

    render() {
        console.log(this.props.nesto)
        return (
            <div className="main-container">
                <UserComponent user={this.props.user} tweetCount={this.props.tweetCount} />
                <InputArea value={this.state.tweetContent} changeHandler={this.changeHandler} submitTweet={this.submitTweet} />
                {this.props.tweets.map((tweet) => <Tweet key={tweet._id} data={tweet} user={this.props.user} />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return ({
        user: state.user,
        tweets: state.tweets,
        tweetCount: state.tweets.length
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        setTweet: (tweetContent) => dispatch(setTweet(tweetContent)),
        getTweets: () => dispatch(getTweets()),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);