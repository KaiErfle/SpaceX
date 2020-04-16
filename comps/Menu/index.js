import React from 'react';
import './Menu.css'

const Menu = () => <div>
<div>
    <ul id="menu">
        <li onClick={home} >Home</li>
    </ul>
    <ul id="list">
        <li onClick={AboutMars} >About Mars</li>
        <li onClick={LiveMars} >How to live on Mars</li>
        <li onClick={AboutSpacex} >About SpaceX</li>
        <li onClick={Gallery} >Gallery</li>
    </ul>
    <ul id="test">
        <li onClick={Test} >Take the test</li>
    </ul>
    </div>    
</div>

function home() {
    alert("this button takes you home")
}

function AboutMars() {
    alert("this gives a description of mars")
}

function LiveMars() {
    alert("this tells you how to live on mars")
}

function AboutSpacex() {
    alert("this tells you more about spacex")
}

function Gallery() {
    alert("this takes you to the gallery")
}

function Test() {
    alert("this takes you to the test page")
}

export default Menu;