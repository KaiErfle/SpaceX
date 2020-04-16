import React from 'react';
import './SlidingToggle.css'

const Toggle = () => <div>
    <button id="roundButton"></button>
    <div id="container">
        <p>Can you spot the item that doesn't belong?</p>
        <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit</li>
            <li>Bumblebees</li>
            <li>Aenean</li>
            <li>Consectetur</li>
        </ul>
    </div>
<div className="show" id="flyoutMenu">
    <h2><a href="#">Home</a></h2>
    <h2><a href="#">About</a></h2>
    <h2><a href="#">Contact</a></h2>
    <h2><a href="#">Search</a></h2>
</div>
</div>

var roundButton = document.querySelector("#roundButton");
roundButton.addEventListener("click", showMenu, false);
 
var flyoutMenu = document.querySelector("#flyoutMenu");
flyoutMenu.addEventListener("click", hideMenu, false);
 
function showMenu(e) {
    flyoutMenu.classList.add("show");
 
    document.body.style.overflow = "hidden";
}
 
function hideMenu(e) {
    flyoutMenu.classList.remove("show");
    e.stopPropagation();
 
    document.body.style.overflow = "auto";
} 




export default Toggle;