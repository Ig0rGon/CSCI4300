/*
  switch the heading to 'I love JavaScript!
  */
document.querySelector('h1').textContent = 'I love JavaScript';

// let's do that on an event, as a callback to setTimeout
setTimeout(function() {
  document.querySelector('h1').textContent = 'I LOVE JavaScript';
} , 2000);

/*
 switch the image
 */
//select the image by its id
// document.querySelector('#main').src = '/js_DOM_demo_starter/images/LoveJS.jpg';

// switch the src attribute the other image

// switch after timeout event
setTimeout(function() {
  document.querySelector('#main').src = '/js_DOM_demo_starter/images/LoveJS.jpg';
}, 2000);


/*
 make the link href valid
 */

// select the element and store a reference in a variable.

// change the text inside the link with the textContent property.
document.querySelector('a').textContent = 'CLICK HERE FOR MOZILLA DEVELOPER NETWORK';

// change the URL the link is pointing to:
document.querySelector('a').href = 'https://developer.mozilla.org/en-US/';

// get a reference to the div element node
let div = document.querySelector('div');


/* 
Create a new paragraph element and give it some text
*/
let newParagraph = document.createElement('p');

// Create a text node with some text
let textNode = document.createTextNode('This is a new paragraph');

// Append the text node to the paragraph
newParagraph.appendChild(textNode);

// Now append the new paragraph at the end of the div
div.appendChild(newParagraph);

// create a text node to the paragraph

// Grab a reference to the paragraph the link is inside and append the text node to it.

//
// Moving and removing elements
//
// to move the paragraph with the link to the bottom of the div

// to remove a node


/*
Add style
*/
// Can add inline styles directly as below
/* 
para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';
*/
// but better to add the style as a class and switch the class

/*
Build a list dynamically with javascript
*/
// create nodes to hold the list, input and button elements