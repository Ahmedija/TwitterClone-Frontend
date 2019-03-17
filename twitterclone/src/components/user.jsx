import React, { Component } from "react";

class User extends Component {
    render() {
        console.log(this.props.tweetCount)
        return (
            <div className="profile">
                <div >
                    <img src={require("../assets/jpg.jpg")} align="left" className="image" />
                </div>
                <div>
                    <h2>{this.props.user.fullName}</h2>
                    <p>{"@" + this.props.user.userName}</p>
                    <p>Tweets ({this.props.tweetCount})</p>
                </div>
            </div>
        );
    }
}

export default User;
