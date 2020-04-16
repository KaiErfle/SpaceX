import React from 'react';
import './Button.css';

const Button = ({text, onClick}) => <div className="button_box"
onClick={onClick}>
    <div className="button">
        {text}
    </div>
</div>

function ButtonClick(){
    alert("Clicked");
}

Button.defaultProbs = {
    text:"Default Button",
    onClick:ButtonClick
}

export default Button;

