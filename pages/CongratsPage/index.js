import React from 'react';
import './congrats.css'
import Header from '../../comps/Header'
import Button from '../../comps/Button'
import Img from '../../comps/Info/blue_pink.png'
import Router from 'next/router'

const congrats = () => <div>
    <div className="bg">
        <Header text="Congratulations!" fontSize="34px"/>
            <div id="text">
            <p>You passed the test! <br />
            The SpaceX mission to Mars is happy to bring you aboard! <br />
            <br/> Below you will see some illustrations showing what Mars could possilbly look like if humans are one day able to colonoize the red planet <br />
            Thank you for participating and have a safe take off!</p>
            </div>
        <img src={Img} />

        <Button text="finish" onClick={()=>{ Router.push("/#")}}/>

    </div>

</div>

export default congrats