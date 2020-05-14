import React from 'react';
import './chat.css'
import Header from '../Header'
import Input from '../Input'

const Chat = ({msg, text, img, backgroundColor}) => <div
style={{backgroundColor:backgroundColor}}
>
    <div className="user">
        <Header text={text} />
    </div>
    <div className="response">
        {msg}
    </div>
</div>;

Chat.defaultProps = {
    msg:"...",
    text:"Trainee #8537"

}

export default Chat;