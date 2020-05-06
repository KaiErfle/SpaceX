import React from 'react';
import './living.css';
import Header from '../../comps/Header';
import Info from '../../comps/Info';
import MenuButton from '../../comps/Menu/MenuButton'


const Home = () => <div>
    <div className="bg">
        <a id="button"><MenuButton /></a>
        <Header text="How to live on Mars" fontSize="34px" />
        <a className="info"><Info 
        text="Traveling to Mars is just the first leg of the journey — when Earth and Mars are closest to each other, the trip will take a mere 260 days. Once we get there, the challenge becomes landing on the planet’s surface"
        name="Landing Ideas"/></a>
        <a className="info"><Info 
        text="NASA is already considering what kind of habitation we’ll need to survive on the surface of Mars. Six companies began designing possible habitat prototypes in 2016, with completed prototypes expected in 24 months"
        name="Habitation Built to Last"/></a>
        <a className="info"><Info 
        text="Keeping the food and medicine supplies stocked on Mars is the best way to make a habitat self-sustaining, but with a thin atmosphere and reduced sunlight, it can be difficult to get anything to grow. Artificial leaves, designed to work in harsh conditions, could offer a solution for first aid."
        name="Growth"/></a>
        <a className="info"><Info 
        text="When you think of astronauts on Mars, what comes to mind? Did you picture a red planet turning green with time and continued human colonization? Unfortunately, those days are far in the future, if they even happen at all."
        name="Terraforming"/></a>
    </div>
</div>


export default Home