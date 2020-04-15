import React from 'react';
import './Button.css';

const Button = ({text, onClick}) => <div className="button_box">
    <div className="button">
        {text}
    </div>
</div>

export default Button;

