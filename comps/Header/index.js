import React from 'react';
import './Header.css';

const Header = ({text, fontSize, color}) => <div className="header">
    <h1 style={{fontSize:fontSize, color:color}}>{text}</h1>
</div>

Header.defaultProps ={ 
    fontSize:24,
    color:"#2699fb",
    text:"Header",
}

export default Header