function add_item() {
    // Get the input box and the list container
    let item = document.getElementById("box");
    let list_item = document.getElementById("list_item");

    // Check if the input is not empty
    if (item.value.trim() !== "") {
        // Create a new list item
        let make_li = document.createElement("LI");
        make_li.textContent = item.value;

        // Create a "Complete" button for the list item
        let complete_btn = document.createElement("button");
        complete_btn.textContent = "Complete";
        complete_btn.className = "complete-btn";
        complete_btn.onclick = function() {
            this.parentNode.classList.toggle("completed");
        };

        // Create a "Delete" button for the list item
        let delete_btn = document.createElement("button");
        delete_btn.textContent = "Delete";
        delete_btn.className = "delete-btn";
        delete_btn.onclick = function() {
            this.parentNode.remove();
        };

        // Append the buttons to the list item
        make_li.appendChild(complete_btn);
        make_li.appendChild(delete_btn);

        // Add the list item to the list
        list_item.appendChild(make_li);

        // Clear the input box
        item.value = "";
    } else {
        alert("Please add a task before clicking Add!");
    }
}
