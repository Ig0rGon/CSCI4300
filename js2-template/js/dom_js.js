// Part 1
function displayText() {
    const morningButton = document.getElementById("am");
    const nightButton = document.getElementById("pm");
    const textDisplay = document.getElementById("greeting");

    morningButton.addEventListener("click", function() {
        textDisplay.textContent = "Good Morning!";
    });
    nightButton.addEventListener("click", function() {
        textDisplay.textContent = "Good Night!";
    }); 
}

displayText();

// Part 2
const redButton = document.getElementById("red");
const yellowButton = document.getElementById("yellow");
const greenButton = document.getElementById("green");
const blueButton = document.getElementById("blue");

const bgGreyElement = document.querySelector(".bg_grey");

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
const textInput = document.getElementById("usrInput");
const addButton = document.getElementById("addBtn");
const list = document.getElementById("myUL");

addButton.addEventListener("click", function() {
    const listItem = document.createElement("li");
    listItem.textContent = textInput.value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        list.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    textInput.value = "";
});