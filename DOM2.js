// Traversing the DOM //
//var itemList = document.querySelector('#items');

// ParentNode //
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentNode.parentNode);

// ParentElement //
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentElement.parentElement);

// ChildNode //
//console.log(itemList.childNodes);
//console.log(itemList.children);
//console.log(itemList.children[1]);

// firstChild //
console.log(itemList.firstChild);
// firlstElement //
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello world Item 1';

// Create a div //
var newDiv = document.createElement('div');

// add class
newDiv.className = 'Hello';

//add id //
newDiv.id = 'hello 1';

// add attr //
newDiv.setAttribute('title', 'Hello div');

//create text node
var newDivText = document.createTextNode('hello World');

//add text dom
var container = document.querySelector('header.container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv, h1);

