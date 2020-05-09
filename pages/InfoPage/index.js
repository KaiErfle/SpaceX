import React from 'react';
import './info.css';
import Header from '../../comps/Header';
import Info from '../../comps/Info';
import MenuButton from '../../comps/Menu/MenuButton'

const Info1 = require('../../images/info1.jpg');
const Info2 = require('../../images/info2.jpg');
const Info3 = require('../../images/info3.jpg');
const Info4 = require('../../images/info4.jpg');

const Home = () => <div>
    <div className="ibg">
        <a id="button"><MenuButton /></a>
        <Header text="About Mars" fontSize="34px" />
        <a className="infopage">
        <Info
            img src={Info1} alt='img' id="info1" 
            text="Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'."
            name="What is Mars?"/>
        </a>
        <a className="infopage">
        <Info
            img src={Info2} alt='img' id="info2" 
            text="Mars is approximately half the diameter of Earth, with a surface area only slightly less than the total area of Earth's dry land. Mars is less dense than Earth, having about 15% of Earth's volume and 11% of Earth's mass, resulting in about 38% of Earth's surface gravity. The red-orange appearance of the Martian surface is caused by iron oxide, or rust. It can look like butterscotch; other common surface colors include golden, brown, tan, and greenish, depending on the minerals present."
            name="Physical characteristics"/>
        </a>
        <a className="infopage">
        <Info 
            img src={Info3} alt='img' id="info3"
            text="The Phoenix lander returned data showing Mars soil to be slightly alkaline and containing elements such as magnesium, sodium, potassium and chlorine. These nutrients are found in soils on Earth, and they are necessary for growth of plants. Experiments performed by the lander showed that the Martian soil has a basic pH of 7.7, and contains 0.6% of the salt perchlorate. This is a very high concentration and makes the Martian soil toxic"
            name="Soil and growing plants"/>
        </a>
        <a className="infopage">
        <Info
            img src={Info4} alt='img' id="info4" 
            text="Liquid water cannot exist on the surface of Mars due to low atmospheric pressure, which is less than 1% that of Earth's, except at the lowest elevations for short periods of time. The two polar ice caps appear to be made largely of water. The amount of water ice in the south polar ice cap, if melted, would be enough to cover the entire planets surface to a depth of 11 meters (36 ft)."
            name="Water on Mars"/>
        </a>
    </div>
</div>


export default Home