// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `
<h1>The "switch" statement</h1>
<p>A switch statement can replace multiple if checks.</p>
<p>It gives a more descriptive way to compare a value with multiple variants.</p>
<code>
switch(x) {</br>
  case 'value1':  // if (x === 'value1')</br>
  &emsp;&emsp;...</br>
  &emsp;&emsp;[break]</br>

  case 'value2':  // if (x === 'value2')</br>
  &emsp;&emsp;...</br>
  &emsp;&emsp;[break]</br>

  default:</br>
  &emsp;&emsp;...</br>
  &emsp;&emsp;[break]</br>
}
</code>
<p>The switch has one or more case blocks and an optional default.</p>
<ul>
<li>The value of x is checked for a strict equality to the value from the first case (that is, value1) then to the second (value2) and so on.</li>
<li>If the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break (or until the end of switch).</li>
<li>If no case is matched then the default code is executed (if it exists).</li>
<li>If there is no break then the execution continues with the next case without any checks.</li>
</ul>
`;

// Tasks
// Rewrite the "switch" into an "if"
// let browser = prompt('Enter your browser: ', '');
let browser = 'Safari';

if (browser === 'Edge') {
  console.log("You've got the Edge!");
} else if (
  browser === 'Chrome' ||
  browser === 'Firefox' ||
  browser === 'Safari' ||
  browser === 'Opera'
) {
  console.log('Okay we support these browsers too');
} else {
  console.log('We hope that this page looks ok!');
}

//Rewrite "if" into "switch"
let a = +prompt('a?', '');
// let a = '';
switch (a) {
  case 0:
    console.log(0);
    break;
  case 1:
    console.log(1);
    break;
  case 2:
  case 3:
    console.log('2,3');
  
}
