// Part 1
function displayText() {
    // selects the buttons and the display element
    const morningButton = document.getElementById("am");
    const nightButton = document.getElementById("pm");
    const greetingDisplay = document.getElementById("greeting");

    // adds event listeners to the buttons
    morningButton.addEventListener("click", function() {
        greetingDisplay.textContent = "Good Morning!";
    });
    nightButton.addEventListener("click", function() {
        greetingDisplay.textContent = "Good Night!";
    }); 
}
// calls the function to set up the event listeners
displayText();

// Part 2
// selects the buttons and the background element
const redButton = document.getElementById("red");
const yellowButton = document.getElementById("yellow");
const greenButton = document.getElementById("green");
const blueButton = document.getElementById("blue");

// selects the background element
const bgGreyElement = document.querySelector(".bg_grey");

// adds event listeners to the buttons
redButton.addEventListener("click", function() {
    bgGreyElement.style.backgroundColor = "red";
});
yellowButton.addEventListener("click", function() {
    bgGreyElement.style.backgroundColor = "yellow";
});
greenButton.addEventListener("click", function() {
    bgGreyElement.style.backgroundColor = "green";
});
blueButton.addEventListener("click", function() {
    bgGreyElement.style.backgroundColor = "blue";
});

// Part 3
// selects the input, button, and list elements
const textInput = document.getElementById("usrInput");
const addButton = document.getElementById("addBtn");
const list = document.getElementById("myUL");

// adds event listener to the button
addButton.addEventListener("click", function() {
    // creates a new list item with the input value
    const listItem = document.createElement("li");
    listItem.textContent = textInput.value;

    // creates a delete button for the list item
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        list.removeChild(listItem);
    });

    // appends the delete button to the list item and the list
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    textInput.value = "";
});