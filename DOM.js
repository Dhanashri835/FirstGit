//Examine the document object

//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent = 'Hello';
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);

//Get element by id //
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-title');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Goodbye';
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = '<h3>Hello<h3>';
//header.style.borderBottom = 'solid 3px #000';

//Get element by class //
var li = document.getElementsByClassName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColour = 'yello';
 
for(var i=0; i<li.length; i++){
    li[i].style.backgroundColour = '#f4f4d4';
}

//Queryselector //
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';