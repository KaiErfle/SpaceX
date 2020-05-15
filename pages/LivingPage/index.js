import React from 'react';
import './living.css';
import Header from '../../comps/Header';
import Info from '../../comps/Info';
import MenuButton from '../../comps/Menu/MenuButton'

const live1 = require('../../images/live1.jpg');
const live2 = require('../../images/live2.jpeg');
const live3 = require('../../images/live3.jpg');
const live4 = require('../../images/live4.jpg');
const stars = require('../../images/stars.gif');

const Home = () => <div>
    <div className="stars">
    <img src={stars} />
    </div>
    <div className="Lbg">
        <a id="Lbutton"><MenuButton /></a>
        <Header text="How to live on Mars" fontSize="34px" />
    <div className="Lcontain">
        <a className="Linfo">
            <Info 
                img={live1} alt='img' id="live1" 
                text="Traveling to Mars is just the first leg of the journey — when Earth and Mars are closest to each other, the trip will take a mere 260 days. Once we get there, the challenge becomes landing on the planet’s surface"
                name="Landing Ideas"/></a>
        <a className="Linfo">
            <Info 
                img={live2} alt='img' id="live2"
                text="NASA is already considering what kind of habitation we’ll need to survive on the surface of Mars. Six companies began designing possible habitat prototypes in 2016, with completed prototypes expected in 24 months"
                name="Habitation Built to Last"/></a>
        <a className="Linfo">
            <Info 
                img={live3} alt='img' id="live3"
                text="Keeping the food and medicine supplies stocked on Mars is the best way to make a habitat self-sustaining, but with a thin atmosphere and reduced sunlight, it can be difficult to get anything to grow. Artificial leaves, designed to work in harsh conditions, could offer a solution for first aid."
                name="Growth"/></a>
        <a className="Linfo">
            <Info 
                img={live4} alt='img' id="live4"
                text="When you think of astronauts on Mars, what comes to mind? Did you picture a red planet turning green with time and continued human colonization? Unfortunately, those days are far in the future, if they even happen at all."
                name="Terraforming"/></a>
    </div>
    </div>
</div>


export default Home