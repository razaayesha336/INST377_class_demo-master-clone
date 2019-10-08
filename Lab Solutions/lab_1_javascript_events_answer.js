// This depends on two functions already being available
// in the page you have loaded.

let element = document.getElementByClassName("first")[0]
const string = "click me I'm great";
element.innerHTML = string;
element.style.alignItems = 'center';
element.style.justifyContent = 'center';
element.addEventListener('click', (e) => {
  if(element.innerHTML !== string) {
    element.innerHTML = string;
  } else {
    element.innerHTML = '';
  }
});

// What are some other solutions?
// What is another method for centering those elements?
// What other elements can have event listeners?