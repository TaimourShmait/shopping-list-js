const addItemButton = document.querySelector("#add-item-button");
const clearItemsButton = document.querySelector("#clear-items-button");
const listContainer = document.querySelector("#list-container");
let userInputField = document.querySelector("#user-input");

addItemButton.addEventListener("click", addItem);

userInputField.addEventListener("keypress", function(e) {
    if (e.key === "Enter")
        addItem();
});

clearItemsButton.addEventListener("click", clearItems);

// Functions defined below

function addItem () {
    let userInput = userInputField.value;

    if (userInput.trim() == "") {  
        return;
    }
            
    let itemDiv = document.createElement("div");
    itemDiv.classList.add("item-container");
        
    let item = document.createElement("p");
    item.textContent = userInput;

    let removeItemButton = document.createElement("button");
    removeItemButton.id = "remove-item-button";
    removeItemButton.textContent = "Remove";

    itemDiv.appendChild(item);
    itemDiv.appendChild(removeItemButton);
    
    listContainer.appendChild(itemDiv);

    removeItemButton.addEventListener("click", () => {
        itemDiv.remove();
    });

    userInputField.value = "";

}

function clearItems() {
    let items = document.querySelectorAll(".item-container");
    items.forEach((item) => {
        item.remove();
    });
    
}
