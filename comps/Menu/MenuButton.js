import React from 'react';
import './Menu.css'
import {IoMdMenu} from 'react-icons/io';
import { IconContext } from "react-icons";
import Router from 'next/router'

const MenuButton = () => <div>
    <div id="roundButton" onClick={slide}>
        <IconContext.Provider value={{color:"white"}}>
        <IoMdMenu />
        </IconContext.Provider>
        </div>

<div className="show" id="flyoutMenu" onClick={slide}>
    <h2><a href="#" onClick={()=>{ Router.push("/#")}}>Home</a></h2>
    <h2><a className="items" href="#" onClick={()=>{ Router.push("/InfoPage")}}>Info about Mars</a></h2>
    <h2><a className="items" href="#" onClick={()=>{ Router.push("/LivingPage")}}>How to live on Mars</a></h2>
    <h2><a className="items" href="#" onClick={()=>{ Router.push("/AboutPage")}}>About SpaceX</a></h2>
    <h2><a className="items" href="#" onClick={()=>{ Router.push("/GalleryPage")}}>Gallery</a></h2>
    <h2><a className="items" href="#" onClick={()=>{ Router.push("/WelcomePage")}}>Take the test</a></h2>
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
