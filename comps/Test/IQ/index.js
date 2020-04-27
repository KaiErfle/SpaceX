import React from 'react';
import './IQ.css';
import Button from '../../Button';

const IQ = () => <div>

<h1>Part 3: IQ</h1>

<p id="info">Last step! <br />
Get ready cause this i sthe hardest part of the test, but i'm sure you'll do great!</p>
    
<form id="number">
<p>Which number should come next in the pattern? 37, 34, 31, 28</p>
<input type="radio" value="A" />
A. 24<br/>

<input type="radio" value="B" />
B. 25<br/>

<input type="radio" value="C" />
C. 26<br/>

</form>

<form id="letters">

<p>Which of the following can be arranged into a 5-letter English word?</p>
<input type="radio" value="A"/>
A. H R G S T <br/> 

<input type="radio" value="B" />
B. R I L S A<br/>

<input type="radio" value="C" />
C. W Q R G S<br/>

</form>

<Button text="Continue" />

</div>

export default IQ;