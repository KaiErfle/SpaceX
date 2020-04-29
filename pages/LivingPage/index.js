import React from 'react';
import './living.css';
import Header from '../../comps/Header';
import Info from '../../comps/Info';
import MenuButton from '../../comps/Menu/MenuButton'


const Home = () => <div>
    <div className="bg">
        <a id="button"><MenuButton /></a>
        <Header text="How to live on Mars" fontSize="34px" />
        <a className="info"><Info /></a>
        <a className="info"><Info /></a>
        <a className="info"><Info /></a>
        <a className="info"><Info /></a>
    </div>
</div>


export default Home