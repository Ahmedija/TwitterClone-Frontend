import React from 'react';
import { Input } from 'semantic-ui-react';

const InputArea = ({ value, changeHandler, submitTweet }) => {

    return (
        <Input
            value={value}
            placeholder="Please enter your Tweet and press enter"
            onChange={changeHandler}
            onKeyPress={submitTweet}
            className="tweet-input"
            size="massive"
        />
    );
}

export default InputArea;