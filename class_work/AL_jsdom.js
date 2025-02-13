// Febuary 13th, 2024

function addHero() {
    const inputField = document.querySelector("#heroInput");
    const heroName = inputField.value;
    const list = document.getElementById("heroList");
    const listItem = document.createElement("li");
    listItem.textContent = heroName;
    list.appendChild(listItem);
    inputField.value = "";
}

document.querySelector("#addHero").addEventListener("click", addHero);