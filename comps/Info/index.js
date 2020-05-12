import React from 'react';
import './Info.css';
import Header from '../Header';

const defaultImg = require('./blue_pink.png')

const Info = ({img, name, text}) => <div className="infobg">
    <div className="infocontainer">
        <img src={img} />
        <a><Header fontSize="24px" text={name} /></a>
        <p>{text}</p>
    </div>
</div>

Info.defaultProps = {
    img:defaultImg,
    name:"Header",
    text:"Paragraph section: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae laoreet libero, eu hendrerit nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
}

export default Info