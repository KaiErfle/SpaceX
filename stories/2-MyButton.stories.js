import React from 'react';
import Button from '../comps/Button';

export default {
    title:"My Buttons",
    component:Button
};

// export const MyButtons = () => <Button />

export const PageWithButtons = () => <div>
    <Button />

    <Button
    text="Continue"
    onClick={Continue}
    />
    
    <Button
    text="Take the test"
    onClick={Test}
    />

<Button
    text="Finish"
    onClick={Finish}
    />

<Button
    text="Home"
    onClick={Home}
    />

<Button
    text="Retry"
    onClick={Retry}
    />
</div>

function Continue() {
    alert("Continue")
    
}

function Test() {
    alert("Take the test")
    
}

function Finish() {
    alert("Finish the test")
    
}

function Home() {
    alert("Takes you to the home screen if you fail test")
    
}

function Retry() {
    alert("Lets you retake test")
    
}