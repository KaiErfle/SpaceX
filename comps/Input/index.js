import React, {useState}from 'react';
import './chat.css';
import Button from '../Button'

const Input = ({placeholder, onClick}) =>{
    const [val, setVal] = useState("");


return <div className="input_cont">
    <input onChange={(e)=>{
        setVal(e.target.value);
    }} type="text" placeholder={placeholder} />
    <Button onClick={()=>{
        // alert(val);
        onClick(val);
    }} text="Submit"/>
</div>
}

Input.defaultProps ={
    placeholder:"Type here",
    onClick:()=>{}
}

export default Input;