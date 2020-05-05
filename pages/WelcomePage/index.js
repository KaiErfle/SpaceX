import React from 'react';
import './welcome.css'
import Header from '../../comps/Header'
import Button from '../../comps/Button'
import Img from '../../comps/Info/blue_pink.png'
import Router from 'next/router'

const welcome = () => <div>
    <div className="bg">
        <Header text="Hey there!" fontSize="34px"/>
            <div id="text">
            <p>Welcome to the Mars mission test! <br />
            I will be testing you on 3 things: <br />
            - How fit you are <br />
            - How ethically inclined you are <br />
            - How well you can solve problems <br />
        </p>
        </div>    
        
        <Button text="Start" onClick={()=>{ Router.push("/TestPages/PhysicalTestPage")}}/>

    </div>

</div>

export default welcome