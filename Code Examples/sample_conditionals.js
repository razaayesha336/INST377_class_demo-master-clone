const number = 24;
const string = '24';

if (number === string) {
  console.log('Number is 24');
} else {
  // a single quote used as an apostrophe is a special character, it needs to be "escaped"
  console.log('Those types don\'t match');
}
const switchDate = new Date().getDay();

if (switchDate === 0) {
  console.log('Sunday');
} else if (switchDate === 1) {
  console.log('Monday');
} else if (switchDate === 2) {
  console.log('Tuesday');
} else if (switchDate === 3) {
  console.log('Wednesday');
} else if (switchDate === 4) {
  console.log('Thursday');
} else if (switchDate === 5) {
  console.log('Friday');
} else {
  console.log('We are outside the normal stream of time');
}

switch (switchDate) {
  case 0:
    console.log('Sunday');
    break;
  case 1:
    console.log('Monday');
    break;
  default:
    console.log('We are outside the normal stream of time');
}

const number1 = 24;

// Ternery operators are very useful in limited cases
const value = (number1 > 2) ? 'more than 2' : 'less than 2';

const x = 'more than 2'
const value = x || 'less than 2'; // this will return "more than 2"

// Ternery operators can also lead to bad habits:
const val2 = (number1 > 2) ?
  (typeof x === 'string') ? 'string' : 'not a string' :
  'less than 2';

// the above is so common that ternery operators are not preferred in early code




// The One I Actually Use In Work
// I've never had to use a switch statement outside of detailed interface work
// When I want that reasoning, I write something like this.

const options = {
  'option1': 'do this thing',
  'option2': 'do that thing',
  'option3': 'do the other thing'
};

function selectFromObject(compare) {
  return (options[compare] !== undefined) ?
    options[compare] :
    null;
}

const iWantSomething = selectFromObject('option1');

console.log(iWantSomething);

https://developer.mozilla.org/en-US/docs/Web/Events