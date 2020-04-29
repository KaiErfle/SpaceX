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
<label>A. 24<br/></label>

<input type="radio" value="B" />
<label>B. 25<br/></label>

<input type="radio" value="C" />
<label>C. 26<br/></label>

</form>

<form id="letters">

<p>Which of the following can be arranged into a 5-letter English word?</p>
<input type="radio" value="A"/>
<label>A. H R G S T <br/></label> 

<input type="radio" value="B" />
<label>B. R I L S A<br/></label>

<input type="radio" value="C" />
<label>C. W Q R G S<br/></label>

</form>

<Button text="Continue" />

</div>

export default IQ;