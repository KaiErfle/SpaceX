import React from 'react';
import './Ethical.css';
import Button from '../../Button';

const Ethical = () => <div>

<h1>Part 2: Ethical</h1>
<p id="info">Okay, <br />
Next step is for me to determine if you're a good person or not... <br />
Kidding! I'm sure you're nice, but just to be sure...</p>
    
<form id="wallet">
<p>If you find a wallet on the ground, what do you do with it? </p>
<input type="radio" value="A"/>
A. Take the money and leave it<br/>

<input type="radio" value="B" />
B. Take it to lost and found untouched<br/>

</form>

<form id="elderly">

<p>Do you give upi your seat on the bus to an elderly man/woman? </p>
<input type="radio" value="A" />
A. Yes, they need it sit<br/>

<input type="radio" value="B" />
B. No, they can have it when I get off<br/>


</form>

<form id="baby">

<p>If a baby is crying on an airplane, do you say something to the mother?</p>
<input type="radio" value="A" />
A. Yes, why bring the newborn<br/>

<input type="radio" value="B" />
B. No, she is just as miserable<br/>


</form>

<Button text="Continue" />

</div>

export default Ethical;