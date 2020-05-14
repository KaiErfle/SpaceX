import React, {useState} from 'react';
import './chatpage.css'
import Chat from '../../comps/Chat'
import Button from '../../comps/Button'
import Header from '../../comps/Header'
import Input from '../../comps/Input'
import Router from 'next/router'

import {data, ChangeData} from '../data'

const ChatPage = ({}) => {
    const [msg, setMsg] = useState("...");
    const [resp, setResp] = useState("Hi there! My name is B-154, and I will be testing to see if you have what it takes to go to space. Are you ready to begin?");
       
       return <div className="chatpg"> 
       <div className="chatbg">
        <div id="ready">
            <Header text="Ready to take your test?" />
        </div>
        <br />
        <div id="chats">
            <Chat msg={resp} text="B-154"/>
            <br />
            <Chat msg={msg}/>
        </div>
        <div id="controls">
            <Input onClick={(val)=>{
                
                // if(data.numClicks > 0 && data.numclicks < 10){
                //     null
                // } else if(data.numclicks >= 10){
                    
                // }
            
                setMsg(val);
                var new_resp = Checkresponse(val);
                setResp(new_resp);
            }}
            />
        </div>
        <div id="complete">

           {data.lastaction !== "" ? <Button text="Take me to the Gallery!" onClick={()=>{ Router.push("/GalleryPage")}}
           /> : null}
        </div>
    </div>
</div>
}

if(data.numClicks > 0 && data.numClicks < 10){
    
} 

function Checkresponse(inp){
    var num = data.numClicks;
    ChangeData({
        lastaction:"Clicked send",
        numClicks:num+1
    })
    switch(inp.toLowerCase()){
        case "yes":
            return"perfect lets get started! First off tell me, what color is Mars? gotta make sure you know the basics";

        case"red":
            return"Great! next one is a little harder, what is 12 multiplied by 12?";

        case"144":
            return"Wow! you know basic math! okay next question, what number is missing? 4, 9, 16, 25, 26, ?, 64";

        case"49":
            return"Are you sure you aren't cheating? anyway, In printing, it’s the colour black. In chemistry, it’s potassium. In baseball, it’s a strikeout. Which letter is it?";

        case"k":
            return"You're killin' it! What colour is the sunset on Mars? (maybe the info page says something)";

        case"blue":
            return"Nice one! what planet is the most hospitable planet for life other than the Earth.";

        case"mars":
            return"phew I was afriad you were going to get that one wrong. What planet is smaller than Mars? theres only 1 answer btw";

        case"mercury":
            return"Right on! okay last question and we will see if you can join the mission to Mars, What is a Martian day called? (sol, dyne, nova, or erg)";

        case"sol":
            return"Congratulations! you have what it takes to be on the next mission to mars! the gallery should be open now, go ahead and take a look at some concept art!";

        case"dyne":
            return"I'm sorry but that wasnt the right answer, here are the options again, (sol, dyne, nova, or erg) ";
        
        case"nova":
            return"Unfortunaelty that wasnt the right answer, here are the options again, (sol, dyne, nova, or erg) ";

        case"erg":
            return"Opps I'm sorry but that wasnt the right answer, here are the options again, (sol, dyne, nova, or erg) ";
            
        default:
            return"I'm sorry but I'm having trouble reading you, try typing something else";

        case"are you real":
            return"The bigger question is, how do you know you are..."

        case"whats the meaning of life":
            return"I'm not sure yet, I haven't lived long enough to learn"
    }
}

export default ChatPage