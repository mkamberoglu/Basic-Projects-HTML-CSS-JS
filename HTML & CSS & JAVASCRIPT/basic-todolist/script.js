// to-do-list adding an element to the list

// element selecting

const form = document.querySelector("form");

const input = document.querySelector("#txtTaskName");

const btnAddNewTask = document.querySelector("#btnAddNewTask");

const btnDeleteAll = document.querySelector("#btnDeleteAll");

const taskList = document.querySelector("#task-list");

eventListeners();

function eventListeners() {
    // submit event
    form.addEventListener("submit", addNewItem)
    // delete an item
    taskList.addEventListener("click", deleteItem);
    // delete all item
    btnDeleteAll.addEventListener("click", deleteAllItems);

}

function addNewItem(e) {
    if (input.value === "") {
        alert("add new item");
        // console.log("submit");
    }

    // creating "li"

    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(input.value))

    // creating "a"

    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';

    li.appendChild(a);
    taskList.appendChild(li);

    input.value = "";

    e.preventDefault();
}

// Removing Item

function deleteItem(e) {

    if (e.target.className === "fas fa-times") {
        if (confirm("Are you sure for deleting the item?")){
            e.target.parentElement.parentElement.remove();
     }
    }
    

    e.preventDefault();
}

// Delete All Items

function deleteAllItems(e) {
    if (confirm("Are you sure for deleting all items?")){
        taskList.childNodes.forEach(function(item) {
            if(item.nodeType === 1){
                item.remove();
            }
            // console.log(item)

        })
    }

    // Alternative
    // taskList.innerHTML = "";
}



