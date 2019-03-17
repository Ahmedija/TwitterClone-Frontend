import React from 'react';
import { Card, Image } from 'semantic-ui-react'
import { userInfo } from 'os';

const Tweet = ({ data, user }) => {

    return (
        <Card fluid >
            <Card.Content>
                <Image className="image-tweet" floated='left' size='mini' src={require("../assets/jpg.jpg")} />
                <Card.Header className="header-tweet">{user.userName}</Card.Header>
                <Card.Meta className="meta-tweet">{data.dateCreated}</Card.Meta>
                <Card.Description className="desc-tweet">
                    {data.content}
                </Card.Description>
            </Card.Content>
        </Card>
    );
}

export default Tweet;