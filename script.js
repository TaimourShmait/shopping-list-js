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
    
    let editItemButton = document.createElement("button");
    editItemButton.id = "edit-item-button";
    editItemButton.textContent = "Edit";

    let removeItemButton = document.createElement("button");
    removeItemButton.id = "remove-item-button";
    removeItemButton.textContent = "Remove";

    itemDiv.appendChild(item);
    itemDiv.appendChild(editItemButton);
    itemDiv.appendChild(removeItemButton);
    
    listContainer.appendChild(itemDiv);

    editItemButton.addEventListener("click", () => editItem(item, editItemButton));

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

function editItem(item, editItemButton) {
    
    editItemButton.remove();

    let editItemField = document.createElement("input");
    editItemField.setAttribute("type", "text");
    editItemField.setAttribute("placeholder", `Edit ${item.textContent}`);
    editItemField.id = "edit-item-field";

    let confirmButton = document.createElement("button");
    confirmButton.id = "confirm-button";
    confirmButton.textContent = "Confirm";

    // editItemField.style.fontSize = "1rem";
    // editItemField.style.margin = "0.5em";
    // editItemField.style.marginLeft = "-0.2em";

    editItemField.style.cssText = "margin: 0.95rem 0 0.95rem 0rem ; font-size: 1rem; border: 0px solid; padding: 0.5px;";
    item.parentNode.replaceChild(editItemField, item);

    // editItemField.addEventListener("keydown", addEditedItem);
    // editItemField.addEventListener("click", addEditedItem);

    if ((editItemField.value).trim() == "") 
        return;


    editItemField.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            item.value = editItemField.value;
            editItemField.parentNode.replaceChild(item, editItemField);
        }
    });

}
