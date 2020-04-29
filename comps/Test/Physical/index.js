import React from 'react';
import './Physical.css';
import Button from '../../Button';

const Physical = () => <div>

<h1>Part 1: Physical</h1>

<p id="info"> Okay,<br /> 
first things first, I need to know a bit about your body type!<br />
Remember to be honest about this portion of the test!
</p>
    
<form id="excercise">
<p>Do you think you get enough excercise</p>
<input id="text" type="radio" value="A" />
<label>A. Yes<br/></label>

<input type="radio" value="B" />
<label>B. No<br/></label>

</form>

<form id="height">

<p>How tall are you?</p>
<input type="radio" value="A" />
<label>A. Short<br/></label>

<input type="radio" value="B" />
<label>B. Average<br/></label>

<input type="radio" value="C" />
<label>C. Tall<br/></label>

</form>

<form id="weight">

<p>how much do you roughly weigh?</p>
<input type="radio" value="A" />
<label>A. 90lbs-120lbs<br/></label>

<input type="radio" value="B" />
<label>B. 130lbs-160lbs<br/></label>

<input type="radio" value="C" />
<label>C. 170lbs-200lbs<br/></label>

</form>

<Button text="Continue" />

</div>

// function checkAnswer(quizForm,
//     theAnswer,
//     urlRight,
//     urlWrong)
// {
// var s = "?";

// var i = 0;
// for(;i<quizForm.elements.length;i++)
// {
// if(("cc" ==
// quizForm.elements[i].name) &&
// (quizForm.elements[i].checked))
// {
// s = quizForm.elements[i].value;
// }
// }

// // no choice was selected
// //
// if("?" == s)
// {
// alert("Please make a selection.");
// return false;
// }

// // check if we have the correct
// // choice selected
// //
// if(s == theAnswer)
// {
// alert("'"+s+"' is correct!");
// if(urlRight)
// {
// document.location.href = urlRight;
// }
// }
// else
// {
// alert("'"+s+"' is incorrect.");
// if( urlWrong )
// {
// document.location.href = urlWrong;
// }
// }

// return false;
// }

export default Physical 