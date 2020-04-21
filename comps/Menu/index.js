import React from 'react';
import './Menu.css'
import {IoMdMenu} from 'react-icons/io';

const Menu = () => <div>
<body>
<button id="roundButton" onClick={slide}><IoMdMenu /></button>
    <div id="container">
        <h1 id="title">Info pages:</h1>
        <ul>
            <li>Info about Mars</li>
            <li>How to live on Mars</li>
            <li>About SpaceX</li>
            <li>Mars colony concept <article></article></li>
            <li>Take the Test</li>
        </ul>
    </div>
<div className="show" id="flyoutMenu" onClick={slide}>
    <h2><a href="#">Home</a></h2>
    <h2><a class="items" href="#">Info about Mars</a></h2>
    <h2><a class="items" href="#">How to live on Mars</a></h2>
    <h2><a class="items" href="#">About SpaceX</a></h2>
    <h2><a class="items" href="#">Gallery</a></h2>
    <h2><a class="items" href="#">Take the test</a></h2>
</div>
</body>
</div>    

var sliderStatus = false;
//Keeps track if slider is out or off screen

function slide(){
    if(sliderStatus === false){
        document.querySelector("#flyoutMenu").style.left = 0;
        sliderStatus = true;
    }
    else{
        document.querySelector("#flyoutMenu").style.left = "-30%";
        sliderStatus = false;
    }
}





export default Menu;