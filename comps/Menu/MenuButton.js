import React from 'react';
import './Menu.css'
import {IoMdMenu} from 'react-icons/io';
import { IconContext } from "react-icons";

const MenuButton = () => <div>
    <div id="roundButton" onClick={slide}>
        <IconContext.Provider value={{color:"white"}}>
        <IoMdMenu />
        </IconContext.Provider>
        </div>

<div className="show" id="flyoutMenu" onClick={slide}>
    <h2><a href="#">Home</a></h2>
    <h2><a class="items" href="#">Info about Mars</a></h2>
    <h2><a class="items" href="#">How to live on Mars</a></h2>
    <h2><a class="items" href="#">About SpaceX</a></h2>
    <h2><a class="items" href="#">Gallery</a></h2>
    <h2><a class="items" href="#">Take the test</a></h2>
</div>
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

export default MenuButton;
