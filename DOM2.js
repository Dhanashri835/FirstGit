

// firstChild //
console.log(itemList.firstChild);
// firlstElement //
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello world Item 1';

// Create a div //
var newDiv = document.createElement('div');
// add class
newDiv.className = 'Hello';
//create text node
var newDivText = document.createTextNode('hello World');
//add text 
var container = document.querySelector('header.container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv, h1);

