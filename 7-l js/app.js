document.addEventListener("DOMContentLoaded", function () { 
    const inputBox = document.getElementById("task"); 
    const listContainer = document.getElementById("taskList"); 
    const addButton = document.getElementById("addButton"); 
   
    addButton.addEventListener("click", function () { 
      const taskText = inputBox.value.trim(); 
   
      if (taskText === "") { 
        alert("Please enter a task!"); 
      } else { 
        const listItem = document.createElement("li"); 
        listItem.textContent = taskText; 
        listContainer.appendChild(listItem); 
        inputBox.value = ""; 
      } 
    }); 
  });