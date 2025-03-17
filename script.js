const addItemButton = document.querySelector("#add-item-button");
const listContainer = document.querySelector("#list-container");
let userInputField = document.querySelector("#user-input");

addItemButton.addEventListener("click", () => {
    let userInput = userInputField.value;

    if (userInput.trim() == "") {
        return;
    }
    
    let itemDiv = document.createElement("div");
    itemDiv.classList.add("item-container");
    
    let item = document.createElement("p");
    item.textContent = userInput;

    let removeItemButton = document.createElement("button");
    removeItemButton.textContent = "Remove Item";

    itemDiv.appendChild(item);
    itemDiv.appendChild(removeItemButton);

    listContainer.appendChild(itemDiv);

    removeItemButton.addEventListener("click", () => {
        itemDiv.remove();
    });

    userInputField.value = "";

});

