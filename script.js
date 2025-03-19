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
    item.classList.add("items");
    
    let editItemButton = document.createElement("button");
    editItemButton.id = "edit-item-button";
    editItemButton.textContent = "Edit";

    let removeItemButton = document.createElement("button");
    removeItemButton.id = "remove-item-button";
    removeItemButton.textContent = "Remove";

    itemDiv.appendChild(item);
    // itemDiv.appendChild(editItemButton);
    itemDiv.appendChild(removeItemButton);
    
    listContainer.appendChild(itemDiv);

    // editItemButton.addEventListener("click", () => editItem(item, editItemButton));

    item.addEventListener("dblclick", () => {
        editItem(item);
    });

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

function editItem(item) {
    
    let idleTime;

    let editItemField = document.createElement("input");
    editItemField.setAttribute("type", "text");
    editItemField.setAttribute("placeholder", `Edit "${item.textContent}"`);
    editItemField.id = "edit-item-field";

    editItemField.style.cssText = "margin: 1rem 0; font-size: 1rem; padding: 0; border: none;";

    item.style.display = "none";
    item.parentNode.insertBefore(editItemField, item);

    idleTime = setTimeout(() => { restoreItem(item, editItemField); }, 5000);

    editItemField.addEventListener("keydown", function(e) {

        clearTimeout(idleTime);

        if (e.key === "Enter") {     

            if ((editItemField.value).trim() == "") {
                return; 
            }
        
            item.textContent = editItemField.value;
            item.style.display = "block";   
            editItemField.remove();

            clearTimeout(idleTime);

        }

    });

    // editItemField.focus();

}

function restoreItem(item, editItemField) {
    item.style.display = "block";
    editItemField.remove();
}
