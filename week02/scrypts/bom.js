/* Declaring references to the input, button, and list elements
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

 // Create a new list item and delete button
 const li = document.createElement("li");
 const deleteButton = document.createElement("button");

  // Set their content
  li.textContent = input.value;
  deleteButton.textContent = "yu";

  // Append delete button to the list item
  li.append(deleteButton);

  // Append the list item to the list
  list.append(li);


// Adding an event listener to the 'Add Chapter' button
button.addEventListener("click", function() {
    if (input.value.trim() !== "") { // Check if input is not empty
        // Create a new list item and delete button
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");

        // Set their content
        li.textContent = input.value;
        deleteButton.textContent = "x";

        // Append delete button to the list item
        li.append(deleteButton);

        // Append the list item to the list
        list.append(li);

        // Add delete functionality to the button
        deleteButton.addEventListener("click", function() {
            list.removeChild(li); // Remove the list item
            input.focus(); // Return focus to the input field
        });

        // Clear the input field and refocus
        input.value = "";
        input.focus();
    }
});*/


// Declaring references to the input, button, and list elements
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Adding an event listener to the 'Add Chapter' button
button.addEventListener("click", function() {
    if (input.value.trim() !== "") { // Check if input is not empty
        // Create a new list item and delete button
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");

        // Set their content
        li.textContent = input.value;
        deleteButton.textContent = "x"; // Set delete button text

        // Append delete button to the list item
        li.append(deleteButton);

        // Append the list item to the list
        list.append(li);

        // Add delete functionality to the button
        deleteButton.addEventListener("click", function() {
            list.removeChild(li); // Remove the list item
            input.focus(); // Return focus to the input field
        });

        // Clear the input field and refocus
        input.value = "";
        input.focus();
    }
});

