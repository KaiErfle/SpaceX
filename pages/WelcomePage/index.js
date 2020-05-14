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
            <div id="wtext">
            <p>Today we will be testing if you're eligible for
            the mission to Mars!<br /><br />
            Most Astronauts are scientists, that means you have to be pretty smart
            to be an Astronaut. If you payed any attention to the articles provided
            you should have no problem with this test, if you didnt pay attention...
            <br /><br />
            Good Luck! <br /><br />
            Each question you answer in the test will decide if you'll
            make it in the void of space<br /><br />
            *most answers are one word*<br/><br />
            So good luck and happy space travel!
        </p>
        <Button text="Start" onClick={()=>{ Router.push("/ChatPage")}}/>
        </div>    
        </div>
        
        

    </div>

</div>

export default welcome