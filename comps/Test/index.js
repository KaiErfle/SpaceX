import React from 'react';
import './Test.css';
import Button from '../Button';

const Test = () => <div>
    <form method="POST"
      onSubmit={{return:checkAnswer(this,'B')}}>

<input type="radio" value="A" name="cc"/>
A. Another name for Java<br/>

<input type="radio" value="B" name="cc"/>
B. A scripting language mostly for the web<br/>

<input type="radio" value="C" name="cc"/>
C. When you use Java without compiling<br/>

<input type="submit" value="Submit Answer"/>

</form>

</div>

function checkAnswer(quizForm,
    theAnswer,
    urlRight,
    urlWrong)
{
var s = "?";

var i = 0;
for(;i<quizForm.elements.length;i++)
{
if(("cc" ==
quizForm.elements[i].name) &&
(quizForm.elements[i].checked))
{
s = quizForm.elements[i].value;
}
}

// no choice was selected
//
if("?" == s)
{
alert("Please make a selection.");
return false;
}

// check if we have the correct
// choice selected
//
if(s == theAnswer)
{
alert("'"+s+"' is correct!");
if(urlRight)
{
document.location.href = urlRight;
}
}
else
{
alert("'"+s+"' is incorrect.");
if( urlWrong )
{
document.location.href = urlWrong;
}
}

return false;
}

export default Test 