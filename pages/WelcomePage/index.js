import React from 'react';
import './welcome.css'
import Header from '../../comps/Header'
import Button from '../../comps/Button'
import Img from '../../comps/Info/blue_pink.png'
import Router from 'next/router'

const welcome = () => <div>
    <div className="wbg">
        <div id="wcontain">
        <Header text="Hey there!" fontSize="34px"/>
            <div id="text">
            <p>Today we will be testing if you're eligible for
            the mission to Mars!<br /><br />
            Astronauts have to be smart, mentally fit and 
            physically fit, so in order to see if you fit the
            criteria, we will be testing you on 3 things:<br /><br />
            - Physical fitness <br /><br />
            - How ethically inclined you are <br /><br />
            - and IQ <br /><br />
            Each question you answer in the ethical and IQ
            test will be the deciding factor to see if you'll
            make it in the void of space<br /><br />
            So good luck and happy space travel!
        </p>
        <Button text="Start" onClick={()=>{ Router.push("/TestPages/PhysicalTestPage")}}/>
        </div>    
        </div>
        
        

    </div>

</div>

export default welcome